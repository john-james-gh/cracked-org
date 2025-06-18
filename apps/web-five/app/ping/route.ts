const url = process.env.NEXT_PUBLIC_NEXT_SERVICE_URL ?? "http://localhost:3006";

export async function POST(request: Request) {
  const headers = new Headers();
  headers.set("Content-Type", "application/json");
  headers.set("X-Service-Name", "web-five");

  const traceId = request.headers.get("X-Trace-Id") || crypto.randomUUID();
  const requestTimestamp =
    request.headers.get("X-Request-Timestamp") || Date.now().toString();

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

    return new Response(message, { status: 500 });
  }
}
