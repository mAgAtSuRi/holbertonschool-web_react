interface Student {
	firstName: string,
	lastName: string,
	age: number,
	location: string,
};

const student1: Student = {
	firstName: "Tristan",
	lastName: "Martinez",
	age: 24,
	location: "Dijon"
};
const student2: Student = {
	firstName: "Yashi",
	lastName: "Shrivastava",
	age: 26,
	location: "India"
};

const studentList: Student[] = [student1, student2]
const table: HTMLTableElement = document.createElement('table');


studentList.forEach((student: Student) => {
	const row: HTMLTableRowElement = document.createElement('tr');

  const firstnameCell: HTMLTableCellElement = document.createElement('td');
  firstnameCell.textContent = student.firstName;

  const localisationCell: HTMLTableCellElement = document.createElement('td');
  localisationCell.textContent = student.location;

  row.append(firstnameCell, localisationCell);
  table.append(row);
});

document.body.append(table);