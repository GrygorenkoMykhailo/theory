
abstract class Template{
    public templateMethod(): void{
        this.step1();
        this.step2();
        this.step3();
        this.step4();
    }

    public step1(): void{
        console.log("base step 1");
    }

    public step2(): void{
        console.log("base step 2");
    }

    public abstract step3(): void;

    public abstract step4(): void;
}

class ConcreteClass extends Template{
    public step3(): void {
        console.log("concrete class step 3");
    }

    public step4(): void {
        console.log("concrete class step 4");
    }
}

class ConcreteClass2 extends Template{
    public step3(): void {
        console.log("concrete class #2 step 3");
    }

    public step4(): void {
        console.log("concrete class #2 step 4");
    }
}

const a: Template = new ConcreteClass2();
a.templateMethod();