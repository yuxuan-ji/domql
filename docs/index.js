var converter = new showdown.Converter({'ghCodeBlocks': true});
document.getElementById("html-mdown").innerText = html_beautify(document.querySelector('*').innerHTML, {indent_size: 2});
