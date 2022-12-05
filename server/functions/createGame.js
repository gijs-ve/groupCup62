const player1Start = require('../constants/gameData');
const player2Start = require('../constants/gameData');
const ballStart = require('../constants/gameData');
const getRandomStartDirection = require('./getRandomStartDirection');
const createGame = (gameId, player1Id, player2Id) => {
    const game = {
        gameId,
        gameState: 'preGame',
        ball: {
            x: ballStart.x,
            y: ballStart.y,
            direction: getRandomStartDirection(),
        },
        player1: {
            playerId: player1Id,
            x: player1Start.x,
            y: player2Start.y,
        },
        player2: {
            playerId: player2Id,
            x: player2Start.x,
            y: player2Start.y,
        },
    };
    return game;
};

modules.export = createGame;
