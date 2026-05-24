const SITE = {
  name: "Pete's Lawn Service",
  baseUrl: "https://www.peteslawnservice.com",
  // TODO: Replace [INSERT PHONE NUMBER] with Pete's real phone number before publishing.
  phone: "[INSERT PHONE NUMBER]",
  // TODO: Replace [INSERT EMAIL] with Pete's real email before publishing.
  email: "[INSERT EMAIL]",
  // TODO: Add Pete's publishable street address if he wants it shown in schema or page copy.
  area: "Live Oak, FL",
  logoImage: "/assets/pls-logo.png",
  heroImage: "/assets/hero-rural-property.jpg",
};

const navItems = [
  ["/", "Home"],
  ["/services", "Services"],
  ["/about", "About"],
  ["/service-area", "Service Area"],
  ["/blog", "Blog"],
  ["/contact", "Contact"],
];

const serviceCards = [
  {
    title: "Residential lawn mowing",
    slug: "/lawn-mowing-live-oak-fl",
    className: "",
    image: "/assets/service-lawn-mowing.jpg",
    alt: "Freshly mowed rural North Florida lawn beside oak trees and a country driveway",
    text: "Reliable mowing, trimming, edging where appropriate, and simple cleanup for homes that need a practical, steady hand.",
  },
  {
    title: "Acreage and rural mowing",
    slug: "/acreage-mowing-live-oak-fl",
    className: "rural",
    image: "/assets/service-acreage.jpg",
    alt: "Acreage driveway and fence line under oak trees on a rural Suwannee County style property",
    text: "Open areas, long drives, fence lines, and rural properties that need more than a small subdivision lawn approach.",
  },
  {
    title: "Seasonal cleanup",
    slug: "/services",
    className: "cleanup",
    image: "/assets/service-cleanup.jpg",
    alt: "Light brush and debris cleanup along a fence line on a rural property",
    text: "Light debris cleanup, small brush cleanup, fence-line attention, and practical help when Florida growth gets ahead of the property.",
  },
  {
    title: "Handyman help",
    slug: "/handyman-services-live-oak-fl",
    className: "handyman",
    image: "/assets/service-handyman.jpg",
    alt: "Practical handyman tools beside a repaired wooden gate on a rural property",
    text: "Small repairs, punch-list work, cleanup support, and owner-operated help backed by decades of hands-on trade experience.",
  },
];

const faqs = [
  ["Do you service areas outside Live Oak?", "Yes, depending on distance, schedule, access, and the scope of work. Pete keeps the service area local so customers get dependable scheduling and personal service."],
  ["Do you mow large yards or acreage?", "Yes. Pete's Lawn Service is built for regular lawns, larger yards, rural properties, open areas, and acreage around Live Oak and Suwannee County."],
  ["Do you offer weekly or biweekly mowing?", "Yes. Customers can ask about weekly, biweekly, one-time, or as-needed mowing depending on the property and season."],
  ["Can you help with trimming around fences and driveways?", "Yes, when the area is accessible and fits the job scope. Fence lines, driveways, trees, sheds, barns, and roadside edges can be discussed during the estimate."],
  ["Do you offer handyman services?", "Yes. Pete can review small repairs and practical fix-it jobs. The site does not claim licensed plumbing or full plumbing services unless those details are confirmed later."],
  ["Do you provide free estimates?", "Yes. Use the form or phone placeholder to request a free estimate for mowing, cleanup, acreage upkeep, or handyman help."],
  ["Do you work with farms or rural properties?", "Yes. Pete is comfortable discussing country homes, small farms, long drives, fence lines, and rural property upkeep when the work fits his equipment and schedule."],
  ["What information should I provide when requesting a quote?", "Send your property address or area, approximate property size, current grass height or cleanup condition, service needed, and whether you want one-time or recurring help."],
];

