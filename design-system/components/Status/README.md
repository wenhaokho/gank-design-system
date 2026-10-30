# Status

Small state markers. A **dot status** is an 8px dot and a word: `success` for 'Selesai' / 'Terverifikasi', `danger` for 'Tidak Aktif' / 'Belum Diaktifkan', `ink-muted` for 'EXPIRED'. A **pill** (`bg-control`, 13/600) wraps a status with its icon ('✔ Terverifikasi', '🔒 LOCKED', 'Baru' in `brand`). Positive amounts are `success` text with a leading '+'. Colour never carries the meaning alone: every status has its word.

Consumer provides: the kind (`ok`, `off`, neutral) and the label.
