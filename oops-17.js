// Parent class: Course
// - title, instructor, price (public)
// - #enrolledStudents (private)
// - enrollStudent(), getEnrolledCount(), getSummary()

// Child class: PaidCourse extends Course
// - discountRate (additional)
// - applyDiscount()
// - Override getSummary() to include discount info

// Child class: FreeCourse extends Course
// - Override enrollStudent() to log "Enrolled in a free course!"
// - Override getSummary() to mention "Free course"

class Course {
  #enrolledStudents;

  constructor(title, instructor, price) {
    this.title = title;
    this.instructor = instructor;
    this.price = price;
    this.#enrolledStudents = 0;
  }

  enrollStudent() {
    this.#enrolledStudents++;
    console.log(`Enrolled in "${this.title}". Total students: ${this.#enrolledStudents}`);
  }

  getEnrolledCount() {
    return this.#enrolledStudents;
  }

  getSummary() {
    console.log(`${this.instructor}'s course "${this.title}" costs ₹${this.price} and has ${this.#enrolledStudents} enrolled students.`);
  }
}

class PaidCourse extends Course {
  constructor(title, instructor, price, discountRate) {
    super(title, instructor, price);
    this.discountRate = discountRate;
  }

  applyDiscount() {
    const discountAmount = (this.discountRate / 100) * this.price;
    this.price -= discountAmount;
  }

  getSummary() {
    console.log(`Paid course "${this.title}" by ${this.instructor} (after ${this.discountRate}% discount): ₹${this.price}`);
  }
}

class FreeCourse extends Course {
  constructor(title, instructor) {
    super(title, instructor, 0); 
  }

  enrollStudent() {
    super.enrollStudent();
    console.log(`Enrolled in a free course: "${this.title}"`);
  }

  getSummary() {
    console.log(`Free course: "${this.title}" by ${this.instructor}. Enrolled students: ${this.getEnrolledCount()}`);
  }
}

const paid = new PaidCourse("JavaScript Advanced", "Om Veerwal", 1000, 20);
paid.enrollStudent();
paid.applyDiscount();
paid.getSummary();

const free = new FreeCourse("HTML Basics", "Om Veerwal");
free.enrollStudent();
free.getSummary();

