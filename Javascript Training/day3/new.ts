export class City{

    area={
        name:'Deccan',
        dist:3
    };

    getName(){
        return this.area.name;
    }
}

let ci: City=new City()
ci.getName();