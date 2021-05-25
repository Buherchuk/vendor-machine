

let main = [];

let ren = [];

let arrOfPurchased = [];

let purchased = {};


function addCategory(name, price, qty = 0) {    
    name = prompt('type name');
    price = +prompt('type price');
    qty = +prompt('type qty');
    
    
    let snacks = {
        nameOfcategory: name,
        priceOfItem: price,
        qtyOfitem: qty        
    };
    main.push(snacks); 
}


// function render() {
    
//     for (i = 0; i < main.length; i++){
       
//             ren = (`<div class="rended">
//             <p class="info">${i} номер елеметна в апараті</p>
//             <p class="info">${main[i].nameOfcategory} назва продукту</p>
//             <p class="info">${main[i].priceOfItem} ціна продутку</p>
//             <p class="info">${main[i].qtyOfitem} доступна кількість продуктів</p>
//             <button type="submit">купити</button>
//             </div>`);
//             document.getElementsByClassName('description').insertAdjacentHTML += ren;
            
//     }      
// }

function render() {
    
    for (i = 0; i < main.length; i++){       
            ren.push(`
            ${i} номер елеметна в апараті
            ${main[i].nameOfcategory} назва продукту
            ${main[i].priceOfItem} ціна продутку
            ${main[i].qtyOfitem} доступна кількість продуктів
           `)
    }
    alert(ren);
}

function buy() {
    number = +prompt('type a number of item you want to buy')
    let count = 0;
    if(number > 0 && number <= main.length){
        purchased.name = main[number].nameOfcategory;
        purchased.price = main[number].priceOfItem;
        purchased.qty = main[number].count++;
        purchased.date = new Date();
        arrOfPurchased.push(purchased);
        if(main[number].qtyOfitem > 0){
            main[number].qtyOfitem --;          
        }else{
            alert('There is no snacks anymore');
        }

    }else{
        alert('No such number of snack');
    }
}

function report() {
    alert(purchased);
}


document.getElementById("addCategory").onclick = function () {
    addCategory();
}

document.getElementById("showList").onclick = function () {
    render();
}

document.getElementById("forBuy").onclick = function () {
    buy();
}
document.getElementById("forReport").onclick = function () {
    report();
}





