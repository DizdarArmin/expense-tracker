import Chart from "react-google-charts";
import { useEffect } from "react";
export default function PieChart({ data }) {
  if (data.length === 0) return <div></div>;

  return (
    <Chart
      className="container-fluid output"
      chartType="PieChart"
      data={[["Task", "Hours per Day"], ...data]}
      options={{
        legend: "none",
        backgroundColor: "transparent",
        colors: [
          "#0ebeff",
          "#47cf73",
          "#ae63e4",
          "#fcd000",
          "#ff3c41",
          "#76daff",
        ],
      }}
      rootProps={{ "data-testid": "1" }}
    />
  );
}
