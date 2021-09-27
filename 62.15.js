/* Написать функцию, которая принимает объект и выводит в консоль все поля этого объекта и значения этих полей*/

function showAddress(address){
    if(typeof(address) !== 'object' || address === '' || address === null){
        return console.log(`You input something what isn't object`);
    }
    for(let key in address){
        console.log(key, address[key]);
    }
}

let address = {
    street: 'Slavinskogo',
    city: 'Grodno',
    zipcode: 230026
}

showAddress(address);