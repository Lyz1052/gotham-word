//预加载脚本，不输出到页面上
function _replaceReply(origin) {
    var res = '';
    for (var i = 0; i < origin.length; i++) {
        var find = jt.indexOf(origin.charAt(i));
        res += find < 0 ? origin.charAt(i) : ft[find];
    }
    return res.length < 10 ? res.replace(/$/, ' '.repeat(10 - res.length)) : res;
}

function falseText(id) {
    var fid = 'false' + id, origin = document.getElementById(id),value = origin.value;
    origin.outerHTML = origin.outerHTML.repeat(2);
	var fake = document.getElementById(id);
    fake.id = fid;
	var origin = document.getElementById(id);
	fake.value = value
	origin.value = _replaceReply(value)
	fake.style.cssText = 'color:black';
    origin.style.cssText = 'display:none';
    fake.setAttribute('onkeydown', '_copyTo(this)');
}
falseText('vmessage');
falseText('fastpostmessage');
