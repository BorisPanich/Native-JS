const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 90
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    },
    {
        name: "Helen",
        age: 20,
        isMarried: false,
        scores: 110
    },
    {
        name: "Ann",
        age: 20,
        isMarried: false,
        scores: 105
    },
];

const user = {
    name: "Bob",
    age: 23,
    friends: ["Alex", "Nick", "John"]
}

//1. Создайте поверхностную копию объекта user
let copyUser = {...user};

//Проверка:
console.log(user === copyUser)
console.log(user.friends === copyUser.friends)

//2. Полная (глубокая) копия объекта user
let deepCopyUser = {...user, friends: [...user.friends]};

//Проверка:
console.log(user === deepCopyUser)
console.log(user.friends === deepCopyUser.friends)

//3. Поверхностная копия массива students
let copyStudents = [...students];

//Проверка:
console.log(students === copyStudents)
console.log(students[0] === copyStudents[0])

//4. Полная (глубокая) копия массива students
let deepCopyStudents = students.map(st => ({...st}));

//Проверка:
console.log(students === deepCopyStudents)
console.log(students[0] === deepCopyStudents[0])

// NB!!! Далее все преобразования выполняем не модифицируя исходный массив students
// Вывод результатов - в консоль

//5. Отсортируйте deepCopyStudents по алфавиту (sort)
deepCopyStudents.sort(function (a, b) {
    if (a.name > b.name) {
        return 1
    }
    if (a.name <= b.name) {
        return -1
    }
})
console.log(deepCopyStudents)

//5a. Отсортируйте deepCopyStudents по успеваемости(лучший идёт первым)(sort)
deepCopyStudents.sort((a, b) => b.scores - a.scores)
console.log(deepCopyStudents)

//6. Сформируйте массив студентов, у которых 100 и более баллов (filter)
let bestStudents = deepCopyStudents.filter(st => st.scores >= 100);
console.log(bestStudents)

//6a."Вырежьте" трёх лучших студентов из массива deepCopyStudents (splice)
let topStudents = deepCopyStudents.slice(0, 3);
console.log(topStudents)
console.log(deepCopyStudents)

//6b. Объедините массивы deepCopyStudents и topStudents так,
// чтоб сохранился порядок сортировки (spread-опреатор )
let newDeepCopyStudents = [...topStudents, ...deepCopyStudents];
// newDeepCopyStudents = topStudents.concat(deepCopyStudents)
console.log(newDeepCopyStudents)

//7. Сформируйте массив холостых студентов (filter)
let notMarriedStudents = students.filter(s => !s.isMarried);
console.log(notMarriedStudents)

//8. Сформируйте массив имён студентов (map)
let studentsNames = students.map(s => s.name);
console.log(studentsNames)

//8a. Сформируйте строку из имён студентов, разделённых
// - запятой (join)
// - пробелом (join)
let nameWithSpace = studentsNames.join(' ');
console.log(nameWithSpace)
let namesWithComma = studentsNames.join(', ');
console.log(namesWithComma)

//9. Добавьте всем студентам свойство "isStudent" со значением true (map)
let trueStudents = students.map(s => {
    let copyStuden = {...s}
    copyStuden.isStudent = true
    return copyStuden
});
// let trueStudents = students.map(s => ({...st, isStudent: true}))
console.log(trueStudents)

//10. Nick женился. Выполните выполните соответствующие преобразование массива students (map)
let studentsWithMarriedNick = students.map(s => s.name === 'Nick' ? {...s, isMarried: true} : s);
console.log(studentsWithMarriedNick)

//11. Найдите студента по имени Ann (find)
let ann = deepCopyStudents.find(s => s.name === 'Ann');
console.log(ann)

//12. Найдите студента с самым высоким баллом (reduce)
let bestStudent = deepCopyStudents.reduce((acc, st) => acc.scores > st.scores ? acc : st);
console.log(bestStudent)

//13. Найдите сумму баллов всех студентов (reduce)
let scoresSum = deepCopyStudents.reduce((acc, st) => acc + st.scores, 0);
console.log(scoresSum)

// 14.Напишите функцию addFriends, которая принимает параметром массив students
// и добавляет в каждому студенту свойство friends,
// значением которого является массив имён всех остальных студентов из массива,
// за исключением собственного имени студента. Т.е. в друзьях у Боба Боба быть не должно.






