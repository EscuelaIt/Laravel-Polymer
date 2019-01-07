import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';

/**
 * `email-link` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
class EmailLink extends PolymerElement {
  static get properties() {
    return {
      theEmail: String
    }
  }

  static get template() {
    return html`
    Soy Email-link!: <a href$="mailto:[[theEmail]]">[[theEmail]]</a>
    `;
  }

  
}

customElements.define('email-link', EmailLink);