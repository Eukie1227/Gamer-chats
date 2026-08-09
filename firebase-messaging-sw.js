importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyALFpw6LcrrcGVS66tHtXEcdNnSyMbSDxg",
  authDomain: "contactform-bd506.firebaseapp.com",
  databaseURL: "https://contactform-bd506-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "contactform-bd506",
  storageBucket: "contactform-bd506.firebasestorage.app",
  messagingSenderId: "857390892349",
  appId: "1:857390892349:web:adff3fd473d586752cf154",
  measurementId: "G-E1E5LKDW2J"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const notificationTitle = payload.notification?.title || 'Lighthouse Industries';
  const notificationOptions = {
    body: payload.notification?.body || 'You have a new message',
    icon: '/lighthouseindustries.png'
  };

  return self.registration.showNotification(notificationTitle, notificationOptions);
});
