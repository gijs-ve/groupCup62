const getNewBall = require('./getNewBall');
//calculates a new ball position for every game in existence
const updateGame = (game) => {
    //a new ball position is calculated by the getNewBall function
    const newBall = getNewBall(game.ball, game.player1, game.player2);
    return { ...game, ball: newBall };
};
modules.export = updateGame;
