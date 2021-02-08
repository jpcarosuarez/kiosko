import firebase from "../../db";


const SignIn = () => { 

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAi-1txOSKt_0sekqL9QZBBvgFxPKiSslI",
    authDomain: "kiosko-inmobiliario-b8f96.firebaseapp.com",
    projectId: "kiosko-inmobiliario-b8f96",
    storageBucket: "kiosko-inmobiliario-b8f96.appspot.com",
    messagingSenderId: "630764521841",
    appId: "1:630764521841:web:0298371a29ba6d89074ed0"

  };

  // Initialize Firebase
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  function loginWithG() {
    console.log("Sign in with G");
    const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(googleAuthProvider);
  }

  function signOut() {
    console.log("Signing Out");
    firebase.auth().signOut();
  }

  var currentUser;

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      currentUser = user;
      //var displayName = user.displayName;
      var email = user.email;
      //var emailVerified = user.emailVerified;
      //var photoURL = user.photoURL;
      //var isAnonymous = user.isAnonymous;
      //var uid = user.uid;
      //var providerData = user.providerData;
      console.log(email);
      gLogButt.hidden = true;
      sOButt.hidden = false;
      // ...
    } else {
      // User is signed out.
      // ...
      currentUser = " ";
      console.log(email);
      gLogButt.hidden = false;
      sOButt.hidden = true;
    }
  });

  var gLogButt = document.getElementById("gLoginButton");
  gLogButt.addEventListener("click", loginWithG);

  var sOButt = document.getElementById("sOutButton");
  sOButt.addEventListener("click", signOut);


  return (

    <article className="firebaseui-auth-container">
      <div>
        <h1>Ingresar a Kiosko Inmobiliario</h1> <br />
        <button onClick={gLogButt}>Gmail</button> <br />
        <button onClik={sOButt}>Salir</button>
      </div>
    </article>


  )

}

export default SignIn;