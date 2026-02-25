// blocks/highlight/highlight.js

export default function decorate(block) {
  const wrapper = document.createElement('div');
  wrapper.className = 'highlight-inner';

  while (block.firstChild) {
    wrapper.appendChild(block.firstChild);
  }

  const label = document.createElement('div');
  label.className = 'highlight-label';
  label.textContent = 'Highlight';

  block.textContent = '';
  block.classList.add('highlight');
  block.appendChild(label);
  block.appendChild(wrapper);
}
