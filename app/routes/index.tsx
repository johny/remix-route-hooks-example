import { Link } from "@remix-run/react";
import { useRouteData } from "~/hooks/useRouteData";

type User = { name: string };

export default function Index() {
  const userData = useRouteData<User>("root");
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      {userData ? (
        <h1>Hello {userData.name}, welcome to Remix</h1>
      ) : (
        <h1>Hello, welcome to Remix</h1>
      )}
      <Link to="sales">Show sales report</Link>
    </div>
  );
}
