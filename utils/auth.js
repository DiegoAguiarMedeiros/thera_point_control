import User from './user';
import Storage from './storage';
import restUsers from '../api/user/rest-user';

const isAuthenticated = () => {
  // const user = await User.getUser();
  // const status = Boolean(await User.getStatus());
  // return user !== null && status === true;
  console.log('return')
};

const logout = () => (
  Storage.dropStorage()
);

const test = () => (
  console.log('return')
);

export default {
  isAuthenticated,
  logout,
  test
};