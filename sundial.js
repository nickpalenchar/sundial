function _SdGetDaysInCurrentYear(years, dateModel) {
  var febDays = years % 4 === 0 ? 29 : 28
  var dictionary = [31, febDays, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  var curMonth = dateModel.getMonth()
  var daysInFullMonths = dictionary.slice(0,curMonth).reduce(function(a,b){
    return a + b;
  },0)
  return daysInFullMonths + dateModel.getDate();
}

var Sd = function () {

  var dateModel = new Date()
  var years = dateModel.getFullYear() - 1971;
  var yearsInDays = years * 356 + (Math.floor((years-1) / 4))

  var daysThisYear = _SdGetDaysInCurrentYear(years, dateModel)

  var sdDate = daysThisYear + yearsInDays

  this.jsDate = dateModel
  this.sdDate = sdDate
  this.daysThisyear = daysThisYear

  return sdDate

}

if(window){
  window.Sd = Sd
}else if(self){
  self.Sd = Sd
}else if(global){
  global.Sd = Sd
}

if(module){
  module.exports = Sd
}