const routes = {
  "/": {
    title: "Lawn Service Live Oak FL | Pete's Lawn Service",
    description: "Owner-operated lawn service in Live Oak, FL for mowing, acreage upkeep, seasonal cleanup, and handyman help on rural properties.",
    render: homePage,
  },
  "/services": {
    title: "Lawn Care and Property Services | Pete's Lawn Service",
    description: "Lawn mowing, acreage mowing, seasonal cleanup, rural property upkeep, and handyman help in Live Oak, Florida.",
    render: servicesPage,
  },
  "/lawn-mowing-live-oak-fl": {
    title: "Lawn Mowing in Live Oak, FL | Pete's Lawn Service",
    description: "Practical owner-operated lawn mowing, trimming, and yard upkeep for homes around Live Oak, Florida.",
    render: () => serviceDetailPage("Lawn mowing in Live Oak, FL", "A steady mowing visit should make the place look cared for without turning a simple job into a production. Pete focuses on clean, practical lawn upkeep for local homes, country houses, and residential yards.", ["Weekly, biweekly, or as-needed mowing", "Regular yard care for residential and rural properties", "Trimming around fences, trees, sheds, barns, and driveways", "Edging where appropriate for the property", "Blowing off driveways, walkways, and porches after mowing", "Straightforward free estimate before work begins"], "Best for homes that need dependable mowing from one person who understands the property."),
  },
  "/acreage-mowing-live-oak-fl": {
    title: "Acreage Mowing in Live Oak, FL | Rural Property Upkeep",
    description: "Acreage-friendly mowing and rural property upkeep for Live Oak, FL lots, open areas, long drives, and seasonal growth.",
    render: () => serviceDetailPage("Acreage mowing and rural property maintenance in Live Oak, FL", "Not every property is a small weekly lawn. Pete's Lawn Service is built for Live Oak area owners who need larger yards, small farms, open lots, long drives, and rural edges kept manageable.", ["Acreage and open-area mowing", "Large yard mowing for country homes", "Fence-line and driveway edge attention where accessible", "Seasonal growth and overgrowth conversations before work begins", "Farm and rural property mowing when the scope fits", "Clear limits: no heavy land-clearing promises without review"], "Best for rural properties, larger lots, inherited land, and owners who want the place kept usable."),
  },
  "/handyman-services-live-oak-fl": {
    title: "Handyman Services in Live Oak, FL | Pete's Lawn Service",
    description: "Small handyman help and property punch-list support in Live Oak, FL backed by 40+ years of hands-on plumbing and trade experience.",
    render: () => serviceDetailPage("Handyman services in Live Oak, FL", "Pete brings more than lawn care to the visit. Pete brings more than 40 years of hands-on plumbing and trade experience to every job and can look at small property problems with a practical repair mindset.", ["Small repairs and punch-list help", "Minor exterior repairs and general fix-it tasks", "Light plumbing-related handyman assistance when the task is appropriate", "Property maintenance help tied to mowing or cleanup visits", "Clear yes-or-no scope before work starts", "No licensed plumber, emergency plumbing, or full plumbing service claims unless Pete confirms them"], "Best for owners who want one steady local helper for mowing plus small tasks that keep piling up."),
  },
  "/about": {
    title: "About Pete | Owner-Operated Lawn Service in Live Oak",
    description: "Learn about Pete's practical, owner-operated lawn service for Live Oak, FL, rural properties, acreage upkeep, and handyman help.",
    render: aboutPage,
  },
  "/service-area": {
    title: "Service Area | Pete's Lawn Service in Live Oak, FL",
    description: "Pete's Lawn Service helps homeowners and rural property owners in Live Oak, FL and nearby Suwannee County areas.",
    render: serviceAreaPage,
  },
  "/blog": {
    title: "Live Oak Lawn Care Notes | Pete's Lawn Service Blog",
    description: "Short, practical notes on mowing, acreage upkeep, seasonal cleanup, and property maintenance for Live Oak, Florida.",
    render: blogPage,
  },
  "/contact": {
    title: "Contact Pete's Lawn Service | Request an Estimate",
    description: "Contact Pete's Lawn Service for mowing, acreage upkeep, cleanup, and handyman help around Live Oak, Florida.",
    render: contactPage,
  },
};

function logoIcon() {
  return `
    <svg aria-hidden="true" viewBox="0 0 24 24" width="20" height="20">
      <path fill="currentColor" d="M4 16c6-.3 11-4.8 16-13-1 8.8-6.2 14.1-16 15z"></path>
      <path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" d="M7 10h6.3a4 4 0 0 1 0 8H7zM10 14h3"></path>
    </svg>`;
}

function checkIcon() {
  return `
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" d="m5 12 4 4L19 6"></path>
    </svg>`;
}

function mowerSvg() {
  return `
    <svg class="mower-icon" viewBox="0 0 120 76" aria-hidden="true">
      <path d="M16 50h58c14 0 26-11 26-25H70c-4 13-17 21-33 21H16z" fill="#f7f1df"></path>
      <path d="M70 25 82 8h17L88 25z" fill="#d6a548"></path>
      <circle cx="32" cy="56" r="11" fill="#102319"></circle>
      <circle cx="83" cy="56" r="11" fill="#102319"></circle>
      <circle cx="32" cy="56" r="5" fill="#94b969"></circle>
      <circle cx="83" cy="56" r="5" fill="#94b969"></circle>
      <path d="M91 13h18" stroke="#102319" stroke-width="5" stroke-linecap="round"></path>
    </svg>`;
}

function serviceCard(card) {
  return `
    <article class="card">
      <figure class="service-image ${card.className}">
        <img src="${card.image}" alt="${card.alt}" width="1000" height="667" loading="lazy" />
      </figure>
      <div class="card-body">
        <h3>${card.title}</h3>
        <p>${card.text}</p>
        <a href="${card.slug}" data-link>Learn more</a>
      </div>
    </article>`;
}

function pageHero(title, text) {
  return `
    <section class="page-hero">
      <div class="container">
        <div class="breadcrumbs"><a href="/" data-link>Home</a> / ${title}</div>
        <h1>${title}</h1>
        <p>${text}</p>
        <div class="hero-actions">
          <a class="button gold" href="/contact" data-link>${logoIcon()} Request a Free Estimate</a>
          ${callLink()}
        </div>
      </div>
    </section>`;
}

function callLink(label = "Call Pete") {
  return `<a class="button ghost" href="tel:${SITE.phone}">${label}</a>`;
}

