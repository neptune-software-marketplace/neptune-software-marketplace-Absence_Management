sap.m.MessageToast.show("Deleted!!");
var userName = AppCache.userInfo.username;
var year = new Date().getFullYear().toString();
var options = {
    parameters: {
        where: JSON.stringify({ createdBy: userName, year: year }),
    }
};
apiRestAPIGetERequests(options);
var options = {
    parameters: {
        where: JSON.stringify({ createdBy: userName, year: year }),
    },
};
apiRestAPIGet(options);