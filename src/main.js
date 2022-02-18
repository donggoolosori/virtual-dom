import render from './render';

/** @jsx h */
function h(type, props, ...children) {
  return { type, props, children: children.flat() };
}

const state = [
  { id: 1, completed: false, content: 'todo list item 1' },
  { id: 2, completed: true, content: 'todo list item 2' },
];

const virtualDom = (
  <div id="app">
    <ul>
      {state.map(({ completed, content }) => (
        <li className={completed ? 'completed' : null}>
          <input type="checkbox" className="toggle" checked={completed} />
          {content}
          <button className="remove">삭제</button>
        </li>
      ))}
    </ul>
    <form>
      <input type="text" />
      <button type="submit">추가</button>
    </form>
  </div>
);

render(virtualDom, document.getElementById('root'));
