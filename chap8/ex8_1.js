function jQuery(a, c) {

    if (a && a.constructor == Function && jQuery.fn.ready)
        return jQuery(document).ready(a);

    a = a || jQuery.context || document;

    if (a.jQuery)
        return $(jQuery.merge(a, []));

    if (c && c.jquery)
        return $(c).find(a);

    if (window == this)
        return new jQuery(a, c);

    var m = /^[^<]*(<.+>)[^>]*$/.exec(a);
    if (m) a = jQuery.clean([m[1]]);

    this.get(a.constructor == Array || a.length && !a.nodeType && a[0] != undefined && a[0].nodeType ?
        jQuery.merge(a, []) :
        jQuery.find(a, c));

    var fn = arguments[arguments.length - 1];

    if (fn && fn.constructor == Function)
        this.each(fn);
}