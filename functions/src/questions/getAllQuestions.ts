/* eslint-disable object-curly-spacing */
import { NextFunction, Request, Response } from "express";

export const getAllQuestions = async (
    request: Request,
    response: Response,
    next: NextFunction,
) => {
  const questions = [
    {
      id: "1",
      label: "first question",
    },
    {
      id: "2",
      label: "second question",
    },
    {
      id: "3",
      label: "third question",
    },
    {
      id: "4",
      label: "four question",
    },
  ];

  return response.json({questions});
};
