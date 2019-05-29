

   const filterData = (STUDENTS) => {

		let filteredData = STUDENTS.filter((element) => {
            console.log(element.name)
			for (let i = 0; i < element.name.length; i++) {
				if (element.name[i] === "Ana Rocio Chavoya") {
					return element;
				}
			}
		});

        return filteredData;
    };
    


console.log(filterData(STUDENTS));