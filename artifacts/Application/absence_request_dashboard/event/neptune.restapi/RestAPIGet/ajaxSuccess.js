var response = xhr.responseJSON;
var usedDays = 0;
var daysTotal = 0;
var usedDaysSC = 0;
var usedDaysNH = 0;
DaysTotal = 35;

response.forEach(function (item) {
    
    if (item.status == "Approved") {
        if (item.tooltip == "Vac") {
            var calDate = DaysTotal - item.total_days;
            usedDays = usedDays + parseInt(item.total_days);
            DaysTotal = calDate;
            TitleUsedDaysNumber.setText(usedDays);
            TitleLeftDaysCount.setText(DaysTotal);
            TitleVacationsCount.setText(usedDays);
            daysTotal = daysTotal + parseInt(item.total_days);
            TitleTotalAbsenceCount.setText(daysTotal);
            if(DaysTotal < 0){
             ListSection2.removeStyleClass("ListSection2");
             ListSection2.addStyleClass("ListSection1");
             TitleLeftDaysCount.removeStyleClass("TitleLeftDays");
             TitleLeftDaysCount.addStyleClass("TitleUsedDaysNumber");
            }
            if(DaysTotal >= 0){
             ListSection2.removeStyleClass("ListSection1");
             ListSection2.addStyleClass("ListSection2");
             TitleLeftDaysCount.removeStyleClass("TitleUsedDaysNumber");
             TitleLeftDaysCount.addStyleClass("TitleLeftDays");
            }
        }
        if (item.tooltip == "SC") {
            usedDaysSC = usedDaysSC + parseInt(item.total_days);
            TitleSickLeaveCount.setText(usedDaysSC);
            daysTotal = daysTotal + parseInt(item.total_days);
            TitleTotalAbsenceCount.setText(daysTotal);
        }
        if (item.tooltip == "Nat") {
            usedDaysNH = usedDaysNH + parseInt(item.total_days);
            TitleLeftNationalHolidaysCount.setText(usedDaysNH);
            daysTotal = daysTotal + parseInt(item.total_days);
            TitleTotalAbsenceCount.setText(daysTotal);
        }


    var oStartDate = parseDate(item.start_date);
    var oEndDate = parseDate(item.end_date);
    var oDateRange = new sap.ui.unified.DateTypeRange({
        startDate: oStartDate,
        endDate: oEndDate,
        type: item.type,
        tooltip: item.tooltip,
    });
    Calendar.addSpecialDate(oDateRange);
    }
});
InputDaysleft.setValue(DaysTotal);
