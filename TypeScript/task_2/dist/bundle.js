/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/

// Director class implementing DirectorInterface
var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workFromHome = function () {
        return "Working from home";
    };
    Director.prototype.getCoffeeBreak = function () {
        return "Getting a coffee break";
    };
    Director.prototype.workDirectorTasks = function () {
        return "Getting to director tasks";
    };
    return Director;
}());
// Teacher class implementing TeacherInterface
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () {
        return "Cannot work from home";
    };
    Teacher.prototype.getCoffeeBreak = function () {
        return "Cannot have a break";
    };
    Teacher.prototype.workTeacherTasks = function () {
        return "Getting to work";
    };
    return Teacher;
}());
// createEmployee function that returns Director or Teacher based on salary
function createEmployee(salary) {
    if (typeof salary === "number" && salary < 500) {
        return new Teacher();
    }
    return new Director();
}
// Type predicate function to check if employee is a Director
function isDirector(employee) {
    return employee instanceof Director;
}
// Function to execute the right work method depending on employee type
function executeWork(employee) {
    if (isDirector(employee)) {
        return employee.workDirectorTasks();
    }
    else {
        return employee.workTeacherTasks();
    }
}
// Function taking a subject and returning a teaching string
function teachClass(todayClass) {
    return "Teaching ".concat(todayClass);
}
// Example usages and console outputs
console.log(createEmployee(200)); // Teacher instance
console.log(createEmployee(1000)); // Director instance
console.log(createEmployee("$500")); // Director instance
console.log(executeWork(createEmployee(200))); // Output: Getting to work
console.log(executeWork(createEmployee(1000))); // Output: Getting to director tasks
console.log(teachClass("Math")); // Output: Teaching Math
console.log(teachClass("History")); // Output: Teaching History

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQWNBLGdEQUFnRDtBQUNoRDtJQUFBO0lBWUEsQ0FBQztJQVhDLCtCQUFZLEdBQVo7UUFDRSxPQUFPLG1CQUFtQixDQUFDO0lBQzdCLENBQUM7SUFFRCxpQ0FBYyxHQUFkO1FBQ0UsT0FBTyx3QkFBd0IsQ0FBQztJQUNsQyxDQUFDO0lBRUQsb0NBQWlCLEdBQWpCO1FBQ0UsT0FBTywyQkFBMkIsQ0FBQztJQUNyQyxDQUFDO0lBQ0gsZUFBQztBQUFELENBQUM7QUFFRCw4Q0FBOEM7QUFDOUM7SUFBQTtJQVlBLENBQUM7SUFYQyw4QkFBWSxHQUFaO1FBQ0UsT0FBTyx1QkFBdUIsQ0FBQztJQUNqQyxDQUFDO0lBRUQsZ0NBQWMsR0FBZDtRQUNFLE9BQU8scUJBQXFCLENBQUM7SUFDL0IsQ0FBQztJQUVELGtDQUFnQixHQUFoQjtRQUNFLE9BQU8saUJBQWlCLENBQUM7SUFDM0IsQ0FBQztJQUNILGNBQUM7QUFBRCxDQUFDO0FBRUQsMkVBQTJFO0FBQzNFLFNBQVMsY0FBYyxDQUFDLE1BQXVCO0lBQzdDLElBQUksT0FBTyxNQUFNLEtBQUssUUFBUSxJQUFJLE1BQU0sR0FBRyxHQUFHLEVBQUU7UUFDOUMsT0FBTyxJQUFJLE9BQU8sRUFBRSxDQUFDO0tBQ3RCO0lBQ0QsT0FBTyxJQUFJLFFBQVEsRUFBRSxDQUFDO0FBQ3hCLENBQUM7QUFFRCw2REFBNkQ7QUFDN0QsU0FBUyxVQUFVLENBQUMsUUFBNEI7SUFDOUMsT0FBTyxRQUFRLFlBQVksUUFBUSxDQUFDO0FBQ3RDLENBQUM7QUFFRCx1RUFBdUU7QUFDdkUsU0FBUyxXQUFXLENBQUMsUUFBNEI7SUFDL0MsSUFBSSxVQUFVLENBQUMsUUFBUSxDQUFDLEVBQUU7UUFDeEIsT0FBTyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztLQUNyQztTQUFNO1FBQ0wsT0FBTyxRQUFRLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztLQUNwQztBQUNILENBQUM7QUFLRCw0REFBNEQ7QUFDNUQsU0FBUyxVQUFVLENBQUMsVUFBb0I7SUFDdEMsT0FBTyxtQkFBWSxVQUFVLENBQUUsQ0FBQztBQUNsQyxDQUFDO0FBRUQscUNBQXFDO0FBQ3JDLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBWSxtQkFBbUI7QUFDaEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFXLG9CQUFvQjtBQUNqRSxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQVUsb0JBQW9CO0FBRWxFLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBRywwQkFBMEI7QUFDM0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFFLG9DQUFvQztBQUVyRixPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQWUsd0JBQXdCO0FBQ3ZFLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBWSwyQkFBMkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy8uL2pzL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRGlyZWN0b3JJbnRlcmZhY2Ugd2l0aCAzIG1ldGhvZHNcbmludGVyZmFjZSBEaXJlY3RvckludGVyZmFjZSB7XG4gIHdvcmtGcm9tSG9tZSgpOiBzdHJpbmc7XG4gIGdldENvZmZlZUJyZWFrKCk6IHN0cmluZztcbiAgd29ya0RpcmVjdG9yVGFza3MoKTogc3RyaW5nO1xufVxuXG4vLyBUZWFjaGVySW50ZXJmYWNlIHdpdGggMyBtZXRob2RzXG5pbnRlcmZhY2UgVGVhY2hlckludGVyZmFjZSB7XG4gIHdvcmtGcm9tSG9tZSgpOiBzdHJpbmc7XG4gIGdldENvZmZlZUJyZWFrKCk6IHN0cmluZztcbiAgd29ya1RlYWNoZXJUYXNrcygpOiBzdHJpbmc7XG59XG5cbi8vIERpcmVjdG9yIGNsYXNzIGltcGxlbWVudGluZyBEaXJlY3RvckludGVyZmFjZVxuY2xhc3MgRGlyZWN0b3IgaW1wbGVtZW50cyBEaXJlY3RvckludGVyZmFjZSB7XG4gIHdvcmtGcm9tSG9tZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiBcIldvcmtpbmcgZnJvbSBob21lXCI7XG4gIH1cblxuICBnZXRDb2ZmZWVCcmVhaygpOiBzdHJpbmcge1xuICAgIHJldHVybiBcIkdldHRpbmcgYSBjb2ZmZWUgYnJlYWtcIjtcbiAgfVxuXG4gIHdvcmtEaXJlY3RvclRhc2tzKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIFwiR2V0dGluZyB0byBkaXJlY3RvciB0YXNrc1wiO1xuICB9XG59XG5cbi8vIFRlYWNoZXIgY2xhc3MgaW1wbGVtZW50aW5nIFRlYWNoZXJJbnRlcmZhY2VcbmNsYXNzIFRlYWNoZXIgaW1wbGVtZW50cyBUZWFjaGVySW50ZXJmYWNlIHtcbiAgd29ya0Zyb21Ib21lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIFwiQ2Fubm90IHdvcmsgZnJvbSBob21lXCI7XG4gIH1cblxuICBnZXRDb2ZmZWVCcmVhaygpOiBzdHJpbmcge1xuICAgIHJldHVybiBcIkNhbm5vdCBoYXZlIGEgYnJlYWtcIjtcbiAgfVxuXG4gIHdvcmtUZWFjaGVyVGFza3MoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gXCJHZXR0aW5nIHRvIHdvcmtcIjtcbiAgfVxufVxuXG4vLyBjcmVhdGVFbXBsb3llZSBmdW5jdGlvbiB0aGF0IHJldHVybnMgRGlyZWN0b3Igb3IgVGVhY2hlciBiYXNlZCBvbiBzYWxhcnlcbmZ1bmN0aW9uIGNyZWF0ZUVtcGxveWVlKHNhbGFyeTogbnVtYmVyIHwgc3RyaW5nKTogRGlyZWN0b3IgfCBUZWFjaGVyIHtcbiAgaWYgKHR5cGVvZiBzYWxhcnkgPT09IFwibnVtYmVyXCIgJiYgc2FsYXJ5IDwgNTAwKSB7XG4gICAgcmV0dXJuIG5ldyBUZWFjaGVyKCk7XG4gIH1cbiAgcmV0dXJuIG5ldyBEaXJlY3RvcigpO1xufVxuXG4vLyBUeXBlIHByZWRpY2F0ZSBmdW5jdGlvbiB0byBjaGVjayBpZiBlbXBsb3llZSBpcyBhIERpcmVjdG9yXG5mdW5jdGlvbiBpc0RpcmVjdG9yKGVtcGxveWVlOiBEaXJlY3RvciB8IFRlYWNoZXIpOiBlbXBsb3llZSBpcyBEaXJlY3RvciB7XG4gIHJldHVybiBlbXBsb3llZSBpbnN0YW5jZW9mIERpcmVjdG9yO1xufVxuXG4vLyBGdW5jdGlvbiB0byBleGVjdXRlIHRoZSByaWdodCB3b3JrIG1ldGhvZCBkZXBlbmRpbmcgb24gZW1wbG95ZWUgdHlwZVxuZnVuY3Rpb24gZXhlY3V0ZVdvcmsoZW1wbG95ZWU6IERpcmVjdG9yIHwgVGVhY2hlcik6IHN0cmluZyB7XG4gIGlmIChpc0RpcmVjdG9yKGVtcGxveWVlKSkge1xuICAgIHJldHVybiBlbXBsb3llZS53b3JrRGlyZWN0b3JUYXNrcygpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBlbXBsb3llZS53b3JrVGVhY2hlclRhc2tzKCk7XG4gIH1cbn1cblxuLy8gU3RyaW5nIGxpdGVyYWwgdHlwZSBhbGxvd2luZyBvbmx5IFwiTWF0aFwiIG9yIFwiSGlzdG9yeVwiXG50eXBlIFN1YmplY3RzID0gXCJNYXRoXCIgfCBcIkhpc3RvcnlcIjtcblxuLy8gRnVuY3Rpb24gdGFraW5nIGEgc3ViamVjdCBhbmQgcmV0dXJuaW5nIGEgdGVhY2hpbmcgc3RyaW5nXG5mdW5jdGlvbiB0ZWFjaENsYXNzKHRvZGF5Q2xhc3M6IFN1YmplY3RzKTogc3RyaW5nIHtcbiAgcmV0dXJuIGBUZWFjaGluZyAke3RvZGF5Q2xhc3N9YDtcbn1cblxuLy8gRXhhbXBsZSB1c2FnZXMgYW5kIGNvbnNvbGUgb3V0cHV0c1xuY29uc29sZS5sb2coY3JlYXRlRW1wbG95ZWUoMjAwKSk7ICAgICAgICAgICAgLy8gVGVhY2hlciBpbnN0YW5jZVxuY29uc29sZS5sb2coY3JlYXRlRW1wbG95ZWUoMTAwMCkpOyAgICAgICAgICAgLy8gRGlyZWN0b3IgaW5zdGFuY2VcbmNvbnNvbGUubG9nKGNyZWF0ZUVtcGxveWVlKFwiJDUwMFwiKSk7ICAgICAgICAgIC8vIERpcmVjdG9yIGluc3RhbmNlXG5cbmNvbnNvbGUubG9nKGV4ZWN1dGVXb3JrKGNyZWF0ZUVtcGxveWVlKDIwMCkpKTsgICAvLyBPdXRwdXQ6IEdldHRpbmcgdG8gd29ya1xuY29uc29sZS5sb2coZXhlY3V0ZVdvcmsoY3JlYXRlRW1wbG95ZWUoMTAwMCkpKTsgIC8vIE91dHB1dDogR2V0dGluZyB0byBkaXJlY3RvciB0YXNrc1xuXG5jb25zb2xlLmxvZyh0ZWFjaENsYXNzKFwiTWF0aFwiKSk7ICAgICAgICAgICAgICAgLy8gT3V0cHV0OiBUZWFjaGluZyBNYXRoXG5jb25zb2xlLmxvZyh0ZWFjaENsYXNzKFwiSGlzdG9yeVwiKSk7ICAgICAgICAgICAgLy8gT3V0cHV0OiBUZWFjaGluZyBIaXN0b3J5XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=