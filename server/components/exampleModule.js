function exampleModule() {};


exampleModule.prototype.sayHi = function(title) {
  console.log("The friendly module says 'hi'");
};


module.exports = exampleModule;
