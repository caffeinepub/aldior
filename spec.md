# ALDIOR

## Current State
- Full black-theme luxury menswear website with Header, Hero, MarqueeStrip, FeaturedSection, BrandStatement, CategoryGrid, Footer, Shop, About, Contact pages
- Hero section shows large "ALDIOR" text with zoom animation + hero background image
- Header has the AD monogram logo image + "ALDIOR" wordmark
- Live typewriter/animated text in the hero appears to render a question mark artifact
- Logo image exists at `/assets/uploads/642952176_18050180807503559_3939477048185680875_n-1.jpg`

## Requested Changes (Diff)

### Add
- Luxury visual enhancements throughout: refined spacing, subtle gold accents, elevated typography hierarchy
- A dedicated full-width logo showcase in the hero (replacing "ALDIOR" text) -- display the AD monogram brand logo image prominently and beautifully centered
- Cinematic ambient lighting/glow effect behind the logo in the hero
- Thin horizontal gold/cream rule separators between major sections
- Subtle hover shimmer on product cards
- Premium feel to the marquee strip (slightly larger, more refined)

### Modify
- **Hero**: Remove the large "ALDIOR" text heading from the hero. Instead, display the brand logo image (AD monogram) large and centered as the hero focal point -- clean, no text clutter. Keep the tagline and CTA below it. Keep the background image and parallax.
- **Hero typewriter/live text**: Remove or fix the question mark artifact -- ensure the tagline text renders cleanly with no stray characters
- **Header logo**: Ensure the AD monogram logo image displays properly (correct sizing, no distortion, crisp rendering). Make logo slightly larger and give it a subtle white background or just ensure it's visible on dark bg.
- **Typography**: Slightly tighten letter-spacing and improve font hierarchy for a more editorial, ultra-luxury feel
- **Buttons**: Upgrade CTA button to feel more premium -- thinner border, refined hover state
- **Color**: Introduce very subtle warm gold (#c9a96e style) accent where appropriate (e.g., dividers, category tile underlines, footer accents) to reinforce luxury

### Remove
- Remove the "ALDIOR" h1 text from the hero (replace with logo image)
- Remove any question mark or stray character from the animated/live text in the hero section

## Implementation Plan
1. Update `HomePage.tsx` Hero component: replace `<h1>ALDIOR</h1>` with the brand logo image displayed large and centered; fix any typewriter text rendering issues
2. Update `Header.tsx`: ensure logo image renders crisp and properly sized; maybe increase logo image size slightly
3. Update `index.css`: add gold accent token, refine brand animations, add premium shimmer/glow effects, add gold divider utilities
4. Enhance product cards and category tiles with subtle luxury refinements
5. Add thin gold/cream horizontal dividers between page sections on HomePage
6. Validate and build
