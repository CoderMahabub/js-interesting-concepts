function welcomeMessage(name, greetHandler) {
    // console.log(greetHandler);
    greetHandler(name);
}
// const name = ['Tom Hanks', 'Tom Cruise', 'Tom Chinku'];
// const myObj = { name: 'Tom Cruise', age: 21 }

function greetAfternoon(name) {
    console.log('Good afternoon', name);
}
function greetMorning(name) {
    console.log('Good Morning', name);
}
function greetEvening(name) {
    console.log('Good Evening', name);
}

welcomeMessage('Tom hanks', greetMorning);
welcomeMessage('Sakib Hanks', greetAfternoon);
welcomeMessage('Bapparaj', greetEvening);