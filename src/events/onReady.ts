import { Client } from "discord.js";

const event: IEvent = {
  name: "ready",
  once: true,
  exec: (client: Client) => {
    console.log(`Logged in as ${client.user?.tag}`);
  },
};

export default event;
