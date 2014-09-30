(function(window, document, $) {

  /*
   * Helper to escape html so that it's displayed properly
   */
  var entityMap = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': '&quot;',
    "'": '&#39;',
    "/": '&#x2F;'
  };

  function escapeHtml(string) {
    return String(string).replace(/[&<>"'\/]/g, function (s) {
      return entityMap[s];
    });
  }

  /*
   * The html that will be inserted into our element
   */
  var term = {
    top: '\
  <div class="terminal-window"> \
    <div class="terminal-toolbar"> \
    <div class="terminal-top"> \
      <div class="terminal-menu"> \
      </div> \
      <div class="terminal-buttons"> \
        <div class="terminal-button terminal-close"> \
          <div class="terminal-close-icon">X</div> \
        </div> \
      </div> \
      <div class="terminal-title"> \
        user@localhost:~ \
      </div> \
    </div> \
  </div> \
  <div class="terminal-body"><p> \
  ',

  bot: '\
      </p> \
    </div> \
  </div> \
  '
  };


  $.fn.extend({
    simpleterm: function(text) {
      var myContent = text || this.text(),
          arrayContent = myContent.split('\n');
          result = '';

      $.each(arrayContent, function(i, line) {
        // Make sure there's text to avoid blank spaces
        if(line.length) {
          result = result + escapeHtml(line) + '<br />';
        }
      });

      // Place html inside our element
      this.html(term.top + result + term.bot);

      // Return this for chaining
      return this;
    }
  });
})(window, window.document, jQuery);
