var quantity = prompt("Add meg a darabszámot"); 
var type = prompt('Add meg a típust');

var types ={
    student: 300,
    adult: 350,
    retired: 280
};

var price = type === "student" ? 300 : 350;
var discount =quantity > 10 ? 0.9 : 1;


var total = quantity * price * discount;


    alert(total)