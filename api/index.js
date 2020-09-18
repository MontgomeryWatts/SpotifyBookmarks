/* eslint-disable camelcase */

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import SpotifyWebApi from 'spotify-web-api-node';

const app = express();

app.disable('x-powered-by');
app.use(bodyParser.json());
app.use(cors());

const scopes = ['user-modify-playback-state'];
const state = process.env.STATE;
const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;

const spotifyApi = new SpotifyWebApi({
  clientId,
  clientSecret,
  redirectUri: `${process.env.BASE_URL}/auth`,
});

const authorizeUrl = spotifyApi.createAuthorizeURL(scopes, state);

app.get('/authorizeUrl', (req, res) => {
  res.send(authorizeUrl);
});

app.post('/code', (req, res) => {
  const { code } = req.body;
  spotifyApi.authorizationCodeGrant(code).then(
    function (data) {
      res.json({
        accessToken: data.body.access_token,
        refreshToken: data.body.refresh_token,
      });
    },
    function (err) {
      console.log('Something went wrong!', err);
      res.status(403).send();
    }
  );
});

app.post('/play', (req, res) => {
  const { album, track, position_ms, accessToken, refreshToken } = req.body;
  const userSpotifyApi = new SpotifyWebApi({
    clientId,
    clientSecret,
    accessToken,
    refreshToken,
  });
  const playParams = {
    context_uri: album,
    offset: {
      uri: track,
    },
    position_ms,
  };
  userSpotifyApi.play(playParams).then(
    function (response) {
      res.status(200).send();
    },
    function (err) {
      if (err === 'Not Found') {
        res.status(404).send({ message: 'No active device.' });
      } else if (err === 'Unauthorized') {
        res
          .status(403)
          .send({ message: 'Premium account required for this action.' });
      } else {
        userSpotifyApi.refreshAccessToken().then(
          function (response) {
            userSpotifyApi.setAccessToken(response.body.access_token);
            userSpotifyApi.play(playParams).then(
              function (data) {
                res
                  .status(200)
                  .send({ accessToken: userSpotifyApi.getAccessToken() });
              },
              function (err) {
                console.log(err);
                res.status(500).send({ message: 'Error occurred. Try again.' });
              }
            );
          },
          function (err) {
            console.log(err);
            res.status(400).send({
              message: 'Error occurred. Try logging back into Spotify.',
            });
          }
        );
      }
    }
  );
});

module.exports = {
  path: '/api/',
  handler: app,
};
