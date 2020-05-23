import React from "react";

function ToDoItem(props) {
  const [isDone, setIsDone] = React.useState(false);

  function handleClick() {
    setIsDone(prev => {
      return !prev;
    });
  }
  return (
    <div onClick={handleClick}>
      <li style={{ textDecoration: isDone ? "line-through" : "none" }}>
        {props.text}
      </li>
    </div>
  );
}

export default ToDoItem;
