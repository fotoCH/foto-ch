import * as proc from "process";
import * as app from "./app";

const port = proc.env.PORT || 4100;

/* tslint:disable: no-console */
app.listen(
  {
    host: "0.0.0.0",
    port
  },
  () => console.info(`Server running on port ${port}`)
);
