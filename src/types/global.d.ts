import {
  SlashCommandBuilder,
  ContextMenuCommandBuilder,
  CommandInteraction,
  Collection,
  PermissionResolvable,
  Message,
  AutocompleteInteraction,
  ChatInputCommandInteraction,
  Client,
} from "discord.js";

declare global {
  export interface IAppCommand {
    meta: SlashCommandBuilder | ContextMenuCommandBuilder;
    exec: (interaction: ChatInputCommandInteraction) => void;
    autocomplete?: (interaction: AutocompleteInteraction) => void;
  }

  export interface IUserCommand {
    meta: ContextMenuCommandBuilder;
    exec: (interaction: UserContextMenuCommandInteraction) => void;
    autocomplete?: (interaction: AutocompleteInteraction) => void;
  }

  export interface IMessageCommand {
    meta: ContextMenuCommandBuilder;
    exec: (interaction: UserContextMenuCommandInteraction) => void;
    autocomplete?: (interaction: AutocompleteInteraction) => void;
  }

  export interface IEvent {
    name: string;
    once?: boolean | false;
    exec: (...args) => void;
  }

  export interface ILoader {
    exec: (client: Client) => Promise<void>;
  }
}

declare module "discord.js" {
  export interface Client {
    appCommands: Collection<string, IAppCommand>;
    userCommands: Collection<string, IUserCommand>;
    msgCommands: Collection<string, IMessageCommand>;
  }
}
