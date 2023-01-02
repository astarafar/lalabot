import { config, loadConfig } from "@app-config/main";
import { Client, GatewayIntentBits, Collection } from "discord.js";
import { globby } from "globby";

await main();

async function main(): Promise<void> {
  await loadConfig();

  const { Guilds, MessageContent, GuildMessages, GuildMembers } =
    GatewayIntentBits;

  const client: Client = new Client({
    intents: [Guilds, MessageContent, GuildMessages, GuildMembers],
  });

  client.appCommands = new Collection<string, IAppCommand>();
  client.userCommands = new Collection<string, IUserCommand>();
  client.msgCommands = new Collection<string, IMessageCommand>();

  const loaderFiles: Array<string> = await globby("./loaders/.js");

  await Promise.all(
    loaderFiles.map((loaderFile: string) =>
      import(loaderFile).then((loader: ILoader) => loader.exec(client))
    )
  );

  await client.login(process.env.TOKEN);
}
