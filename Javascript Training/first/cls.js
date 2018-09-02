class Car{
    constructor(nm,cost,city){
        this.nm=nm;
        this.cost=cost;
        this.city=city;
    }

    getCost(){
        console.log(this);
    }
}

let cr=new Car(`Audi`,45,`Pune`);
cr.getCost();


