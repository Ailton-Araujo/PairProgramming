import { Router } from "express";
import { peopleController } from "@/controllers";

export const peopleRouter = Router();

peopleRouter.get("/person", peopleController.read);
