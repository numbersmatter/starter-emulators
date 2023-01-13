/* eslint-disable object-curly-spacing */
/* eslint-disable no-multiple-empty-lines */
import {functions} from "./firebase";
import * as express from "express";
import { getAllQuestions } from "./questions/getAllQuestions";
import { addDoc } from "./editDatabase/addDoc";

const app = express();
app.use(express.json());

app.get("/questions", getAllQuestions );
app.post("/addDoc", addDoc);
exports.app = functions.https.onRequest(app);


// // Start writing functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
