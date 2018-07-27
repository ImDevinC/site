import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/app-layout/app-header/app-header.js'
import '@polymer/app-layout/app-header-layout/app-header-layout.js'
import '@polymer/app-layout/app-scroll-effects/app-scroll-effects.js'
import '@polymer/app-layout/app-toolbar/app-toolbar.js'
import './shared-styles.js'
import './header.js'
import './project-card.js'

/**
 * @customElement
 * @polymer
 */
class SiteApp extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        #content {
          padding-top: 15px;
          background-color: var(--bg-color);
        }
      </style>
      <site-header></site-header>
      <div id="content">
        <project-card title="MyTLC Sync"
          description="A mobile app for Android and IOS designed to download an employees schedule from a website and import the schedule into their calendar on their device."
          link="https://github.com/ImDevinC/AndroidMyTLCSync"
          link-title="Github"></project-card>
        <project-card title="Hangry"
          description="Have trouble picking a place to eat? Let Hangry help you choose from multiple nearby, options quickly."
          link="https://hangry.imdevinc.com"
          link-title="Website"></project-card>
        <project-card title="BigTimer"
          description="A Reddit user wanted a timer with large buttons and a custom UI, so the challenge was accepted!"
          link="https://play.google.com/store/apps/details?id=com.layer8apps.stopwatch.main"
          link-title="Google Play"></project-card>
      </div>
    `;
  }
}

window.customElements.define('site-app', SiteApp);
