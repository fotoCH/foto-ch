import * as Koa from "koa";
import * as proc from "process";
import { environment } from "../configuration";

export const getInfo = async (ctx: Koa.Context) => {
  ctx.body = {
    nodeVersion: proc.version,
    nodeEnv: environment,
    version: "0.0.0"
  };
};
