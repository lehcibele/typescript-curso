/* 
    Uma classe abstrata não se pode criar uma instância diretamente dela, só pode se o filho herda essa classe e cria essa instância do filho.
*/
export abstract class View<T> {
    /* 
        protetced --> os filhos tem acesso ao elemento (usado na herança).
        Log, mensagem-view e neociacoes-view tem acesso ao elemento do view.
    */
    protected elemento: HTMLElement;
    private escapar = false;

    constructor(seletor: string, escapar?: boolean) {
        const elemento = document.querySelector(seletor); 

        if(elemento) {
            this.elemento = elemento as HTMLElement;
        } else {
            throw Error('Seletor ${seletor} não existe no DOM');
        }

        if(escapar) {
            this.escapar = escapar;
        }
    }

    protected abstract template(model: T): string;

    public update(model: T): void {
        let template = this.template(model);

        if(this.escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }

        this.elemento.innerHTML = template;
    }
}