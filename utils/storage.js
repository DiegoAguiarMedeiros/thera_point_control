import AsyncStorage from '@react-native-async-storage/async-storage';

const _retrieveData = async (key) => {
  try {
    const data = await AsyncStorage.getItem(key);
    console.log('data',data)
    return data;
  } catch (error) {
    console.log(error);
  }
}

const getUserId = () => _retrieveData("UIDTHERAPOINTCONTROL");

const getUser = () => _retrieveData("UTHERAPOINTCONTROL");

const getToken = () => _retrieveData("TKTHERAPOINTCONTROL");

const getTokenType = () => _retrieveData("TKTTHERAPOINTCONTROL");

const getRefreshToken = () => _retrieveData("RTKTHERAPOINTCONTROL");

const getStatus = () => _retrieveData("STHERAPOINTCONTROL");

const getName = () => _retrieveData("NAMETHERAPOINTCONTROL");

const getAnotherUser = () => _retrieveData("ANTHUSERTHERAPOINTCONTROL");

const setUser = (value) => {
  AsyncStorage.setItem("UTHERAPOINTCONTROL", JSON.stringify(value));
};

const setName = (value) => {
  AsyncStorage.setItem("NAMETHERAPOINTCONTROL", value);
};
const setToken = (value) => {
  AsyncStorage.setItem("TKTHERAPOINTCONTROL", value);
};
const setRefreshToken = (value) => {
  AsyncStorage.setItem("RTKTHERAPOINTCONTROL", value);
};
const setTokenType = (value) => {
  AsyncStorage.setItem("TKTTHERAPOINTCONTROL", value);
};

const setUserId = (value) => {
  AsyncStorage.setItem("UIDTHERAPOINTCONTROL", value);
};

const setStatus = (value) => {
  AsyncStorage.setItem("STHERAPOINTCONTROL", JSON.stringify(value));
};

const setAnotherUser = (value) => {
  AsyncStorage.setItem("ANTHUSERTHERAPOINTCONTROL", JSON.stringify(value));
};

const dropAnotherUser = () => {
  AsyncStorage.removeItem("ANTHUSERTHERAPOINTCONTROL");
};

const dropStorage = () => {
  AsyncStorage.clear();
};

export default {
  getUserId,
  getUser,
  getToken,
  getStatus,
  setUser,
  setToken,
  setStatus,
  dropStorage,
  setAnotherUser,
  dropAnotherUser,
  getAnotherUser,
  setUserId,
  getRefreshToken,
  setRefreshToken,
  getTokenType,
  setTokenType,
  getName,
  setName
};