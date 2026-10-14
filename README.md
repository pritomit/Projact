# PRITOMX E-Commerce Elite 3D

A responsive Next.js 14 + TypeScript demo store with a Three.js product showcase, product search and categories, 3D tilt cards, wishlist, cart drawer, coupons, and demo checkout.

## Run on your computer
1. Install Node.js 20 LTS.
2. Extract this ZIP.
3. Open a terminal in this folder and run:
   ```bash
   npm install
   npm run dev
   ```
4. Open `http://localhost:3000`.

Production build: `npm run build`, then `npm run start`.

Demo coupon codes: `PRITOM10` (10% off), `SAVE20` (20% off).

## Important
This is a frontend demonstration. Cart state is stored in the browser, and checkout only displays a local demo confirmation; no payment is taken and stock is not updated on a server. Before production, add server-side authentication, database persistence, atomic inventory updates, validated API routes, and a payment provider's server-side checkout. Never expose secrets in browser code.

Product photos are remote Unsplash images and need an internet connection. Styling uses Tailwind utilities; ShadCN components are not installed.

📋 PRITOMX E-Commerce Elite 3D — Master Prompt

নিচের prompt-টি copy করে যেকোনো AI coding assistant (Claude, GPT, Cursor, Windsurf) কে দিলে হুবহু এই Next.js 14 e-commerce application তৈরি হবে।

---

🎯 PROMPT (Copy-Ready)

```
You are a senior Next.js 14 engineer. Build a production-ready, single-page 
e-commerce application called "PRITOMX E-Commerce Elite 3D" using the exact 
stack and specification below. Do NOT ask clarifying questions — generate all 
files completely in one response.

═══════════════════════════════════════════════════════════
STACK & SETUP
═══════════════════════════════════════════════════════════
Framework : Next.js 14 (App Router, TypeScript, src-dir=false)
Styling   : Tailwind CSS + custom CSS (dark glassmorphism)
State     : Zustand with persist middleware
Animation : Framer Motion
3D        : Three.js + @react-three/fiber + @react-three/drei
Icons     : lucide-react

Setup command:
  npx create-next-app@14 pritomx-ecommerce-elite \
    --typescript --tailwind --eslint --app --src-dir=false \
    --import-alias "@/*"
  npm install zustand framer-motion three @react-three/fiber \
    @react-three/drei lucide-react
  npm install -D @types/three

File structure (create EXACTLY these files):
  app/globals.css
  app/layout.tsx
  app/page.tsx
  components/3d/ProductShowcase.tsx
  components/ui/ProductCard3D.tsx
  lib/products.ts
  lib/store.ts
  .env.example
  vercel.json

═══════════════════════════════════════════════════════════
DESIGN SYSTEM
═══════════════════════════════════════════════════════════
• Theme      : Premium dark glassmorphism
• Background : #07070B base with violet (#8B5CF6) + cyan (#06B6D4) 
               radial gradients
• Glass      : bg-white/[0.03] with border-white/10
• Gradients  : from-violet-500 to-cyan-500 (primary CTA)
• Typography : font-black headings, tracking-widest uppercase 
               micro-labels
• Radius     : rounded-[20px] for cards, rounded-xl for buttons
• Motion     : subtle fade + y-offset on mount; spring physics for 
               drawer/tilt
• Accessibility:
   - prefers-reduced-motion respected (disable tilt/float)
   - aria-labels on every icon button
   - role="dialog" + aria-modal on drawer/modal
   - Escape key closes drawer + modal
   - focus-visible ring in cyan

═══════════════════════════════════════════════════════════
FEATURES (ALL REQUIRED)
═══════════════════════════════════════════════════════════
1. HERO SECTION
   - Gradient headline "Beyond Ordinary. Into Elite."
   - Two CTAs: Explore Collection + Explore 3D
   - Stats row (12 products / 4 categories / 3D UI)

2. 3D SHOWCASE (components/3d/ProductShowcase.tsx)
   - <Canvas> with floating box + torus + distorted icosahedron
   - Float, OrbitControls (autoRotate), Environment preset="city"
   - MeshDistortMaterial for organic distortion
   - Suspense fallback: "Loading 3D experience..."
   - WebGL fallback message for unsupported devices
   - Respect useReducedMotion (freeze rotation & float)

3. PRODUCT CATALOGUE (12 fictional products)
   - Categories: Tech, Lifestyle, Audio, Gaming
   - Each product: id, name, category, description, price, 
     compareAtPrice, stock, badge?, color, image
   - Use Unsplash image URLs (photo-1505740420928-5e560c06d30e 
     style)
   - Two coupons: PRITOM10 (10%), SAVE20 (20%)

4. PRODUCT CARD 3D TILT (components/ui/ProductCard3D.tsx)
   - Mouse-tracking rotateX/rotateY using useMotionValue + 
     useSpring + useTransform
   - transformStyle: preserve-3d, translateZ on inner layers
   - Wishlist heart toggle (filled when active)
   - Add-to-cart button with gradient
   - Stock indicator text
   - Disabled state at stock=0
   - Reduced-motion: skip tilt entirely

5. SMART CART (Zustand + persist)
   - addToCart / removeFromCart / setQuantity with stock 
     validation at EVERY mutation
   - Quantity cannot exceed product.stock
   - Quantity <= 0 auto-removes item
   - Wishlist persistence
   - Coupon apply/clear with validation
   - lastMessage string for toast feedback
   - checkoutDemo(): revalidates stock, computes subtotal/
     discount/total, creates Order object with id `PX-<base36 
     timestamp>`, clears cart, saves to orders[] (max 50)
   - Persist key: "pritomx-elite-store-v1"
   - partialize: only cart, wishlist, coupon, orders

6. STOREFRONT (app/page.tsx)
   - Sticky glassmorphic header with cart badge
   - Live search (name + description + category)
   - 5 category filter pills (All + 4)
   - Wishlist-only toggle
   - Filtered product grid (4-col XL, 3-col LG, 2-col SM, 
     1-col mobile)
   - Empty state with Reset filters button
   - Staggered fade-in animation per card (cap delay 0.3s)

7. CART DRAWER
   - Slide-in from right (spring damping 28)
   - Backdrop with backdrop-blur-sm
   - Line items with +/- controls + remove
   - Coupon input form
   - Subtotal / Discount / Total breakdown
   - "Complete Demo Checkout" button
   - Explicit disclaimer: "No payment details collected. No 
     real payment processed."

8. ORDER HISTORY MODAL
   - Centered modal with backdrop
   - Lists past demo orders (id, date, total, item count, 
     coupon)
   - "Demo order · No payment taken" badge per order

9. TOAST SYSTEM
   - role="status" aria-live="polite"
   - Auto-dismiss after 3.2s
   - Synced from store.lastMessage + local onToast callback

═══════════════════════════════════════════════════════════
CRITICAL CONSTRAINTS
═══════════════════════════════════════════════════════════
✅ Frontend-only — NO real backend, NO payment processing
✅ Stock limits enforced ONLY within local cart (document 
   cross-user oversell limitation in a comment)
✅ Add a visible footer note: "Admin note: frontend only. 
   Catalogue, stock, coupons and demo orders are not backed 
   by a production API."
✅ .env.example contains MONGODB_URI + STRIPE_SECRET as 
   COMMENTED placeholders only
✅ robots: { index: false, follow: false } in metadata
✅ vercel.json with framework: "nextjs"
✅ All images use loading="lazy"
✅ No console.log statements in production code
✅ No "use client" missing where hooks are used

═══════════════════════════════════════════════════════════
OUTPUT FORMAT
═══════════════════════════════════════════════════════════
For EACH file output in this order:
  1. Full file path as heading
  2. Complete code in fenced code block with correct language
  3. NO truncation, NO "// ... rest of code" placeholders

After all files, append:
  - Setup instructions (dev + build + deploy)
  - 10-point feature verification checklist
  - "Pre-production hardening" section covering: backend 
    API routes, atomic inventory transactions, auth, Stripe 
    server-side flow, ShadCN migration

Begin immediately. Generate the entire codebase.
```

