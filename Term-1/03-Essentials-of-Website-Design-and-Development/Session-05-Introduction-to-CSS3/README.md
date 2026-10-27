# Session 05: Introduction to CSS3

> Module: Essentials of Website Design and Development · Diploma in Digital Marketing · Term 1 · ⏱ ~2 hours

HTML gives a page its structure; CSS (Cascading Style Sheets) makes it look professional and on-brand. Marketers use CSS to change button colours for A/B tests, match brand fonts and fix landing page layouts. This session introduces CSS syntax, the three ways to add CSS, what is new in CSS3, the main selectors, classes and IDs, nested (descendant) selectors and link styling.

## 🎯 Learning Objectives

- Explain what CSS is and what "cascading" means
- Write CSS rules and add CSS inline, internally and externally
- Identify the new capabilities of CSS3
- Use element, class, ID, grouping, descendant, child, attribute and universal selectors
- Apply classes and IDs correctly
- Style hyperlinks with `:link`, `:visited`, `:hover`, `:active` and `:focus-visible`

## 📖 Concepts Explained

### 1. CSS rule syntax

```text
selector {  property : value ;  }
   h1    {  color    : navy  ;  }
```

- **Selector:** which elements to style
- **Declaration:** `property: value;` pairs inside curly braces
- Comments: `/* like this */`

### 2. Three ways to add CSS

| Method | Where | Use |
|---|---|---|
| Inline | `style="..."` attribute on one element | Quick tests only |
| Internal | `<style>` in the `<head>` | Single-page experiments, emails |
| **External** | Separate `.css` file linked with `<link rel="stylesheet">` | **Best for websites:** one file controls all pages, cached by browser |

### 3. The cascade

When several rules target the same element, the browser decides using: **importance** → **specificity** (how precise the selector is) → **source order** (later rule wins). Inline styles beat internal and external rules. You will study specificity in detail in Session 07.

### 4. What CSS3 added

| CSS3 feature | Example |
|---|---|
| Rounded corners | `border-radius: 8px;` |
| Shadows | `box-shadow`, `text-shadow` |
| Gradients | `background: linear-gradient(...)` |
| Web fonts | `@font-face`, Google Fonts |
| Transitions and animations | `transition: 0.3s;`, `@keyframes` |
| Media queries | responsive design for phones |
| Flexbox and Grid | modern layouts |
| New selectors | `:nth-child()`, attribute selectors, `:not()` |
| Colour formats | `rgba()`, `hsl()` with transparency |

CSS is now developed as separate modules rather than one big "CSS4" release.

### 5. Selectors

| Selector | Example | Selects |
|---|---|---|
| Element | `p` | All paragraphs |
| Class | `.price` | Elements with `class="price"` |
| ID | `#offer` | The one element with `id="offer"` |
| Grouping | `h1, h2` | Both h1 and h2 |
| Descendant (nested) | `nav li` | `li` anywhere inside `nav` |
| Child | `.card > p` | `p` directly inside `.card` |
| Attribute | `a[href^="https://wa.me"]` | Links starting with that URL |
| Universal | `*` | Every element |

### 6. Classes vs IDs

| | Class | ID |
|---|---|---|
| Syntax in HTML | `class="btn"` | `id="main-title"` |
| Syntax in CSS | `.btn` | `#main-title` |
| Reuse | Many elements, many classes per element | Unique, once per page |
| Typical use | Styling | Anchors, JavaScript, one-off styling |

> **Analogy:** a class is a school uniform (many students wear it); an ID is a roll number (only one student has it).

### 7. Styling links

Links have states. Write them in **L-V-H-A** order (remember "LoVe HAte"): `:link`, `:visited`, `:hover`, `:active`. Add `:focus-visible` so keyboard users can see where they are (accessibility).

## 💻 Code Examples

### Example 1: Three ways to add CSS (`three-ways-to-add-css.html` + `style.css`)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Three Ways to Add CSS</title>
  <!-- 1. External style sheet (best: one file styles the whole site) -->
  <link rel="stylesheet" href="style.css">

  <!-- 2. Internal style sheet (only this page) -->
  <style>
    h2 { color: teal; }
  </style>
</head>
<body>
  <h1>This heading is styled by style.css</h1>
  <h2>This heading is styled by the internal style block</h2>

  <!-- 3. Inline style (only this one element; avoid for big sites) -->
  <p style="color: crimson;">This paragraph uses an inline style.</p>
</body>
</html>
```

```css
/* External style sheet used by three-ways-to-add-css.html */

/* selector  { property: value; } */
h1 {
  color: navy;            /* text colour */
  font-family: Arial, sans-serif;
}

