let dataAccessModule: object = (() => {
  //Service URLs
  const initialConfigURL: string = "/config",
    resultURL: string = "/result";
  //Error messages
  const retriveFailed: string = "Some error occurred while retrieving data.";
  //Method used for API calls
  function callAPI(url: string, callback: any) {
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState == XMLHttpRequest.DONE) {
        if (xmlhttp.status == 200) {
          callback(JSON.parse(xmlhttp.responseText));
        } else {
          errorHandler(retriveFailed);
        }
      }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
  }
  //Private method called on application load for fetching initial configuration
  function fetchInitialConfig(callback: any) {
    callAPI(initialConfigURL, callback);
  }
  //Private method called on button click to fetch the outcomes
  function fetchResult(callback: any) {
    callAPI(resultURL, callback);
  }
  //Error handler
  function errorHandler(msg: string) {
    alert(msg);
  }
  return {
    //Public methods for transferring API response.
    getInitialConfig: function (callback: any) {
      fetchInitialConfig(callback);
    },
    getResult: function (callback: any) {
      fetchResult(callback);
    },
  };
})();
