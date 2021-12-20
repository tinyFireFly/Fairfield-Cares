class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <footer>
            <br>Fairfield CARES Community Coalition
            <br><a  href=“mailto:fairfieldcares@fairfieldct.org”>fairfieldcares@fairfieldct.org</a>
        </footer>
        `;}
}

customElements.define('footer-component', Footer);