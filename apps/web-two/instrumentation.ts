import { registerOtel } from "@repo/telemetry/otel";

export function register() {
  registerOtel("web-two");
}
