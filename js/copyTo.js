/*
//String.padEnd方法只支持57版本以上的...
function _replaceReply(origin) {
    var res = '';
    for (var i = 0; i < origin.length; i++) {
        var find = jt.indexOf(origin.charAt(i));
        res += find < 0 ? origin.charAt(i) : ft[find];
    }
    return res.length < 10 ? res.replace(/$/, ' '.repeat(10 - res.length)) : res;
}

function _copyTo(e) {
    var id = e.id;
    var real = document.getElementById(id.replace('false', ''));
    real.value = _replaceReply(e.value);
}

*/
var script=document.createElement('script');

script.text="function _replaceReply(origin){var res='';for(var i=0;i<origin.length;i++){var find=jt.indexOf(origin.charAt(i));res+=find<0?origin.charAt(i):ft[find];}return res.length<10?res.replace(/$/,' '.repeat(10-res.length)):res;}"
script.text+="function _copyTo(e){var id=e.id;var real=document.getElementById(id.replace('false',''));real.value=_replaceReply(e.value);}";
document.body.append(script);