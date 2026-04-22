

## Goal

Apply the new "Shader Lines" WebGL shader (from the snippet you shared) as the background of the **landing page hero only**. All other pages and sections stay exactly as they are.

## What changes

The site already has a `ShaderBackground` component wrapping a `ShaderAnimation` shader. The shader running today is a colorful "holographic palette" fractal. You want the new **line-field shader** (thin RGB lines streaming across the screen) instead — but only behind the hero on `/`.

## Approach

1. **Add a new shader component** `src/components/ui/shader-lines-rgb.tsx`
   - Port the snippet to the project's existing pattern (same one used by current `shader-lines.tsx`):
     - Use the installed `three` npm package — not the CDN `<script>` tag (CDN breaks SSR/CSP and is already disallowed in this project).
     - Proper JSX return wrapping a `<div ref>` container (the snippet you pasted has an empty return — needs fixing).
     - Cap `devicePixelRatio` at 2, use `ResizeObserver`, full GPU cleanup on unmount, respect `prefers-reduced-motion`.
   - Tint the shader to match the site palette: multiply the final RGB by a warm holographic mix (`#C084FC` / `#FB923C` / `#F472B6` / `#60A5FA` blend) so the lines read as the same purple/orange/pink/blue family already used in `HoloOrb` and `holo-text`, instead of pure RGB.

2. **Add a new wrapper** `src/components/ShaderLinesBackground.tsx`
   - Same shape as existing `ShaderBackground.tsx` (absolute inset-0, -z-10, dark radial vignette overlay so hero text stays legible on `#0A0A0A`).
   - Renders the new `ShaderLinesRGB` component, client-only via `useEffect` mount guard.
   - Accepts `opacity` prop (default `0.22`) so it sits subtly behind the hero copy.

3. **Swap it into the hero only** in `src/routes/index.tsx`
   - Replace the `<ShaderBackground opacity={0.25} />` currently inside the hero `<section>` with `<ShaderLinesBackground opacity={0.22} />`.
   - Leave the second `ShaderBackground` (in the bottom "Start project" CTA section) untouched — keeps that section's existing look.
   - Do not touch `/about`, `/services`, `/projects`, `/contact`, `Nav`, `Footer`, or any other component.

## Palette / styling rules

- Background stays `#0A0A0A`. Vignette overlay unchanged from current `ShaderBackground`.
- Line colors tinted to the site's holographic family (purple → orange → pink → blue), not raw RGB, so it visually belongs with `HoloOrb` and the gradient "AI" wordmark.
- Opacity tuned low (~0.22) so headline, CTAs, and the floating orb remain the focal point.

## Out of scope (explicitly unchanged)

- All other routes
- Existing `ShaderBackground` / `shader-lines.tsx` files (kept as-is for the bottom CTA)
- Logo / nav / footer / services data / project images / contact emails

## Technical notes

- No new dependencies — `three` is already installed.
- No CDN script injection, no `window.THREE` global — uses the bundled `three` import like the existing shader.
- New files: `src/components/ui/shader-lines-rgb.tsx`, `src/components/ShaderLinesBackground.tsx`. One edited file: `src/routes/index.tsx` (single line swap inside the hero section).

