import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD7WMuPYKKSuzQH3IRp50JCUpMqDjdO6F8",
  authDomain: "chat-app-by-me-91160.firebaseapp.com",
  projectId: "chat-app-by-me-91160",
  storageBucket: "chat-app-by-me-91160.appspot.com",
  messagingSenderId: "172202636880",
  appId: "1:172202636880:web:ba9858a8bf2d572a65c355",
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const messagesRef = database.ref("messages");

export const pushMessage = ({ name, text }) => {
  messagesRef.push({ name, text });
};
