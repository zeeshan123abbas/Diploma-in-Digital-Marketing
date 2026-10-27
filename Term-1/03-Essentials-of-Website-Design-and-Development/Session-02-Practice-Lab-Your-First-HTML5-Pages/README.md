# Session 02: Practice Lab: Your First HTML5 Pages

> Module: Essentials of Website Design and Development · Diploma in Digital Marketing · Term 1 · ⏱ ~2 hours

Time to build. In this lab you will set up a proper workspace, create two small HTML5 pages (a personal profile and a one-page business card for a home kitchen), validate them, and view them on a mobile screen size. Simple pages like these are the starting point of every landing page you will build as a marketer.

## 🎯 Learning Objectives

- Set up a project folder and editor for web work
- Write a correct HTML5 skeleton from memory
- Use headings, paragraphs, lists, links, images and entities
- Add SEO basics: title and meta description
- Validate HTML with the W3C validator and preview on mobile size

## 📖 Concepts Explained

### 1. Workspace setup

| Item | Recommendation |
|---|---|
| Editor | VS Code with Live Server extension |
| Folder | `Documents/web-practice/session-02/` |
| File names | lowercase, no spaces: `about-me.html`, not `About Me.html` |
| Images | Keep in an `images/` sub-folder |
| Home page | Name it `index.html` (servers open it by default) |

### 2. VS Code shortcut: Emmet

In an empty `.html` file type `!` and press **Tab**: VS Code writes a full HTML5 skeleton. Other Emmet shortcuts: `ul>li*3` + Tab makes a list with three items; `a:link` makes a link.

### 3. Special links useful in marketing

| Link | Code | Action on phone |
|---|---|---|
| Email | `<a href="mailto:info@example.pk">` | Opens email app |
| Phone | `<a href="tel:+923001234567">` | Opens dialler |
| WhatsApp | `<a href="https://wa.me/923001234567">` | Opens WhatsApp chat |

### 4. Validation

The **W3C Markup Validation Service** checks your HTML for errors (missing closing tags, wrong nesting). Clean HTML displays consistently across browsers and is easier for search engines to read.

### 5. Common beginner mistakes

| Mistake | Fix |
|---|---|
| Forgetting `<!DOCTYPE html>` | Always the first line |
| Two `<h1>` tags on one page | Keep one H1; use H2 for sections |
| `<img>` without `alt` | Always describe the image |
| Wrong nesting `<p><strong>text</p></strong>` | Close in reverse order |
| Spaces in file names | Use hyphens |

## 💻 Code Examples

### Example 1: Personal profile page (`about-me.html`)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>About Me | Ayesha Khan, Digital Marketing Student</title>
  <meta name="description" content="Ayesha Khan is a digital marketing student in Karachi learning SEO, social media and web design.">
</head>
<body>
  <!-- Main heading: only one h1 per page -->
  <h1>Ayesha Khan</h1>
  <p>Digital marketing student at Aptech, Karachi.</p>

  <hr>

  <h2>My Skills</h2>
  <ul>
    <li>Social media content</li>
    <li>Basic SEO</li>
    <li>HTML5 and CSS3 (learning)</li>
  </ul>

  <h2>My Goal</h2>
  <p>To help small Pakistani businesses grow online.</p>

  <!-- Image: always add alt text -->
  <img src="profile.jpg" alt="Photo of Ayesha Khan" width="150">

  <h2>Contact</h2>
  <p>Email: <a href="mailto:ayesha@example.com">ayesha@example.com</a></p>

  <p>&copy; 2026 Ayesha Khan</p>
</body>
</html>
```

**How it works:** a clean HTML5 skeleton with a descriptive title and meta description, one H1, sections with H2, an unordered list, an image with alt text and an email link.

### Example 2: One-page business card (`business-card.html`)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Ammi's Kitchen | Home-Cooked Meals in Gulistan-e-Johar</title>
</head>
<body>
  <h1>Ammi's Kitchen</h1>
  <h2>Home-cooked meals delivered in Gulistan-e-Johar</h2>

  <p><strong>Today's menu:</strong></p>
  <ol>
    <li>Chicken Biryani &ndash; PKR 450</li>
    <li>Daal Chawal &ndash; PKR 350</li>
    <li>Aloo Qeema &ndash; PKR 500</li>
  </ol>

  <p>Order before <em>12 noon</em> for lunch delivery.</p>

  <!-- Clickable phone and WhatsApp links -->
  <p>Call: <a href="tel:+923001234567">0300-1234567</a></p>
  <p>WhatsApp: <a href="https://wa.me/923001234567">Chat with us</a></p>

  <hr>
  <p><small>&copy; 2026 Ammi's Kitchen</small></p>
</body>
</html>
```

**How it works:** an ordered list shows the menu, `&ndash;` adds a dash, `<em>` and `<strong>` add emphasis, and `tel:` and `wa.me` links let mobile users call or chat in one tap: the most common conversion path for small Pakistani businesses.

## 🧪 Lab Practice

1. Create the folder `web-practice/session-02` and open it in VS Code.
2. Type `!` + Tab to create a skeleton; rebuild `about-me.html` with your own details (without copying).
3. Build `business-card.html` for a real or imaginary local business with a menu or price list.
4. Validate both pages at [validator.w3.org](https://validator.w3.org/#validate_by_input) using "Validate by Direct Input" and fix every error.
5. Open each page in Chrome, press **F12**, click the device icon and test on "iPhone SE" and "Galaxy" sizes.

## 📝 Assignment

Create a three-section "service menu" page for a salon or tuition centre: heading, short intro, an ordered list of services with PKR prices, timing information, and phone, WhatsApp and email links. It must pass the W3C validator with zero errors.

## ❓ Quick Quiz

1. What Emmet shortcut creates an HTML5 skeleton in VS Code?
2. Which link opens the phone dialler?
3. What tool checks HTML for errors?
4. Why use lowercase file names without spaces?
5. What is the default home page file name on most servers?

<details>
<summary>Show answers</summary>

1. `!` then Tab
2. `<a href="tel:+92...">`
3. W3C Markup Validation Service
4. Servers can be case-sensitive and spaces break URLs
5. `index.html`

</details>

## 💼 Interview Questions

**1. How would you add a WhatsApp chat button to a landing page?**

> Use a link to `https://wa.me/` followed by the number in international format without plus or dashes, optionally with `?text=` for a pre-filled message.

**2. Why validate HTML?**

> Valid HTML renders consistently, is more accessible and is easier for search engines to parse.

**3. What should always be inside the head of a landing page?**

> Charset, viewport, a descriptive title, a meta description, and any tracking or analytics tags.

## ✅ Summary

- Organise files in folders with lowercase, hyphenated names.
- Emmet (`!` + Tab) writes the HTML5 skeleton instantly.
- `mailto:`, `tel:` and `wa.me` links create one-tap conversions.
- Validate every page and test it on mobile sizes.

<!-- nav -->

---

[⬅ Previous](../Session-01-Introduction-to-the-Web-and-HTML5/README.md) · [🏠 Module Home](../README.md) · [Next ➡](../Session-03-Formatting-Text-Lists-Hyperlinks-and-Anchors/README.md)

Prepared by Zeeshan Abbas · Aptech Learning North Nazimabad
