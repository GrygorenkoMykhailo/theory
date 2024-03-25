
type Mediator = {
    notify(sender: Component): void;
}  

type Component = {
    operation(): void;
    name: string;
}

class Component1 implements Component{
    private readonly mediator: Mediator;
    name: string;

    constructor(mediator: Mediator){
        this.mediator = mediator;
        this.name = "Component1";
    }

    operation(): void{
        console.log("Operation 1");
        this.mediator.notify(this);
    }
}

class Component2 implements Component{
    private readonly mediator: Mediator;
    name: string;

    constructor(mediator: Mediator){
        this.mediator = mediator;
        this.name = "Component2";
    }

    operation(): void{
        console.log("Operation 2");
        this.mediator.notify(this);
    }
}

class Component3 implements Component{
    private readonly mediator: Mediator;
    name: string;

    constructor(mediator: Mediator){
        this.mediator = mediator;
        this.name = "Component3";
    }

    operation(): void{
        console.log("Operation 3");
        this.mediator.notify(this);
    }
}

class ConcreteMediator implements Mediator{

    private readonly component1: Component1 = new Component1(this);
    private readonly component2: Component2 = new Component2(this);
    private readonly component3: Component3 = new Component3(this);

    notify(sender: Component): void {
        if(sender.name === "Component1"){
            console.log("Processing component1 request");
        }else if(sender.name === "Component2"){
            console.log("Processing component2 request");
        }else if(sender.name === "Component3"){
            console.log("Processing component3 request");
        }
    }
}