import { Client } from "discord.js";
import { globby } from "globby";

export async function exec(client: Client): Promise<void> {
  const commandFiles = await globby("../commands/**/*.ts");
}
