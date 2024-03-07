import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDuEMX7sj2r-xjpM1dsxN-DOzOURWU0n18',
  authDomain: 'craiveco.firebaseapp.com',
  projectId: 'craiveco',
  storageBucket: 'craiveco.appspot.com',
  messagingSenderId: '608751509562',
  appId: '1:608751509562:web:331434a1a8f734af06d503',
  measurementId: 'G-8YLSK5J3VF',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
