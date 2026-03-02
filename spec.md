# ALDIOR

## Current State
Full dark-theme clothing brand website with Hero, Shop, About, Contact pages. Footer has multiple social links (Instagram, Twitter/X, TikTok), placeholder email hello@aldior.com, US address, EST hours, and "Built with love using caffeine.ai" credit. Header shows text "ALDIOR" logo. Prices formatted in USD ($). Shop page has "SS26" label. Contact page has US address, EST timezone, TikTok and Twitter links. MarqueeStrip has "SS26" in text.

## Requested Changes (Diff)

### Add
- Brand monogram logo image in Header (the uploaded AD interlock logo `/assets/uploads/642952176_18050180807503559_3939477048185680875_n-1.jpg`) alongside or replacing plain text ALDIOR — display the image logo, keep "ALDIOR" text next to it or use it as the logo mark
- Good-looking footer with newsletter/email connect section showing ujjwaljain099@gmail.com
- Indian business hours in footer/contact (IST timezone, Mon-Sat 10AM-7PM IST)
- Indian address context (India)

### Modify
- Header: show the uploaded brand logo image (AD monogram) as the logo mark in navbar, make "ALDIOR" text slightly larger/bolder next to it
- Footer: replace all social links with ONLY Instagram (https://www.instagram.com/aldior.in?igsh=end3nxd4agtiexfz), remove Twitter/X and TikTok completely
- Footer: change email to ujjwaljain099@gmail.com
- Footer: change hours to IST (Mon–Sat · 10AM–7PM IST)
- Footer: remove "Built with love using caffeine.ai" line entirely
- Footer: add a "Connect" / newsletter section with email ujjwaljain099@gmail.com prominently displayed
- Footer: redesign to be more premium and editorial — add a large brand statement or quote
- Contact page: remove Twitter/X and TikTok, show only Instagram link with real URL
- Contact page: update email to ujjwaljain099@gmail.com
- Contact page: change address from New York to India (e.g., "India")
- Contact page: change hours from EST to IST (Mon–Sat · 10AM–7PM IST)
- Shop page: remove "SS26" label above the SHOP heading
- HomePage FeaturedSection: remove "SS26 Collection" subtitle label, change to just "New Collection" or "Latest Drops"
- MarqueeStrip: remove "SS26" from the scrolling text
- Prices: convert all prices from USD cents to INR — update formatPrice to display ₹ symbol with Indian number formatting (e.g., ₹4,900)
- Update fallback product prices to realistic INR values (e.g., tee ~₹1,499, hoodie ~₹2,999, bomber ~₹5,999, etc.)

### Remove
- "Built with love using caffeine.ai" footer credit link
- All Twitter/X social links
- All TikTok social links
- "SS26" references everywhere (shop page header label, homepage featured section label, marquee strip)

## Implementation Plan
1. Update `imageMap.ts` formatPrice to use ₹ INR formatting
2. Update fallback product prices in ShopPage.tsx to realistic INR bigint values
3. Update Header.tsx to show the AD logo image alongside ALDIOR text
4. Redesign Footer.tsx: only Instagram, email ujjwaljain099@gmail.com, IST hours, remove caffeine credit, add premium connect section
5. Update ContactPage.tsx: only Instagram with real URL, correct email, India address, IST hours
6. Update HomePage.tsx: remove SS26 from marquee and featured section label
7. Update ShopPage.tsx: remove SS26 label above SHOP heading
