


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
	
	console.log(salaryList);
	console.log(hikedSalary);
	console.log(lowSalaries);

























	