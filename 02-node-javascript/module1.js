function myFunction(){
    console.log('myFunction was called');
}

var myString = 'String from myString';

// we pass our reference to be used (imported) from any other part of our app
module.exports.myFunction = myFunction;
module.exports.myString = myString;