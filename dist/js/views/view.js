/*
    Uma classe abstrata não se pode criar uma instância diretamente dela, só pode se o filho herda essa classe e cria essa instância do filho.
*/
export class View {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    update(model) {
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }
}
