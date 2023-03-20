import storage from "../utils/storage";

export const id = (await storage.getAnotherUser())?.valueOf ?? "";

