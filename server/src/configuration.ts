import { readFileSync } from "fs";
import { resolve } from "path";

interface Configuration {
  exampleConfigValue: string;
}

export const configuration: Configuration = JSON.parse(
  readFileSync(resolve(__dirname, "config.json"), { encoding: "utf8" })
);

export enum Environments {
  Development = "development",
  Test = "test",
  Production = "production"
}

export const environment = (() => {
  switch (process.env.NODE_ENV) {
    case "TEST":
      return Environments.Test;
    case "PRODUCTION":
      return Environments.Production;
    default:
      return Environments.Development;
  }
})();

const consoleReporter = (error: Error): void => {
  /* tslint:disable-next-line: no-console */
  console.error(error);
};

/* tslint:disable-next-line: no-empty */
const noopReporter = (_error: Error): void => {};

export const errorReporter = (() => {
  const reporters = {
    [Environments.Development]: consoleReporter,
    [Environments.Test]: noopReporter,
    [Environments.Production]: consoleReporter
  };

  return reporters[environment];
})();
