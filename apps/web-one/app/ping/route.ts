const url = process.env.NEXT_PUBLIC_NEXT_SERVICE_URL ?? "http://localhost:3002";

export async function POST() {
  try {
    const response = await fetch(`${url}/ping`, {
      method: "POST",
    });

    const body = await response.json();
    return new Response(JSON.stringify(body), {
      status: 200,
    });
  } catch (reason) {
    const message = reason instanceof Error ? reason.message : String(reason);

    return new Response(message, {
      status: 500,
    });
  }
}
