"use strict";
(function () {
    var dataAccess = dataAccessModule, domManipulator = domManipulationModule;
    //Loading initial setups.
    dataAccess.getInitialConfig(domManipulator.getStart);
    //Binding Button click
    document.querySelector(".start-button").addEventListener("click", function () {
        domManipulator.resetGame();
        dataAccess.getResult(domManipulator.startSpin);
    });
})();
