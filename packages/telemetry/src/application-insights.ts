import appInsights from "applicationinsights";
const APPLICATIONINSIGHTS_CONNECTION_STRING =
  "InstrumentationKey=ef9940b6-4396-4e83-b38d-eddd570cc4b7;IngestionEndpoint=https://eastus-8.in.applicationinsights.azure.com/;LiveEndpoint=https://eastus.livediagnostics.monitor.azure.com/;ApplicationId=22675ddc-1460-4cef-af1e-1b0b26e8ac8d";

// If the connection string is set in the environment variable APPLICATIONINSIGHTS_CONNECTION_STRING,
// .setup() can be called with no arguments. This makes it easy to use different connection strings for different environments.
// https://github.com/microsoft/ApplicationInsights-node.js/blob/main/README.md
appInsights
  .setup(APPLICATIONINSIGHTS_CONNECTION_STRING)
  // The appInsights object provides many configuration methods. They're listed in the following snippet with their default values.
  .setAutoDependencyCorrelation(true)
  .setAutoCollectRequests(true)
  .setAutoCollectPerformance(true, true)
  .setAutoCollectExceptions(true)
  .setAutoCollectDependencies(true)
  // By default, setAutoCollectConsole is configured to exclude calls to console.log and other console methods.
  // Only calls to supported third-party loggers (for example, winston and bunyan) will be collected.
  // You can change this behavior to include calls to console methods by using setAutoCollectConsole(true, true).
  .setAutoCollectConsole(true, true)
  .setUseDiskRetryCaching(true)
  .setSendLiveMetrics(false)
  .setDistributedTracingMode(appInsights.DistributedTracingModes.AI);

export { appInsights };
