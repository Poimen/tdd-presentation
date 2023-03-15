import 'reveal.js/dist/reset.css';
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/moon.css';
import 'reveal.js/plugin/highlight/monokai.css';
import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';
import HighLight from 'reveal.js/plugin/highlight/highlight.js';
import Notes from 'reveal.js/plugin/notes/notes.js';
import RMath from 'reveal.js/plugin/math/math.js';

let deck = new Reveal({
   plugins: [ Markdown, HighLight, Notes, RMath ]
})
deck.initialize({
  controls: true,
  progress: true,
  history: true,
  center: true,
});
