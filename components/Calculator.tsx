import { useRef } from "react";
import Chart from "chart.js/auto";
import {
  getAnnualSalariesArray,
  getCumulativeEarningsArray,
} from "../utils/salaries";

export default function Calculator({
  amountSaved = 0,
  annualCostOfCollege = 20000,
  projectedStartingSalary = 50000,
}) {
  const chartRef = useRef<Chart | null>(null);
  return (
    <div>
      <canvas
        ref={(ref) => {
          if (!ref) {
            chartRef.current?.destroy();
            return;
          }
          chartRef.current = new Chart(ref, {
            type: "line",
            data: {
              labels: Array(47)
                .fill(0)
                .map((_, i) => i + 18),
              datasets: [
                {
                  label: "Not college educated",
                  data: getCumulativeEarningsArray(getAnnualSalariesArray()),
                  fill: false,
                  borderColor: "rgb(75, 192, 192)",
                },
                {
                  label: "College educated",
                  data: getCumulativeEarningsArray(
                    getAnnualSalariesArray({
                      averageAnnualRaise: 0.1,
                      workingYears: 40,
                      startingSalary: 175000,
                    })
                  ),
                },
              ],
            },
          });
        }}
        width="100"
        height="100"
      />
    </div>
  );
}
