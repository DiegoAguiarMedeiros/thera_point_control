import HttpClient from "../http-client";
import { id } from "../helper-client";
const getUser = () => HttpClient.get(`Timesheet`);

export default {
    getUser,
};