function finalCta(heading = "Need your grass cut or property cleaned up?", text = "Call Pete or send the property details and he can confirm whether the work fits his local Live Oak route.") {
  return `
    <section class="section final-cta">
      <div class="container split-grid">
        <div>
          <h2>${heading}</h2>
          <p class="lead">${text}</p>
        </div>
        <div class="action-row">
          <a class="button gold" href="/contact" data-link>${logoIcon()} Request a Free Estimate</a>
          ${callLink()}
        </div>
      </div>
    </section>`;
}

function contactForm() {
  return `
    <form class="lead-form" novalidate data-lead-form>
      <div class="field-grid">
        <div class="form-field">
          <label for="name">Name</label>
          <input id="name" name="name" autocomplete="name" required />
          <span class="field-error" data-error-for="name"></span>
        </div>
        <div class="form-field">
          <label for="phone">Phone</label>
          <input id="phone" name="phone" autocomplete="tel" required />
          <span class="field-error" data-error-for="phone"></span>
        </div>
        <div class="form-field">
          <label for="email">Email</label>
          <input id="email" name="email" type="email" autocomplete="email" />
          <span class="field-error" data-error-for="email"></span>
        </div>
        <div class="form-field">
          <label for="service">Service needed</label>
          <select id="service" name="service" required>
            <option value="">Choose one</option>
            <option>Lawn mowing</option>
            <option>Acreage mowing</option>
            <option>Seasonal cleanup</option>
            <option>Handyman help</option>
            <option>Not sure yet</option>
          </select>
          <span class="field-error" data-error-for="service"></span>
        </div>
        <div class="form-field">
          <label for="size">Approximate property size</label>
          <select id="size" name="size" required>
            <option value="">Choose one</option>
            <option>Small in-town yard</option>
            <option>Large yard</option>
            <option>1-2 acres</option>
            <option>3-5 acres</option>
            <option>More than 5 acres</option>
            <option>Not sure</option>
          </select>
          <span class="field-error" data-error-for="size"></span>
        </div>
        <div class="form-field">
          <label for="frequency">One-time or recurring service</label>
          <select id="frequency" name="frequency" required>
            <option value="">Choose one</option>
            <option>One-time service</option>
            <option>Weekly mowing</option>
            <option>Biweekly mowing</option>
            <option>Monthly/as-needed</option>
            <option>Not sure yet</option>
          </select>
          <span class="field-error" data-error-for="frequency"></span>
        </div>
        <div class="form-field full">
          <label for="location">Property address or area</label>
          <input id="location" name="location" autocomplete="street-address" placeholder="Street, road, or nearest area in Live Oak" required />
          <span class="field-error" data-error-for="location"></span>
        </div>
        <div class="form-field full">
          <label for="message">What should Pete know?</label>
          <textarea id="message" name="message" required placeholder="Property size, gate/access notes, current grass height, cleanup needs, or handyman tasks."></textarea>
          <span class="field-error" data-error-for="message"></span>
        </div>
      </div>
      <button class="button gold" type="submit">${logoIcon()} Request a Free Estimate</button>
      <p class="form-note">This static form validates your details in the browser. Connect it to email, CRM, or a form endpoint before launch.</p>
      <p class="success-message" data-success-message>Thanks. The request is ready to send once this form is connected to Pete's preferred inbox.</p>
    </form>`;
}

function faqMarkup() {
  return `
    <div class="faq-list">
      ${faqs
        .map(
          ([question, answer], index) => `
            <article class="faq-item ${index === 0 ? "open" : ""}">
              <button class="faq-question" type="button" aria-expanded="${index === 0 ? "true" : "false"}">
                <span>${question}</span><span aria-hidden="true">+</span>
              </button>
              <div class="faq-answer">${answer}</div>
            </article>`
        )
        .join("")}
    </div>`;
}

