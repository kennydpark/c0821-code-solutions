import React from 'react';
import ReactDOM from 'react-dom';

function CustomButtom(props) {
  return <button>Click Me!</button>;
}

const element = <CustomButtom />;
ReactDOM.render(element, document.querySelector('#root'));
