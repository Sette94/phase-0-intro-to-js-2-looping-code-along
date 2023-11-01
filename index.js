

function writeCards(name, event) {
    const messages = []

    for (let i = 0; i < name.length; i++) {
        messages.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`)
    }
    return messages



}

function countDown(number) {
    let i = 0
    while (i <= number) {
        console.log(number - i)
        i++
    }

}


const eightHomersClub = [{
    "name": "Randy Arozarena",
    "total": 10,
    "postseason": "2020"
},
{
    "name": "Adolis Garcia",
    "total": 8,
    "postseason": "2023"
},
]

function arroObjectLoop(arrOfObjects) {
    for (let players in arrOfObjects) {
        console.log(arrOfObjects[players]['name'])
    }
}

arroObjectLoop(eightHomersClub)


const yankees = ["Bath Ruth", 'Lou Gerhig', 'Mickey Mantle']

function arrLoop(arr) {
    for (let players of arr) {
        console.log(players)
    }
}

arrLoop(yankees)
