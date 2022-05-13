import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../Utilities/firebase.config";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";

function Authentication() {
  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);
  const db = getFirestore(app);

  const getUser = (user, query) => {
    getDocs(query).then((doc) => {
      if (doc.docs.length === 0) {
        addDoc(collection(db, "users"), {
          uid: user.uid,
          name: user.displayName,
          authProvider: "google",
          email: user.email,
          lists:[]
        }).then((response) => {
          console.log(response);
        });
      }
    });
  };

  const authenticate = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        const q = query(collection(db, "users"), where("uid", "==", user.uid));
        getUser(result.user, q);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  return (
    <div>
      <button
        onClick={() => authenticate()}
        type="button"
        className="btn btn-primary"
      >
        Login
      </button>
    </div>
  );
}

export default Authentication;
