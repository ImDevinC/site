import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/app-layout/app-header/app-header.js'
import '@polymer/app-layout/app-header-layout/app-header-layout.js'
import '@polymer/app-layout/app-scroll-effects/app-scroll-effects.js'
import '@polymer/app-layout/app-toolbar/app-toolbar.js'
import './shared-styles.js'
import './header.js'

/**
 * @customElement
 * @polymer
 */
class SiteApp extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        #content {
          padding-top: 15px;;
          background-color: var(--bg-color);
        }
      </style>
      <site-header></site-header>
      <div id="content">
        <p>Bacon ipsum dolor amet ham porchetta boudin pork chop cupim jerky t-bone pastrami chicken spare ribs. Shankle picanha filet mignon prosciutto t-bone ground round andouille meatloaf biltong. Shankle filet mignon short ribs andouille. Short ribs filet mignon sausage spare ribs, ground round sirloin cow pastrami tri-tip bacon fatback. Spare ribs beef ribs tri-tip bacon picanha turkey alcatra burgdoggen brisket pork loin doner. Buffalo tail venison chuck, cow beef ribs ground round turkey sausage kevin tongue filet mignon shankle beef leberkas. Hamburger t-bone tail, kielbasa pancetta doner tongue chuck ribeye ball tip ham pork.</p>
        <p>Andouille pancetta meatball, tenderloin jerky pork loin pork belly kevin turkey. Andouille venison tongue pastrami ball tip jowl pig swine pancetta shoulder turkey prosciutto sirloin ribeye bresaola. Flank doner pastrami short loin ribeye burgdoggen tail porchetta ham. Ribeye salami drumstick, ball tip sausage flank picanha ham. Landjaeger flank jowl tongue tail burgdoggen shank rump short ribs ham jerky alcatra meatball.</p>
        <p>Hamburger ball tip pork, drumstick ground round strip steak porchetta flank shoulder fatback capicola short ribs. Capicola spare ribs ham tail brisket andouille fatback pork belly. Ham hock salami tail, t-bone doner shank short loin tri-tip burgdoggen swine cupim. Spare ribs shoulder shank corned beef, pork jerky leberkas kevin tenderloin kielbasa prosciutto ground round cow chicken. Cow beef sirloin alcatra, fatback pork loin porchetta shoulder filet mignon shank shankle turkey meatball. Cupim tri-tip drumstick shank pancetta tail, hamburger ham short loin meatball kevin kielbasa jowl ball tip leberkas. Tri-tip flank meatloaf kielbasa sausage biltong.</p>
        <p>Pancetta drumstick shank t-bone bresaola meatball andouille capicola pork belly filet mignon, alcatra turkey buffalo biltong. Brisket capicola boudin swine ribeye prosciutto bresaola salami pig alcatra. Pork belly kielbasa tongue, t-bone chicken salami meatloaf tri-tip drumstick beef doner. Andouille ham hock pastrami leberkas pork chop, sausage turducken.</p>
        <p>Andouille flank pig cupim, biltong corned beef meatloaf ball tip venison pork short loin ham hock brisket pork chop rump. Alcatra brisket sausage, turkey shoulder buffalo cow turducken. Jowl pork loin pork, short loin filet mignon buffalo drumstick t-bone flank bresaola. Bresaola shank tri-tip fatback turkey kevin strip steak. Doner shankle chicken, leberkas ribeye tenderloin biltong pastrami fatback sirloin. Pancetta landjaeger picanha, meatloaf biltong shankle swine corned beef pork cupim pork belly. Chuck t-bone pork belly capicola porchetta ground round cow beef jerky shank hamburger short loin turducken alcatra.</p>
      </div>
    `;
  }
}

window.customElements.define('site-app', SiteApp);