---

🎨 PROMPT-এর ব্যাখ্যা (কেন এই অংশগুলো?)

Section কেন গুরুত্বপূর্ণ
Stack version pinning Next.js 14 vs 15-এ App Router-এ পার্থক্য আছে; pin না করলে AI ভুল version ধরবে
File structure explicit AI প্রায়ই src/ folder যোগ করে ফেলে বা component path ভুল করে
Design tokens নির্দিষ্ট hex, radius, gradient না দিলে AI generic purple theme বানাবে
Feature checklist (১–৯) Step-by-step না দিলে AI অর্ধেক feature skip করে
"NO truncation" clause বড় codebase-এ AI মাঝপথে // ... লিখে থামিয়ে দেয়
Accessibility requirements aria-label, role, Escape key ছাড়া production-ready হয় না
Critical constraints "Frontend-only" clause না থাকলে AI Stripe keys hardcode করে দেবে
Output format Consistent heading + code block format ছাড়া copy-paste কষ্টকর

---

🔁 Variations (প্রয়োজন অনুযায়ী)

A. যদি মূল HTML demo থাকে, উপরের prompt-এ যোগ করুন:

```
Here is the original single-file demo HTML to preserve exact 
product names, images, and layout:

<paste your HTML here>

Match all 12 products, branding colors, section order, and 
existing features 1:1.
```

B. MongoDB integration সহ চাইলে, "CRITICAL CONSTRAINTS" এর আগে যোগ করুন:

```
BACKEND (Optional extension):
- Create app/api/products/route.ts (GET all, GET by id)
- Create app/api/orders/route.ts (POST with atomic stock 
  decrement using findOneAndUpdate with $inc guard)
- Use mongoose with MongoDB Atlas connection from 
  process.env.MONGODB_URI
- Server actions for addToCart to validate stock 
  server-side
```

C. Admin dashboard সহ চাইলে:

```
ADMIN PANEL (app/admin/):
- /admin → product CRUD table
- /admin/orders → order list with status toggle
- Protect via middleware.ts checking session cookie
- Reuse same glassmorphism design
```

---

📌 Pro Tips

1. Cursor-এ চালালে: প্রতিটি file আলাদা করে generate করতে বলুন ("Now generate only components/3d/ProductShowcase.tsx") — context window বাঁচবে।
2. Claude 3.5 Sonnet / GPT-4o এই ধরনের multi-file task-এ সবচেয়ে ভালো result দেয়।
3. --no-turbopack flag যোগ করুন build command-এ যদি error আসে।
4. Vercel deploy করার আগে robots: noindex সরিয়ে দিন।
5. প্রথমবার চালালে npm run dev-এ 3D slow লাগলে dpr={[1, 1.5]} কমিয়ে [1, 1] করুন।

---

এই prompt-টি ব্যবহার করে আপনি চাইলে আমি এখনই পুরো codebase generate করে দিতে পারি — শুধু বলুন "generate করো"।