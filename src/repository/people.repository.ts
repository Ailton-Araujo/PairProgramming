import { db } from "@/database/database.connection";
import { User } from "@/protocols";

async function select(): Promise<User[]> {
  const result = await db.query<User>(`
  SELECT * FROM people ;
`);
  return result.rows;
}

export const peopleRepository = { select };
