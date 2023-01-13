/* eslint-disable object-curly-spacing */
/* eslint-disable indent */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable no-trailing-spaces */
import { NextFunction, Request, Response } from "express";
import { db } from "../firebase";

export const addDoc = async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  const requestBody = request.body;
  const collectionName = requestBody.collectionName;
  const data = requestBody.data;
  const newDocRef = db.collection(collectionName).doc();  
  const writeDoc = await newDocRef.create(data);

  return response.json({writeDoc});
};


