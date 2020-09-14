import axios from 'axios';

export default function ({ query, redirect }) {
  const { code } = query;
  if (!process.server && code) {
    return axios
      .post('/api/code', {
        code,
      })
      .then((response) => {
        localStorage.setItem('accessToken', response.data.accessToken);
        localStorage.setItem('refreshToken', response.data.refreshToken);
      })
      .finally(() => {
        return redirect('/');
      });
  }
  return redirect('/');
}
