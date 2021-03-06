function _SdGetDaysInCurrentYear(years, dateModel) {
  var febDays = years % 4 === 0 ? 29 : 28
  var dictionary = [31, febDays, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  var curMonth = dateModel.getMonth();
  var daysInFullMonths = dictionary.slice(0, curMonth).reduce(function (a, b) {
    return a + b
  }, 0)
  return daysInFullMonths + dateModel.getDate();
}

var Sd = function (date) {
  debugger;

  var dateModel = date ? new Date(date) : new Date()

  var msOffset = dateModel.getTimezoneOffset() * 60000;

  var parsedDate = Date.parse(dateModel);
  var sdDate = Math.floor((parsedDate - msOffset) / 86400000) + 1;

  var daysThisYear = _SdGetDaysInCurrentYear((dateModel.getFullYear() - 1969), dateModel)

  this.jsDate = dateModel
  this.sdDate = sdDate
  this.daysThisyear = daysThisYear

  return sdDate;

}
Sd.convertSd = function (sd) {
  if(sd.sdDate) sd = sd.sdDate;
  return new Date(sd * 86400000);
}




try {
  if (window) {
    window.Sd = Sd
  } else if (self) {
    self.Sd = Sd
  } else if (global) {
    global.Sd = Sd
  }
} catch (e) {
}

try {
  if (module) {
    module.exports = Sd
  }
}
catch(e){}