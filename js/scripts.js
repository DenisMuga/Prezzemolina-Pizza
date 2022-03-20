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
            case "large":
            price = 1200;
            console.log(price);
            break;
            case "medium":
                price = 850;
                console.log("The price is " + price);
                break;
            case "small":
                price = 600;
                console.log(price);
                default:
                    console.log("Error");
        }

        switch(pcrust){
            case "0":
                cust_price = 0;
                break;
                case "Crispy":
                    cust_price = 200;
                break;
                case "Stuffed":
                    cust_price = 250;
                break;
                case "Gluten-free":
                    cust_price = 180;
                break;
                default:
                    console.log("No Price");
        }
        let ptopping_value = ptopping.length*50;
        console.log("topping value" + topping_value);

        if((psize == "0") && (pcrust == "0")){
            console.log("Nothing Selected");
            $("button.continue").show();
            $(".instructions").show();
            $("div.choice").show();
            alert("Select Pizza size and Crust");
        }
        else{
            $("button.continue").hide();
            $(".instructions").hide();
            $("div.choice").slideDown(1500);
        }



    });

});