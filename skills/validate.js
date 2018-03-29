var apimap = require('.apimap');

module.exports = function(controller) {

    var getValidation = function(swaggerUrl) {
        return swaggerUrl;
    };
    var validate = function(bot, message) {
        if (message.match[1]) {
            var swagUrl = message.match[1];
            if (apimap && apimap[message.match[1].toLowerCase()]) {
                swagUrl = apimap[message.match[1]];
            }
            var validationResults = getValidation(swagUrl);
            bot.reply(message, validationResults);
        } else {
            bot.reply(message, 'Please supply a swagger url or known api to validate.')
        }
    }
    controller.hears(['^swagbot validate (.*)','^swagbot validate'], 'ambient', validate);
    controller.hears(['^validate (.*)','^validate'], 'direct_message,direct_mention', validate);

}