function homePage() {
  return `
    <section class="hero">
      <div class="container hero-grid">
        <div>
          <img class="hero-brand-watermark" src="${SITE.logoImage}" alt="PLS Pete's Lawn Service logo" width="900" height="900" />
          <h1>Local Lawn Service in Live Oak, FL</h1>
          <p>Reliable mowing, acreage upkeep, and handyman help from a local owner-operator serving Live Oak and nearby Suwannee County properties.</p>
          <div class="hero-actions">
            <a class="button gold" href="/contact" data-link>${logoIcon()} Request a Free Estimate</a>
            ${callLink()}
          </div>
        </div>
        <aside class="hero-card" aria-label="Service highlights">
          <div class="hero-card-top">
            <img class="hero-photo" src="${SITE.heroImage}" alt="Country driveway, lawn, and oak trees similar to rural North Florida properties" width="1200" height="800" fetchpriority="high" />
            <div class="hero-photo-shade" aria-hidden="true"></div>
          </div>
          <div class="hero-card-body">
            <h2>Built for regular lawns and real Florida properties.</h2>
            <ul>
              <li class="check">${checkIcon()} <span>Mowing and trimming for homes around Live Oak.</span></li>
              <li class="check">${checkIcon()} <span>Acreage-friendly upkeep for rural lots and open areas.</span></li>
              <li class="check">${checkIcon()} <span>40+ years hands-on plumbing and trade experience for practical handyman help.</span></li>
            </ul>
          </div>
        </aside>
      </div>
    </section>
    <section class="trust-bar" aria-label="Why local customers call Pete">
      <div class="container trust-grid">
        <div class="trust-item"><strong>Owner-operated</strong><span>You know who is showing up.</span></div>
        <div class="trust-item"><strong>Live Oak & Suwannee County</strong><span>Local service radius.</span></div>
        <div class="trust-item"><strong>Acreage-friendly mowing</strong><span>Built for rural properties.</span></div>
        <div class="trust-item"><strong>40+ years trade experience</strong><span>Hands-on and practical.</span></div>
        <div class="trust-item"><strong>Free estimates</strong><span>Clear fit before work.</span></div>
      </div>
    </section>
    <section class="section">
      <div class="container intro-grid">
        <div>
          <h2>A local alternative to broad landscaping companies.</h2>
          <p class="lead">Many Live Oak options advertise full landscaping, hardscaping, fencing, sod, brush removal, or large quote systems. Pete's Lawn Service takes a simpler lane: owner-operated property care for people who want the work handled plainly and reliably.</p>
          <div class="answer-block">Pete's Lawn Service is a local, owner-operated lawn mowing and property maintenance business serving Live Oak, Florida and nearby Suwannee County communities.</div>
        </div>
        <ul class="proof-list">
          <li><strong>Practical scope.</strong><br />Mowing, acreage upkeep, seasonal cleanup, and small property tasks without overpromising.</li>
          <li><strong>Rural aware.</strong><br />Comfortable discussing gates, long drives, access, open areas, and property-specific needs.</li>
          <li><strong>Hands-on background.</strong><br />Decades of trade experience help Pete notice the details that matter around a property.</li>
        </ul>
      </div>
    </section>
    <section class="section band">
      <div class="container">
        <h2>Services</h2>
        <p class="lead">Choose the help that fits the property. If the job needs a closer look, send the details and Pete can confirm what makes sense.</p>
        <div class="service-grid">${serviceCards.map(serviceCard).join("")}</div>
      </div>
    </section>
    <section class="section">
      <div class="container split-grid">
        <div>
          <h2>Made for Live Oak yards, country homes, and acreage.</h2>
          <p class="lead">Live Oak has plenty of larger lots, rural roads, tree shade, fast summer growth, farm edges, and properties that need steady upkeep instead of luxury landscaping language. Pete keeps the service practical: grass cut, edges cleaned where appropriate, and small property issues handled when they fit the visit.</p>
        </div>
        <ul class="proof-list">
          <li><strong>Small yard in town?</strong><br />Ask about simple mowing and recurring maintenance.</li>
          <li><strong>Several acres outside Live Oak?</strong><br />Share the size, access, and current growth so Pete can confirm the scope.</li>
          <li><strong>Cleanup or fix-it list?</strong><br />Handyman-style help can be discussed without pretending to be a full construction company.</li>
        </ul>
      </div>
    </section>
    <section class="section dark-band">
      <div class="container split-grid">
        <div>
          <h2>Simple process, clear expectations.</h2>
          <p class="lead">Tell Pete what needs attention, where the property is, and any access notes. He can follow up with timing, questions, and whether the job fits his service area.</p>
          <div class="action-row">
            <a class="button gold" href="/contact" data-link>Start with the form</a>
            <a class="button light" href="/service-area" data-link>Check service area</a>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <h3>Good details to send</h3>
            <ul class="plain-list">
              <li>Approximate property size or lawn area.</li>
              <li>Current grass height or cleanup condition.</li>
              <li>Gate codes, access limits, pets, or preferred timing.</li>
              <li>Any small repair or handyman items to review.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section class="section band">
      <div class="container split-grid">
        <div>
          <h2>About Pete</h2>
          <p class="lead">Pete Fluriach is a longtime hands-on tradesman and 40+ year plumbing veteran. Pete's Lawn Service is his retirement-era local business, built for neighbors who want a dependable local person they can call for mowing, property upkeep, and practical handyman help.</p>
          <div class="action-row">
            <a class="button" href="/about" data-link>Read about Pete</a>
            <a class="button gold" href="/service-area" data-link>See service area</a>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <h3>Future reviews</h3>
            <p>This section is ready for real customer testimonials once Pete has permission to publish them. No fake reviews or made-up awards are used on this site.</p>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <h2>Common questions</h2>
        ${faqMarkup()}
      </div>
    </section>
    ${finalCta("Need your grass cut or property cleaned up?", "Call Pete today or request a free estimate for lawn service in Live Oak, FL and nearby rural areas.")}`;
}

