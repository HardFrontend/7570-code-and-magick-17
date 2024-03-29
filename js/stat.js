'use strict';
(function () {

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 110;
var CLOUD_Y = 10;
var GAP = 10;
var GAP_Y = 80;
var FONT_GAP = 16;
var TEXT_WIDTH = 50;
var BAR_HEIGHT = 20;
var barWidth = CLOUD_WIDTH - GAP - TEXT_WIDTH - GAP;

var renderCloud = function(ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function(arr) {
    var maxElement = arr[0];

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > maxElement) {
            maxElement = arr[i];
        }
    }

    return maxElement;
};

window.renderStatistics = function(ctx, players, times) {
    renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
    renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

    ctx.fillStyle = '#000';
    ctx.fonf = '16px,PT Mono';
    ctx.textBaseline = 'hanging';
    ctx.fillText('Ура вы победили!', 120, 40);
    ctx.fillText('Список результатов:' , 120, 60);
    var maxTime = getMaxElement(times);

    for (var i = 0; i < players.length; i++) {
        ctx.fillText(players[i], CLOUD_X + GAP, CLOUD_Y + GAP + GAP_Y + FONT_GAP + (GAP + BAR_HEIGHT) * i);
        ctx.fillRect(CLOUD_X + GAP + TEXT_WIDTH, CLOUD_Y + GAP + GAP_Y + 10 + (GAP + BAR_HEIGHT) * i, (barWidth * times[i]) / maxTime, BAR_HEIGHT);
    }
};
})();