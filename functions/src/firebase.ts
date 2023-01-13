import admin = require("firebase-admin");
import functions = require("firebase-functions")

admin.initializeApp();

const db = admin.firestore();

export {admin, functions, db};
