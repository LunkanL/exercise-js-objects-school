// 1
const school = {
    name: "school",
    address: "Kalkstensvägen",
    zipcode: "22222",
    city: "Lund",
    students: [],
    teachers:[],
    fireTeacher: function (teacher) {
        const index = this.teachers.indexOf[teacher];
        if (index !== -1) {
            this.teachers.splice(index, 1)
        }
    },
    relegateStudent: function (student) {
        const index = this.students.indexOf[student];
        if (index !== -1) {
            this.students.splice(index, 1)
        }
    },
    
}

// Subjects

const math = {
    name: "Math",
    students: [],
    teacher: {},
    addTeacher: function (teacher) {
        this.teacher.name(teacher);
    },
    addStudent: function (student) {
        this.students.push(student);
    },
}
const coding = {
    name: "Coding",
    students: [],
    teacher: {},
    addTeacher: function (teacher) {
        this.teacher.name(teacher);
    },
    addStudent: function (student) {
        this.students.push(student);
    },
}
const english = {
    name: "English",
    students: [],
    teacher: {},
    addTeacher: function (teacher) {
        this.teacher.name(teacher);
    },
    addStudent: function (student) {
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
        this.subjects.push(subject);
        subject.students.push(this);
    },
    quitSubject: function (subject) {
        const index = this.subjects.indexOf[subject];
        if (index !== -1) {
            this.subjects.splice(index, 1)
        }
        const subjectIndex = subject.students.indexOf(this);
        if ( subjectIndex !== -1 ) {
            subject.students.splice(subjectIndex, 1);
        }

    },
}
const jonas = {
    name: "Jonas",
    age: 54,
    gender: "male",
    subjects: [],
    enlistToSubject: function (subject) {
        this.subjects.push(subject);
        subject.students.push(this);
    },
    quitSubject: function (subject) {
        const index = this.subjects.indexOf(subject);
        if (index !== -1) {
            this.subjects.splice(index, 1)
        }
        const subjectIndex = subject.students.indexOf(this);
        if ( subjectIndex !== -1 ) {
            subject.students.splice(subjectIndex, 1);
        }

    },
}
const morgane = {
    name: "Morgane",
    age: 27,
    gender: "female",
    subjects: [],
    enlistToSubject: function (subject) {
        this.subjects.push(subject);
        subject.students.push(this);
    },
    quitSubject: function (subject) {
        const index = this.subjects.indexOf(subject);
        if (index !== -1) {
            this.subjects.splice(index, 1)
        }
        const subjectIndex = subject.students.indexOf(this);
        if ( subjectIndex !== -1 ) {
            subject.students.splice(subjectIndex, 1);
        }

    },
}
const ludvig = {
    name: "Ludvig",
    age: 22,
    gender: "male",
    subjects: [],
    enlistToSubject: function (subject) {
        this.subjects.push(subject);
        subject.students.push(this);
    },
    quitSubject: function (subject) {
        const index = this.subjects.indexOf(subject);
        if (index !== -1) {
            this.subjects.splice(index, 1)
        }
        const subjectIndex = subject.students.indexOf(this);
        if ( subjectIndex !== -1 ) {
            subject.students.splice(subjectIndex, 1);
        }

    },
}
const ida = {
    name: "Ida",
    age: 20,
    gender: "female",
    subjects: [],
    enlistToSubject: function (subject) {
        this.subjects.push(subject);
        subject.students.push(this);
    },
    quitSubject: function (subject) {
        const index = this.subjects.indexOf(subject);
        if (index !== -1) {
            this.subjects.splice(index, 1)
        }
        const subjectIndex = subject.students.indexOf(this);
        if ( subjectIndex !== -1 ) {
            subject.students.splice(subjectIndex, 1);
        }

    },
}

// Teachers

const jessica = {
    name: "Jessica",
    subjects: [],
    addSubject: function (subject) {
        this.subjects.push(subject);
        subject.teacher = this;
    },
    quitSubject: function (subject) {
        const index = this.subjects.indexOf(subject);
        if (index !== -1) {
            this.subjects.splice(index, 1)
        }
        if (subject.teacher === this) {
            subject.teacher = {};
        }
    },
}
const anita = {
    name: "Anita",
    subjects: [],
    addSubject: function (subject) {
        this.subjects.push(subject);
        subject.teacher = this
    },
    quitSubject: function (subject) {
        const index = this.subjects.indexOf(subject);
        if (index !== -1) {
            this.subjects.splice(index, 1)
        }
        if (subject.teacher === this) {
            subject.teacher = {};
        }
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
    const teacherName = teacher.name
    const subjectName = subject.name
    subject.teacher.teacher = (teacherName);
    teacher.subjects.push(subjectName);
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


// 11

/* quitSubject: function (subject) {
    const index = this.subjects.indexOf[subject];
    if (index !== -1) {
        this.subjects.splice(index, 1)
    }
}, */

/* removeTeacher: function (teacher) {},

relegateStudent: function (student) {
    const index = this.students.indexOf[student];
    if (index !== -1) {
        this.students.splice(index, 1)
    }
},

fireTeacher: function (teacher) {
    const index = this.teachers.indexOf[teacher];
    if (index !== -1) {
        this.teachers.splice(index, 1)
    }
},
 */