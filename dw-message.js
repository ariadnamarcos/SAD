import { LitElement, html, css } from 'lit';

class DwMessage extends LitElement {
    static styles = css`
    :host{
        display: block;
        border: 1px solid red;
        padding: 10px;
    }
    h2{
        background-color: #fcc;
    }
    .parrafo{
        color: blue;
        font-size: 1.5em;
    }
    @media(min-width:500px){
        .parrafo{
            font-size: 3em;
        }
    }
    `
    static properties = {
        counter: { type: Number }
    }

    constructor() {
        super()
        this.counter = 0;
    }

    render() {  //lugar donde se escribe la vista del componente
        return html`
            <h2>Mi contador</h2>
            <p class="parrafo">${this.counter}</p>
            <button @click=${this.increment}>+1</button>
            `;
    }
    increment(){
        this.counter++;
    }

}
customElements.define('dw-message', DwMessage);
