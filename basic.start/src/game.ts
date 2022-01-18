/**
 * Let's make a game 🕹
 */

type Position = 'up' | 'down' | 'left' | 'right';

let position = {x: 0, y: 0};

const move = (where: Position) => {
  switch (where) {
    case 'up':
      return (position.y = 1);

    case 'down':
      return (position.y = 0);

    case 'left':
      return (position.x = -1);

    case 'right':
      return (position.x = 0);
  }
};
console.log(position); // { x: 0, y: 0}
move('up');
console.log(position); // { x: 0, y: 1}
move('down');
console.log(position); // { x: 0, y: 0}
move('left');
console.log(position); // { x: -1, y: 0}
move('right');
console.log(position); // { x: 0, y: 0}
