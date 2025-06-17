const { useAzureMonitor } = await import("@azure/monitor-opentelemetry");
const { detectResourcesSync } = await import("@opentelemetry/resources");

const options = {
  azureMonitorExporterOptions: {
    connectionString: process.env.APPLICATIONINSIGHTS_CONNECTION_STRING!,
  },
  resource: {
    waitForAsyncAttributes: () => detectResourcesSync(),
  },
};

export { useAzureMonitor, options };