body {
  background-color: #fafafa;
  margin: 20px;
}
```

**How it works:** the external file styles the h1, the internal block styles the h2, and the inline style colours one paragraph. Keep both files in the same folder.

### Example 2: Selectors (`selectors.html`)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>CSS Selectors</title>
  <style>
    /* 1. Element (type) selector: all <p> elements */
    p { font-size: 18px; }

    /* 2. Class selector: any element with class="price" */
    .price { color: green; font-weight: bold; }

    /* 3. ID selector: the ONE element with id="offer" */
    #offer { background: #fff3cd; padding: 8px; }

    /* 4. Grouping: same style for h1 and h2 */
    h1, h2 { font-family: Georgia, serif; }

    /* 5. Descendant (nested) selector: <li> inside <nav> only */
    nav li { display: inline; margin-right: 12px; }

    /* 6. Child selector: <p> that is a direct child of .card */
    .card > p { margin: 4px 0; }

    /* 7. Attribute selector: links that open WhatsApp */
    a[href^="https://wa.me"] { color: #25D366; }

    /* 8. Universal selector: every element */
    * { box-sizing: border-box; }
  </style>
</head>
<body>
  <nav>
    <ul>
      <li>Home</li>
      <li>Menu</li>
      <li>Contact</li>
    </ul>
  </nav>

  <h1>Chai Corner</h1>
  <h2>Today's specials</h2>

  <div class="card">
    <p>Karak Chai</p>
    <p class="price">PKR 120</p>
  </div>

  <p id="offer">Buy 2, get 1 free after 11 pm!</p>
  <p><a href="https://wa.me/923001234567">Order on WhatsApp</a></p>
</body>
</html>
```

**How it works:** each rule demonstrates one selector type. Try deleting one rule at a time to see what it controlled.

### Example 3: Classes and IDs (`classes-and-ids.html`)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Classes and IDs</title>
  <style>
    /* A class can be reused many times */
    .btn {
      background: #0d6efd;
      color: white;
      padding: 10px 18px;
      border-radius: 6px;
      text-decoration: none;
    }
    /* An element can have more than one class */
    .btn-green { background: #198754; }

    /* An id is unique on the page */
    #main-title { text-align: center; }
  </style>
</head>
<body>
  <h1 id="main-title">Summer Sale</h1>

  <a class="btn" href="#">Shop now</a>
  <a class="btn btn-green" href="#">Order on WhatsApp</a>
  <a class="btn" href="#">View catalogue</a>
</body>
</html>
```

**How it works:** the `.btn` class is reused on three links; adding `.btn-green` to one changes only its colour; the ID styles one unique heading.

### Example 4: Link states (`link-styles.html`)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Styling Hyperlinks</title>
  <style>
    /* Link states must be written in this order: L-V-H-A (LoVe HAte) */
    a:link    { color: #0d6efd; text-decoration: none; }  /* not yet visited */
    a:visited { color: #6f42c1; }                         /* already visited */
    a:hover   { color: #dc3545; text-decoration: underline; } /* mouse over */
    a:active  { color: #fd7e14; }                         /* while clicking */

    /* Keyboard users: show a clear outline when the link has focus */
    a:focus-visible { outline: 3px solid #ffc107; }
  </style>
</head>
<body>
  <p><a href="https://www.google.com/">Google</a></p>
  <p><a href="https://developer.mozilla.org/">MDN Web Docs</a></p>
</body>
</html>
```

**How it works:** each pseudo-class styles a different state; hover changes colour and adds an underline, focus-visible adds an outline for keyboard users.

## 🧪 Lab Practice

1. Move the internal `<style>` rule from `three-ways-to-add-css.html` into `style.css` and confirm it still works.
2. In `selectors.html`, add a rule that makes every `.price` inside `.card` red, using a descendant selector.
3. Create a `.btn-outline` class (white background, coloured border) and apply it to one button.
4. Style links in a nav so that the hover state shows a background colour.
5. Use DevTools (**F12 → Elements → Styles**) to change a colour live and copy the CSS back into your file.

## 📝 Assignment

Take your multi-page site from Session 04 and create one external `site.css` that styles all pages: fonts, colours, navigation links with all states, a reusable `.btn` class and a unique ID style for the home page hero.

## ❓ Quick Quiz

1. Which method of adding CSS is best for a multi-page website?
2. Write a selector for elements with `class="offer"`.
3. Which comes first in link styling: `:hover` or `:visited`?
4. Can two elements share the same ID?
5. Name two features introduced in CSS3.

<details>
<summary>Show answers</summary>

1. External style sheet
2. `.offer`
3. `:visited` (order L-V-H-A)
4. No, an ID must be unique on a page
5. Any two: border-radius, shadows, gradients, web fonts, transitions, media queries, flexbox, grid

</details>

## 💼 Interview Questions

**1. Why use an external style sheet?**

> One file controls the look of every page, changes apply everywhere at once, and browsers cache it so pages load faster.

**2. How would you change a CTA button colour for an A/B test?**

> Create a variant class (e.g. `.btn-orange`) and apply it to the test version, keeping everything else the same, then compare conversions.

**3. What does "cascading" mean in CSS?**

> When rules conflict, the browser resolves them by importance, specificity and source order, so styles "cascade" from general to specific.

## ✅ Summary

- CSS rules = selector + declarations; external files are best.
- CSS3 added rounded corners, shadows, gradients, fonts, animation, media queries, flexbox and grid.
- Selectors range from simple (element, class, ID) to precise (descendant, child, attribute).
- Classes are reusable; IDs are unique.
- Style links in L-V-H-A order and add a visible focus style.

<!-- nav -->

---

[⬅ Previous](../Session-04-Practice-Lab-Multi-Page-Linked-Website/README.md) · [🏠 Module Home](../README.md) · [Next ➡](../Session-06-Practice-Lab-Styling-a-Landing-Page/README.md)

Prepared by Zeeshan Abbas · Aptech Learning North Nazimabad
