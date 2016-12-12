document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('checkPage');
    checkPageButton.addEventListener('click', function() {
        chrome.tabs.getSelected(null, function(tab) {
            var doc = document;
            var form = doc.createElement('form');
            form.action = 'http://gtmetrix.com/analyze.html?bm';
            form.method = 'post';
            var input = doc.createElement('input');
            input.type = 'hidden';
            input.name = 'url';
            input.value = tab.url;
            form.appendChild(input);
            doc.body.appendChild(form);
            form.submit();
        });
    }, false);
}, false);