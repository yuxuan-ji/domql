// Sidebar button
// Toggle between showing and hiding the sidebar, and add overlay effect
function w3_open() {
  // Get the Sidebar
  var sidebar = document.getElementById("sidebar");

  // Get the DIV with overlay effect
  var overlayBg = document.getElementById("overlay");    
  if (sidebar.style.display === 'block') {
    sidebar.style.display = 'none';
    overlayBg.style.display = "none";
  } else {
    sidebar.style.display = 'block';
    overlayBg.style.display = "block";
  }
}

// Close the sidebar with the close button
function w3_close() {
  // Get the Sidebar
  var sidebar = document.getElementById("sidebar");

  // Get the DIV with overlay effect
  var overlayBg = document.getElementById("overlay");    
  sidebar.style.display = "none";
  overlayBg.style.display = "none";
}


// Set current page markup to innerHTML
converter = new showdown.Converter({'ghCodeBlocks': true});

document.addEventListener('DOMContentLoaded', function(event) {
  var content = html_beautify(document.querySelector('#demo-targets').innerHTML, {indent_size: 2});
  document.getElementById("current-page-html").innerText = content;
});

// Code highlighting
document.addEventListener('DOMContentLoaded', function(event) {
  hljs.initHighlightingOnLoad();
});

// Initialize searchbar autosuggest
document.addEventListener('DOMContentLoaded', function(event) {
  var comboplete = new Awesomplete('input.dropdown-input', {
    minChars: 0,
  });
  Awesomplete.$('.dropdown-btn').addEventListener("click", function() {
    if (comboplete.ul.childNodes.length === 0) {
      comboplete.minChars = 0;
      comboplete.evaluate();
    }
    else if (comboplete.ul.hasAttribute('hidden')) {
      comboplete.open();
    }
    else {
      comboplete.close();
    }
  });
});

// Function to output domql output
function domqlsearch() {
  var outp = document.querySelector('#domql-output');
  outp.innerText = "";

  var query = document.getElementById("domql-search").value;
  try {
    var cursor = new domql.Domql(query);
    var result = cursor.execute();

    var out = "Found " + result.length + " result(s).\n";
    result.forEach(function(node) {
        out += node.outerHTML + '\n';
    });

  } catch (error) {
    out = error.message;
  }

  var content = html_beautify(out, {indent_size: 2});
  outp.innerText = content;
  hljs.highlightBlock(outp);

}