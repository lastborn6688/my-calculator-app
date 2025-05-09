const display = document.getElementById("display");
function appendToDispay(value) {
    display.value += value;
}
function clearDispay() {
    display.value = "";
};

function calculate() {
 try{
    display.value = eval(display.value);
 }
 catch(error){
    display.value = "error";
 }}
