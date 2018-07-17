import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/app-layout/app-header/app-header.js'
import '@polymer/app-layout/app-header-layout/app-header-layout.js'
import '@polymer/app-layout/app-scroll-effects/app-scroll-effects.js'
import '@polymer/app-layout/app-toolbar/app-toolbar.js'
import '@polymer/iron-image/iron-image.js'

/**
 * @customElement
 * @polymer
 */
class SiteHeader extends PolymerElement {
    static get template() {
        return html`
          <style include="shared-styles">
              app-header {
                  color: var(--header-expanded-text-color);
                  background-color: var(--header-expanded-bg-color);
                  --app-header-background-rear-layer: {
                      background-color: var(--primary-color);
                  }
              }
          </style>
          <app-header-layout>
              <app-header slot="header" condenses fixed effects="resize-snapped-title waterfall">
                  <app-toolbar>
                      <h4 condensed-title>Devin Collins</h1>
                  </app-toolbar>
                  <app-toolbar style="height:300px;">
                    <div main-title style="vertical-align:>
                      <iron-image src="/images/profile.jpg" style="width:200px;height:200px;border-radius: 50%;" sizing="contain"></iron-image>
                      <span>I'm Devin, I like to make things sometimes. You can see some of those things below.</span>
                    </div>
                  </app-toolbar>
              </app-header>
          </app-header-layout>
        `;
    }
}

window.customElements.define('site-header', SiteHeader);