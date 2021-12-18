


	const emp = {
		eid: 101,
		ename: 'Sonu',
		salary: 10.5
	};

	/*
	console.log(emp);
	console.log(emp.firstname);

	const fields = Object.keys(emp);
	console.log(fields);

	const valuesInEmp = Object.values(emp);
	console.log(valuesInEmp);
	*/



	const salaryList = [1200, 1100, 1500, 1800, 1400];
	
	const hikedSalary = salaryList.map((salary) => {
				return salary * 2;
				});
	const lowSalaries = salaryList.filter((salary) => {
				return salary < 1300;
				});
	
	const lowSalaryOne = salaryList.find((salary) => {
				return salary < 1300;
				});

	const totalPayout =  salaryList.reduce((prev, curr) => {
				return prev + curr;
				});

	console.log(salaryList);
	console.log(hikedSalary);
	console.log(lowSalaries);
	console.log(lowSalaryOne);
	console.log(totalPayout); // 7000 


/*
	teams - 
	team1 - node 
	team2 - js es ts 
	team3 - jsx component etc 
	team4 - state redux
	team5 - testing 
*/



























	