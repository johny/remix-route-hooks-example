import { useRouteData } from "~/hooks/useRouteData";

// in app/routes/sales/transactions.tsx
type SalesData = {
  accounts: number;
  revenue: number;
};

export default function SalesTransactionPage() {
  const data = useRouteData<SalesData>("routes/sales");
  const isLowRevenue = data && data.revenue < 500;

  return (
    <div>
      <p>Transactions report goes here</p>

      {isLowRevenue && (
        <p style={{ padding: "0", color: "#f00", margin: "1rem 0" }}>
          Warning! Low revenue!
        </p>
      )}
    </div>
  );
}
