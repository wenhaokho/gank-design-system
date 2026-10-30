# Chart

Dashboard time series ('Total Pendapatan', 'Pengikut / Pendukung / Subscribers'). The card head is a coloured dot, the series name in `label` weight, then the current value in `stat` with its unit in `ink-muted`. The plot sits in a `bg-inset` well: a faint `line` grid, day labels along the bottom in `ink-faint` (11px), lines 2px in the series colour with a 12% area fill; the followers chart uses three series in brand red, violet and orange with a square-swatch legend above. When there is no data the well shows the EmptyState instead of an empty axis.

Consumer provides: the series name, value and unit, labels and points on one scale; colours come from the tokens (`brand`, `info`, `success`).
