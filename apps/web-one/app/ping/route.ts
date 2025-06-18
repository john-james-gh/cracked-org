const url = process.env.NEXT_PUBLIC_NEXT_SERVICE_URL ?? "http://localhost:3002";

export async function POST() {
  const headers = new Headers();
  headers.set("Content-Type", "application/json");
  headers.set("X-Service-Name", "web-one");

  const traceId = crypto.randomUUID();
  const requestTimestamp = Date.now().toString();

  headers.set("X-Trace-Id", traceId);
  headers.set("X-Request-Timestamp", requestTimestamp);

  try {
    const response = await fetch(`${url}/ping`, {
      method: "POST",
      headers,
    });

    const body = await response.json();
    return new Response(JSON.stringify(body), {
      status: 200,
      headers: response.headers,
    });
  } catch (reason) {
    const message = reason instanceof Error ? reason.message : String(reason);

    return new Response(message, {
      status: 500,
    });
  }
}
