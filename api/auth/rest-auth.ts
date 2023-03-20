import HttpClient from '../http-client';

const postAuth = (data: any) => HttpClient.post('Accounts', data);

export default {
  postAuth,
};