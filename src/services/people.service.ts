import { User } from "@/protocols";
import { peopleRepository } from "@/repository";

async function read(): Promise<User | string> {
  const result: User[] = await peopleRepository.select();

  const person: User | string =
    result.length > 0
      ? result[Math.floor(Math.random() * result.length)]
      : "There is no users registered yet";

  return person;
}

export const peopleService = { read };
