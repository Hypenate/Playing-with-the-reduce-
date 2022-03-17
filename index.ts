interface salaryInfo {
  id: number
  name: string;
  salary: number;
}

const salaries: salaryInfo[] = [
  {
    id: 1,
    name: 'Jane',
    salary: 300,
  },
  {
    id: 2,
    name: 'Joe',
    salary: 500,
  },
  {
    id: 3,
    name: 'Foo',
    salary: 150,
  },
  {
    id: 4,
    name: 'Bar',
    salary: 200,
  },
];

const totalPayedSalaries = salaries.reduce((acc, salaryInfo) => acc + 1, 0);
console.log(totalPayedSalaries);

const totalPayedSalaryAmount = salaries.reduce(
  (acc, salaryInfo) => acc + salaryInfo.salary,
  0
);
console.log(totalPayedSalaryAmount);

const employees = salaries.reduce(
  (acc, salaryInfo) => [...acc, salaryInfo.name],
  []
);
console.log(employees);

const dictionary = salaries.reduce(
  (acc, salaryInfo) => ({ ...acc, [salaryInfo.id]: salaryInfo }),
  {}
);
console.log(dictionary)
console.log(dictionary[1])

const maxPay = salaries.reduce((acc, salaryInfo) => Math.max(acc, salaryInfo.salary) , 0)
console.log(maxPay);