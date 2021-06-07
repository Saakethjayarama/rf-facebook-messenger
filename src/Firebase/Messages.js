import { fstore } from "./Firebase";

const sendMessage = (message, callback = () => {}) => {
  fstore
    .collection("messages")
    .doc()
    .push(message)
    .then(() => callback());
};

const listener = (callback) => {
  if (!callback) throw Error("Callback function is not optional");
  return fstore
    .collection("messages")
    .onSnapshot((snapshot) => callback(snapshot));
};

export { sendMessage, listener };
