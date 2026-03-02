# ALDIOR

## Current State
New project. No existing code. Building from scratch.

## Requested Changes (Diff)

### Add
- Full landing/marketing website for ALDIOR, a premium men's clothing brand
- Brand name: ALDIOR | Tagline: "BUILD LOUD. WORN LOOSE"
- **Landing/Hero Page**: Full-screen hero with "ALDIOR" text that starts large and zooms out (scale animation), tagline beneath, dramatic entrance feel
- **Header/Nav**: Fixed transparent header with ALDIOR logo, nav links (Home, Shop, About, Contact), Cart icon with item count badge
- **Shop Page**: Product grid with filtering by category (All, Tops, Bottoms, Outerwear, Accessories), product cards with image, name, price, Add to Cart button
- **Cart**: Slide-out cart drawer showing items, quantities, subtotals, checkout CTA
- **About Page**: Brand story section, editorial layout
- **Contact Page**: Contact form (name, email, message), brand details
- **Footer**: Links, social icons, newsletter signup, copyright
- Backend: product catalog stored in Motoko, cart managed client-side in React state/localStorage, contact form submissions stored in backend

### Modify
- None (new project)

### Remove
- None (new project)

## Implementation Plan
1. Select no external Caffeine components needed (pure product + contact)
2. Generate Motoko backend with product catalog (id, name, price, category, description, imageUrl) and contact form submission storage
3. Generate hero, nav, shop, cart, about, contact, footer React components
4. Wire backend product queries to shop page
5. Implement client-side cart state with localStorage persistence
6. Contact form submits to backend
7. Smooth page transitions and scroll animations
