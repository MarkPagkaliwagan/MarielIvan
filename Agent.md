# AGENT.md

## Project Role

You are the development agent for a premium, interactive wedding invitation website.

The website is inspired by the romantic, nostalgic, lyrical, vintage, and editorial feeling associated with Taylor Swift's music eras, while remaining an original design.

The goal is to create a website that feels like a personal love story presented as an interactive invitation.

---

# 1. Priority Rules

When working on this project, follow these priorities in order:

1. Preserve existing functionality.
2. Follow `DESIGN.md`.
3. Follow installed `antislop` rules and skills.
4. Keep the experience mobile-first and responsive.
5. Maintain accessibility.
6. Maintain performance.
7. Prefer simple, maintainable implementations.
8. Avoid unnecessary dependencies and rewrites.

Do not sacrifice usability for visual effects.

---

# 2. Read Before Coding

Before modifying the project:

- Read `DESIGN.md`.
- Read the relevant existing components.
- Inspect the current project structure.
- Check existing styles and design tokens.
- Check existing dependencies before installing anything.
- Reuse existing components when appropriate.

Do not immediately create a new component if an existing component can reasonably be extended.

---

# 3. Design Direction

`DESIGN.md` is the primary visual authority.

Follow its:

- Color system
- Typography
- Spacing
- Layout
- Animation direction
- Photography treatment
- Decorative details
- Mobile behavior
- Content tone

Do not replace the design direction with generic AI-generated UI patterns.

Avoid:

- Generic SaaS layouts
- Dashboard-style sections
- Excessive glassmorphism
- Neon effects
- Oversized glowing buttons
- Excessive rounded cards
- Generic gradients
- Random floating decorations
- Excessive shadows
- Template-like wedding layouts

Every visual element should have a reason to exist.

---

# 4. Taylor-Inspired but Original

The project may take inspiration from:

- Romantic storytelling
- Vintage editorial design
- Storybook aesthetics
- Film photography
- Nostalgia
- Soft lyrical atmosphere
- Era-inspired mood changes

Do NOT directly copy:

- Album covers
- Album artwork
- Official logos
- Official promotional layouts
- Exact branded typography
- Song lyrics
- Long recognizable phrases from songs

Do not make the website look like an unofficial Taylor Swift website.

The result should feel inspired by the atmosphere, not copied from the source.

---

# 5. Typography

Prefer an elegant serif for major titles and couple names.

Recommended hierarchy:

```text
Display:
Cormorant Garamond / Bodoni Moda / Playfair Display

Secondary:
DM Serif Display / EB Garamond

Body:
Inter / Manrope / DM Sans

Optional accent:
Italiana
```

Do not use too many fonts.

Maximum recommended:

- 1 display font
- 1 supporting font
- 1 optional accent font

Typography should create hierarchy through:

- Size
- Weight
- Letter spacing
- Line height
- Whitespace

Do not rely on decorative fonts everywhere.

---

# 6. Component Architecture

Keep components focused and reusable.

Prefer structures such as:

```text
components/
├── invitation/
│   ├── Hero
│   ├── Envelope
│   ├── Story
│   ├── Timeline
│   ├── Gallery
│   ├── WeddingDetails
│   ├── Countdown
│   ├── DressCode
│   ├── RSVP
│   └── Footer
│
├── ui/
│   ├── Button
│   ├── SectionTitle
│   ├── Divider
│   └── MusicControl
│
└── layout/
    └── Navigation
```

Do not over-componentize extremely small elements without a reason.

---

# 7. Content Separation

Keep wedding data separate from presentation whenever practical.

Example:

```ts
const wedding = {
  couple: {
    bride: "[Bride Name]",
    groom: "[Groom Name]",
  },

  date: "[Wedding Date]",

  ceremony: {
    time: "[Time]",
    venue: "[Venue]",
    address: "[Address]",
  },

  reception: {
    time: "[Time]",
    venue: "[Venue]",
    address: "[Address]",
  },
};
```

This allows the wedding information to be changed without rewriting the layout.

Never hardcode the same information in multiple places when it can be reused.

