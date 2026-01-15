interface Student {
	firstName: string,
	lastName: string,
	age: number,
	location: string,
}

const student1: Student = {
	firstName: "Tristan",
	lastName: "Martinez",
	age: 24,
	location: "Dijon"
}
const student2: Student = {
	firstName: "Yashi",
	lastName: "Shrivastava",
	age: 26,
	location: "India"
}
const studentList = [student1, student2]
studentList.forEach(student => {
	
});