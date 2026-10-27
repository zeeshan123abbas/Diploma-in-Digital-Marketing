# Session 10: Practice Lab: Responsive Landing Page with Lead Form

> Module: Essentials of Website Design and Development · Diploma in Digital Marketing · Term 1 · ⏱ ~2 hours

This capstone lab of the module produces a real marketing asset: a responsive lead-generation landing page for a solar company in Lahore. It combines semantic HTML, an external CSS file with Flexbox and media queries, a validated lead form, a small JavaScript file, and the Google Analytics 4 tag with a `generate_lead` event so campaigns can be measured.

## 🎯 Learning Objectives

- Build a complete landing page from structure to styling
- Lay out hero and form side by side with Flexbox and stack them on mobile
- Validate a form with HTML attributes and simple JavaScript
- Add the GA4 tag and send a lead event
- Publish a static page online for free and test it on a phone

## 📖 Concepts Explained

### 1. Page plan

```mermaid
flowchart TB
  A[Sticky header + small CTA] --> B[Hero: headline, benefits | Lead form]
  B --> C[How it works: 3 steps]
  C --> D[Footer + WhatsApp]
```

### 2. Why JavaScript validation as well as HTML?

HTML attributes (`required`, `pattern`) give basic checks. JavaScript lets you show friendly custom messages, run extra rules and trigger analytics events. **Real projects must also validate on the server**, because browser checks can be bypassed.

### 3. The GA4 tag and events

The GA4 tag (`gtag.js`) loads Google Analytics and records page views. You can send custom or recommended **events** such as `generate_lead`. In GA4 you then mark the event as a **key event** (conversion) to see how many leads each campaign produced. Replace `G-XXXXXXXXXX` with your own Measurement ID from GA4 → Admin → Data streams.

### 4. Free hosting for static pages

| Option | How |
|---|---|
| Netlify Drop | Drag the project folder onto app.netlify.com/drop |
| GitHub Pages | Upload files to a GitHub repo → Settings → Pages |
| Cloudflare Pages | Connect a repo or upload files |

## 💻 Code Examples

