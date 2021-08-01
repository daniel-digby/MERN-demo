let num = 0;
num = "string";

// typescript will infer a type definition
const user = {
    name: "Daniel",
    id: 0,
};

// or I can define one
interface LineItem {
    product: string;
    quantity: number;
}

// here it wont let me instantiate an object that doesnt fit my definition above
const lineItem: LineItem = {
    id: 1234,
    quantity: 2,
}

// defining a function's paramaters
function example(string: string, number: number) {
    // body
}

// I can check what data types the function needs 
example();