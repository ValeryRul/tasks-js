/* Написать 2 функции, которые создают новый объект. 1 функция - фабричный метод. 2 функция - конструктор*/


function createAddress(street, city, zipcode){
    return {
        street,
        city,
        zipcode,
        show(){
            console.log(street);
        }
    }
}

function Address(street, city, zipcode){
    this.street = street;
    this.city = city;
    this.zipcode = zipcode;
    function show(){
        console.log(this);
    }
}

let address = createAddress('Slavinskogo', 'Grodno', 230020);
console.log(address.show());

let address1 = new Address('Slavinskogo', 'Grodno', 230020);
console.log(address1);