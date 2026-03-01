# Autism Parenting Center Website

Project Goal:
Build a modern, clean, professional website for Autism Parenting Center (autismparentingcenter.com) — a resource hub for autism parents, teachers, and therapists.

Core Pages:
1. Home (index.html)
2. Our Books (books.html)
3. Social Story Creator (social-stories.html)
4. Contact Us (contact.html)

Navigation:
- Top navigation bar with links to all pages
- Language toggle button (English / Spanish)
- Translations stored in js/script.js under the `translations` object
- Language preference saved in localStorage key: `apc_lang`
- Default language: English

Our Books Page:
- Two book categories: Core Words | Wh- Question Books
- Each book shows: cover image, title, "Buy on Amazon" button
- Book cover images go in the images/ folder
- Replace book-cover-placeholder divs with <img> tags pointing to images/
- Replace href="#" on Amazon buttons with real Amazon product URLs

Social Story Creator:
- Users add pages one at a time: select/take a photo + write a caption
- "Add Another Page" saves and resets for the next page
- "Finish & Print" generates the printable layout and calls window.print()
- Print layout: 6 panels per 8.5×11 page, 2 columns × 3 rows
  - Panel order: top-left, top-right, middle-left, middle-right, bottom-left, bottom-right
  - Each panel has a dashed cut border with a "✂ cut" label
  - Caption font size scales based on text length (shorter text = bigger font)
- Additional pages beyond 6 overflow to new print pages in the same layout
- Images stored as base64 data URLs (no server needed)

Design:
- Colors: blue #4a8abf (primary), green #6daf7e (secondary), orange #f4a94e (accent)
- Background: #f7f9fc | Cards: white
- Rounded corners, soft shadows, calm and welcoming feel
- Fully responsive (mobile hamburger menu)

Technical:
- Plain HTML, CSS, JavaScript — no frameworks
- css/style.css — all styles including @media print
- js/script.js — translations, language toggle, mobile nav
- js/social-stories.js — social story creator logic
- images/ — book cover images go here
