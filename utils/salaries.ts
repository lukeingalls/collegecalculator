export function getAnnualSalariesArray({
	startingSalary = 50000,
	averageAnnualRaise = .02,
	workingYears = 47
}: { startingSalary?: number, averageAnnualRaise?: number, workingYears?: number } = {}): number[] {
	const salaries: number[] = [];
	let currentSalary = startingSalary;
	for (let i = 0; i < workingYears; i++) {
		salaries.push(currentSalary);
		currentSalary *= (1 + averageAnnualRaise);
	}
	return salaries;
}


export function getCumulativeEarningsArray(salaries: number[]) {
  let accumulator = 0;
  return salaries.map((salary) => {
    accumulator += salary;
    return accumulator;
  });
}
