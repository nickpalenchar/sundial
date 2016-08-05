# Sundial.js [![npm](https://img.shields.io/npm/dm/sundial-js.svg?maxAge=2592000)]() [![npm](https://img.shields.io/npm/v/sundial-js.svg?maxAge=2592000)]() [![npm](https://img.shields.io/npm/l/sundial-js.svg?maxAge=2592000)]()
_compare dates in a not-too-painful way_

### <span style="color: red">v0.1.x has been released with major algorithmic changes to ensure accuracy of sundail Dates. If you are on v0.0.x, please upgrade now.</span>

Most of the time when comparing dates, you don't need to think in units as small as milliseconds.

Oftentimes, you only need to know about days.

In these cases, there are 86,400,000 intervals you'd rather not see. Sundial.js hides this!

## Install

You can clone from git

```
git clone https://www.github.com/nickpalenchar/sundail
```

or via npm

```
npm install sundial-js
```

Add this the `sundial.min.js` script to your html or improt in your JavaScript to get the Sundial class: `Sd`.

## Usage

Sundial really does one useful thing: return the amount of _days_ since epoch time when invoked.

```
var howManyDays = Sd();
console.log(howManyDays) // -> 16241

var lastLoggedIn = functionThatReturnsAnEarlierSundial();
var newLoginDay = Sd();

if(lastLoggedIn === newLoginDay){
  // user has logged in before
  alert("You've already logged in today!");
}
else if(newLoginDay - lastLogged === 1){
  // user has logged in consecutively
  alert("Welcome back!");
  streak++;
}
else {
  // user has not logged in for a while
  alert("You've broken your login streak, but we're glad you're back!);
  streak = 1;
}

```


## Main Sd function

Assign sundial numbers to our variable with the following syntax:
```
Sd();
```
Or set the number of days based off a predifined time (same syntax as the [Date object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date))
```
Sd(value);
Sd(dateString);
Sd(year, month[, day[, hour[, minutes[, seconds[, milliseconds]]]]]);
```

Returns a number (sundial number) representing the days since Jan 1, 1970, _including_ that date.

If you need more sophistocated informaton, invoke with  `new`

```
var allTheInfo = new Sd();
```

This gives you an object with the following properties:

+ *jsDate* - The first-class JavaScript Date
+ *sdDate* - A sundial date. This is the Number primitive that gets returned with `Sd()`
+ *daysThisYear* - days passed in the current year. Useful if you don't care about the year and only want to compare only 3 digits


## Methods

New in v0.0.3x, use `Sd.convertSd` to get the inverse function, converting your sundial object/numbers back to native Date objects.

```
Sd.convertSd(1) // -> Jan 1 1970 (Date)

//Sd() and Sd.convertSd() are true inverses, so invoking one within the other cancels each other out

Sd(Sd.convertSd(x)) // -> x
Sd.convertSd(Sd(x)) // -> x
```

## Anything else?

That's all for now. I really just needed something to compare when it's a new day easily. But if you have other ideas or see other uses feel free to send a pull request or submit an issue :)
