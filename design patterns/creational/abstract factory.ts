interface Factory{
    createProductA: () => ProductA;
    createProductB: () => ProductB;
}

interface ProductA{

}

interface ProductB{

}

class ConcreteProductA1 implements ProductA{

}

class ConcreteProductA2 implements ProductA{

}

class ConcreteProductB1 implements ProductA{

}

class ConcreteProductB2 implements ProductA{

}

class ProductsFactory1 implements Factory{
    createProductA(){
        return new ConcreteProductA1();
    }
    createProductB(){
        return new ConcreteProductB1();
    }
}

class ProductsFactory2 implements Factory{
    createProductA(){
        return new ConcreteProductA2();
    }
    createProductB(){
        return new ConcreteProductB2();
    }
}