
interface Creator{
    FactoryMethod: () => void;
}

interface Product{
    doStuff: () => void;
}

class ConcreteProductA implements Product{
    doStuff(){
        console.log("Concrete product A")
    }
}

class ConcreteCreatorA implements Creator{
    FactoryMethod(){
        const product = new ConcreteProductA();
        product.doStuff();
    }
}

class ConcreteProductB implements Product{
    doStuff(){
        console.log("Concrete product B")
    }
}

class ConcreteCreatorB implements Creator{
    FactoryMethod(){
        const product = new ConcreteProductB();
        product.doStuff();
    }
}

let creator: Creator = new ConcreteCreatorA();
creator.FactoryMethod();

creator = new ConcreteCreatorB();
creator.FactoryMethod();