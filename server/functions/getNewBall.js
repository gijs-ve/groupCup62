const checkCollision = require('./checkCollision');
const getNewBallPosition = require('./getNewBallPosition');
const getNewBallDirection = require('./getNewBallDirection');
//Returns the new position of the ball
const getNewBall = (ball, player1, player2) => {
    const collision = checkCollision(ball, player1, player2);
    //if there is no collision, return the new position
    if (!collision) {
        return getNewBallPosition(ball);
    }
    //if there is a collision we do the following
    const collidedBall = {
        ...ball,
        direction: getNewBallDirection(ball.direction, collision),
    };
    return getNewBallPosition(collidedBall);
};
modules.export = getNewBall;
