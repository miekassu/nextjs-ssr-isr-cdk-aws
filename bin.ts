import * as cdk from "@aws-cdk/core";
import { Builder } from "@sls-next/lambda-at-edge";
import { NextStack } from "./stack";

const env = {
  account: process.env.CDK_DEFAULT_ACCOUNT,
  region: process.env.CDK_DEFAULT_REGION
}

const builder = new Builder(".", "./build", {args: ['build']});

builder
  .build(true)
  .then(() => {
    const app = new cdk.App();
    new NextStack(app, "NextJsPokeStack", {
      env,
      analyticsReporting: false,
      description: "Testing deploying NextJS Serverless Construct"
    });
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
