import { Request, Response } from "express";
import httpStatus from "http-status";
import { User } from "@/protocols";
import { peopleService } from "@/services";

async function read(req: Request, res: Response): Promise<void> {
  const result: User | string = await peopleService.read();
  res.status(httpStatus.OK).send(result);
}

export const peopleController = { read };
