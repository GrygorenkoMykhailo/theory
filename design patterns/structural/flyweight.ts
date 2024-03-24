
class Context{
    uniqueState: UniqueState;
    flyweight: Flyweight;

    constructor(uniqueState: UniqueState, flyweight: Flyweight){
        this.flyweight = flyweight;
        this.uniqueState = uniqueState;
    }
}

class UniqueState{
    field1: number;
    field2: string;

    constructor(f1: number, f2: string){
        this.field1 = f1;
        this.field2 = f2;
    }
}

class Flyweight{
    flyweightField1: string;
    flyweightField2: boolean;

    constructor(f1: string, f2: boolean){
        this.flyweightField1 = f1;
        this.flyweightField2 = f2;
    }
}

class FlyweightFactory{
    #cache: Flyweight[];

    constructor(cache: Flyweight[]){
        this.#cache = cache;
    }
    
    getFlyweight(flyweight: Flyweight){
        const repeatingState: Flyweight | undefined = this.#cache.find(f => 
            f.flyweightField1 === flyweight.flyweightField1
            && f.flyweightField2 === flyweight.flyweightField2
        )

        if(repeatingState === undefined){
            this.#cache.push(flyweight);
            return flyweight;
        }else{
            return repeatingState;
        }
    }
}