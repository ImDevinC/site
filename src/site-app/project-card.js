import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-card/paper-card.js'
import '@polymer/paper-button/paper-button.js'
import './shared-styles.js'

/**
 * @customElement
 * @polymer
 */
class ProjectCard extends PolymerElement {
    static get template() {
        return html`
            <style include="shared-styles">
                paper-card {
                    max-width: 250px;
                }
            </style>
            <paper-card>
                <div class="card-content">
                    <div class="project-header">[[title]]</div>
                    <p class="project-description">[[description]]</p>
                </div>
                <div class="card-actions">
                    <div class="horizontal">
                    <a href="[[link]]">
                        <paper-button class="project-github">[[linkTitle]]</paper-button>
                    </a>
                    
                    </div>
                </div>
            </paper-card>
        `;
    }

    static get properties() {
        return {
            title: String,
            description: String,
            link: String,
            linkTitle: String
        }
    }

    constructor() {
        super();
        this.title = '';
        this.description = '';
        this.link = '';
        this.linkTitle = '';
    }
}

window.customElements.define('project-card', ProjectCard);