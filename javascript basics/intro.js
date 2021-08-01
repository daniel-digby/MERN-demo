
// variables in javascript are dynamically typed
// the var definition is global or function scoped
var variableA = 0;
var variableA = "string";

// let is block scoped rather than function scoped which is preffered to var, we can still update
// a variable defined with let but not redeclare it
let variableB = 0;
variableB = "string";

// const is also block scoped but we cannot redefine it, this is preffered in any case where we do not need
// to update our variable
const variableC = 0;
// NOTE: this will not work:
variableC = "string";

// we can write javascript without semicolons, but it can introduce weird bugs as it is compiled.
// javascript automatically inserts semicolons behind the scenes if we do not, and it can incorrectly insert
// them in the wrong places, so it's better to do it ourselves
const noSemicolon = 1
const withSemicolon = 2;

const num = 15;
const string = "hello";
const boolean = true;
const array = ["element1", "element2", "element3"];
const undefinedVariable;
const nullVariable = null;

// we can call a funciton definition above where it is defined
functionDefinition();

function functionDefinition(input) {
    // function body
}

// we cannot do so for a function expression, we must call it after we define it
const functionExpression = function(input) {
    // function body
}

// this is how we call a function that has been stored in a variable, we can only call it below where we define a function expression
functionVariable(); 

// can also simplify function expressions into arrow functions
const hello = (input) => {
    // function body
}

const singleLine = (input) => "singleLineReturn" + input;

hello();
singleLine();

// callbacks

const functionWithCallback = (input, callback) => {
    // we can call singleLine inside
    callback();
}

// here I pass in a function I have already defined
functionWithCallback(input, singleLine);

// here I define the callback function at the same time as I call
functionWithCallback(input, callback = () => {
    // function body
});

// javascript objects
const object = {
    num: 0,
    string: "string",
    nestedObject: {
        nestedObjectVariable: "hello",
    },
    function: hello
};

// I can access like this
const num = object.num;
const string = object.string;
const nestedObject = object.nestedObject;

// I can use functions of the object
object.function();

// here I can conditionally check in case the object is null or undef
const num = object?.num;

// same as doing this
if (object) {
    const num = object.num;
}

try {
    // block to try
}
catch (err) {
    // handle error
}

// bad
if (value1 == value2) {

}

// good, does not convert types
if (value1 === value2) {

}

// promises (from MDN), a promise is given when code will take some time to complete
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('foo');
    }, 300);
  });
  
  myPromise
    .then(handleResolvedA, handleRejectedA)
    .then(handleResolvedB, handleRejectedB)
    .then(handleResolvedC, handleRejectedC)
    .catch(handleRejected);

// async await makes promises nicer to handle
const asyncFunction = async (input) => {
    try {
        const result = await someTimeConsumingFunction(input);

        // this line will only be reached after the await call has finished, that way we dont have to chain .then .catch
        // makes code easier to read
        console.log(result);
    }
    catch (err) {
        console.log(err);
    }
};

// using JSON in javascript
demo.nestedObject.nestedBool