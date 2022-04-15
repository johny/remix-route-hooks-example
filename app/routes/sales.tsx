// in app/routes/sales.tsx
import { Link, Outlet, useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";

type SalesData = {
  accounts: number;
  revenue: number;
};

export const loader = () => {
  return json<SalesData>({
    accounts: 5,
    revenue: 200,
  });
};

export default function SalesPage() {
  const data = useLoaderData();

  return (
    <div>
      <h1>Sales report</h1>
      <p>
        We have have {data.accounts} accounts with ${data.revenue}€ revenue!
      </p>
      <p>
        <Link to="transactions">Show transactions</Link>
      </p>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
