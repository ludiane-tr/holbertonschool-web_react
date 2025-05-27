// Define the Teacher interface
interface Teacher {
  readonly firstName: string;         // Can only be set during initialization
  readonly lastName: string;          // Can only be set during initialization
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;         // Optional property
  location: string;
  [key: string]: any;                 // Index signature to allow any other property
}

// Example usage of the Teacher interface
const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false,                    // Additional property allowed
};

console.log(teacher3);

// Define the Directors interface extending Teacher
interface Directors extends Teacher {
  numberOfReports: number;            // Required property specific to Directors
}

// Example usage of Directors interface
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: true,
  location: 'London',
  numberOfReports: 17,
};

console.log(director1);
// Interface for the printTeacher function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Implementation of the printTeacher function following the interface
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Example usage
console.log(printTeacher("John", "Doe")); // Output: J. Doe
// Interface describing the constructor parameters and methods of StudentClass
interface StudentClassInterface {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

// Class implementing the StudentClassInterface
class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Example usage
const student = new StudentClass("Alice", "Smith");
console.log(student.displayName()); // Output: Alice
console.log(student.workOnHomework()); // Output: Currently working