function servicesPage() {
  return `
    ${pageHero("Services", "Mowing, acreage upkeep, seasonal cleanup, and handyman help for Live Oak area homes and rural properties.")}
    <section class="section">
      <div class="container">
        <h2>Property care without the runaround.</h2>
        <p class="lead">Pete's Lawn Service is not trying to be every contractor at once. The focus is practical outdoor upkeep and small hands-on help that keeps a property usable, cleaner, and easier to manage.</p>
        <div class="service-grid">${serviceCards.map(serviceCard).join("")}</div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <h2>Service overview</h2>
        <div class="route-grid">
          ${[
            ["Lawn mowing", "Basic grass cutting for homes, larger yards, and routine local maintenance."],
            ["Recurring maintenance", "Weekly, biweekly, monthly, or as-needed visits depending on growth and schedule."],
            ["Large property mowing", "Practical conversations for larger yards, open lots, and properties outside town."],
            ["Acreage mowing", "Acreage-friendly mowing where access, conditions, and equipment fit the job."],
            ["Trimming and edging", "Weed eating around fences, trees, sheds, barns, drives, and edges where appropriate."],
            ["Cleanup services", "Seasonal cleanup, small brush cleanup, light debris cleanup, and basic property cleanup."],
            ["Handyman services", "Minor repairs and general fix-it help around the property when the scope is a fit."],
            ["Property checks and small jobs", "Helpful eyes on small tasks for retirees, landlords, acreage owners, and rural homes."],
          ]
            .map(([title, text]) => `<article class="card"><div class="card-body"><h3>${title}</h3><p>${text}</p></div></article>`)
            .join("")}
        </div>
      </div>
    </section>
    <section class="section band">
      <div class="container split-grid">
        <div>
          <h2>Seasonal cleanup and upkeep</h2>
          <p class="lead">Florida growth can get ahead of a property fast. Pete can help with seasonal cleanup needs that pair naturally with mowing and rural property care.</p>
          <ul class="feature-list">
            <li>Overgrowth conversations before the work starts.</li>
            <li>Basic debris and yard cleanup where appropriate.</li>
            <li>Recurring or as-needed property visits.</li>
            <li>Helpful eyes on small maintenance issues.</li>
          </ul>
        </div>
        <div class="quote-panel">
          <div class="card-body">
            <h3>Request a fit check</h3>
            <p>Send a few details and Pete can confirm the right service path.</p>
            <div class="action-row">
              <a class="button gold" href="/contact" data-link>Contact Pete</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    ${finalCta("Ready to talk through the property?", "Send the lawn size, location, and service needed so Pete can give you a practical next step.")}`;
}

function serviceDetailPage(title, intro, bullets, bestFor) {
  return `
    ${pageHero(title, intro)}
    <section class="section">
      <div class="container split-grid">
        <div>
          <h2>What this service can include</h2>
          <ul class="feature-list">${bullets.map((item) => `<li>${item}</li>`).join("")}</ul>
        </div>
        <aside class="quote-panel">
          <div class="card-body">
            <h3>${bestFor}</h3>
            <p>Use the contact form to share the property address or nearby road, current condition, and what outcome you want.</p>
            <div class="action-row">
              <a class="button gold" href="/contact" data-link>Request an estimate</a>
            </div>
          </div>
        </aside>
      </div>
    </section>
    <section class="section band">
      <div class="container">
        <h2>Why Pete's approach is different</h2>
        <p class="lead">Some companies lead with full landscaping packages, hardscape, fencing, sod, broad brush removal, or formal quote funnels. Pete's niche is more personal: one owner-operated service that understands mowing, acreage realities, and small hands-on property tasks.</p>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <h2>Questions before scheduling</h2>
        ${faqMarkup()}
      </div>
    </section>
    ${finalCta("Want Pete to look at this service?", "Request a free estimate and include the property size, access notes, and whether you need one-time or recurring help.")}`;
}

function aboutPage() {
  return `
    ${pageHero("About Pete", "A practical, owner-operated lawn service for people who want direct communication and hands-on property help.")}
    <section class="section">
      <div class="container split-grid">
        <div>
          <h2>Built on hands-on experience.</h2>
          <p class="lead">Pete Fluriach owns Pete's Lawn Service. He brings more than 40 years of hands-on plumbing and trade experience to every job, and now focuses on helping Live Oak residents with lawn service, property upkeep, and practical handyman work.</p>
          <p class="lead">That matters for rural properties, acreage, long drives, seasonal cleanup, retirees, landlords, and small repair lists. The goal is simple: understand the job, do useful work, and avoid claims that have not been verified.</p>
          <div class="answer-block">Owner-operated service means you know who you are calling and who is showing up.</div>
        </div>
        <ul class="proof-list">
          <li><strong>Owner-operated.</strong><br />You are not dealing with a faceless quote form first.</li>
          <li><strong>Property minded.</strong><br />Mowing, access, cleanup, and small fix-it work can be discussed together.</li>
          <li><strong>Plainspoken.</strong><br />No fake awards, no unsupported license language, and no inflated promises.</li>
        </ul>
      </div>
    </section>
    ${finalCta("Looking for a local person you can call?", "Pete keeps the work local around Live Oak so the service can stay personal and dependable.")}`;
}

