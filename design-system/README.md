# Gank

Gank (ganknow.com) is a creator monetization platform: fans tip, subscribe to memberships, buy digital goods and commission work; creators run it all from one dark dashboard and present a public profile page. This system documents the product UI **as it ships today** (Indonesian locale, captured 2026-10-30) so new screens match the existing ones. Nothing here is a redesign.

## Two surfaces, two themes

- **Dashboard (dark)** is the creator's workspace: a fixed 280px sidebar on `bg-sidebar`, a near-black `bg` page, and one large `bg-card` panel per page with 32px padding. The first theme in `tokens.json`; everything falls back to it.
- **Public profile (navy)** is what fans see: the same dark icon rail collapsed to 60px, a banner, and cards on the creator's `bg` ground (`#414f6c` by default, creators can customise it). Text is white, the main button turns periwinkle (`cta`). Only `bg`, `bg-card`, `bg-control`, `bg-hover`, `line`, the inks and `cta` change; `brand`, `success`, `danger`, `gold` and `info` are the same in both.

Marketing pages (Boost, Creator Grant) use the dark palette with a top nav instead of the sidebar and the one `display` type style.

## Voice

Indonesian, informal second person (*kamu*), short labels. Page titles are nouns ("Dompet", "Postingan"); buttons are verbs or verb phrases ("Simpan Perubahan", "Tarik Uang", "Muat lebih banyak"). English product terms stay in English: Boost, Membership, Commission, Tip, Leaderboard, Stream. Helper copy explains *why* a setting matters in one sentence under the control. Empty states say what is missing in plain words ("Tidak ada data untuk ditampilkan", "Kamu belum memiliki membership apa pun.") and offer the action that fills them.

## Colour rules

1. Surfaces step up, never shadow: `bg` → `bg-card` → `bg-inset` / `bg-control` → `bg-hover`. A card never sits on a card; use `bg-inset` for a well inside a panel.
2. `brand` red is a signal, not a fill. It marks the wordmark, an active toggle, a slider fill, a selected option's border, the unread dot and the "Baru" tag. Large red fills exist only on marketing pages and the Akun upgrade button (`brand-strong`).
3. The main action in a panel is the light **cta** button (ink-dark text on a light pill), not a red one. One per panel.
4. `success` green is for money going up and verified states; `danger` for inactive/blocked; `gold` only for Gank Gold. Pair every colour with a word or icon; "Tidak Aktif" always has its label.
5. Text on `bg-card`: `ink` for what must be read, `ink-muted` for helper copy and inactive tabs, `ink-faint` only for timestamps and axes.
6. On the profile theme every text colour is a lighter step of the same tokens; never put dark-theme greys on navy.

## Typography

One family, **Noto Sans** (Google Fonts; load `wght@400;600;700`), with Segoe UI / Roboto fallbacks. The hierarchy is weight and size, not colour: `title` 24/600 once per page, `heading` 18/600 for sections and card titles, `label` 15/600 for form labels, sidebar items and tabs, `body` 15/400, `caption` 13/400 for helper text, `eyebrow` 12 for the sidebar group label. Money uses the `balance` and `stat` styles with `font-variant-numeric: tabular-nums`.

## Layout

- Dashboard grid: sidebar 280 · gutter 40 · content panel fills the rest, max about 910px wide at 1280. Panel padding 32, form rows 24 apart, label-to-input 12.
- Controls are 44px tall with 16px side padding; sidebar items and table rows are 48.
- Tabs are an underlined strip inside the panel: active tab in `ink` with a 2px `ink` underline, inactive in `ink-muted`.
- Cards are `radius-lg` (16), controls `radius-md` (10), tags `radius-sm` (6), buttons/toggles/avatars pills.
- Icons are 20px line icons at `ink-muted`, 24px in the sidebar.

## Iconography and logo

The wordmark is the lowercase "gank" in `brand` red; the mark is the red panda face. Both are in `assets/Logos` as cropped PNGs from the live UI (the site ships no SVG we could copy), so treat them as reference and request the vector files from the Gank team before print or large sizes. Sidebar icons are 24px outlined glyphs (feed, compass, chat bubble, dollar circle, gear, person, bar chart, rocket, book). Emoji appear only inside the dashboard's quick-action tiles.

## Components

`components/bundle.css` holds the classes used by every preview (`gk-*`); `components/bundle.js` registers `window.Gank` with small helpers for toggles, tabs, segmented controls and sliders. Previews are plain HTML and need no library. Each component README states what the consumer must provide (labels, states, the one cta per panel).

Groups: **Actions** (Button) · **Forms** (Input, Toggle, Slider, Upload) · **Navigation** (Tabs, Segmented, Sidebar, Pager) · **Layout** (Panel, QuickActions, Footer) · **Data** (Stat, Table, Status, Chart) · **Feedback** (Alert, EmptyState) · **Content** (PostCard, SubscriptionCard, NotificationItem) · **Public profile** (ProfileHeader, TipPanel, ListingCard). Not yet documented: modals/dialogs, the chat thread, the OBS overlay previews and the Boost pricing cards — none were captured in a state worth copying.
