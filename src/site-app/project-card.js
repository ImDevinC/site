import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-card/paper-card.js'
import '@polymer/paper-button/paper-button.js'
import './shared-styles.js'
import 'fontawesome-icon'

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
                    margin: 15px;
                }

                .project-header {
                    font-weight: bold;
                }

                paper-button {
                    color: var(--primary-dark-color);
                }

                fontawesome-icon {
                    display: inline-block;
                }
            </style>
            <paper-card>
                <div class="card-content">
                    <div class="project-header">
                        <fontawesome-icon prefix="[[iconPrefix]]" name="[[icon]]"></fontawesome-icon>
                        [[title]]
                    </div>
                    <p class="project-description">[[description]]</p>
                </div>
                <div class="card-actions">
                    <div>
                        <a href="[[link]]">
                            <paper-button>[[linkTitle]]</paper-button>
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
            linkTitle: String,
            icon: String,
            iconPrefix: String
        }
    }

    constructor() {
        super();
        this.title = '';
        this.description = '';
        this.link = '';
        this.linkTitle = '';
        this.icon = '';
        this.iconPrefix = 'fab';
    }
}

window.customElements.define('project-card', ProjectCard);