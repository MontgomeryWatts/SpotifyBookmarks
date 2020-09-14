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

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
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
  const { album, track, position_ms, accessToken } = req.body;
  spotifyApi.setAccessToken(accessToken);
  spotifyApi
    .play({
      context_uri: album,
      offset: {
        uri: track,
      },
      position_ms,
    })
    .then(
      function (response) {
        res.status(200).send();
      },
      function (err) {
        console.log(err);
        res.status(500).send();
      }
    );
});

module.exports = {
  path: '/api/',
  handler: app,
};