function serviceAreaPage() {
  return `
    ${pageHero("Lawn Service in Live Oak, FL and Suwannee County", "Pete's Lawn Service is based around Live Oak, Florida and nearby rural property needs.")}
    <section class="section">
      <div class="container split-grid">
        <div>
          <h2>Live Oak and nearby areas</h2>
          <p class="lead">Pete's Lawn Service is based around Live Oak and keeps the service area local so customers get dependable scheduling and personal service. The rough service radius is about 20-30 miles depending on route, access, property size, and job scope.</p>
          <ul class="area-list" aria-label="Nearby service areas">
            <li>Live Oak</li>
            <li>Suwannee County</li>
            <li>Wellborn</li>
            <li>McAlpin</li>
            <li>O'Brien</li>
            <li>Branford</li>
            <li>Dowling Park</li>
            <li>Jasper</li>
            <li>Lake City outskirts</li>
            <li>Nearby rural areas by request</li>
          </ul>
          <div class="answer-block">Pete's Lawn Service operates around Live Oak, Florida and nearby Suwannee County communities, with a practical 20-30 mile local service radius by request.</div>
          <div class="route-grid">
            <article class="card"><div class="card-body"><h3>Homes in town</h3><p>Routine mowing and yard upkeep for residential properties.</p></div></article>
            <article class="card"><div class="card-body"><h3>Rural roads</h3><p>Acreage-friendly conversations for open areas, drives, and access notes.</p></div></article>
            <article class="card"><div class="card-body"><h3>Seasonal needs</h3><p>Help when growth gets ahead of the property or cleanup is needed.</p></div></article>
            <article class="card"><div class="card-body"><h3>Small task lists</h3><p>Handyman help may be available when the task fits Pete's scope.</p></div></article>
          </div>
        </div>
        <aside class="quote-panel">
          <div class="card-body">
            <h3>Not sure if you are in range?</h3>
            <p>Send the property location and the service needed. Pete can confirm whether the route makes sense.</p>
            <div class="action-row"><a class="button gold" href="/contact" data-link>Ask Pete</a></div>
          </div>
        </aside>
      </div>
    </section>
    ${finalCta("Need lawn service near Live Oak?", "Send the property area and service needed. Pete can confirm whether the local route makes sense.")}`;
}

function blogPage() {
  const posts = [
    {
      title: "How Often Should You Mow Your Lawn in Live Oak, Florida?",
      seo: "How Often to Mow in Live Oak, FL | Pete's Lawn Service",
      meta: "A practical guide to mowing frequency for Live Oak, Florida lawns during fast growth, dry spells, and seasonal changes.",
      h2: ["Florida growing season basics", "Weekly vs. biweekly mowing", "When to request a free estimate"],
    },
    {
      title: "Acreage Mowing Tips for Rural Properties in Suwannee County",
      seo: "Acreage Mowing Tips in Suwannee County | Pete's Lawn Service",
      meta: "Tips for acreage mowing, access notes, grass height, and open-area upkeep around rural Suwannee County properties.",
      h2: ["Measure the area before calling", "Check gates, wet spots, and obstacles", "Keep rural property manageable"],
    },
    {
      title: "Why Fence Line Trimming Matters on Country Properties",
      seo: "Fence Line Trimming for Country Properties | Pete's Lawn Service",
      meta: "Why fence lines, driveways, sheds, barns, and roadside edges matter for rural property maintenance near Live Oak.",
      h2: ["Fence lines grow fast", "Trimming improves access", "What to mention before scheduling"],
    },
    {
      title: "Keeping Your Live Oak Property Maintained During Florida's Growing Season",
      seo: "Live Oak Property Maintenance During Growing Season",
      meta: "Practical mowing, cleanup, and rural property maintenance ideas for Live Oak homeowners during North Florida's growing season.",
      h2: ["Rain and heat change the schedule", "Plan for recurring maintenance", "Combine cleanup with mowing"],
    },
    {
      title: "Lawn Service vs. Property Maintenance: What Local Homeowners Should Know",
      seo: "Lawn Service vs Property Maintenance in Live Oak, FL",
      meta: "Understand the difference between basic mowing, rural property upkeep, cleanup, and handyman-style help around Live Oak.",
      h2: ["What lawn service covers", "What property maintenance adds", "When to ask about handyman help"],
    },
    {
      title: "Simple Handyman Jobs That Help Keep a Rural Property in Shape",
      seo: "Simple Rural Property Handyman Jobs | Live Oak, FL",
      meta: "Small fix-it jobs, minor exterior repairs, and practical property tasks that pair well with mowing around rural Live Oak homes.",
      h2: ["Small tasks prevent bigger headaches", "What Pete can review", "What this site does not claim"],
    },
    {
      title: "Preparing Your Yard Before Heavy Rain Season in North Florida",
      seo: "Prepare Your Live Oak Yard for Heavy Rain Season",
      meta: "Simple yard cleanup and mowing considerations before heavy rain season around Live Oak and Suwannee County.",
      h2: ["Clean up practical problem areas", "Keep grass manageable", "Watch access and low spots"],
    },
    {
      title: "Why Local Owner-Operated Lawn Service Matters in a Small Town",
      seo: "Owner-Operated Lawn Service in Live Oak, FL",
      meta: "Why direct communication, local routes, and owner-operated service can matter for Live Oak lawn care customers.",
      h2: ["You know who is showing up", "Local routes help scheduling", "No corporate runaround"],
    },
  ];

  return `
    ${pageHero("Lawn Care Notes", "Short, useful notes for Live Oak homeowners and rural property owners.")}
    <section class="section">
      <div class="container">
        <h2>Starter blog post outlines</h2>
        <p class="lead">These starter topics are structured for local SEO and AI search. Each post should include internal links to <a href="/services" data-link>Services</a>, <a href="/contact" data-link>Contact</a>, <a href="/lawn-mowing-live-oak-fl" data-link>Lawn Mowing</a>, and <a href="/acreage-mowing-live-oak-fl" data-link>Acreage Mowing</a>.</p>
        <div class="blog-list">
          ${posts
            .map(
              (post) => `
                <article class="blog-card">
                  <div class="blog-date">Draft</div>
                  <div class="card-body">
                    <h3>${post.title}</h3>
                    <p><strong>SEO title:</strong> ${post.seo}</p>
                    <p><strong>Meta description:</strong> ${post.meta}</p>
                    <div class="blog-outline">
                      <strong>H1:</strong> ${post.title}
                      <ul>${post.h2.map((heading) => `<li>H2: ${heading}</li>`).join("")}</ul>
                    </div>
                    <a href="/contact" data-link>End with a quote request CTA</a>
                  </div>
                </article>`
            )
            .join("")}
        </div>
      </div>
    </section>
    ${finalCta("Have a local lawn question?", "Send Pete the property details and what you need handled around Live Oak or Suwannee County.")}`;
}

