import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
	apiKey: 'AIzaSyCl11saMHC-Q5ogXUCdPljzld4n0n3klus',
	authDomain: 'crown-db-f44b2.firebaseapp.com',
	databaseURL: 'https://crown-db-f44b2.firebaseio.com',
	projectId: 'crown-db-f44b2',
	storageBucket: 'crown-db-f44b2.appspot.com',
	messagingSenderId: '853192534814',
	appId: '1:853192534814:web:15c1c84fee876fc938b70f',
};

firebase.initializeApp(firebaseConfig);

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);

	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();
		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData,
			});
		} catch (error) {
			console.log('error creating user', error.message);
		}
	}

	return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
