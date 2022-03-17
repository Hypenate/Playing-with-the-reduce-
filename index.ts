interface employee {
  id: number;
  name: string;
  salary: number;
  willGetRaise: boolean;
  gender: 'm' | 'f' | 'x';
}

const employees: employee[] = [
  {
    id: 1,
    name: 'Jane',
    salary: 300,
    willGetRaise: false,
    gender: 'f',
  },
  {
    id: 2,
    name: 'Joe',
    salary: 500,
    willGetRaise: true,
    gender: 'm',
  },
  {
    id: 3,
    name: 'Foo',
    salary: 150,
    willGetRaise: true,
    gender: 'x',
  },
  {
    id: 4,
    name: 'Bar',
    salary: 205,
    willGetRaise: false,
    gender: 'm',
  },
];

const employeeCount = employees.reduce((acc, employee) => acc + 1, 0);
console.log('Number of employees', employeeCount);

const totalPayedSalaryAmount = employees.reduce(
  (acc, employee) => acc + employee.salary,
  0
);
console.log('Total payed salaries', totalPayedSalaryAmount);

const employeeNames = employees.reduce(
  (acc, employee) => [...acc, employee.name],
  []
);
console.log('Names of employees', employeeNames);

const dictionary = employees.reduce(
  (acc, employee) => ({ ...acc, [employee.id]: employee }),
  {}
);
console.log('Dictionary', dictionary);
console.log('Dictionary, find by ID', dictionary[1]);

const highestSalary = employees.reduce(
  (acc, employee) => Math.max(acc, employee.salary),
  0
);
console.log('Highest salary', highestSalary);

const overTwoHunderdSalaries = employees.reduce((acc, employee) => {
  if (employee.salary > 205) {
    return [...acc, employee.name];
  }

  return acc;
}, []);
console.log('Names who earn above 2O0', overTwoHunderdSalaries);

const anyoneGettingRaise = employees.reduce((acc, employee) => {
  // if true, always true
  if (acc) return acc;

  if (employee.willGetRaise) return true;
}, false);
console.log('Anyone getting a raise', anyoneGettingRaise);

const whoIsGettingRaise = employees.reduce((acc, employee) => {
  if (employee.willGetRaise) return [...acc, employee.name];

  return acc;
}, []);
console.log('Who is getting a raise', whoIsGettingRaise);

const differentGenderCounts = employees.reduce((acc, employee) => {
  return { ...acc, [employee.gender]: (acc[employee.gender] || 0) + 1 };
}, {});
console.log('Different genders with count', differentGenderCounts);

// Doesn't work :(
// Same as above, but also adding the name(s) with the gender
// ISSUE: With the 'm' it should list Joe and Bar, but it only shows 'Bar', I think it gets overwritten, because I do not destructor the key on line 104?
const whoAreTheDifferentGenders = employees.reduce(
  (acc, employee) => {
    return {
      ...acc,
      [employee.gender]: {
        count: ++acc.count,
        employees: [...acc.employees, employee.name],
      },
    };
  },
  { count: 0, employees: [] }
);
console.log('Who are the different genders', whoAreTheDifferentGenders);
