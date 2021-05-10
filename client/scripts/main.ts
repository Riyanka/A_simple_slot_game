(() => {
  let dataAccess: any = dataAccessModule,
    domManipulator: any = domManipulationModule;

  //Loading initial setups.
  dataAccess.getInitialConfig(domManipulator.getStart);

  //Binding Button click
  (document.querySelector(
    ".start-button"
  ) as HTMLButtonElement).addEventListener("click", () => {
    domManipulator.resetGame();
    dataAccess.getResult(domManipulator.startSpin);
  });
})();
