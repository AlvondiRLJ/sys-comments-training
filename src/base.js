import Rebase from 're-base'
import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBgOj5XMUQmy0cozn5VeVkh9Cbsl_kQ-kY",
    authDomain: "reactjs-e82ff.firebaseapp.com",
    databaseURL: "https://reactjs-e82ff.firebaseio.com",
    projectId: "reactjs-e82ff",
    storageBucket: "reactjs-e82ff.appspot.com",
    messagingSenderId: "556614889109"
  })
  const db = firebase.database(firebaseApp)
  const base = Rebase.createClass(db)
  
  export const providers = {
    'facebook': new firebase.auth.FacebookAuthProvider()
  }
  
  export const auth = firebaseApp.auth()
  export default base