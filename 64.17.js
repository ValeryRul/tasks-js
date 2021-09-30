/* Написать 2 функции. 1-ая проверяет эквивалентны ли 2 объекта, ссылки на которые были переданы в фунцию.
2-ая проверяет являются ли переданные 2 ссылки ссылками на один и тот же объект*/


function Address(street, city, zipcode){
    this.street = street;
    this.city = city;
    this.zipcode = zipcode;
};


function areEqual(address, address1){
    for(let entry of Object.keys(address1)){
        if(!Object.keys(address).includes(entry)){
            return false;
        }
    }
    
    for(let entry of Object.values(address)){
        if(!Object.values(address1).includes(entry)){
            return false;
        }
    }

    for(let key in address){
        if(address[key] !== address1[key]){
            return false;
        }
    }
    return true;
}

function areSame(address, address1){
    return address === address1;
}

let address = {
    street: 'c',
    city: 'b',
    zipcode: 'a'
};

let address1 = new Address('a', 'b', 'c');


console.log(areEqual(address, address1));
console.log(areSame(address, address1));