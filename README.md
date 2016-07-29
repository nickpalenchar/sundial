# Sundial.js - compare dates in a not-too-painful way

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

If you need more sophicated info, with access to an actual Date object, call `new Sd()` on a variable.
```
var allTheInfo = new Sd();
```

This gives you an object with the following properties:

+ *jsDate* - The first-class JavaScript Date
+ *sdDate* - A sundial date. This is the Number primitive that gets returned with `Sd()`
+ *daysThisYear* - days passed in the current year. Useful if you don't care about the year and only want to compare only 3 digits

## Anything else?

That's all for now. I really just needed something to compare when it's a new day easily. But if you have other ideas or see other uses feel free to send a pull request or submit an issue :)
