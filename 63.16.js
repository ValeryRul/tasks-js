function createAddress(street, city, zipcode){
    return {street, city, zipcode}
}

function Address(street, city, zipcode){
    this.street = street;
    this.city = city;
    this.zipcode = zipcode;
}

let address = createAddress('Slavinskogo', 'Grodno', 230020);
console.log(address);

let address1 = new Address('Slavinskogo', 'Grodno', 230020);
console.log(address1);