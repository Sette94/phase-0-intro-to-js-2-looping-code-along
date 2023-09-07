

function writeCards(name,event){
    const messages = []

    for(let i = 0; i < name.length; i++){
    messages.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`)
    }
    return messages



}

function countDown(number){
    let i = 0
    while(i <= number){
        console.log(number - i)
        i++
    }

}

