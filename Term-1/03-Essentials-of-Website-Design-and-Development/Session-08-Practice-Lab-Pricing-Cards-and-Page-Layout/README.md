# Session 08: Practice Lab: Pricing Cards and Page Layout

> Module: Essentials of Website Design and Development · Diploma in Digital Marketing · Term 1 · ⏱ ~2 hours

Pricing tables are among the most important sections on agency, SaaS and service websites. In this lab you will build a three-plan pricing section for a social media agency in Islamabad, using the box model, positioning, floats, a clearfix and a simple media query so the cards stack on phones.

## 🎯 Learning Objectives

- Build a multi-column layout with floats and a clearfix
- Use the box model to calculate column widths and gaps
- Highlight a recommended plan with border, shadow and an absolute badge
- Create a sticky header and full-width buttons
- Make the layout stack on small screens with a media query

## 📖 Concepts Explained

### 1. Pricing psychology (marketing side)

| Technique | Example |
|---|---|
| Three options | Starter, Growth, Pro: most people choose the middle |
| Highlight a plan | "Most popular" badge, stronger border |
| Anchoring | A high Pro price makes Growth look reasonable |
| Clear differences | Same list structure in every card |
| One CTA per card | "Get started" |

### 2. Calculating column widths

Three equal cards with a 1% margin on each side:

```text
card width + left margin + right margin = 33.33%
31.33%     + 1%          + 1%           = 33.33%   × 3 cards = 100%
```

With `box-sizing: border-box`, padding and border stay inside the 31.33%, so the row never overflows.

### 3. Clearfix

Floated children do not give their parent any height. A **clearfix** adds an invisible element after them that clears the floats:

```css
.cards::after { content: ""; display: block; clear: both; }
```

### 4. A first media query

```css
@media (max-width: 700px) {
  .card { float: none; width: 100%; }
}
```

"When the screen is 700 px wide or less, stop floating and make every card full width." You will learn responsive design fully in Session 09.

## 💻 Code Examples

### Example 1: Pricing page HTML (`pricing-cards.html`)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Social Media Packages | PixelBoost Agency</title>
  <link rel="stylesheet" href="pricing.css">
</head>
<body>
  <header class="topbar">PixelBoost &middot; Social Media Management in Islamabad</header>

  <main class="container">
    <h1>Choose your social media package</h1>
    <p class="subtitle">Monthly plans for small businesses. No contract.</p>

    <!-- Three cards side by side; they stack on small screens -->
    <div class="cards">
      <div class="card">
        <h2>Starter</h2>
        <p class="price">PKR 25,000<span>/month</span></p>
        <ul>
          <li>12 posts per month</li>
          <li>1 platform</li>
          <li>Monthly report</li>
        </ul>
        <a class="btn" href="#contact">Get started</a>
      </div>

      <div class="card featured">
        <span class="badge">Most popular</span>
        <h2>Growth</h2>
        <p class="price">PKR 45,000<span>/month</span></p>
        <ul>
          <li>20 posts + 8 reels</li>
          <li>2 platforms</li>
          <li>Ad management (budget separate)</li>
        </ul>
        <a class="btn" href="#contact">Get started</a>
      </div>

      <div class="card">
        <h2>Pro</h2>
        <p class="price">PKR 80,000<span>/month</span></p>
        <ul>
          <li>30 posts + 12 reels</li>
          <li>3 platforms</li>
          <li>Weekly reports and strategy call</li>
        </ul>
        <a class="btn" href="#contact">Get started</a>
      </div>
    </div>

    <section id="contact" class="contact">
      <h2>Talk to us</h2>
      <p><a href="https://wa.me/923001234567">WhatsApp 0300-1234567</a></p>
    </section>
  </main>
</body>
</html>
```

**How it works:** three `.card` elements sit in a `.cards` row; the middle card has an extra `featured` class and a badge; each card has the same list structure and a CTA.

### Example 2: Pricing CSS (`pricing.css`)

```css
/* Box model for everything: width includes padding and border */
* { box-sizing: border-box; }

