// src/hooks/useGoogleSignIn.tsx

import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { GOOGLE_WEB_CLIENT_ID } from '@env';
import { useAuth } from '../context/AuthContext';

GoogleSignin.configure({
  webClientId: GOOGLE_WEB_CLIENT_ID,
  offlineAccess: true,
  //forceCodeForRefreshToken: true,
});

interface GoogleUser {
  name: string;
  givenName?: string;
  familyName?: string;
  email: string;
  photoUrl?: string;
}

export const useGoogleSignIn = () => {
  const { user, setUser } = useAuth();

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const response: any = await GoogleSignin.signIn();
      const { user: googleProfile, idToken } = response.data;

      const googleUser: GoogleUser = {
        name: googleProfile.name,
        givenName: googleProfile.givenName,
        familyName: googleProfile.familyName,
        email: googleProfile.email,
        photoUrl: googleProfile.photo,
      };

      setUser(googleUser);
      
    } catch (error: any) {
      if (error) {
        switch (error.code) {
          case statusCodes.IN_PROGRESS:
            console.log('Sign-in already in progress');
            break;
          case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
            console.log('Play services not available or outdated');
            break;
          default:
          console.error('An error occurred during Google Sign-In', error);
        }
      } else {
        console.error('An unknown error occurred during Google Sign-In', error);
      }
    }
  };

  const signOut = async () => {
    await GoogleSignin.signOut();
    setUser(null);
  };

  return { user, signIn, signOut };

};