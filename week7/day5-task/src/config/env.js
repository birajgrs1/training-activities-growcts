import { z } from "zod";

export const port = z.coerce
  .number()
  .min(1)
  .max(65535)
  .default(3000)
  .parse(process.env.PORT);
