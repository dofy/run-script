var textScript = [
    '我们', '.3',
    '+是', '.3',
    '+清单', '.3',
    '-2',
    '+轻单', '.7',
    'zhege', '.3',
    '-5',
    '这个', '.3',
    '+视界', '.3',
    '-2',
    '+世界', '.7',
    '+是由', '.7',
    '+空气', '.3',
    '+，', '.3',
    '+水', '.3',
    '+和', '.3',
    '+轻单', '.3',
    '+组成的。', '.7',
    ' ', '.7'];

$(function () {
    runScript('#debug', textScript, 100);
});

function runScript(selector, script, delay) {
    var output = $(selector),
        texts = parseScript(script),
        loop = 0,
        count = texts.length;

    setInterval(function () {
        if (loop < count) {
            output.text(texts[loop++]);
        } else {
            loop = 0;
        }
    }, delay);

    function parseScript(script) {
        var result = [],
            last = '';
        for (var text, opt, n, m, i = 0, l = script.length; i < l; i++) {
            text = script[i];
            opt = /^[\.\-\+]/.test(text) ? text[0] : '';
            switch (opt) {
                case '-':
                    for (n = 0, m = parseInt(text, 10); n > m; n--) {
                        last = last.slice(0, -1);
                        result.push(last);
                    }
                    break;
                case '+':
                    text = text.slice(1);
                    for (n = 0, m = text.length; n < m; n++) {
                        last += text.slice(n, n + 1);
                        result.push(last);
                    }
                    break;
                case '.':
                    for (n = 0, m = parseInt(text.slice(1) || 1, 10); n < m; n++) {
                        result.push(last);
                    }
                    break;
                default:
                    for (n = 0, m = text.length; n < m; n++) {
                        last = text.slice(0, n + 1);
                        result.push(last);
                    }
                    break;
            }
        }
        return result;
    }
}
