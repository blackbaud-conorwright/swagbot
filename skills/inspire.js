module.exports = function(controller) {
    var request = require('request');
    var inspiringRoute = 'http://inspirobot.me/api?generate=true';
    var getInspiration = function(bot, message) {
        request(inspiringRoute, function(error, response, body) {
            bot.reply(message, body);
        });
    }
    controller.hears(['^swagbot inspireme', '^swagbot inspire'], 'ambient', getInspiration);
    controller.hears(['^inspireme', '^inspire'], 'direct_message,direct_mention', getInspiration);
}