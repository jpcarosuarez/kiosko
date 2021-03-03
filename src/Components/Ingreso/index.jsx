import {useContext} from 'react';
import firebase from "../../db";
import './ingreso.css';
import {Store} from '../../store';

const SignIn = () => { 
  const [data, setData] = useContext(Store); 
  
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
      window.location="/dashboard";
      // ...
    } else {
      // User is signed out.
      // ...
      data.currentUser="";
      console.log(email);
    }

  });




  return (

    <article >
      <div className="formularioIngreso">
        <h1>Ingresar a Kiosko</h1> 
        
        <div className="botones">
          <button onClick={loginWithG}>Ingresar con Gmail</button>
          <button onClick={signOut}>Salir</button>
        </div>

        <div className="ingreso">
          <form>
            <label>
              <p>Tipo de Documento</p>
              <select>
                <option value="cc">C.C</option>
                <option value="ce">C.E</option>
                <option value="Nit">Nit</option>
              </select>
            </label>
            <label>
              <p>Número</p>
              <input type="text" name="numero" />

            </label>
            <label>
              <p>Contraseña</p>
              <input type="text" name="contraseña"/>
            </label>
            <input type="submit" value="Ingresar" />

          </form>

        </div>



      </div>
      

    
      

      
    </article>




  )

}

export default SignIn;