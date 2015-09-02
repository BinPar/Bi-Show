Template.now.rendered = function () {
  Reveal.initialize({
    controls: true,
    progress: true,
    history: true,
    center: true,
    transition: 'concave',
    dependencies: [
      { src: '/lib/js/classList.js', condition: function() { return !document.body.classList; } },
      { src: '/plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); }, callback: function() {}},
      { src: '/plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
      { src: '/plugin/highlight/highlight.js', async: true, condition: function() { return !!document.querySelector( 'pre code' ); }, callback: function() {$('pre code').each(function(i, block) {hljs.highlightBlock(block);});} },
      { src: '/plugin/zoom-js/zoom.js', async: true },
      { src: '/plugin/notes/notes.js', async: true }
    ]
  });
  Meta.setTitle('Bi-Now');
};
