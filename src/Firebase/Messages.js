import { fstore } from "./Firebase";

const sendMessage = (message, callback = () => {}) => {
  fstore
    .collection("messages")
    .doc()
    .set({ ...message })
    .then(() => callback());
};

const listen = (callback) => {
  if (!callback) throw Error("Callback function is not optional");
  return fstore
    .collection("messages")
    .onSnapshot((snapshot) => callback(snapshot));
};

export { sendMessage, listen };
