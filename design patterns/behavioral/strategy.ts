
type Strategy = {
    execute(): void;
}

class Context{
    private strategy?: Strategy;

    constructor(strategy?: Strategy){
        this.strategy = strategy;
    }

    setStrategy(strategy: Strategy){
        this.strategy = strategy;
    }

    doSomething(): void{
        this.strategy?.execute();
    }
}

class ConcreteStrategy1 implements Strategy{
    execute(): void {
        console.log("executing algoritm 1");
    }
}

class ConcreteStrategy2 implements Strategy{
    execute(): void {
        console.log("executing algoritm 2");
    }
}

const a: Context = new Context();
a.setStrategy(new ConcreteStrategy1());
a.doSomething();
a.setStrategy(new ConcreteStrategy2());
a.doSomething();