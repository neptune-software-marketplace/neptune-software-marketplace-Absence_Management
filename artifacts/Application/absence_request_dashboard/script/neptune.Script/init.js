var DaysTotal = 35;
var UUID;
TitleUsedDaysNumber.setText("0");
TitleLeftDaysCount.setText(DaysTotal);
TitleTotalAbsenceCount.setText("0");
TitleLeftNationalHolidaysCount.setText("0");
TitleVacationsCount.setText("0");
TitleSickLeaveCount.setText("0");

var userName = AppCache.userInfo.username;
var today = new Date();
Calendar.setMinDate(today);
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
var aData = [
    { key: "Vacation", text: "Vacation" },
    { key: "National Holiday", text: "National Holiday" },
    { key: "Sick Leave", text: "Sick Leave" },
];
addDataToSelect(SelectReason, aData);
