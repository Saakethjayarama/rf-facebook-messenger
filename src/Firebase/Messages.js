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
    .orderBy("time_stamp", "asc")
    .onSnapshot((snapshot) => callback(snapshot));
};

const deleteMessages = () => {
  fstore
    .collection("messages")
    .get()
    .then((snapshot) => {
      snapshot.docs.forEach((message) => {
        fstore.collection("messages").doc(message.id).delete();
      });
    });
};

export { sendMessage, listen, deleteMessages };

// Time
// Audio
// Icon
