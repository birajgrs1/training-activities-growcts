import fs from "fs";
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const errorLogStream = fs.createWriteStream(join(__dirname, "../logs/error.log"), {
  flags: "a",
});

function enhanceRequestWithLogger(req, res, next) {
  req.logger = {
    error: (msg) => errorLogStream.write(`${msg}\n`),
  };
  next();
}

export default enhanceRequestWithLogger;
