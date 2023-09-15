import { User } from "@/protocols";
import { peopleRepository } from "@/repository";

async function read(): Promise<User> {
  const result: User[] = await peopleRepository.select();
  const person: User = result[Math.floor(Math.random() * result.length)];
  return person;
}

export const peopleService = { read };
