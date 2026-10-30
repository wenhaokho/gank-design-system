# Toggle

A 44×24 switch that turns `brand` red when on. In settings it lives inside a **setting row**: title in `label`, one-sentence description in `body` at `ink-muted`, toggle on the right ('Aktifkan Peringatan Streaming', 'Terima tip', 'Menanggung Biaya Pembayaran'). Changes apply immediately or with the panel's 'Simpan Perubahan' cta; say which in the description.

Consumer provides: `aria-checked`, the title, and the description. `Gank.init()` wires the click.
