// DirectorInterface with 3 methods
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// TeacherInterface with 3 methods
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Director class implementing DirectorInterface
class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }

  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }

  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

// Teacher class implementing TeacherInterface
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }

  getCoffeeBreak(): string {
    return "Cannot have a break";
  }

  workTeacherTasks(): string {
    return "Getting to work";
  }
}

// createEmployee function that returns Director or Teacher based on salary
function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === "number" && salary < 500) {
    return new Teacher();
  }
  return new Director();
}

// Type predicate function to check if employee is a Director
function isDirector(employee: Director | Teacher): employee is Director {
  return employee instanceof Director;
}

// Function to execute the right work method depending on employee type
function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
}

// String literal type allowing only "Math" or "History"
type Subjects = "Math" | "History";

// Function taking a subject and returning a teaching string
function teachClass(todayClass: Subjects): string {
  return `Teaching ${todayClass}`;
}

// Example usages and console outputs
console.log(createEmployee(200));            // Teacher instance
console.log(createEmployee(1000));           // Director instance
console.log(createEmployee("$500"));          // Director instance

console.log(executeWork(createEmployee(200)));   // Output: Getting to work
console.log(executeWork(createEmployee(1000)));  // Output: Getting to director tasks

console.log(teachClass("Math"));               // Output: Teaching Math
console.log(teachClass("History"));            // Output: Teaching History