function contactPage() {
  return `
    ${pageHero("Contact Pete's Lawn Service", "Share the property details, service needed, and the best way to reach you.")}
    <section class="section">
      <div class="container split-grid">
        <div>
          <h2>Request an estimate</h2>
          <p class="lead">Use the form for mowing, acreage upkeep, seasonal cleanup, or handyman help. Include enough detail for Pete to understand the property before following up.</p>
          <div class="answer-block">Tell us about your property: location, approximate size, current grass or cleanup condition, access notes, and whether you want one-time or recurring service.</div>
          <div class="card" style="margin-top: 28px;">
            <div class="card-body">
              <h3>Direct contact placeholders</h3>
              <p><strong>Phone:</strong> ${SITE.phone}</p>
              <p><strong>Email:</strong> ${SITE.email}</p>
              <p><strong>Service base:</strong> Live Oak, FL. Serving Live Oak and surrounding Suwannee County areas by local route.</p>
              <p>Replace these placeholders before publishing the site.</p>
            </div>
          </div>
        </div>
        <aside class="quote-panel">
          <div class="card-body">
            ${contactForm()}
          </div>
        </aside>
      </div>
    </section>
    ${finalCta("Prefer to talk first?", "Use the phone placeholder for Call Pete once the real phone number is added before launch.")}`;
}

function notFoundPage() {
  return `
    ${pageHero("Page not found", "That page is not part of Pete's Lawn Service yet.")}
    <section class="section">
      <div class="container">
        <h2>Try one of the main pages.</h2>
        <div class="action-row">
          <a class="button gold" href="/" data-link>Go home</a>
          <a class="button" href="/services" data-link>View services</a>
        </div>
      </div>
    </section>`;
}

function setMeta(path, route) {
  const title = route?.title || "Page Not Found | Pete's Lawn Service";
  const description = route?.description || "Pete's Lawn Service provides lawn care and property help around Live Oak, Florida.";
  const url = `${SITE.baseUrl}${path === "/" ? "" : path}`;
  document.title = title;
  upsertMeta("name", "description", description);
  upsertMeta("property", "og:title", title);
  upsertMeta("property", "og:description", description);
  upsertMeta("property", "og:url", url);
  upsertMeta("property", "og:image", `${SITE.baseUrl}${SITE.heroImage}`);
  upsertLink("canonical", url);
}

