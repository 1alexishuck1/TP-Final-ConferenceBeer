import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAlqWI1lkO-NX3VNMKV8OAzDTtmXJVJBq0",
    authDomain: "confbeer-8d0da.firebaseapp.com",
    projectId: "confbeer-8d0da",
    storageBucket: "confbeer-8d0da.appspot.com",
    messagingSenderId: "427611705754",
    appId: "1:427611705754:web:03d2a4eb9214166098ea23"
  };

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export {app, storage};