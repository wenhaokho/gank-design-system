# Slider

Stream-settings ranges: Volume Suara, Durasi Peringatan, Penundaan Teks, Ketebalan Kotak Tampilan. A 6px track in `bg-control` filled `brand` up to the thumb, an 18px `ink` thumb, the label above in `label` weight with a ? hint icon, and the value in a small tooltip under the thumb ('40px'). The spam-safety slider is a stepped variant with five labelled stops (Mati · Rendah · Sedang · Tinggi · Sangat Tinggi).

Consumer provides: label, range, current value and, for stepped sliders, the stop labels. `Gank.init()` keeps the fill in sync.
