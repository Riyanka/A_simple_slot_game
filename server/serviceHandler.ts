const config = require("./config");

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
function getInitialCOnfig(request: string, response: any) {
  response.json(config.appConfig);
}

/*
 * API handler method
 * Generates winning number sequence array and flag indicating whether or not to trigger bonus round and sends the response as JSON object
 * @param {_request} request string
 * @param {response} response variable
 */
function getResult(request: string, response: any) {
  const result: any = {
      selection: [0, 0, 0],
      bonusRoundActivated: false,
    },
    max: number = config.appConfig.images.length,
    min: number = 1,
    columns: number = config.appConfig.columns;

  let bonusRound;

  for (let i = 0; i < columns; i++) {
    result.selection[i] = Math.floor(Math.random() * (max - min + 1)) + min;
  }

  bonusRound = Math.floor(Math.random() * (max - min + 1)) + min;

  result.bonusRoundActivated = bonusRound == 5 ? true : false;

  response.json(result);
}

module.exports = {
  getInitialCOnfig,
  getResult,
};