---

# 8. Mobile First

Design and implement for mobile first.

Always verify:

- 320px
- 375px
- 390px
- 430px
- Tablet
- Desktop

Prevent:

- Horizontal overflow
- Tiny text
- Tiny buttons
- Broken image crops
- Overlapping decorative elements
- Navigation collisions
- Unusable RSVP forms

The mobile version is not a reduced desktop version.

It should feel intentionally designed.

---

# 9. Responsive Layout

Use responsive layouts rather than fixed dimensions.

Prefer:

```css
clamp()
min()
max()
%
rem
vw
vh
```

when appropriate.

Avoid unnecessary fixed heights.

Never rely on a layout working at only one screen width.

---

# 10. Animation Rules

Animations should feel:

- Graceful
- Slow
- Cinematic
- Subtle
- Purposeful

Good animation examples:

- Fade in
- Gentle slide
- Image reveal
- Text stagger
- Envelope opening
- Soft scale
- Section reveal

Avoid:

- Bouncing UI
- Excessive springs
- Spinning decorations
- Constant floating objects
- Aggressive parallax
- Scroll-jacking
- Long blocking animations

Always support:

```css
@media (prefers-reduced-motion: reduce);
```

Users must still be able to use the website with reduced motion enabled.

---

# 11. Opening Experience

The envelope/opening interaction should be optional and lightweight.

Do not trap the user inside an animation.

The user must have a clear way to continue.

Do not make the initial experience unnecessarily slow.

---

# 12. Music

Music must be user-controlled.

Do not create an annoying automatic audio experience.

Provide a visible music control.

Remember user preference when practical.

Do not allow audio controls to cover important information.

---

# 13. Images

Use high-quality imagery while considering performance.

Always:

- Use meaningful `alt` text for meaningful images.
- Use empty alt text for purely decorative images.
- Lazy-load non-critical images.
- Provide appropriate image dimensions when possible.
- Avoid layout shifts.

Do not add random stock photos just to fill empty space.

Use placeholders until real wedding photos are available.

---

# 14. Accessibility

Accessibility is required.

Check:

- Text contrast
- Keyboard navigation
- Focus states
- Form labels
- Button labels
- Image alt text
- Semantic HTML
- Heading hierarchy
- Reduced motion
- Touch target sizes

Do not use a `<div>` as a button when a real `<button>` is appropriate.

Use semantic elements such as:

```html
<header>
  <nav>
    <main>
      <section>
        <footer>
          <button>
            <form></form>
          </button>
        </footer>
      </section>
    </main>
  </nav>
</header>
```

---

# 15. RSVP

The RSVP form is a functional feature, not just decoration.

Validate:

- Required fields
- Guest count
- Attendance selection
- Invalid input
- Submission state
- Error state
- Success state

Never report a successful submission unless the actual submission succeeds.

Do not expose private API keys or secrets in frontend code.

---

# 16. Countdown

The countdown must:

- Use the configured wedding date.
- Handle timezone correctly.
- Update efficiently.
- Stop or show an appropriate state after the wedding date.
- Avoid unnecessary re-renders.

Do not hardcode a countdown value.

---

# 17. Performance

Before considering the implementation complete:

- Check bundle size when relevant.
- Optimize images.
- Avoid unnecessary dependencies.
- Avoid expensive animations.
- Avoid unnecessary client-side rendering.
- Lazy-load non-critical resources.
- Check for layout shifts.

Do not add a library when a small native implementation is sufficient.

---

# 18. Code Quality

Write readable code.

Prefer:

- Clear naming
- Small focused functions
- Reusable utilities
- Typed data
- Consistent formatting
- Existing project conventions

Avoid:

- Giant components
- Duplicate logic
- Dead code
- Unused imports
- Temporary debugging code
- Excessive comments explaining obvious code

Comments should explain why something exists, not what obvious code does.

---

# 19. Dependency Rules

Before installing a package, ask:

1. Is it actually necessary?
2. Can the existing stack handle it?
3. Will it increase bundle size significantly?
4. Is it actively maintained?
5. Does it introduce unnecessary complexity?

