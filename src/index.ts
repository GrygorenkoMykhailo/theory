type Component = {
    prop: number;
    execute(): number;
}

class Composite implements Component{

    prop: number;
    children?: Component[];

    constructor(number: number, children?: Component[]){
        this.prop = number;
        this.children = children;
    }

    execute(): number{
        let result = 0;
        if(this.children){
            for(let child of this.children){
                result += child.execute();
            }
        }
        return result;
    }
}            

class Leaf implements Component{
    prop: number;

    constructor(prop: number){
        this.prop = prop;
    }

    execute(): number {
        return this.prop;
    }
}