import React from 'react';
import './TodoItem.css';
import { TodoIcon } from '../TodoIcon';
function TodoItem(props) {
  return (
    <li className="TodoItem">
      <span onClick={props.onComplete} className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}>
        <TodoIcon
          icon="check"
          color="green"
        />
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span onClick={props.onDelete} className="Icon Icon-delete">
      <TodoIcon
          icon="trash"
          color="red"
        />
      </span>
    </li>
  );
}

export { TodoItem };
