
type Component = {
    doThis(): void;
}

class BaseComponent implements Component{
    doThis(): void{
        console.log("base functionality");
    }
}

class BaseDecorator implements Component{
    _wrappee: Component;

    constructor(wrappee: Component){
        this._wrappee = wrappee;
    }

    doThis(): void{
        this._wrappee.doThis();
    }
}

class ConcreteDecorator1 extends BaseDecorator{
    doThis(): void{
        super.doThis();
        console.log("functionality added by decorator1");
    }
}

class ConcreteDecorator2 extends BaseDecorator{
    doThis(): void{
        super.doThis();
        console.log("functionality added by decorator2");
    }
}

const a = new BaseComponent();
const da = new ConcreteDecorator1(a);
const db = new ConcreteDecorator2(da);

db.doThis();


