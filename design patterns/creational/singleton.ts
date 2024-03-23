
class Singleton{
    #instance?: Singleton;

    getInstance(): Singleton{
        if(this.#instance === undefined){
            this.#instance = new Singleton();
        }
        return this.#instance;
    }
}