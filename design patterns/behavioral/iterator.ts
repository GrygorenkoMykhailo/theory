
type CollectionIterator<T> = {
    getNext(): T;
    isDone(): boolean;
}

type IterableCollection<T> = {
    getItem(index: number): T;
    getLength(): number;
}

class MyArray<T> implements IterableCollection<T>{
    private readonly data: T[];

    constructor(data: T[] | null){
        if(data === null || data.length === 0){
            this.data = new Array<T>;
        } 
        else{
            this.data = data;
        } 
    }

    getItem(index: number): T{
        return this.data[index];
    }

    getLength(): number{
        return this.data.length;
    }
}

class MyArrayIterator<T> implements CollectionIterator<T>{
    private readonly collection: IterableCollection<T>;
    private index: number;
    constructor(collection: IterableCollection<T>){
        this.collection = collection;
        this.index = 0;
    }

    isDone(): boolean{
        return this.index === this.collection.getLength();
    }

    getNext(): T{
        return this.collection.getItem(this.index++);
    }
}

const dataArray = [1, 2, 3, 4, 5];
const myArray = new MyArray<number>(dataArray);

const iterator = new MyArrayIterator<number>(myArray);

while (!iterator.isDone()) {
    const nextElement = iterator.getNext();
    console.log(nextElement); 
}

