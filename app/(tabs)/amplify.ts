import { Amplify } from "aws-amplify";

Amplify.configure({
  Auth: {
    Cognito: {
      region: "us-east-2",
      userPoolId: "us-east-2_KOrOH0cYI",
      userPoolClientId: "65ompctdi05r4k4ailqvkqk8ve",
      loginWith: {
        email: true,
      },
    },
  },
});
