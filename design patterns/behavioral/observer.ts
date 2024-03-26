
type Subscriber = {
    update(state: number): void;
}

class Publisher{
    private subscribers: Subscriber[] = new Array<Subscriber>;
    mainState = 3;

    constructor(subscribers?: Subscriber[]){
        if(subscribers !== undefined){
            this.subscribers = subscribers;
            this.notifySubscribers();
        }
    }

    subscribe(subscriber: Subscriber): void{
        this.subscribers.push(subscriber);
    }

    unsubscribe(subscriber: Subscriber): void{
        this.subscribers.filter(s => s !== subscriber);
    }

    private notifySubscribers(): void{
        for(const subscriber of this.subscribers){
            subscriber.update(this.mainState)
        }
    }

    manageState(newState: number): void{
        this.mainState = newState;
        this.notifySubscribers();
    }
}

class ConcreteSubscriber1 implements Subscriber{
    update(state: number): void {
        console.log("state of subscriber #1 is ",state)
    }
}

class ConcreteSubscriber2 implements Subscriber{
    update(state: number): void {
        console.log("state of subscriber #2 is ",state)
    }
}

class ConcreteSubscriber3 implements Subscriber{
    update(state: number): void {
        console.log("state of subscriber #3 is ",state)
    }
}

const a = new ConcreteSubscriber1();
const b = new ConcreteSubscriber2();
const c = new ConcreteSubscriber3();

const p = new Publisher([a,b,c]);
p.manageState(5);
