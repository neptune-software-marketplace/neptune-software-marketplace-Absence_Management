if (sap.n) {
    sap.n.Shell.attachInit(function (data) {
        FlexBox.setBusy(true);
        var options = {
        parameters: {
            "where": JSON.stringify({"Uniqe_id": data.objectKey})
            }
        };
        apioRestAPIGet(options);
        
})};

