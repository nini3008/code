import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyANkK4Zat5rl2L9ndwdOwvt8sZiX34F0dA",
  authDomain: "catch-of-the-day-2-nick.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-2-nick.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

//Named export
export { firebaseApp };

export default base;
