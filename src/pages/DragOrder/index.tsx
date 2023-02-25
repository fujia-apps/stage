import { useEffect } from 'react';

import { Draggable } from './Draggable';
import { Container } from './styles';

export const DragOrder = () => {
  useEffect(() => {
    new Draggable({
      element: document.querySelector('.list'),
    });
  }, []);
  return (
    <Container>
      <ul className="list">
        <li className="list-item">111</li>
        <li className="list-item">222</li>
        <li className="list-item">333</li>
        <li className="list-item">444</li>
        <li className="list-item">555</li>
        <li className="list-item">666</li>
        <li className="list-item">777</li>
        <li className="list-item">888</li>
        <li className="list-item">999</li>
      </ul>
    </Container>
  );
};
