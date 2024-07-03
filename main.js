document.addEventListener('DOMContentLoaded', function() {
    let button = document.querySelector("#btn");
    let fn = document.querySelector("#fn");
    let ln = document.querySelector("#ln");
    let address = document.querySelector("#add");
    let bedrooms = document.querySelector("#bedrooms");
    let area = document.querySelector("#area");
    let price = document.querySelector("#pp");

    let residentList=[];

    button.onclick = () => {
        let firstName = String(fn.value);
        let lastName = String(ln.value);
        let houseAddress = String(address.value);
        let beds = Number(bedrooms.value);
        let a = Number(area.value);
        let pp = Number(price.value);
        insertHouse = ()=>{
        if (Number(area.value)<=1400){
        var apt = new Apartment(firstName, lastName, houseAddress, beds, a, pp);
        apt.apartment;
        residentList.push(apt);
        }
        else if(Number(area.value)>1400 || Number(area.value)<=2000){
            var penthouse = new PentHouse(firstName, lastName, houseAddress, beds, a, pp);
            penthouse.penthouse;
            residentList.push(penthouse);

        }
        else if(Number(area.value)>=8000){
        var mansion = new Mansion(firstName, lastName, houseAddress, beds, a, pp);
        mansion.mansion;
        residentList.push(mansion);
        }
        
        console.log(residentList);
        
    }
    const House = class{
        constructor(firstname, lastname, address, bedrooms, area, price){
           this.firstname = firstname;
           this.lastname = lastname;
           this.address = address;
           this.bedrooms = bedrooms;
           this.area = area;
           this.price = price;
        }  
        get house(){
            return this.printHouseDetails();
        }

        printHouseDetails(){
            console.log(this.firstname);
            console.log(this.lastname);
            console.log(this.address);
            console.log(this.bedrooms);
            console.log(this.area);
            console.log(this.price);
        }
    }

    class Apartment extends House{
        constructor(firstname, lastname, address, bedrooms, area, price){
            super(firstname, lastname, address, bedrooms, area, price);
        }
        get apartment(){
            super.printHouseDetails();
            console.log(`${this.area} is suitable for an Apartment.`)
        }
    }

    class PentHouse extends House{
        constructor(firstname, lastname, address, bedrooms, area, price){
            super(firstname, lastname, address, bedrooms, area, price);
        }
        get penthouse(){
            super.printHouseDetails();
            console.log(`${this.area} is suitable for a PentHouse`)
        }
    }

    class Mansion extends House{
        constructor(firstname, lastname, address, bedrooms, area, price){
            super(firstname, lastname, address, bedrooms, area, price);
        }
        get mansion(){
            super.printHouseDetails();
            console.log(`${this.area} is suitable for a Mansion.`)
        }

    }
}

});