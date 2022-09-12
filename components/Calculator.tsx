import { useEffect, useLayoutEffect, useRef } from "react";
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
          let interval = setInterval(() => {
            if (!chartRef.current) return;
            chartRef.current.data.datasets[1].data = getCumulativeEarningsArray(
              getAnnualSalariesArray({
                workingYears: 40,
                averageAnnualRaise: Math.random() / 10,
                startingSalary: 120000,
              })
            );
            chartRef.current.update();
          }, 5000);
          if (!ref) {
            clearInterval(interval);
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
                      averageAnnualRaise: 0.05,
                      workingYears: 40,
                      startingSalary: 120000,
                    })
                  ),
                },
              ],
            },
          });
        }}
        width="600"
        height="600"
      />
    </div>
  );
}
