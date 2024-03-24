
type Handler = {
    setNext(h: Handler): void;
    handle(request: string): void;
}

class BaseHandler implements Handler{
    #next?: Handler;

    setNext(h: Handler): void {
        this.#next = h;
    }
    handle(request: string): void {
        console.log('handling ' + request + ' with base handler');
        console.log('handling failed, passing to next');
        this.#next?.handle(request);
    }
}

class NextHandler extends BaseHandler{
    handle(request: string): void {
        console.log('handling ' + request + 'with next handler');
        console.log('handling succeeded')
    }
}

const base: BaseHandler = new BaseHandler();
base.setNext(new NextHandler());
base.handle('some request');