### Example 1: Landing page (`index.html`)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Free Solar Site Survey in Lahore | SunPower</title>
  <meta name="description" content="Cut your electricity bill with rooftop solar. Book a free site survey in Lahore. Net metering support and 10-year panel warranty.">
  <link rel="stylesheet" href="style.css">

  <!-- Google Analytics 4 tag: replace G-XXXXXXXXXX with your Measurement ID -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){ dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  </script>
</head>
<body>
  <header class="site-header">
    <div class="container header-row">
      <strong class="logo">SunPower</strong>
      <a class="btn btn-small" href="#survey">Free survey</a>
    </div>
  </header>

  <section class="hero">
    <div class="container hero-row">
      <div class="hero-text">
        <h1>Cut Your Electricity Bill with Rooftop Solar</h1>
        <p>Book a free site survey in Lahore. We handle design, installation and net metering paperwork.</p>
        <ul class="ticks">
          <li>Free rooftop survey</li>
          <li>10-year panel warranty</li>
          <li>Easy instalment plans</li>
        </ul>
      </div>

      <!-- Lead form -->
      <form id="survey" class="lead-form" novalidate>
        <h2>Book your free survey</h2>
        <label for="name">Full name</label>
        <input type="text" id="name" name="name" required>

        <label for="phone">Mobile (03XXXXXXXXX)</label>
        <input type="tel" id="phone" name="phone" pattern="03[0-9]{9}" required>

        <label for="bill">Monthly bill (PKR)</label>
        <select id="bill" name="bill">
          <option>Under 15,000</option>
          <option>15,000 - 40,000</option>
          <option>Above 40,000</option>
        </select>

        <button class="btn" type="submit">Book free survey</button>
        <p id="form-message" class="form-message" aria-live="polite"></p>
      </form>
    </div>
  </section>

  <section class="container steps">
    <h2>How it works</h2>
    <div class="step-row">
      <div class="step"><h3>1. Survey</h3><p>An engineer visits your roof.</p></div>
      <div class="step"><h3>2. Design</h3><p>You get a system size and quote.</p></div>
      <div class="step"><h3>3. Install</h3><p>Installation and net metering support.</p></div>
    </div>
  </section>

  <footer class="site-footer">
    <p>&copy; 2026 SunPower Lahore &middot; <a href="https://wa.me/923001234567">WhatsApp us</a></p>
  </footer>

  <script src="script.js"></script>
</body>
</html>
```

**How it works:** the head contains SEO tags and the GA4 tag; the hero holds benefits and the form side by side; the form uses `novalidate` so JavaScript can show custom messages; the script loads at the end of the body.

### Example 2: Styles (`style.css`)

```css
/* ===== Base ===== */
* { box-sizing: border-box; }
body { margin: 0; font-family: Arial, sans-serif; color: #222; line-height: 1.6; }
.container { max-width: 1100px; margin: 0 auto; padding: 0 16px; }

/* ===== Header ===== */
.site-header { background: #fff; border-bottom: 1px solid #eee; position: sticky; top: 0; z-index: 10; }
.header-row { display: flex; justify-content: space-between; align-items: center; padding: 10px 16px; }
.logo { color: #f39c12; font-size: 22px; }

/* ===== Buttons ===== */
.btn { display: inline-block; background: #f39c12; color: #fff; border: 0; padding: 14px 22px; border-radius: 8px; font-size: 16px; font-weight: bold; text-decoration: none; cursor: pointer; }
.btn:hover { background: #d68910; }
.btn-small { padding: 8px 14px; font-size: 14px; }

/* ===== Hero with form (Flexbox) ===== */
.hero { background: #fff8e7; padding: 40px 0; }
.hero-row { display: flex; gap: 30px; align-items: flex-start; }
.hero-text { flex: 1; }
.hero-text h1 { font-size: 36px; line-height: 1.2; margin-top: 0; }
.ticks li { margin-bottom: 6px; }

.lead-form { flex: 1; background: #fff; padding: 24px; border-radius: 10px; box-shadow: 0 6px 20px rgba(0,0,0,0.08); }
.lead-form h2 { margin-top: 0; }
.lead-form label { display: block; margin-top: 10px; font-weight: bold; }
.lead-form input, .lead-form select { width: 100%; padding: 10px; font-size: 16px; margin-top: 4px; border: 1px solid #ccc; border-radius: 6px; }
.lead-form .btn { width: 100%; margin-top: 16px; }
.form-message { min-height: 24px; font-weight: bold; }
.error { color: #c0392b; }
.success { color: #1e8449; }

/* ===== Steps ===== */
.steps { padding: 40px 16px; text-align: center; }
.step-row { display: flex; gap: 20px; }
.step { flex: 1; background: #f7f7f7; padding: 20px; border-radius: 8px; }

/* ===== Footer ===== */
.site-footer { background: #222; color: #ddd; text-align: center; padding: 16px; }
.site-footer a { color: #f39c12; }

/* ===== Responsive: stack columns on phones ===== */
@media (max-width: 768px) {
  .hero-row, .step-row { flex-direction: column; }
  .hero-text h1 { font-size: 28px; }
}
```

**How it works:** Flexbox creates two-column hero and three-column steps; the sticky header keeps the CTA visible; the media query stacks columns on screens up to 768 px wide.

### Example 3: Form logic and GA4 event (`script.js`)

```javascript
// Simple form validation and a GA4 lead event (no real data is sent anywhere)

// 1. Find the form and the message area
const form = document.getElementById("survey");
const message = document.getElementById("form-message");

// 2. Run this when the user clicks "Book free survey"
form.addEventListener("submit", function (event) {
  event.preventDefault();               // stop the page from reloading

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const phonePattern = /^03[0-9]{9}$/;  // Pakistani mobile: 03 + 9 digits

  // 3. Check the name
  if (name === "") {
    message.textContent = "Please enter your name.";
    message.className = "form-message error";
    return;
  }

  // 4. Check the phone number
  if (!phonePattern.test(phone)) {
    message.textContent = "Please enter a mobile number like 03001234567.";
    message.className = "form-message error";
    return;
  }

  // 5. Everything is fine: show a thank-you message
  message.textContent = "Thank you, " + name + "! We will call you within 24 hours.";
  message.className = "form-message success";

  // 6. Tell Google Analytics a lead was generated (only if the GA4 tag loaded)
  if (typeof gtag === "function") {
    gtag("event", "generate_lead", { form_name: "solar_survey" });
  }

  form.reset();                          // clear the form
});
```

**How it works:** on submit, the script stops the page reload, checks the name and phone pattern, shows an error or a thank-you message, sends a `generate_lead` event to GA4 if the tag is loaded, and resets the form.

## 🧪 Lab Practice

1. Open `index.html` with Live Server; test the form with an empty name, a wrong phone and a correct phone.
2. Change the brand to your own business and rewrite the headline and benefits for your persona.
3. Add a testimonials section with two reviews using Flexbox.
4. Create a free GA4 property, paste your Measurement ID, publish the page on Netlify Drop and submit the form; check **Reports → Realtime** for the `generate_lead` event.
5. Open the live URL on your phone and fix any layout issues.

## 📝 Assignment

**Module mini-project:** build and publish a responsive landing page for a real or fictional Pakistani business with sticky header, hero + lead form, benefits, steps, testimonials, FAQ, footer, JavaScript validation and a GA4 `generate_lead` event. Submit the live link, a mobile screenshot and a Realtime report screenshot.

## ❓ Quick Quiz

1. Why is the form given the `novalidate` attribute here?
2. What does `event.preventDefault()` do?
3. Which GA4 event name is used for leads in this example?
4. Why is server-side validation still needed?
5. Name one free way to publish a static page.

<details>
<summary>Show answers</summary>

1. To turn off default browser messages so JavaScript can show custom ones
2. Stops the form's default action (reloading/sending the page)
3. `generate_lead`
4. Browser checks can be bypassed; the server must protect data quality and security
5. Netlify Drop, GitHub Pages or Cloudflare Pages

</details>

## 💼 Interview Questions

**1. How would you measure leads from a landing page?**

> Install GA4, fire a `generate_lead` (or similar) event on successful submission, mark it as a key event, and use UTM-tagged campaign links to see which source produced each lead.

**2. What makes a landing page responsive?**

> A viewport meta tag, flexible layouts (Flexbox/Grid), relative widths, responsive media and media queries that adapt the layout to screen size.

**3. Where should tracking scripts go?**

> The GA4 tag goes in the `<head>` as Google recommends; page scripts like form logic usually go at the end of the body or use `defer`.

## ✅ Summary

- A landing page combines semantic HTML, external CSS and small JavaScript.
- Flexbox + media queries give a two-column desktop and stacked mobile layout.
- Validate in HTML and JavaScript (and on the server in real projects).
- The GA4 tag plus a `generate_lead` event makes the page measurable.
- Static pages can be published free and must be tested on real phones.

<!-- nav -->

---

[⬅ Previous](../Session-09-HTML-Layout-Forms-and-Media-Elements/README.md) · [🏠 Module Home](../README.md)

Prepared by Zeeshan Abbas · Aptech Learning North Nazimabad
