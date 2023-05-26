import DateUtils from "@j2w/common/utils/DateUtils";
import chalk from "chalk";
import { Request } from "express";
import { ServerResponse } from "http";
import morgan from "morgan";
import Environment from "../env/types/Environment";

const statusColor = (status: number) =>
  status >= 500
    ? chalk.red(status)
    : status >= 400
    ? chalk.yellow(status)
    : status >= 300
    ? chalk.cyan(status)
    : chalk.green(status);

const padLeft = (str: string, len: number) => {
  return len > str.length
    ? new Array(len - str.length + 1).join(" ") + str
    : str;
};

const padRight = (str: string, len: number) => {
  return len > str.length
    ? str + new Array(len - str.length + 1).join(" ")
    : str;
};

const hasBody = (req: Request) => ["POST", "PUT"].includes(req.method);

const printResponse = (
  tokens: morgan.TokenIndexer<Request, ServerResponse>,
  req: Request,
  res: ServerResponse
) => {
  const status = +(tokens.status(req, res) ?? 0);
  return [
    "RESPONSE :",
    padRight(DateUtils.formatDate(new Date(), "DD/MM/YYYY, HH:MM:SS"), 20),
    padRight(tokens.method(req, res) + " " + tokens.url(req, res), 40),
    statusColor(status),
    padLeft(tokens["response-time"](req, res) || "-", 8),
    "ms -",
    tokens.res(req, res, "content-length") || "-",
  ].join(" ");
};

const MorganMiddleware = (env: Environment) =>
  morgan((tokens, req: Request, res) => {
    const logLines = [];
    if (env !== Environment.PROD && hasBody(req)) {
      logLines.push(`REQUEST  : ${JSON.stringify(req.body)}`);
    }
    logLines.push(printResponse(tokens, req, res));
    return logLines.join("\n");
  });

export default MorganMiddleware;