body { margin: 0; font-family: Arial, sans-serif; color: #222; background: #f6f8fb; }

/* Sticky top bar */
.topbar { position: sticky; top: 0; background: #4b2c83; color: #fff; padding: 12px 20px; font-weight: bold; }

/* Centred page container */
.container { max-width: 1000px; margin: 0 auto; padding: 30px 16px; text-align: center; }
.subtitle { color: #666; margin-bottom: 30px; }

/* Cards: float-based row (simple and classic). Session 09 shows Flexbox. */
.cards::after { content: ""; display: block; clear: both; }  /* clearfix: contain the floats */
.card {
  float: left;
  width: 31.33%;          /* three cards per row */
  margin: 0 1% 20px;      /* 1% left + 1% right gap */
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 24px;
  position: relative;     /* anchor for the absolute badge */
  text-align: left;
}
.card ul { padding-left: 18px; min-height: 90px; }

/* Highlighted middle card */
.featured { border: 2px solid #4b2c83; box-shadow: 0 6px 18px rgba(0,0,0,0.12); }
.badge { position: absolute; top: -12px; left: 24px; background: #ff9800; color: #fff; padding: 4px 10px; border-radius: 12px; font-size: 13px; }

.price { font-size: 26px; font-weight: bold; color: #4b2c83; margin: 8px 0; }
.price span { font-size: 14px; color: #777; font-weight: normal; }

.btn { display: block; text-align: center; background: #4b2c83; color: #fff; padding: 12px; border-radius: 6px; text-decoration: none; }
.btn:hover { background: #3a2166; }

.contact { clear: both; padding-top: 30px; }

/* On small screens, cards take full width and stack */
@media (max-width: 700px) {
  .card { float: none; width: 100%; margin: 0 0 20px; }
}
```

**How it works:** floats place cards side by side, the clearfix contains them, `position: relative` on the card anchors the absolute badge, and the media query stacks cards on phones.

## 🧪 Lab Practice

1. Open the page with Live Server and resize the browser below 700 px to watch the cards stack.
2. Change the gap between cards to 2% on each side and recalculate the card width.
3. Add a fourth plan ("Enterprise: Custom quote") and adjust widths to fit four per row.
4. Add a hover effect on cards: slight shadow and `transform: translateY(-4px)` with a transition.
5. Translate the prices into a yearly option (10 months' price for 12) displayed under each monthly price.

## 📝 Assignment

Create a pricing page for a different business (gym memberships, tuition packages or web hosting) with three plans, a highlighted plan with a badge, a sticky header, a FAQ section below and a mobile layout. Submit HTML, CSS and two screenshots (desktop and mobile).

## ❓ Quick Quiz

1. Why do pricing pages often highlight the middle plan?
2. What problem does a clearfix solve?
3. What does `@media (max-width: 700px)` mean?
4. Why does the card need `position: relative`?
5. Calculate the width for 4 equal cards with 1% margin on each side.

<details>
<summary>Show answers</summary>

1. It guides choice; many buyers pick the recommended middle option
2. Parent elements collapse (no height) when all children are floated
3. Apply these rules only when the viewport is 700 px wide or less
4. So the absolutely positioned badge is placed relative to the card
5. 25% − 2% = 23%

</details>

## 💼 Interview Questions

**1. How would you design a pricing table that converts?**

> Three clear plans, a highlighted recommended plan, consistent feature lists, prices in local currency, one CTA per plan, and FAQs and guarantees nearby.

**2. What is a media query?**

> A CSS rule that applies styles only when conditions such as screen width are met, used for responsive design.

**3. Floats or Flexbox for layout?**

> Flexbox and Grid are the modern choice for layouts; floats are still useful for wrapping text around images and appear in older code.

## ✅ Summary

- Pricing sections use three options, a highlighted plan and clear CTAs.
- Calculate widths with the box model; `border-box` keeps maths simple.
- A clearfix contains floated children.
- Absolute badges need a relative parent.
- A media query makes columns stack on phones.

<!-- nav -->

---

[⬅ Previous](../Session-07-Formatting-with-Style-Sheets-Box-Model-and-Positioning/README.md) · [🏠 Module Home](../README.md) · [Next ➡](../Session-09-HTML-Layout-Forms-and-Media-Elements/README.md)

Prepared by Zeeshan Abbas · Aptech Learning North Nazimabad
