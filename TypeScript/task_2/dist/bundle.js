/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/

var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workFromHome = function () {
        return 'Working from home';
    };
    Director.prototype.getCoffeeBreak = function () {
        return 'Getting a coffe break';
    };
    Director.prototype.workDirectorTasks = function () {
        return 'Getting to director tasks';
    };
    return Director;
}());
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () {
        return 'Cannot work from home';
    };
    Teacher.prototype.getCoffeeBreak = function () {
        return 'Cannot have a break';
    };
    Teacher.prototype.workTeacherTasks = function () {
        return 'Getting to work';
    };
    return Teacher;
}());
function createEmployee(salary) {
    if (typeof (salary) == 'number' && salary < 500) {
        return new Teacher();
    }
    return new Director();
}
console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));
// Task6
function isDirector(employee) {
    return employee instanceof Director;
}
function executeWork(employee) {
    if (isDirector(employee)) {
        return employee.workDirectorTasks();
    }
    else {
        return employee.workTeacherTasks();
    }
}
console.log(executeWork(createEmployee(200))); // Getting to work
console.log(executeWork(createEmployee(1000))); // Getting to director tasks
function teachClass(todayClass) {
    if (todayClass == 'Math') {
        return 'Teaching Math';
    }
    else {
        return 'Teaching History';
    }
}
console.log(teachClass('Math'));
console.log(teachClass('History'));

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQVlBO0lBQUE7SUFhQSxDQUFDO0lBWEEsK0JBQVksR0FBWjtRQUNDLE9BQU8sbUJBQW1CO0lBQzNCLENBQUM7SUFFRCxpQ0FBYyxHQUFkO1FBQ0MsT0FBTyx1QkFBdUI7SUFDL0IsQ0FBQztJQUVELG9DQUFpQixHQUFqQjtRQUNDLE9BQU8sMkJBQTJCO0lBQ25DLENBQUM7SUFDRixlQUFDO0FBQUQsQ0FBQztBQUVEO0lBQUE7SUFZQSxDQUFDO0lBWEEsOEJBQVksR0FBWjtRQUNDLE9BQU8sdUJBQXVCO0lBQy9CLENBQUM7SUFFRCxnQ0FBYyxHQUFkO1FBQ0MsT0FBTyxxQkFBcUI7SUFDN0IsQ0FBQztJQUVELGtDQUFnQixHQUFoQjtRQUNDLE9BQU8saUJBQWlCO0lBQ3pCLENBQUM7SUFDRixjQUFDO0FBQUQsQ0FBQztBQUtELFNBQVMsY0FBYyxDQUFDLE1BQXVCO0lBQzlDLElBQUksT0FBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLFFBQVEsSUFBSSxNQUFNLEdBQUcsR0FBRyxFQUFFO1FBQy9DLE9BQU8sSUFBSSxPQUFPLEVBQUUsQ0FBQztLQUNyQjtJQUNELE9BQU8sSUFBSSxRQUFRLEVBQUU7QUFDdEIsQ0FBQztBQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0FBRXBDLFFBQVE7QUFDUixTQUFTLFVBQVUsQ0FBQyxRQUE0QjtJQUMvQyxPQUFPLFFBQVEsWUFBWSxRQUFRO0FBQ3BDLENBQUM7QUFFRCxTQUFTLFdBQVcsQ0FBQyxRQUE0QjtJQUNoRCxJQUFJLFVBQVUsQ0FBQyxRQUFRLENBQUMsRUFBRTtRQUN6QixPQUFPLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRTtLQUNuQztTQUFNO1FBQ04sT0FBTyxRQUFRLENBQUMsZ0JBQWdCLEVBQUU7S0FDbEM7QUFDRixDQUFDO0FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFHLGtCQUFrQjtBQUNuRSxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUUsNEJBQTRCO0FBSTdFLFNBQVMsVUFBVSxDQUFDLFVBQW9CO0lBQ3ZDLElBQUksVUFBVSxJQUFJLE1BQU0sRUFBRTtRQUN6QixPQUFPLGVBQWU7S0FDdEI7U0FBTTtRQUNOLE9BQU8sa0JBQWtCO0tBQ3pCO0FBQ0YsQ0FBQztBQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzLy4vanMvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbnRlcmZhY2UgRGlyZWN0b3JJbnRlcmZhY2Uge1xuXHR3b3JrRnJvbUhvbWUoKTogc3RyaW5nLFxuXHRnZXRDb2ZmZWVCcmVhaygpOiBzdHJpbmcsXG5cdHdvcmtEaXJlY3RvclRhc2tzKCk6IHN0cmluZ1xufVxuXG5pbnRlcmZhY2UgVGVhY2hlckludGVyZmFjZSB7XG5cdHdvcmtGcm9tSG9tZSgpOiBzdHJpbmcsXG5cdGdldENvZmZlZUJyZWFrKCk6IHN0cmluZyxcblx0d29ya1RlYWNoZXJUYXNrcygpOiBzdHJpbmdcbn1cblxuY2xhc3MgRGlyZWN0b3IgaW1wbGVtZW50cyBEaXJlY3RvckludGVyZmFjZSB7XG5cblx0d29ya0Zyb21Ib21lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdXb3JraW5nIGZyb20gaG9tZSdcblx0fVxuXG5cdGdldENvZmZlZUJyZWFrKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdHZXR0aW5nIGEgY29mZmUgYnJlYWsnXG5cdH1cblxuXHR3b3JrRGlyZWN0b3JUYXNrcygpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnR2V0dGluZyB0byBkaXJlY3RvciB0YXNrcydcblx0fVxufVxuXG5jbGFzcyBUZWFjaGVyIGltcGxlbWVudHMgVGVhY2hlckludGVyZmFjZSB7XG5cdHdvcmtGcm9tSG9tZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnQ2Fubm90IHdvcmsgZnJvbSBob21lJ1xuXHR9XG5cblx0Z2V0Q29mZmVlQnJlYWsoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJ0Nhbm5vdCBoYXZlIGEgYnJlYWsnXG5cdH1cblxuXHR3b3JrVGVhY2hlclRhc2tzKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdHZXR0aW5nIHRvIHdvcmsnXG5cdH1cbn1cblxuaW50ZXJmYWNlIGNyZWF0ZUVtcGxveWVlRnVuY3Rpb24ge1xuXHQoc2FsYXJ5OiBudW1iZXIgfCBzdHJpbmcpOiBUZWFjaGVyIHwgRGlyZWN0b3Jcbn1cbmZ1bmN0aW9uIGNyZWF0ZUVtcGxveWVlKHNhbGFyeTogc3RyaW5nIHwgbnVtYmVyKSB7XG5cdGlmICh0eXBlb2Yoc2FsYXJ5KSA9PSAnbnVtYmVyJyAmJiBzYWxhcnkgPCA1MDApIHtcblx0XHRyZXR1cm4gbmV3IFRlYWNoZXIoKTtcblx0fVxuXHRyZXR1cm4gbmV3IERpcmVjdG9yKClcbn1cbmNvbnNvbGUubG9nKGNyZWF0ZUVtcGxveWVlKDIwMCkpO1xuY29uc29sZS5sb2coY3JlYXRlRW1wbG95ZWUoMTAwMCkpO1xuY29uc29sZS5sb2coY3JlYXRlRW1wbG95ZWUoJyQ1MDAnKSk7XG5cbi8vIFRhc2s2XG5mdW5jdGlvbiBpc0RpcmVjdG9yKGVtcGxveWVlOiBEaXJlY3RvciB8IFRlYWNoZXIpOiBlbXBsb3llZSBpcyBEaXJlY3RvciB7XG5cdHJldHVybiBlbXBsb3llZSBpbnN0YW5jZW9mIERpcmVjdG9yXG59XG5cbmZ1bmN0aW9uIGV4ZWN1dGVXb3JrKGVtcGxveWVlOiBEaXJlY3RvciB8IFRlYWNoZXIpOiBzdHJpbmcge1xuXHRpZiAoaXNEaXJlY3RvcihlbXBsb3llZSkpIHtcblx0XHRyZXR1cm4gZW1wbG95ZWUud29ya0RpcmVjdG9yVGFza3MoKVxuXHR9IGVsc2Uge1xuXHRcdHJldHVybiBlbXBsb3llZS53b3JrVGVhY2hlclRhc2tzKClcblx0fVx0XG59XG5jb25zb2xlLmxvZyhleGVjdXRlV29yayhjcmVhdGVFbXBsb3llZSgyMDApKSk7ICAgLy8gR2V0dGluZyB0byB3b3JrXG5jb25zb2xlLmxvZyhleGVjdXRlV29yayhjcmVhdGVFbXBsb3llZSgxMDAwKSkpOyAgLy8gR2V0dGluZyB0byBkaXJlY3RvciB0YXNrc1xuXG50eXBlIFN1YmplY3RzID0gJ01hdGgnIHwgJ0hpc3RvcnknO1xuXG5mdW5jdGlvbiB0ZWFjaENsYXNzKHRvZGF5Q2xhc3M6IFN1YmplY3RzKSB7XG5cdGlmICh0b2RheUNsYXNzID09ICdNYXRoJykge1xuXHRcdHJldHVybiAnVGVhY2hpbmcgTWF0aCdcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gJ1RlYWNoaW5nIEhpc3RvcnknXG5cdH1cbn1cbmNvbnNvbGUubG9nKHRlYWNoQ2xhc3MoJ01hdGgnKSk7XG5jb25zb2xlLmxvZyh0ZWFjaENsYXNzKCdIaXN0b3J5JykpOyJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=