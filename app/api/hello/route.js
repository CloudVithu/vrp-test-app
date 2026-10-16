export function GET() {
  return Response.json({ message: "hello", env: process.env.TEST_SECRET ? "set" : "unset" });
}
