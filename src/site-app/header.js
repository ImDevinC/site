import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/app-layout/app-header/app-header.js'
import '@polymer/app-layout/app-header-layout/app-header-layout.js'
import '@polymer/app-layout/app-scroll-effects/app-scroll-effects.js'
import '@polymer/app-layout/app-toolbar/app-toolbar.js'
import '@polymer/iron-image/iron-image.js'
//import './shared-styles.js'

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

              main-title:before {
                  content: '';
                  display: inline-block;
                  height: 100%;
                  vertical-align: middle;
              }

              #profile-image {
                  height: 200px;
                  width: 200px;
                  border-radius: 50%;
                  vertical-align: middle;
                  margin-left: 50px;
                  margin-right: 50px;
              }

              #promo-content {
                  display: inline-block;
                  vertical-align: middle;
                  font-size: 1.5em;
              }
          </style>
          <app-header-layout>
              <!--<app-header slot="header" condenses fixed effects="resize-snapped-title waterfall">-->
              <app-header slot="header" fixed>
                  <app-toolbar>
                      <!--<h4 condensed-title>Devin Collins</h1>-->
                  </app-toolbar>
                  <app-toolbar style="height:250px;">
                    <div main-title>
                        <iron-image id="profile-image" src="./images/profile.jpg" sizing="contain"></iron-image>
                        <div id="promo-content">I'm Devin, I like to make things. Sometimes those things are cool.</div>
                    </div>
                  </app-toolbar>
              </app-header>
          </app-header-layout>
        `;
    }
}

window.customElements.define('site-header', SiteHeader);