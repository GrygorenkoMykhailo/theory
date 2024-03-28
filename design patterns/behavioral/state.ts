
class Context{
    state: State;
    constructor(state: State){
        this.state = state;
    }

    changeState(newState: State){
        console.log("changing state");
        this.state = newState;
    }

    action(): void{
        this.state.action();
    }
}

type State = {
    action(): void;
}

class State1 implements State{
    private context?: Context;

    setState(context: Context){
        this.context = context;
    }

    action(): void{
        console.log("action corresponding to state1");
    }
}

class State2 implements State{
    private context?: Context;

    setState(context: Context){
        this.context = context;
    }

    action(): void{
        console.log("action corresponding to state2");
    }
}

const states: [State,State] = [new State1(),new State2()];
const a: Context = new Context(states[0]);
a.action();
a.changeState(states[1]);
a.action();
