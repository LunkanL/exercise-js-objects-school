// 1
const school = {
    name: "school",
    address: "Kalkstensvägen",
    zipcode: "22222",
    city: "Lund",
    students: [],
    teachers:[],
}

// Subjects

const math = {
    name: "Math",
    students: [],
    teacher: {},
    addTeacher: function (teacher) {
        teacher = teacher.name;
        this.teacher.name(teacher);
    },
    addStudent: function (student) {
        student = student.name;
        this.students.push(student);
    },
}
const coding = {
    name: "Coding",
    students: [],
    teacher: {},
    addTeacher: function (teacher) {
        teacher = teacher.name;
        this.teacher.name(teacher);
    },
    addStudent: function (student) {
        student = student.name;
        this.students.push(student);
    },
}
const english = {
    name: "English",
    students: [],
    teacher: {},
    addTeacher: function (teacher) {
        teacher = teacher.name;
        this.teacher.name(teacher);
    },
    addStudent: function (student) {
        student = student.name;
        this.students.push(student);
    },
}

// Students

const Niklas = {
    name: "Niklas",
    age: 33,
    gender: "male",
    subjects: [],
    enlistToSubject: function (subject) {
        subject = subject.name;
        this.subjects.push(subject);
    },
}
const jonas = {
    name: "Jonas",
    age: 54,
    gender: "male",
    subjects: [],
    enlistToSubject: function (subject) {
        subject = subject.name;
        this.subjects.push(subject);
    },
}
const morgane = {
    name: "Morgane",
    age: 27,
    gender: "female",
    subjects: [],
    enlistToSubject: function (subject) {
        subject = subject.name;
        this.subjects.push(subject);
    },
}
const ludvig = {
    name: "Ludvig",
    age: 22,
    gender: "male",
    subjects: [],
    enlistToSubject: function (subject) {
        subject = subject.name;
        this.subjects.push(subject);
    },
}
const ida = {
    name: "Ida",
    age: 20,
    gender: "female",
    subjects: [],
    enlistToSubject: function (subject) {
        subject = subject.name;
        this.subjects.push(subject);
    },
}

// Teachers

const jessica = {
    name: "Jessica",
    subjects: [],
    addSubject: function (subject) {
        subject = subject.name;
        this.subjects.push(subject);
    },
}
const anita = {
    name: "Anita",
    subjects: [],
    addSubject: function (subject) {
        subject = subject.name;
        this.subjects.push(subject);
    },
}

// 5

jessica.subjects.push("Math");

console.log(jessica);

// 6

// math.students.push(ida);

// console.log(math);

// 7

const addSubjectToTeacher = function (teacher, subject) {
    subject = subject.name;
    teacher.subjects.push(subject);
    return teacher;
}

// 8

/* addTeacher: function (teacher) {
    teacher = teacher.name;
    this.teacher.name(teacher);
},
enlistToSubject: function (subject) {
    subject = subject.name;
    this.subjects.push(subject);
},
addStudent: function (student) {
    student = student.name;
    this.students.push(student);
},
addSubject: function (subject) {
    subject = subject.name;
    this.subjects.push(subject);
}, */