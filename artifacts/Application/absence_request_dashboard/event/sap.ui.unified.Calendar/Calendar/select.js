var aSelectedDates = Calendar.getSelectedDates();
var aFormattedDates = [];
var days_Left;
if (aSelectedDates.length > 0) {
    var oDateRange = aSelectedDates[0];
    var oStartDate = oDateRange.getStartDate();
    var oEndDate = oDateRange.getEndDate();
    var currentYear = oStartDate.getFullYear();
    InputYear.setValue(currentYear);
    var oStartDate = oDateRange.getStartDate();
    var oEndDate = oDateRange.getEndDate();
    if (oStartDate) {
       InputFrom.setValue(formatDate(oStartDate));
    }
    if (oEndDate) {
       InputTo.setValue(formatDate(oEndDate));
    }

    if (oStartDate && oEndDate) {
        aFormattedDates = getAllDatesInRange(oStartDate, oEndDate);
        InputRequestedDays.setValue(aFormattedDates.length);
        days_Left = DaysTotal - parseInt(aFormattedDates.length);
        InputDaysleft.setValue(days_Left);
    }
}


