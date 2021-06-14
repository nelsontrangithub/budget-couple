import app from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/database";

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

class Firebase {
  auth: typeof app.auth;
  authFn: app.auth.Auth;
  db: typeof app.database;
  dbFn: app.database.Database;

  constructor() {
    app.initializeApp(config);
    app.analytics();

    this.auth = app.auth;
    this.authFn = app.auth();
    this.db = app.database;
    this.dbFn = app.database();
  }

  user = (uid: string) => this.dbFn.ref(`users/${uid}`);
  key = () => this.dbFn.ref().push().key;
  timestamp = () => this.db.ServerValue.TIMESTAMP;
  signOut = () => this.authFn.signOut();
  // onAuthStateChanged = (authUser: app.User | null) => this.authFn.onAuthStateChanged(authUser: unknown);
}

export default Firebase;
