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
// Example usage and expected console output:
console.log(createEmployee(200)); // Teacher instance
console.log(createEmployee(1000)); // Director instance
console.log(createEmployee("$500")); // Director instance

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQWNBLGdEQUFnRDtBQUNoRDtJQUFBO0lBWUEsQ0FBQztJQVhDLCtCQUFZLEdBQVo7UUFDRSxPQUFPLG1CQUFtQixDQUFDO0lBQzdCLENBQUM7SUFFRCxpQ0FBYyxHQUFkO1FBQ0UsT0FBTyx3QkFBd0IsQ0FBQztJQUNsQyxDQUFDO0lBRUQsb0NBQWlCLEdBQWpCO1FBQ0UsT0FBTywyQkFBMkIsQ0FBQztJQUNyQyxDQUFDO0lBQ0gsZUFBQztBQUFELENBQUM7QUFFRCw4Q0FBOEM7QUFDOUM7SUFBQTtJQVlBLENBQUM7SUFYQyw4QkFBWSxHQUFaO1FBQ0UsT0FBTyx1QkFBdUIsQ0FBQztJQUNqQyxDQUFDO0lBRUQsZ0NBQWMsR0FBZDtRQUNFLE9BQU8scUJBQXFCLENBQUM7SUFDL0IsQ0FBQztJQUVELGtDQUFnQixHQUFoQjtRQUNFLE9BQU8saUJBQWlCLENBQUM7SUFDM0IsQ0FBQztJQUNILGNBQUM7QUFBRCxDQUFDO0FBRUQsMkVBQTJFO0FBQzNFLFNBQVMsY0FBYyxDQUFDLE1BQXVCO0lBQzdDLElBQUksT0FBTyxNQUFNLEtBQUssUUFBUSxJQUFJLE1BQU0sR0FBRyxHQUFHLEVBQUU7UUFDOUMsT0FBTyxJQUFJLE9BQU8sRUFBRSxDQUFDO0tBQ3RCO0lBQ0QsT0FBTyxJQUFJLFFBQVEsRUFBRSxDQUFDO0FBQ3hCLENBQUM7QUFFRCw2Q0FBNkM7QUFDN0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFFLG1CQUFtQjtBQUN0RCxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsb0JBQW9CO0FBQ3ZELE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxvQkFBb0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90eXBlc2NyaXB0X2RlcGVuZGVuY2llcy8uL2pzL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRGlyZWN0b3JJbnRlcmZhY2Ugd2l0aCAzIG1ldGhvZHNcbmludGVyZmFjZSBEaXJlY3RvckludGVyZmFjZSB7XG4gIHdvcmtGcm9tSG9tZSgpOiBzdHJpbmc7XG4gIGdldENvZmZlZUJyZWFrKCk6IHN0cmluZztcbiAgd29ya0RpcmVjdG9yVGFza3MoKTogc3RyaW5nO1xufVxuXG4vLyBUZWFjaGVySW50ZXJmYWNlIHdpdGggMyBtZXRob2RzXG5pbnRlcmZhY2UgVGVhY2hlckludGVyZmFjZSB7XG4gIHdvcmtGcm9tSG9tZSgpOiBzdHJpbmc7XG4gIGdldENvZmZlZUJyZWFrKCk6IHN0cmluZztcbiAgd29ya1RlYWNoZXJUYXNrcygpOiBzdHJpbmc7XG59XG5cbi8vIERpcmVjdG9yIGNsYXNzIGltcGxlbWVudGluZyBEaXJlY3RvckludGVyZmFjZVxuY2xhc3MgRGlyZWN0b3IgaW1wbGVtZW50cyBEaXJlY3RvckludGVyZmFjZSB7XG4gIHdvcmtGcm9tSG9tZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiBcIldvcmtpbmcgZnJvbSBob21lXCI7XG4gIH1cblxuICBnZXRDb2ZmZWVCcmVhaygpOiBzdHJpbmcge1xuICAgIHJldHVybiBcIkdldHRpbmcgYSBjb2ZmZWUgYnJlYWtcIjtcbiAgfVxuXG4gIHdvcmtEaXJlY3RvclRhc2tzKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIFwiR2V0dGluZyB0byBkaXJlY3RvciB0YXNrc1wiO1xuICB9XG59XG5cbi8vIFRlYWNoZXIgY2xhc3MgaW1wbGVtZW50aW5nIFRlYWNoZXJJbnRlcmZhY2VcbmNsYXNzIFRlYWNoZXIgaW1wbGVtZW50cyBUZWFjaGVySW50ZXJmYWNlIHtcbiAgd29ya0Zyb21Ib21lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIFwiQ2Fubm90IHdvcmsgZnJvbSBob21lXCI7XG4gIH1cblxuICBnZXRDb2ZmZWVCcmVhaygpOiBzdHJpbmcge1xuICAgIHJldHVybiBcIkNhbm5vdCBoYXZlIGEgYnJlYWtcIjtcbiAgfVxuXG4gIHdvcmtUZWFjaGVyVGFza3MoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gXCJHZXR0aW5nIHRvIHdvcmtcIjtcbiAgfVxufVxuXG4vLyBjcmVhdGVFbXBsb3llZSBmdW5jdGlvbiB0aGF0IHJldHVybnMgRGlyZWN0b3Igb3IgVGVhY2hlciBiYXNlZCBvbiBzYWxhcnlcbmZ1bmN0aW9uIGNyZWF0ZUVtcGxveWVlKHNhbGFyeTogbnVtYmVyIHwgc3RyaW5nKTogRGlyZWN0b3IgfCBUZWFjaGVyIHtcbiAgaWYgKHR5cGVvZiBzYWxhcnkgPT09IFwibnVtYmVyXCIgJiYgc2FsYXJ5IDwgNTAwKSB7XG4gICAgcmV0dXJuIG5ldyBUZWFjaGVyKCk7XG4gIH1cbiAgcmV0dXJuIG5ldyBEaXJlY3RvcigpO1xufVxuXG4vLyBFeGFtcGxlIHVzYWdlIGFuZCBleHBlY3RlZCBjb25zb2xlIG91dHB1dDpcbmNvbnNvbGUubG9nKGNyZWF0ZUVtcGxveWVlKDIwMCkpOyAgLy8gVGVhY2hlciBpbnN0YW5jZVxuY29uc29sZS5sb2coY3JlYXRlRW1wbG95ZWUoMTAwMCkpOyAvLyBEaXJlY3RvciBpbnN0YW5jZVxuY29uc29sZS5sb2coY3JlYXRlRW1wbG95ZWUoXCIkNTAwXCIpKTsgLy8gRGlyZWN0b3IgaW5zdGFuY2VcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==