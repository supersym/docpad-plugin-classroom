javascript: {
  var %20d = document
    , w = window
    , bd = d.getElementsByName('Description')[0]
    , sd = ''
    , ds = (sd ? sd.content : (bd ? bd.content : ''))
    , rd = d.getElementsByName('Keywords')[0]
    , td = d.getElementsByName('keywords')[0]
    , ks = (rd ? rd.content : (td ? td.content : ''))
    , e = w.getSelection
    , k = d.getSelection
    , x = d.selection
    , s = (e ? e() : (k) ? k() : (x ? x.createRange().text : 0))
    , sl = (s == '' ? ds : s)
    , f = 'http://scriptogr.am//bookmarklet/'
    , l = d.location
    , e = encodeURIComponent
    , p = '?site=' + e(l.href) % 20 + '&keys=' + e(ks) % 20 + '&title=' + e(d.title) % 20 + '&desc=' + e(sl)
    , u = f + p
  ;
  a = function() {
    if(!w.open(u, 't', 'toolbar=0,resizable=0,status=1,width=800,height=600')) % 20l.href = u;
  };
  if(/Firefox/.test(navigator.userAgent)) setTimeout(a, 0); % 20else % 20a();
  void(0)
}
