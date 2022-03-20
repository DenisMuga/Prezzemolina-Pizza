var price, cust_price, topping_price;
let total = 0;
function GetPizza(name, crust, topping, size, total){
    this.name = name;
    this.crust = crust;
    this.topping = topping;
    this.size = size;
    this.total = total;
}

$(document).ready(function(){
    $("button.continue").click(function(event){
        let pname = $(".name option:selected").val();
        let pcrust = $("#crust option:selected").val();
        let psize = $("#size option:selected").val();
        let ptopping = [];
        $.each($("input[name = 'toppings']:checked"), function(){
            ptopping.push($(this).val());
        });
        console.log(ptopping.join(", "));

        switch(psize){
            case "0":
            price = 0;
            break;
        }


    });

});