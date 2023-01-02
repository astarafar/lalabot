import { Client } from "discord.js";
import { globby } from "globby";

export async function exec(client: Client): Promise<void> {
  const eventFiles = await globby("../events/**/*.ts");

  await Promise.all(
    eventFiles.map((eventFile: string) =>
      import(eventFile).then((event: IEvent) => {
        event.once
          ? client.once(event.name, (...args) => event.exec(...args))
          : client.on(event.name, (...args) => event.exec(...args));
        console.log(`Successfully loaded event ${event.name}.`);
      })
    )
  );
}
