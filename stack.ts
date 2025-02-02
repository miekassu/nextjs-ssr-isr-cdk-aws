import * as cdk from '@aws-cdk/core';
import { CfnOutput, Duration } from '@aws-cdk/core';
import { NextJSLambdaEdge } from '@sls-next/cdk-construct';
import { Runtime } from '@aws-cdk/aws-lambda';

export class NextStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props: cdk.StackProps) {
    super(scope, id, props);

    const deployment = new NextJSLambdaEdge(this, 'NextJsApp', {
      serverlessBuildOutDir: './build',
      runtime: Runtime.NODEJS_12_X,
      memory: 1024,
      timeout: Duration.seconds(30),
      withLogging: true,
      name: {
        apiLambda: `${id}Api`,
        defaultLambda: `Fn${id}`,
        imageLambda: `${id}Image`,
      },
    });

    new CfnOutput(this, 'DeploymentDomainName', {
      value: deployment.distribution.domainName,
    });

  }
}
