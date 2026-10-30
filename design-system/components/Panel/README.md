# Panel

The one `bg-card` container that holds a dashboard page: `radius-lg`, 32px padding, a `title` (24/600) on the left and at most one action on the right ('Dompet', 'Toko + Tambah', 'Stream ↻ Refresh Overlays'). Sections inside use `heading` (18/600) and are separated by 24px. Nested content that needs its own surface uses an **inset** well (`bg-inset`, `radius-md`), never a second card. On the public profile the same panel becomes a **card** with `shadow-card` on the navy ground.

Consumer provides: the title noun and, optionally, one action button.
