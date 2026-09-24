# Wedding Website — Eras-Inspired Visual Direction

## The main idea

This should feel like a beautiful wedding invitation that happens to live on the web.

The visual reference is the **Taylor Swift Eras Tour mood**: different chapters, changing moods, dramatic photography, nostalgic details, rich colors, and a little bit of stage-like elegance.

Do **not** make it look like an official Taylor Swift page, album page, or concert ticket. Take the feeling of the eras concept, then translate it into a wedding design with its own identity.

The result should feel romantic, cinematic, feminine, vintage, and expensive without becoming too decorative.

---

## 1. What the page should feel like

Think:

- a luxury wedding invitation
- an old photo album
- a fashion editorial
- a love story told in chapters
- soft concert-light atmosphere
- vintage film photography
- burgundy velvet and antique gold

The page should have a little drama, but it should still breathe.

The couple's photos, names, and wedding date should always be more important than the decoration.

---

## 2. Eras-inspired direction

Use the idea of **eras as chapters** rather than putting obvious Taylor references everywhere.

Each major section can have a slightly different mood while keeping the same overall palette and typography.

### Mood references

**Romantic / Lover-like mood**

- warm ivory
- muted rose
- soft blush
- delicate light
- dreamy photography

**Vintage / Red-like mood**

- burgundy
- wine
- dark mauve
- film grain
- stronger contrast

**Elegant / Speak Now-like mood**

- mauve
- dusty lavender notes
- soft gold
- dramatic serif typography
- candlelit feeling

**Midnight-like mood**

- deep plum
- almost-black burgundy
- subtle stars
- dark cinematic photography

These are mood references only. Do not copy album covers, logos, fonts, graphics, or recognizable tour artwork.

---

## 3. Color palette

Keep the colors mature and slightly muted.

```text
Burgundy       #6D343D
Deep Mauve     #755961
Antique Gold   #8A6A2F
Warm Ivory     #F8F3EA
Champagne      #E8DCCB
Dusty Rose     #B8959B
Deep Ink       #211B1D
Soft Gray      #8C8582
White          #FFFFFF
```

### How to use them

**Burgundy** should be the strongest identity color.

Use it for:

- important text
- buttons
- small accents
- decorative lines
- active states

**Mauve** is for secondary details and softer text.

**Antique gold** should be rare. A little looks elegant; too much makes the page look like a wedding template.

**Warm ivory** should be the main light background instead of pure white.

---

## 4. Typography

Typography should do most of the decorative work.

Use one elegant serif and one clean sans-serif.

### Serif

Good choices:

- Cormorant Garamond
- Playfair Display
- DM Serif Display
- Libre Baskerville

Use the serif for:

- couple names
- section titles
- dates
- short romantic lines

### Sans-serif

Good choices:

- Inter
- Geist
- IBM Plex Sans
- Manrope

Use the sans-serif for:

- body copy
- navigation
- labels
- buttons
- small information

Do not use lots of different fonts. The contrast between the serif and sans-serif is enough.

---

## 5. Backgrounds

The background should carry the **eras atmosphere** without taking over the page.

A good background can have:

- warm ivory paper texture
- faint film grain
- soft burgundy shadows
- blurred flowers
- fabric-like texture
- subtle champagne highlights
- very soft light leaks
- faded photographic layers
- barely visible star-like dust

The center area should stay calm enough for text.

Decorative details should mostly live around the edges.

### Important rule

**No readable text inside the generated background.**

Do not generate:

- names
- dates
- fake quotes
- logos
- tour titles
- album names
- letters that look like branding

Put the real text in the website itself.

---

## 6. Photography

Photography is the strongest visual element on the site.

Treat the couple's photos like editorial photography, not ordinary website images.

Use:

- large crops
- natural skin tones
- soft highlights
- slightly muted saturation
- subtle film texture
- gentle vignette
- slow image reveals

Avoid over-editing faces or making everything overly blurred.

A photo can fade into the background at the bottom rather than ending inside a hard rectangular box.

---

## 7. Hero section

The hero should immediately feel like the cover of a wedding invitation.

A simple structure is enough:

```text
small wedding label

THE COUPLE'S NAMES

short romantic line

WEDDING DATE

small scroll cue

large couple photograph / atmospheric background
```

The photo should do most of the visual work.

Keep navigation very quiet so the first screen does not turn into a normal website header.

Avoid putting lots of buttons in the hero.

---

## 8. Countdown

The countdown is one of the few places where cards make sense.

Keep it simple:

```text
DAYS    HOURS    MINUTES    SECONDS
 00       00        00         00
```

Each unit can sit inside a **very subtle translucent glass panel**.

The effect should look like frosted invitation paper, not futuristic glassmorphism.

### Glass treatment

```css
background: rgba(255, 255, 255, 0.12);
backdrop-filter: blur(14px);
-webkit-backdrop-filter: blur(14px);
border: 1px solid rgba(255, 255, 255, 0.22);
box-shadow: 0 10px 30px rgba(33, 27, 29, 0.08);
```

Use a small radius. Avoid pill shapes.

On mobile, keep all four countdown units compact and readable rather than stacking huge cards.

---

## 9. Cards

