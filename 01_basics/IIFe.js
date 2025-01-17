//named iife
let user = "radheyShyam"
(function chai(){
console.log(`DB connectedwith ,${this.user}`)
})();

// single or unamed iife with parameters
((name) => {
    console.log(`DB connected, ${name}`);
    console.log(`db connected ,${name}`);
})("Ravi");