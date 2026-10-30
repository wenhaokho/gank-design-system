# Gank UI screenshots — ganknow.com

Full-page captures of every reachable page of https://ganknow.com/, taken on 2026-10-30
while signed in as `w3nh4o`, in Chrome at a 1280×825 viewport (site language: Indonesian).
Each PNG is the whole page stitched from scrolled frames; the fixed sidebar is kept once
at the top.

| Folder | Module (sidebar) | Pages |
|---|---|---|
| `01-dashboard` | Dasbor | `/` |
| `02-feed` | Feed | `/feed` (first 3 screens — the feed is infinite scroll) |
| `03-explore` | Jelajahi | `/explore` |
| `04-chats` | Pesan | `/chats` |
| `05-keuangan` | Keuangan | Pesanan (Terjual / Terbeli / Unduhan), Transaksi (Pembayaran / Pendapatan), Dompet, Langganan, Voucher |
| `06-pengaturan` | Pengaturan | Akun, Profil, Saran |
| `07-notifikasi` | bell icon | `/manage/notifications` |
| `08-pengaturan-kreator` | Pengaturan Kreator | Tip, Toko (+ tambah / edit listing), Keanggotaan, Stream (5 tabs), Postingan (Diterbitkan / Dijadwalkan / edit post), Diskon, Widgets, Supporter |
| `09-halaman-publik` | public pages | own profile (Profil / Feed / Toko / Membership / Commission tabs), post detail, listing detail, another creator's profile (`/senyuki`) |
| `10-sumber-daya` | Sumber Daya | Boost, Gank Creator Sponsor (`/creator-grant`) |
| `11-legal` | footer links | Ketentuan penggunaan, Kebijakan Privasi, Kebijakan Pengembalian Dana, FAQ |

`design-system/` holds the tokens, brand book and component previews derived from these
captures (also published as a Claude Design System artifact).

Not in this public repo (kept locally, see `.gitignore`): Feed, Pesan, Pemberitahuan, Akun,
Dompet, Transaksi, Langganan, Pesanan and the five Stream tabs, because they show
account-private data such as secret overlay URLs, email, wallet history and DMs.

Not captured: `Creator University` (external site, learn.ganknow.com) and
`/manage/my-posts/drafts` (returns 404 on the live site).

Known cosmetic gaps: on the Membership and Commission profile tabs the sticky header bar
is hidden; on the other creator's profile the sticky right column (Dukung Saya / Toko /
Top Supporter) appears only in the first screen.
