import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import 'fontawesome-icon'
import './shared-styles.js'

class SocialMedia extends PolymerElement {
    static get template() {
      return html`
        <style include="shared-styles">
            fontawesome-icon {
                display: inline-block;
            }

            a {
                color: var(--primary-dark-color);
            }

            a:hover {
                color: var(--primary-light-color);
            }
        </style>
        <a href="[[url]]" target="_blank">
            <fontawesome-icon prefix="[[prefix]]" name="[[icon]]"></fontawesome-icon></a>
      `;
    }

    static get properties() {
        return {
            icon: String,
            url: String,
            prefix: String
        }
    }

    constructor() {
        super();
        this.icon = '';
        this.url = '';
        this.prefix = 'fab';
    }
}

window.customElements.define('social-media', SocialMedia);