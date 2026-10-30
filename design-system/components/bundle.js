/* @ds-bundle: {"format":4,"namespace":"Gank","components":[{"name":"Button"},{"name":"Input"},{"name":"Toggle"},{"name":"Tabs"},{"name":"Segmented"},{"name":"Sidebar"},{"name":"Panel"},{"name":"Stat"},{"name":"Table"},{"name":"Status"},{"name":"Alert"},{"name":"EmptyState"},{"name":"TipPanel"},{"name":"ListingCard"},{"name":"PostCard"},{"name":"Chart"},{"name":"QuickActions"},{"name":"Pager"},{"name":"SubscriptionCard"},{"name":"NotificationItem"},{"name":"Upload"},{"name":"Slider"},{"name":"ProfileHeader"},{"name":"Footer"}]} */
(function () {
  // Plain-DOM helpers. The markup lives in each component's README; these only wire behaviour.
  function toggle(el) {
    el.setAttribute('role', 'switch');
    el.addEventListener('click', function () {
      el.setAttribute('aria-checked', el.getAttribute('aria-checked') === 'true' ? 'false' : 'true');
    });
    return el;
  }
  function tabs(strip) {
    var tabs = strip.querySelectorAll('.gk-tab');
    tabs.forEach(function (t) {
      t.setAttribute('role', 'tab');
      t.addEventListener('click', function () {
        tabs.forEach(function (o) { o.setAttribute('aria-selected', o === t ? 'true' : 'false'); });
      });
    });
    return strip;
  }
  function segmented(seg) {
    var opts = seg.querySelectorAll('button');
    opts.forEach(function (b) {
      b.addEventListener('click', function () {
        opts.forEach(function (o) { o.setAttribute('aria-pressed', o === b ? 'true' : 'false'); });
      });
    });
    return seg;
  }
  function slider(input) {
    var set = function () {
      var pct = ((input.value - input.min) / (input.max - input.min)) * 100;
      input.style.setProperty('--fill', pct + '%');
    };
    input.addEventListener('input', set);
    set();
    return input;
  }
  function init(root) {
    root = root || document;
    root.querySelectorAll('.gk-toggle').forEach(toggle);
    root.querySelectorAll('.gk-tabs').forEach(tabs);
    root.querySelectorAll('.gk-seg, .gk-chips').forEach(segmented);
    root.querySelectorAll('.gk-slider').forEach(slider);
  }
  window.Gank = Object.assign(window.Gank || {}, { toggle: toggle, tabs: tabs, segmented: segmented, slider: slider, init: init });
})();
