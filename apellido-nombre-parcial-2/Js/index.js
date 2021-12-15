let total =0;
const iphoneColor = document.getElementById("product-color");
const iphoneCapacidad = document.getElementById("product-capacidad");
const iphoneCantidad = document.getElementById("cantidad");


function calculatePrice(){
    switch (iphoneCapacidad){
        case "128":
            total = iphoneCantidad * 150000;
        break;
        case "256":
            total = iphoneCantidad * 165000;
        break;
        case "512":
            total = iphoneCantidad *180000;
        break;
        default:
            alert("no se puede realizar");
        break;
    }
    return alert(total.toFixed(2));
}


function changeProductImage(){
    const gold = document.getElementById("gold")
    const graphite = document.getElementById("graphite")
    const silver = document.getElementById("silver")
    const sierra = document.getElementById("sierra")
    const imagen = document.getElement.src("img")


    if (iphoneColor =  gold){
        img= gold.src = "img/iphone_13_gold.png"
    }
    if  (iphoneColor = graphite ){
        img = graphite.src = "img/iphone_13_graphite.png";
    }
    if  (iphoneColor = silver){
        img = silver.src = "img/iphone_13_silver.png"
    }
    if  (iphoneColor = sierra){
        imagen = sierra.src = "img/iphone_13_sierra.png";
    }
    return imgagen;
}   
/*justificacion: no cazo una */