Do not install dependencies just because they are popular.

---

# 20. Error Handling

Handle user-facing errors gracefully.

For forms and interactive features, provide:

- Loading state
- Success state
- Error state
- Retry path when appropriate

Do not expose raw technical errors to users.

Developer errors may be logged appropriately for debugging.

---

# 21. Browser Verification

For UI changes, test the actual application in a browser.

Use Playwright when available.

Check:

- Initial page load
- Navigation
- Animations
- Envelope interaction
- Music control
- Gallery
- Countdown
- RSVP
- Mobile layout
- Desktop layout
- Console errors

Do not claim a UI feature works without verifying it.

---

# 22. Accessibility Verification

When available, use `axe-core` or equivalent accessibility tooling.

Check for:

- Missing labels
- Poor contrast
- Invalid ARIA usage
- Keyboard accessibility
- Heading problems
- Image accessibility

Fix meaningful accessibility issues before finishing.

---

# 23. Testing

Before completing a significant feature:

```text
Type check
↓
ESLint
↓
Tests
↓
Build
↓
Browser test
```

Do not skip tests when the feature contains meaningful logic.

Prioritize testing for:

- RSVP validation
- Countdown calculations
- Data formatting
- Navigation state
- Music state
- Utility functions

---

# 24. Git Safety

Never perform destructive Git operations without an explicit reason.

Do not:

```text
reset --hard
clean -fd
force push
delete branches
```

unless explicitly instructed.

Before making large changes, inspect the current Git state.

Keep changes focused.

Do not modify unrelated files.

---

# 25. Existing Work

Do not rewrite working code simply because another implementation looks cleaner.

Before replacing an existing implementation:

- Understand why it exists.
- Check whether it is being used elsewhere.
- Preserve behavior.
- Change only what is necessary.

Avoid "refactoring everything" during feature work.

---

# 26. Anti-Slop Enforcement

Use the installed antislop skills throughout development.

Pay special attention to:

- Generic UI avoidance
- Human copywriting
- Layout quality
- Mobile composition
- Code quality
- Visual liveliness

When a design looks generic, improve the composition rather than simply adding more effects.

Do not solve visual problems by adding:

- More gradients
- More shadows
- More animations
- More cards
- More decorative icons

Prefer better:

- Typography
- Spacing
- Composition
- Photography
- Contrast
- Content hierarchy

---

# 27. Design Review Before Completion

Before declaring a feature complete, ask:

### Visual

Does it follow `DESIGN.md`?

### Originality

Does it feel inspired without copying existing branding?

### Composition

Does the layout feel intentionally designed?

### Mobile

Does it work naturally on a phone?

### Accessibility

Can users navigate and read it comfortably?

### Performance

Are animations and images efficient?

### Functionality

Did the feature actually work when tested?

### Personality

Does this feel like a real couple's invitation rather than an AI template?

---

# 28. Completion Gate

Do not say:

> "Done."

until the relevant checks have been performed.

For UI tasks, aim to complete:

```text
✓ DESIGN.md followed
✓ antislop rules followed
✓ Responsive layout checked
✓ Browser behavior checked
✓ Console checked
✓ Accessibility checked
✓ Type check passed
✓ Lint passed
✓ Tests passed when applicable
✓ Production build passed
```

When a check cannot be performed, clearly state which one was not performed.

Never pretend a check passed.

---

# 29. Communication Style

When reporting work:

Be concise and factual.

Include:

- What changed
- Files changed
- Tests performed
- Any remaining issue

Example:

```text
Implemented the RSVP section.

Changed:
- components/invitation/RSVP.tsx
- lib/rsvp.ts

Verified:
- Mobile layout
- Form validation
- Loading/success/error states
- Type check
- ESLint
- Production build

Remaining:
- Backend endpoint still needs to be connected.
```

Do not provide unnecessary explanations.

---

# 30. Final Principle

Build the website as if it were a handcrafted wedding invitation that happens to be digital.

Do not build:

> "another AI-generated wedding landing page."

Build:

> "a personal love story, carefully designed for the couple and their guests."
