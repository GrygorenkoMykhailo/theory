
class Abstraction{
    #implementation: Implementation;

    constructor(impl: Implementation){
        this.#implementation = impl;
    }

    feature1(): void{
        this.#implementation.method1();
    }
    feature2(): void{
        this.#implementation.method2();
    }
}

type Implementation = {
    method1(): void;
    method2(): void;
}

class ConcreteImplemetation1 implements Implementation{
    method1(): void{

    }
    method2(): void{

    }
}

class ConcreteImplemetation2 implements Implementation{
    method1(): void{

    }
    method2(): void{

    }
}

