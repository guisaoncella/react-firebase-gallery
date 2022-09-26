import {initializeApp} from 'firebase/app'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: "reactgallery-1298a.firebaseapp.com",
    projectId: "reactgallery-1298a",
    storageBucket: "reactgallery-1298a.appspot.com",
    messagingSenderId: "570103409543",
    appId: "1:570103409543:web:d5570acb330c84a0738122"
};

const firebaseApp = initializeApp(firebaseConfig);

export const storage = getStorage(firebaseApp);