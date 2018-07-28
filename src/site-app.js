import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/app-layout/app-header-layout/app-header-layout.js'
import '@polymer/app-layout/app-scroll-effects/app-scroll-effects.js'
import '@polymer/app-layout/app-toolbar/app-toolbar.js'
import '@polymer/iron-flex-layout/iron-flex-layout.js'
import '@polymer/app-layout/app-header/app-header.js'
import '@polymer/iron-image/iron-image.js'
import './shared-styles.js'
import './project-card.js'
import './social-media.js'

/**
 * @customElement
 * @polymer
 */
class SiteApp extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        .content {
          padding-top: 15px;
          background-color: var(--bg-color);
        }

        .container {
          @apply(--layout-horizontal);
          @apply(--layout-wrap);
          @apply(--layout-center-justified);
        }

        app-header {
          color: var(--header-expanded-text-color);
          background-color: var(--header-expanded-bg-color);
          --app-header-background-rear-layer: {
              background-color: var(--primary-color);
              color: var(--secondary-text-color);
          }
        }

        main-title:before {
            content: '';
            display: inline-block;
            height: 100%;
            vertical-align: middle;
        }

        .profile-image {
            height: 175px;
            width: 175px;
            border-radius: 50%;
            vertical-align: middle;
            margin-left: 50px;
            margin-right: 50px;
        }

        .promo-content {
            display: inline-block;
            vertical-align: middle;
        }

        .promo-first-line {
            font-size: 2em;
        }

        footer {
          height: 50px;
          line-height: 50px;
          font-size: 2em;
          text-align: right;
          padding-left: 25px;
          padding-right: 25px;
        }
      </style>
      <app-header-layout fullbleed>
        <app-header slot="header" condenses fixed effects="resize-snapped-title waterfall blend-background">
          <app-toolbar>
            <h4 condensed-title>Devin Collins</h4>
          </app-toolbar>
          <app-toolbar style="min-height:250px;height:auto;">
            <div main-title>
              <iron-image class="profile-image" src="./images/profile.jpg" sizing="contain"></iron-image>
              <div class="promo-content">
                <p class="promo-first-line">I'm Devin, I like to make things.</p>
                <p class="promo-second-line">Sometimes those things are cool.</p>
              </div>
            </div>
          </app-toolbar>
        </app-header>
        <div class="content">
          <div class="container">
            <project-card title="Docker Images"
              description="A repository of the docker images I use in my home lab setup."
              link="https://github.com/ImDevinC/docker-images"
              link-title="Github"
              icon="docker"></project-card>
            <project-card title="World Cup Watcher"
              description="A python-based Slackbot that utilizes the FIFA API to track World Cup events and post them to a slack channel."
              link="https://github.com/ImDevinC/wc-watcher"
              link-title="Github"
              icon="futbol"
              icon-prefix="fas"></project-card>
            <project-card title="MyTLC Sync"
              description="A mobile app for Android and IOS designed to download an employees schedule from a website and import the schedule into their calendar on their device."
              link="https://github.com/ImDevinC/AndroidMyTLCSync"
              link-title="Github"
              icon="calendar"
              icon-prefix="fas"></project-card>
            <project-card title="Hangry"
              description="Have trouble picking a place to eat? Let Hangry help you choose from multiple nearby, options quickly."
              link="https://hangry.imdevinc.com"
              link-title="Website"
              icon="utensils"
              icon-prefix="fas"></project-card>
            <project-card title="BigTimer"
              description="A Reddit user wanted a timer with large buttons and a custom UI, so the challenge was accepted!"
              link="https://play.google.com/store/apps/details?id=com.layer8apps.stopwatch.main"
              link-title="Google Play"
              icon="clock"
              icon-prefix="fas"></project-card>
          </div>
        </div>
        <footer>
          <social-media url="mailto:me@imdevinc.com" icon="envelope" prefix="fas"></social-media>
          <social-media url="https://github.com/imdevinc" icon="github"></social-media>
          <social-media url="https://twitter.com/imdevinc" icon="twitter"></social-media>
          <social-media url="https://linkedin.com/in/imdevinc" icon="linkedin"></social-media>
          <social-media url="http://pgp.mit.edu/pks/lookup?op=get&search=0x43BF0B591C48C523" icon="lock" prefix="fas"></social-media>
        </footer>
      </app-header-layout>
    `;
  }

  gotoUrl(url) {
    console.log(url);
  }
}

window.customElements.define('site-app', SiteApp);
