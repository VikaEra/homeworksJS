function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
}

let student = new Student("Василиса", "женский", 19);
console.log((student.name), '{ "Василиса" }');
console.log((student.gender), '{ "женский" }');
console.log((student.age), '{ "19" }');
console.log((student.marks), '{ "[]" }');


Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}

student.setSubject("Algebra");
console.log((student.subject), '{ "Algebra" }');

student.setSubject("Geometry");
console.log((student.subject), '{ "Geometry" }');


Student.prototype.addMarks = function (...marks) {
    if(this.hasOwnProperty("marks")) {
        this.marks = [...this.marks, ...marks];
      }
}

console.log((student.marks), '{ "[]" }');

student.addMarks(5);
console.log((student.marks), '{ "5" }');

student.addMarks(4,4);
console.log((student.marks), '{ "5, 4, 4" }');

student.addMarks(3, 3, 4, 5);
console.log((student.marks), '{ "5, 4, 4, 3, 3, 4, 5" }');


Student.prototype.getAverage = function () {
    if(this.hasOwnProperty("marks")) {
        if(this.marks.length > 0) {
           return this.marks.reduce((a, b) => a + b) / this.marks.length;
        }
        else return 0;
      }
      else return 0;
}

console.log((student.getAverage()), '{ "0" }');

student.addMarks(5, 5, 5);
console.log((student.getAverage()), '{ "5" }');

student.addMarks(3, 4, 5);
console.log((student.getAverage()), '{ "4" }');


Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
}

student.exclude('прогулы');
console.log((student.excluded), '{ "прогулы" }');

student.addMarks(5, 5, 5);
console.log((student.marks), '{ "undefined" }');
console.log((student.getAverage()), '{ "0" }');