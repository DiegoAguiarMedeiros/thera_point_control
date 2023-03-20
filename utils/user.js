import Storage from "./storage";

const getUser = () => Storage.getUser();

const getUserId = () => Storage.getUserId();

const getUserName = () => Storage.getName();

const getUserToken = () => Storage.getToken();

const getStatus = () => Storage.getStatus();

const setUserToken = (token) => {
  Storage.setToken(token);
};
const setUserRefreshToken = (refreshToken) => {
  Storage.setRefreshToken(refreshToken);
};
const setUserTokenType = (tokenType) => {
  Storage.setTokenType(tokenType);
};
const setUserName = (name) => {
  Storage.setName(name);
};

const setUserId = (id) => {
  Storage.setUserId(id);
};

const setUserData = (data) => {
  setUserName(data.name);
  setUserTokenType(data.tokenType);
  setUserRefreshToken(data.refreshToken);
  setUserToken(data.accessToken);
};



const clearUserSession = () => {
  Storage.dropStorage();
};

export default {
  getUser,
  getUserId,
  getUserToken,
  getStatus,
  clearUserSession,
  setUserData,
  setUserId,
  getUserName,
};