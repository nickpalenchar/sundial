'use strict'

var expect = require("expect.js");
var Sd = require("../sundial");

describe("Chai testing", function () {
  it("should pass a truth test", function () {
    expect(true).to.be(true);
  })
});

describe("Sd invocation", function () {
  var today = new Date()
    , sundial = Sd();
  it("should return a not too large number", function () {
    if(today.getFullYear() > 2999) console.warn("This will always fail after the year 3000, please update this test. (We're still using JS in 3000?)")
    expect(sundial).to.be.lessThan(366681);
  })
});

describe("Manual date setting ", function () {
  it("should return the current day if no argument is given",function () {
    expect(Sd()).to.be.greaterThan(16597); //sundail of July 28 2016
  })
});

describe("Sd.convertSd", function () {
  it("should convertSd numbers to dates", function () {
    expect(Sd.convertSd(0)).to.be.a(Date);
    expect(Sd.convertSd(150000000)).to.be.a(Date);
    let randomNum = Math.round(Math.random() * 1000002000000);
    expect(Sd.convertSd(randomNum)).to.be.a(Date);
  });
  it("correctly convertSds the number to a date", function () {
    // test here
  })
});
