
type ServiceInterface = {
    operation(): void;
}

class Service implements ServiceInterface{
    operation(): void {
        console.log("business logic");
    }
}

class ServiceProxy implements ServiceInterface{
    #service: Service;

    constructor(service: Service){
        this.#service = service;
    }

    operation(): void {
        this.proxyMethod();
        this.#service.operation();
    }

    proxyMethod(){
        console.log("doing something before business logic")
    }
}

