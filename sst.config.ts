/// <reference path="./.sst/platform/config.d.ts" />
import { execSync } from "node:child_process";

export default $config({
  app(input) {
    return {
      name: "nitro-app",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
    };
  },
  async run() {
    execSync("yarn nitro build");

    let nitro = new sst.aws.Function("nitro-api", {
      handler: ".output/server/index.handler",
      url: true,
    });

    return {
      nitro: nitro.url,
    };
  },
});
