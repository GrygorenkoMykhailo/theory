
type Prototype = {
    clone(): Prototype;
}

class ConcretePrototype implements Prototype{
    field1: string;
    field2: number;

    constructor(f1: string, f2: number){
        this.field1 = f1;
        this.field2 = f2;
    }

    clone(): Prototype{
        return new ConcretePrototype(this.field1,this.field2);
    }
}