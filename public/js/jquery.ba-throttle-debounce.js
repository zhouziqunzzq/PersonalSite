/*!
 * jQuery throttle / debounce - v1.1 - 3/7/2010
 * http://benalman.com/projects/jquery-throttle-debounce-plugin/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
!function(n,t){"$:nomunge";var u,e=n.jQuery||n.Cowboy||(n.Cowboy={});e.throttle=u=function(n,u,o,i){function r(){function e(){c=+new Date,o.apply(f,d)}function r(){a=t}var f=this,g=+new Date-c,d=arguments;i&&!a&&e(),a&&clearTimeout(a),i===t&&g>n?e():u!==!0&&(a=setTimeout(i?r:e,i===t?n-g:n))}var a,c=0;return"boolean"!=typeof u&&(i=o,o=u,u=t),e.guid&&(r.guid=o.guid=o.guid||e.guid++),r},e.debounce=function(n,e,o){return o===t?u(n,e,!1):u(n,o,e!==!1)}}(this);
