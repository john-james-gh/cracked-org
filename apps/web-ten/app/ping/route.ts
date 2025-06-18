export async function POST() {
  const body = {
    message: "Ping completed successfully",
  };

  try {
    return new Response(JSON.stringify(body), {
      status: 200,
    });
  } catch (reason) {
    const message = reason instanceof Error ? reason.message : String(reason);

    return new Response(message, { status: 500 });
  }
}
