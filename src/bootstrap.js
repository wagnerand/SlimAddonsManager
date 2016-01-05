Components.utils.import("resource://gre/modules/Services.jsm");

function startup(data, reason) {
    if (Services.vc.compare(parseFloat(Services.appinfo.platformVersion), 10.0) == -1) {
        Components.manager.addBootstrappedManifestLocation(data.installPath);
    }
    var sss = Components.classes["@mozilla.org/content/style-sheet-service;1"].getService(Components.interfaces.nsIStyleSheetService);
    var ios = Components.classes["@mozilla.org/network/io-service;1"].getService(Components.interfaces.nsIIOService);
    var uri = ios.newURI("chrome://SlimAddonsManager/content/extensions.css", null, null);
    sss.loadAndRegisterSheet(uri, sss.USER_SHEET);
}

function shutdown(data, reason) {
    if (Services.vc.compare(parseFloat(Services.appinfo.platformVersion), 10.0) == -1) {
        Components.manager.removeBootstrappedManifestLocation(data.installPath);
    }
    var sss = Components.classes["@mozilla.org/content/style-sheet-service;1"].getService(Components.interfaces.nsIStyleSheetService);
    var ios = Components.classes["@mozilla.org/network/io-service;1"].getService(Components.interfaces.nsIIOService);
    var uri = ios.newURI("chrome://SlimAddonsManager/content/extensions.css", null, null);
    if(sss.sheetRegistered(uri, sss.USER_SHEET))
        sss.unregisterSheet(uri, sss.USER_SHEET);
}