/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/

var teacher3 = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
};
console.log(teacher3);
var director1 = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};
console.log(director1);
var printTeacher = function (firstName, lastName) {
    return "".concat(firstName[0], ". ").concat(lastName);
};
console.log(printTeacher("John", "Doe"));
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this.firstName = firstName,
            this.lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return 'Currently working';
    };
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());
var student = new StudentClass('Tristan', 'Martinez');
console.log(student.displayName()); // Tristan
console.log(student.workOnHomework()); // Currently working

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQVNBLElBQU0sUUFBUSxHQUFZO0lBQ3hCLFNBQVMsRUFBRSxNQUFNO0lBQ2pCLGdCQUFnQixFQUFFLEtBQUs7SUFDdkIsUUFBUSxFQUFFLEtBQUs7SUFDZixRQUFRLEVBQUUsUUFBUTtJQUNsQixRQUFRLEVBQUUsS0FBSztDQUNoQixDQUFDO0FBRUYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQU90QixJQUFNLFNBQVMsR0FBYztJQUMzQixTQUFTLEVBQUUsTUFBTTtJQUNqQixRQUFRLEVBQUUsS0FBSztJQUNmLFFBQVEsRUFBRSxRQUFRO0lBQ2xCLGdCQUFnQixFQUFFLElBQUk7SUFDdEIsZUFBZSxFQUFFLEVBQUU7Q0FDcEIsQ0FBQztBQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7QUFPdkIsSUFBTSxZQUFZLEdBQXlCLFVBQUMsU0FBUyxFQUFFLFFBQVE7SUFDOUQsT0FBTyxVQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsZUFBSyxRQUFRLENBQUU7QUFDdEMsQ0FBQztBQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO0FBY3pDO0lBSUMsc0JBQVksU0FBaUIsRUFBRSxRQUFnQjtRQUM5QyxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVM7WUFDMUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRO0lBQ3pCLENBQUM7SUFFRCxxQ0FBYyxHQUFkO1FBQ0MsT0FBTyxtQkFBbUI7SUFDM0IsQ0FBQztJQUVELGtDQUFXLEdBQVg7UUFDQyxPQUFPLElBQUksQ0FBQyxTQUFTO0lBQ3RCLENBQUM7SUFDRixtQkFBQztBQUFELENBQUM7QUFDRCxJQUFNLE9BQU8sR0FBRyxJQUFJLFlBQVksQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDLENBQUM7QUFFeEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLFVBQVU7QUFDOUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQyxDQUFDLG9CQUFvQiIsInNvdXJjZXMiOlsid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzLy4vanMvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbnRlcmZhY2UgVGVhY2hlciB7XG5cdGZpcnN0TmFtZTogc3RyaW5nLFxuXHRsYXN0TmFtZTogc3RyaW5nLFxuXHRmdWxsVGltZUVtcGxveWVlOiBib29sZWFuLFxuXHR5ZWFyc09mRXhwZXJpZW5jZT86IG51bWJlcixcblx0bG9jYXRpb246IHN0cmluZ1xuXHRba2V5OiBzdHJpbmddOiBhbnlcbn1cblxuY29uc3QgdGVhY2hlcjM6IFRlYWNoZXIgPSB7XG4gIGZpcnN0TmFtZTogJ0pvaG4nLFxuICBmdWxsVGltZUVtcGxveWVlOiBmYWxzZSxcbiAgbGFzdE5hbWU6ICdEb2UnLFxuICBsb2NhdGlvbjogJ0xvbmRvbicsXG4gIGNvbnRyYWN0OiBmYWxzZSxcbn07XG5cbmNvbnNvbGUubG9nKHRlYWNoZXIzKTtcblxuLy8gVGFzayAyXG5pbnRlcmZhY2UgRGlyZWN0b3JzIGV4dGVuZHMgVGVhY2hlciB7XG5cdG51bWJlck9mUmVwb3J0czogbnVtYmVyXG59XG5cbmNvbnN0IGRpcmVjdG9yMTogRGlyZWN0b3JzID0ge1xuICBmaXJzdE5hbWU6ICdKb2huJyxcbiAgbGFzdE5hbWU6ICdEb2UnLFxuICBsb2NhdGlvbjogJ0xvbmRvbicsXG4gIGZ1bGxUaW1lRW1wbG95ZWU6IHRydWUsXG4gIG51bWJlck9mUmVwb3J0czogMTcsXG59O1xuY29uc29sZS5sb2coZGlyZWN0b3IxKTtcblxuLy8gVGFzazNcbmludGVyZmFjZSBwcmludFRlYWNoZXJGdW5jdGlvbiB7XG5cdChmaXJzdE5hbWU6IHN0cmluZywgbGFzdE5hbWU6IHN0cmluZyk6IHN0cmluZ1xufVxuXG5jb25zdCBwcmludFRlYWNoZXI6IHByaW50VGVhY2hlckZ1bmN0aW9uID0gKGZpcnN0TmFtZSwgbGFzdE5hbWUpID0+IHtcblx0cmV0dXJuIGAke2ZpcnN0TmFtZVswXX0uICR7bGFzdE5hbWV9YFxufVxuY29uc29sZS5sb2cocHJpbnRUZWFjaGVyKFwiSm9oblwiLCBcIkRvZVwiKSk7ICBcblxuLy8gVGFzazRcbmludGVyZmFjZSBTdHVkZW50SW50ZXJmYWNlIHtcblx0Zmlyc3ROYW1lOiBzdHJpbmcsXG5cdGxhc3ROYW1lOiBzdHJpbmcsXG5cdHdvcmtPbkhvbWV3b3JrKCk6IHN0cmluZyxcblx0ZGlzcGxheU5hbWUoKTogc3RyaW5nXG59XG5cbmludGVyZmFjZSBTdHVkZW50Q29uc3RydWN0b3Ige1xuXHRuZXcgKGZpcnN0TmFtZTogc3RyaW5nLCBsYXN0TmFtZTogc3RyaW5nKTogU3R1ZGVudEludGVyZmFjZVxufVxuXG5jbGFzcyBTdHVkZW50Q2xhc3MgaW1wbGVtZW50cyBTdHVkZW50SW50ZXJmYWNle1xuXHRmaXJzdE5hbWU6IHN0cmluZyxcblx0bGFzdE5hbWU6IHN0cmluZ1xuXG5cdGNvbnN0cnVjdG9yKGZpcnN0TmFtZTogc3RyaW5nLCBsYXN0TmFtZTogc3RyaW5nKSB7XG5cdFx0dGhpcy5maXJzdE5hbWUgPSBmaXJzdE5hbWUsXG5cdFx0dGhpcy5sYXN0TmFtZSA9IGxhc3ROYW1lXG5cdH1cblxuXHR3b3JrT25Ib21ld29yaygpOnN0cmluZyB7XG5cdFx0cmV0dXJuICdDdXJyZW50bHkgd29ya2luZydcblx0fVxuXG5cdGRpc3BsYXlOYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMuZmlyc3ROYW1lXG5cdH1cbn1cbmNvbnN0IHN0dWRlbnQgPSBuZXcgU3R1ZGVudENsYXNzKCdUcmlzdGFuJywgJ01hcnRpbmV6Jyk7XG5cbmNvbnNvbGUubG9nKHN0dWRlbnQuZGlzcGxheU5hbWUoKSk7IC8vIFRyaXN0YW5cbmNvbnNvbGUubG9nKHN0dWRlbnQud29ya09uSG9tZXdvcmsoKSk7IC8vIEN1cnJlbnRseSB3b3JraW5nXG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9