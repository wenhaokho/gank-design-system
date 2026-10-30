# NotificationItem

A row on the Pemberitahuan page: a 44px avatar (or a heart disc in `brand` for post notifications), one sentence with the actor's name in `label` weight ('**istarx** created a new listing. Check it out now.'), and the relative time in `caption` under it. Rows are separated by hairlines, 16px of padding each side, and load more on scroll with a spinner at the bottom. Notification copy is currently English even in the Indonesian locale; keep the sentence pattern "<actor> <did what>. <call to action>."

Consumer provides: actor, avatar or kind, message, time.
