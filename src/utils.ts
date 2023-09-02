import { Client } from "pg";

export async function getClient() {
  const client = new Client(process.env.DATABASE_URL);
  await client.connect();
  return client;
}
