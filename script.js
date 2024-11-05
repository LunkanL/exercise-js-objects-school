// 1
const school = {
    name: "school",
    address: "Kalkstensvägen",
    zipcode: "22222",
    city: "Lund",
    students: [],
    teachers:[],
}

const math = {
    name: "math",
    students: [],
    teacher: {},
}
const coding = {
    name: "Coding",
    students: [],
    teacher: {},
}
const english = {
    name: "English",
    students: [],
    teacher: {},
}

const Niklas = {
    name: "Niklas",
    age: 33,
    gender: "MAle",
    subjects: [],
}
const jonas = {
    name: "Jonas",
    age: 54,
    gender: "male",
    subjects: [],
}
const morgane = {
    name: "Morgane",
    age: 27,
    gender: "female",
    subjects: [],
}
const ludvig = {
    name: "Ludvig",
    age: 22,
    gender: "male",
    subjects: [],
}
const ida = {
    name: "Ida",
    age: 20,
    gender: "female",
    subjects: [],
}
const jessica = {
    name: "Jessica",
    subjects: [],
}
const anita = {
    name: "Anita",
    subjects: [],
}

// 5

jessica.subjects.push("Math");

console.log(jessica);

// 6

math.students.push(ida);

console.log(math);

// 7

const addSubjectToTeacher = function (teacher, subject) {
    subject = subject.name;
    teacher.subjects.push(subject);
    return teacher;
}

const addTeacher = function (teacher) {
    subject = subject.name;
    teacher.subjects.push(subject);
    return teacher;
}
const enlistToSubject = function (subject) {
    subject = subject.name;
    teacher.subjects.push(subject);
    return teacher;
}
const addStudent = function (student) {
    subject = subject.name;
    teacher.subjects.push(subject);
    return teacher;
}
const addSubject = function (subject) {
    subject = subject.name;
    teacher.subjects.push(subject);
    return teacher;
}