This is **not** a card-heavy website.

Avoid turning every section into a floating box.

Use a card only when it actually helps the content, such as:

- countdown
- RSVP
- venue information
- event details

Most other sections should use open layouts, photography, typography, and dividers.

### Card shape

Keep the corners close to square.

Avoid:

- giant rounded containers
- excessive padding
- pill UI
- dashboard-style cards
- floating white boxes everywhere

---

## 10. Sections as eras

A nice way to use the eras concept is to let the website unfold like a story.

### Chapter 01 — The Beginning

A short introduction to the couple.

### Chapter 02 — The Memories

Photography-heavy section. Let the images carry the emotion.

### Chapter 03 — The Day

Wedding date, ceremony, reception, and important times.

### Chapter 04 — The Details

Venue, dress code, RSVP, notes, and practical information.

### Chapter 05 — Forever

A final message and closing photograph.

The chapter labels should stay small. The concept is there, but it should never feel forced.

---

## 11. Decorative details

The current direction is **minimalist**. Decoration is used only to structure the layout, never to fill it.

Good decoration:

- thin antique-gold lines
- delicate botanical line art
- small ornamental separators
- faded film scratches
- subtle grain
- soft edge glows

Bad decoration:

- diamond ornaments, star glyphs, or sparkle marks that do not mark a real date or state
- random floating emojis
- unrelated icon sets
- giant stars
- random crowns
- generic hearts everywhere
- neon effects
- excessive sparkle animations

### Ornament rule

**No diamond or star glyphs as decoration.** If a divider needs a break, use a plain line or a simple middot (·). A star/diamond may appear only when it marks something real, like the highlighted wedding day on a calendar.

### Icon rule

**Only use an icon when it communicates something specific.**

Examples that make sense:

- calendar for date
- clock for time
- map pin for venue
- mail or envelope for RSVP

Do not add icons just to make a section look fuller.

Icons must come from one consistent icon set, such as Lucide, and should be small and understated.

---

## 12. Buttons

Buttons should resemble invitation stationery.

### Primary

- burgundy background
- ivory text
- subtle shadow
- small radius

### Secondary

- transparent background
- thin burgundy or gold border
- burgundy text

Keep the wording natural.

Avoid CTA copy that sounds like a SaaS website.

---

## 13. Animation

The animation style should feel like a music video or wedding film: slow, smooth, and intentional.

Use mostly:

- fade in
- fade up
- gentle image scale
- soft opacity transitions
- staggered text reveals

Avoid:

- bouncing elements
- spinning icons
- aggressive parallax
- flashy gradients
- exaggerated 3D movement
- animations on everything

Respect `prefers-reduced-motion`.

---

## 14. Responsive behavior

The mobile version should not simply be a squeezed desktop version.

On mobile:

- make the names slightly smaller
- reduce gaps before reducing readability
- keep the countdown in one compact row when possible
- let photos crop intentionally
- preserve clear text zones
- keep the visual hierarchy simple

On desktop:

- use the full width of the screen
- allow photography to breathe
- use wider compositions
- give the hero enough height to feel cinematic

---

## 15. Layout and spacing

Do not make every section extremely tall.

Use enough space to separate chapters, but keep the page moving like a story.

A useful base scale:

```text
4px
8px
16px
24px
32px
48px
64px
96px
```

Use the larger values mainly for transitions between major sections.

---

## 16. What to avoid completely

These are the things that will make the design look obviously AI-generated or like a generic template:

- random icons with no purpose
- too many cards
- excessive glass effects
- generic purple gradients
- glowing text
- huge rounded corners
- random floating decorations
- too many font families
- excessive emojis
- unrelated illustrations
- fake luxury words everywhere
- overly poetic filler copy
- decorative elements behind important text

The page should feel **designed**, not filled.

---

## 17. AI / coding direction

When changing the existing code, make the smallest useful change.

Preserve:

- current functionality
- routes
- data flow
- existing assets
- existing components where practical

Do not rewrite working code just to change the appearance.

Keep the UI custom and simple instead of adding libraries for decorative effects that could be done with CSS.

### Most important rule

Before adding a visual element, ask:

> Does this belong to the wedding story?

If the answer is no, leave it out.

---

## 18. Background generation prompt

Use this as a visual reference when generating an original background:

> Elegant cinematic wedding invitation background with an eras-inspired concert atmosphere, romantic vintage editorial photography mood, deep burgundy wine, muted mauve, warm ivory and antique champagne gold, layered soft photographic textures, subtle film grain, delicate botanical silhouettes, velvet-like shadows, faint warm stage lighting, dreamy archival photography feeling, sophisticated fashion editorial composition, nostalgic but modern, subtle star dust around the edges, calm negative space in the center for website content, refined luxury wedding aesthetic, no readable text, no letters, no logos, no album artwork, no tour logo, no recognizable copyrighted graphics, original composition, premium and understated

---

## Final target

When the site is finished, it should feel like:

**a wedding invitation from another era, presented with the cinematic atmosphere of an eras-style tour.**

The Taylor-inspired influence should be recognizable through the mood, chapter structure, color shifts, photography, and drama — **not through copied branding or obvious references.**

The couple remains the main character.
