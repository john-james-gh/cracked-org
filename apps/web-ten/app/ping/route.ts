export async function POST(request: Request) {
  const headers = new Headers();

  headers.set("Content-Type", "application/json");
  headers.set("X-Service-Name", "web-ten");

  const traceId = request.headers.get("X-Trace-Id") || crypto.randomUUID();
  const timestamp =
    request.headers.get("X-Request-Timestamp") || Date.now().toString();

  headers.set("X-Trace-Id", traceId);
  headers.set("X-Request-Timestamp", timestamp);

  const body = {
    message: "Ping completed successfully",
    traceId,
    timestamp,
  };

  try {
    return new Response(JSON.stringify(body), {
      status: 200,
      headers,
    });
  } catch (reason) {
    const message = reason instanceof Error ? reason.message : String(reason);

    return new Response(message, { status: 500 });
  }
}
