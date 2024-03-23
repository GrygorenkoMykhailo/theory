
type Adapter = {
    method(data: number): string;
}

type Service = {
    serviceMethod(): number;
}

class Adaptee implements Service{
    serviceMethod(): number{
        return 35;
    }
}

class StringAdapter implements Adapter{
    adaptee: Service;

    constructor(adaptee: Service){
        this.adaptee = adaptee;
    }

    method(data: number): string {
        return '' + this.adaptee.serviceMethod();
    }
}