import { SlashCommandBuilder } from "discord.js";

const command: IAppCommand = {
  meta: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Ping the bot."),
  exec: (interaction) => {
    interaction.reply({ content: "Pong!" });
  },
};

export default command;
