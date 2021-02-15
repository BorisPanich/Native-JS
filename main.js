const todoListID1 = "1tl-fh"
const todoListID2 = "2tl-na"

const todoLists = [
    {id: todoListID1,
    title: "What to buy",
    },
    {id: todoListID2,
    title: "What to learn",
    },
]

const tasks = {
    [todoListID1]: [
        { name: "Cat", isDone: true },
        { name: "Dog", isDone: false },
        { name: "Pet", isDone: true }

    ],
    [todoListID2]: [
        { name: "JS", isDone: true },
        { name: "CSS", isDone: false },
        { name: "React", isDone: true }

    ],
}

const propName = "raiting"
const task = {
    "my name": "Redux",
    id: "2365",
    [propName]: 1000
}

console.log(task['my name']),
console.log(task['id']),
console.log(task[propName]),
console.log(task[propName])

console.log(tasks[todoListID1][0].name)


// Reduce

const arr = [1,2,3,4,5]
const sum = arr.reduce((acc, el, i) => acc + el, 0)
console.log(sum)
const max = arr.reduce((acc, el, i) => acc > el ? acc : el)
console.log(max)


let students = [
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
        scores: 89
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
    }
];

const result = students.reduce((acc, st) => acc + st.scores, 0)/students.length
console.log(result)
const alex = students.reduce((acc, st) => st.name === "Alex" ? st: acc, null)
console.log(alex)
const bestStudent = students.reduce((acc, st) => {
    if(st.scores >=100) {
        acc.push(st)
    } return acc
}, [])
console.log(bestStudent)
const topSoresSt = students.reduce((acc, st) => {
    const newSt = {...st, scores: st.scores + 10}
    acc.push(newSt)
    return acc
}, [])
console.log(topSoresSt)

