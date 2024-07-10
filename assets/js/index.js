// option 1: default one
// import GameClass from './game.js';

// window.onload = () => {
//     const game = new GameClass();
//     game.start();
// };

// option 2: use destructure
import {Game} from './game.js';

window.onload = () => {
    const game = new Game();
    game.start();
};
