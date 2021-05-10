"use strict";
var config = require("./config");
/*
* This method provide the initial configuration to the application.
* The 3 main properties within appConfig object can be used to customize the application.

* appConfig.columns : Decides no. of slots in the UI.
* appConfig.messages : Decides the output result. Can add more items to the list
* appConfig.images : Supplies initial set of images to the application.

* sends the response as JSON object
* @param {_request} request string
* @param {response} response variable
*/
function getInitialCOnfig(request, response) {
    response.json(config.appConfig);
}
/*
 * API handler method
 * Generates winning number sequence array and flag indicating whether or not to trigger bonus round and sends the response as JSON object
 * @param {_request} request string
 * @param {response} response variable
 */
function getResult(request, response) {
    var result = {
        selection: [0, 0, 0],
        bonusRoundActivated: false,
    }, max = config.appConfig.images.length, min = 1, columns = config.appConfig.columns;
    var bonusRound;
    for (var i = 0; i < columns; i++) {
        result.selection[i] = Math.floor(Math.random() * (max - min + 1)) + min;
    }
    bonusRound = Math.floor(Math.random() * (max - min + 1)) + min;
    result.bonusRoundActivated = bonusRound == 5 ? true : false;
    response.json(result);
}
module.exports = {
    getInitialCOnfig: getInitialCOnfig,
    getResult: getResult,
};
