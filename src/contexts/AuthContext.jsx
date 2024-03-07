import { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebaseConfig';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);
      setLoading(false);

      console.log('User:', user);
    });
    return unsubscribe; // This is the cleanup function to unsubscribe from the auth state listener on component unmount
  }, []);

  const value = {
    currentUser,
  };

  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
};
