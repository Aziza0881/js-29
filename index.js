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
]

let guilties = []
let not_guilty= []


for(let item of people){
    if(item.wifes.length > 1 && item.age > 18){
        not_guilty.push(item.name)
    }else {
         guilties.push(item.name)

    }
   
}

document.write("Не нарушили закон - " + guilties + "<br>");
document.write("Нарушили закон - "+ not_guilty);
