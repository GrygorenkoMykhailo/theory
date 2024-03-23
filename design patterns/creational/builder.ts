
class Director{
    #builder: Builder;
    constructor(builder: Builder){
        this.#builder = builder;
    }
    changeBuilder(builder: Builder): void{
        this.#builder = builder;
    }
    make(): void{
        this.#builder.reset();
        this.#builder.buildStep1();
        this.#builder.buildStep2();
        this.#builder.buildStep3();
    }
}

interface Builder{
    reset(): void;
    buildStep1(): void;
    buildStep2(): void;
    buildStep3(): void;
}

class ProductA{
    parts: string[];

    constructor(){
        this.parts = []
    }
    
    addPartA1(){
        this.parts.push('A1 ');
    }
    addPartA2(){
        this.parts.push('A2 ');
    }
    addPartA3(){
        this.parts.push('A3 ');
    }
}

class ProductB{
    parts: string[];

    constructor(){
        this.parts = []
    }
    
    addPartB1(){
        this.parts.push('B1 ');
    }
    addPartB2(){
        this.parts.push('B2 ');
    }
    addPartB3(){
        this.parts.push('B3 ');
    }
}

class ConcreteBuilderA implements Builder{
    #product: ProductA

    constructor(){
        this.#product = new ProductA();
    }
    reset(){
        this.#product = new ProductA();
    }

    buildStep1(){
        this.#product?.addPartA1();
    }

    buildStep2(){
        this.#product?.addPartA2();
    }

    buildStep3(){
        this.#product?.addPartA3();
    }
    getResult(): ProductA{
        return this.#product;
    }
}

class ConcreteBuilderB implements Builder{
    #product: ProductB

    constructor(){
        this.#product = new ProductB;
    }

    reset(){
        this.#product = new ProductB();
    }

    buildStep1(){
        this.#product?.addPartB1();
    }

    buildStep2(){
        this.#product?.addPartB2();
    }

    buildStep3(){
        this.#product?.addPartB3();
    }
    getResult(): ProductB {
        return this.#product;
    }
}