function upsertMeta(attr, key, content) {
  let tag = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function upsertLink(rel, href) {
  let tag = document.head.querySelector(`link[rel="${rel}"]`);
  if (!tag) {
    tag = document.createElement("link");
    tag.setAttribute("rel", rel);
    document.head.appendChild(tag);
  }
  tag.setAttribute("href", href);
}

function jsonLd(path) {
  const serviceNodes = serviceCards.map((service) => ({
    "@type": "Service",
    name: service.title,
    provider: { "@id": `${SITE.baseUrl}/#business` },
    serviceType: "Lawn care and property maintenance",
    category: "LawnCare",
    areaServed: [
      { "@type": "City", name: "Live Oak" },
      { "@type": "AdministrativeArea", name: "Suwannee County" },
    ],
    url: `${SITE.baseUrl}${service.slug}`,
    description: service.text,
  }));

  const faqNode = {
    "@type": "FAQPage",
    mainEntity: faqs.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
        "@id": `${SITE.baseUrl}/#business`,
        name: SITE.name,
        url: SITE.baseUrl,
        telephone: SITE.phone,
        email: SITE.email,
        image: `${SITE.baseUrl}${SITE.heroImage}`,
        logo: `${SITE.baseUrl}${SITE.logoImage}`,
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Live Oak",
          addressRegion: "FL",
          addressCountry: "US",
        },
        areaServed: [
          { "@type": "City", name: "Live Oak" },
          { "@type": "AdministrativeArea", name: "Suwannee County" },
          { "@type": "Place", name: "Wellborn, FL" },
          { "@type": "Place", name: "McAlpin, FL" },
          { "@type": "Place", name: "O'Brien, FL" },
          { "@type": "Place", name: "Branford, FL" },
          { "@type": "Place", name: "Dowling Park, FL" },
          { "@type": "Place", name: "Jasper, FL" },
          { "@type": "Place", name: "Lake City outskirts" },
        ],
        knowsAbout: ["lawn service Live Oak FL", "lawn mowing", "acreage mowing", "rural property maintenance", "handyman services"],
        description: "Owner-operated lawn mowing, acreage upkeep, seasonal cleanup, and handyman help around Live Oak, Florida.",
      },
      ...serviceNodes,
      faqNode,
      {
        "@type": "WebPage",
        "@id": `${SITE.baseUrl}${path === "/" ? "" : path}#webpage`,
        url: `${SITE.baseUrl}${path === "/" ? "" : path}`,
        name: document.title,
        isPartOf: { "@id": `${SITE.baseUrl}/#website` },
      },
    ],
  };
}

function updateJsonLd(path) {
  let script = document.querySelector("#structured-data");
  if (!script) {
    script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "structured-data";
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(jsonLd(path));
}

function render(path = window.location.pathname) {
  const normalizedPath = normalizePath(path);
  const route = routes[normalizedPath];
  const main = document.querySelector("#main");
  setMeta(normalizedPath, route);
  main.innerHTML = route ? route.render() : notFoundPage();
  updateJsonLd(normalizedPath);
  updateNav(normalizedPath);
  bindPageBehavior();
  window.scrollTo(0, 0);
}

function normalizePath(path) {
  if (!path || path === "/index.html") return "/";
  return path.length > 1 ? path.replace(/\/$/, "") : path;
}

function updateNav(path) {
  document.querySelectorAll("[data-link]").forEach((link) => {
    const href = normalizePath(link.getAttribute("href"));
    if (href === path) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

function buildNav() {
  const nav = document.querySelector("#site-nav");
  nav.innerHTML = navItems.map(([href, label]) => `<a href="${href}" data-link>${label}</a>`).join("");
}

function bindPageBehavior() {
  document.querySelectorAll(".faq-question").forEach((button) => {
    button.addEventListener("click", () => {
      const item = button.closest(".faq-item");
      const isOpen = item.classList.toggle("open");
      button.setAttribute("aria-expanded", String(isOpen));
    });
  });

  const form = document.querySelector("[data-lead-form]");
  if (form) {
    form.addEventListener("submit", validateLeadForm);
  }
}

function validateLeadForm(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const data = new FormData(form);
  const errors = {};

  ["name", "phone", "service", "size", "frequency", "location", "message"].forEach((field) => {
    if (!String(data.get(field) || "").trim()) {
      errors[field] = "Please fill this in.";
    }
  });

  const email = String(data.get("email") || "").trim();
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Enter a valid email or leave it blank.";
  }

  const phone = String(data.get("phone") || "").trim();
  if (phone && phone.replace(/\D/g, "").length < 7) {
    errors.phone = "Enter a reachable phone number.";
  }

  form.querySelectorAll(".field-error").forEach((node) => {
    node.textContent = errors[node.dataset.errorFor] || "";
  });

  Object.keys(errors).forEach((field) => {
    const input = form.elements[field];
    if (input) input.setAttribute("aria-invalid", "true");
  });

  Array.from(form.elements).forEach((input) => {
    if (input.name && !errors[input.name]) input.removeAttribute("aria-invalid");
  });

  if (Object.keys(errors).length === 0) {
    form.querySelector("[data-success-message]").style.display = "block";
    form.reset();
  }
}

document.addEventListener("click", (event) => {
  const link = event.target.closest("a[data-link]");
  if (!link) return;
  const url = new URL(link.href, window.location.origin);
  if (url.origin !== window.location.origin) return;

  event.preventDefault();
  const nextPath = normalizePath(url.pathname);
  if (nextPath !== normalizePath(window.location.pathname)) {
    history.pushState({}, "", nextPath);
    render(nextPath);
  }

  const nav = document.querySelector("#site-nav");
  const menuButton = document.querySelector("[data-menu-button]");
  nav.classList.remove("open");
  document.body.classList.remove("menu-open");
  menuButton.setAttribute("aria-expanded", "false");
});

document.querySelector("[data-menu-button]").addEventListener("click", () => {
  const nav = document.querySelector("#site-nav");
  const button = document.querySelector("[data-menu-button]");
  const isOpen = nav.classList.toggle("open");
  document.body.classList.toggle("menu-open", isOpen);
  button.setAttribute("aria-expanded", String(isOpen));
});

window.addEventListener("popstate", () => render(window.location.pathname));

document.querySelector("[data-year]").textContent = new Date().getFullYear();
buildNav();
render();
