let people = [
    {
        name: "bobur",
        age: 43,
        isMarried: false,
        wifes: ['kamila', 'safir', 'allayor']
    },
    {
        name: "ismail",
        age: 12,
        isMarried: true,
        wifes: ['nikita', 'malika']
    },
    {
        name: "allayor",
        age: 14,
        isMarried: true,
        wifes: ['denis', 'dima', 'dimon', 'xbegim']
    },
    {
        name: "sarodr ml",
        age: 18,
        isMarried: false,
        wifes: ['safiya']
    },
    {
        name: "egor",
        age: 20,
        isMarried: false,
        wifes: ['nastya']
    }
]

let guilties = []


for (let item of people) {
    if (item.wifes.length > 1 || item.age < 18) {
        guilties.push(item.name)
        document.write(`${guilties} <br>`)
    } else {
        document.write(`<br> <b> Законопослушные: ` + `${item.name}`)
    }

}

console.log(`Не законо послушные: ${guilties}`);
