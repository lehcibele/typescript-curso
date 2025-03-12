/* 
    Uma classe abstrata não se pode criar uma instância diretamente dela, só pode se o filho herda essa classe e cria essa instância do filho.
*/

export abstract class View<T> {
    /* 
        protetced --> os filhos tem acesso ao elemento (usado na herança).
        Log, mensagem-view e neociacoes-view tem acesso ao elemento do view.
    */
    protected elemento: HTMLElement;

    constructor(seletor: string) {
        this.elemento = document.querySelector(seletor);
    }

    abstract template(model: T): string;

    update(model: T): void {
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }
}