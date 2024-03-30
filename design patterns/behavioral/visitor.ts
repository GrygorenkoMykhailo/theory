
type Elements = ConcreteElement | ConcreteElement2

type Visitor = {
    visit(e: Elements): void;
}

type MyElement = {
    accept(v: Visitor): void;
}

class ConcreteElement implements MyElement{
    accept(v: Visitor): void {
        v.visit(this);
    }
    method1(): void{
        console.log("concrete element #1 method");
    }
}

class ConcreteElement2 implements MyElement{
    accept(v: Visitor): void {
        v.visit(this);
    }
    method2(): void{
        console.log("concrete element #1 method");
    }
}

class ConcreteVisitor implements Visitor{
    visit(e: Elements): void{
        if(e instanceof ConcreteElement){
            e.method1();
            console.log("visitor's method for element #1");
        }else{
            e.method2();
            console.log("visitor's method for element #2");
        }
    }
}

new ConcreteElement().accept(new ConcreteVisitor());