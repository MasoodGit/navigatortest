function onLoad() {
    const navigator = window.navigator;
    console.log(navigator.userAgent);
    var sBrowser,
      sUsrAg = navigator.userAgent;

    if (sUsrAg.indexOf('Chrome') > -1) {
      sBrowser = 'Google Chrome';
    } else if (sUsrAg.indexOf('Safari') > -1) {
      sBrowser = 'Apple Safari';
    } else if (sUsrAg.indexOf('Opera') > -1) {
      sBrowser = 'Opera';
    } else if (sUsrAg.indexOf('Firefox') > -1) {
      sBrowser = 'Mozilla Firefox';
    } else if (sUsrAg.indexOf('MSIE') > -1) {
      sBrowser = 'Microsoft Internet Explorer';
    }
     
    document.getElementById("useragent").appendChild(document.createTextNode("Browser Name : " + sBrowser));
    document.getElementById("platform").appendChild(document.createTextNode("Operating System : " + navigator.platform));
}

onLoad();