// Creating books with duplicates
const myBooks = [
    {id : 1 ,title : 'A',price : 500,stock : 5},
    {id : 2 ,title : 'B',price : 600,stock : 6},
    {id : 3 ,title : 'C',price : 300,stock : 3},
    {id : 4 ,title : 'D',price : 700,stock : 6},
    {id : 5 ,title : 'E',price : 900,stock : 5},
    {id : 1 ,title : 'A',price : 500,stock : 5},
    {id : 2 ,title : 'B',price : 600,stock : 6}
]

// Creating customers
const myCustomers = [
    {id : 1,CustomerName : 'a',isExistingCustomer : true,lastPurchase : {id : 1,title : 'A',price : 500}},
    {id : 2,CustomerName : 'b',isExistingCustomer : true,lastPurchase : {id : 1,title : 'A',price : 500}},
    {id : 3,CustomerName : 'c',isExistingCustomer : false},
    {id : 4,CustomerName : 'd',isExistingCustomer : false}
]

// remove duplicates

const removeDuplictes = () =>{

    let uniqueId =new Set();
    let uniqueBooks = [];
    //itreate
    for (const element of myBooks) {
        if (!uniqueId.has(element.id)){
            uniqueId.add(element.id)
            uniqueBooks.push(element)
        }

    }   
    return uniqueBooks;
}

const customerId = 1
const customerPickBooks = [1,2];

function custormerChoosenBook (uniqueBooklist) {
    return uniqueBooklist.filter(book => customerPickBooks.includes(book.id))
}

let uniqueBooklist=removeDuplictes();
const chooseBook = custormerChoosenBook(uniqueBooklist); 
// console.log(chooseBook);

let cus = 2;

// current Customer
function currentCustomer (){
    let curcustomer = myCustomers.find(customer => cus === customerId.id);
    // console.log(curcustomer);
    let isExistingCustomers = curcustomer ? true : false;
    console.log('isExitingCustomer :',isExistingCustomers);

    for (let book of chooseBook){
        if (isExistingCustomers){
            if(book.price > 200){
                book.discount = book.price*15/100
            }else{
                book.discount = 0;
            }
        }else{
            switch (true) {
                case book.price < 0 && book.price > 100:
                    book.discount = book.price
                    break;
                case book.price < 100 && book.price > 200:
                    book.discount = book.price*2/100
                    break;
                case book.price < 200 && book.price >= 500:
                    book.discount = book.price*5/100
                    break;
                case book.price < 500 && book.price > 750:
                    book.discount = book.price*10/100
                    break;
                default:
                    book.discount = book.price*15/100
                    break;
            }
            book.totalprice = book.price-book.discount;
            console.log(book.title);

            // stock update
            book.stock-=1
            
            console.log('price ',book.price);
            console.log('Discount ',book.discount);
            console.log('Total Price ',book.totalprice);
            
        }               
    }
    
    
}




//bill
function bills(){

    // customer name
    const customerNameId = myCustomers.find(cust => customerId === cust.id);
    const customerNames = customerNameId.CustomerName
    // console.log(customerNames);


    const list1 = [
        {'customer Name' : console.log('Customer Name :',customerNames),
        'Book Purchased' : console.log('Book Purchased :',chooseBook),
        'Discount' : currentCustomer() 
        }
    ]
}

bills()

console.log('Updated Stock',uniqueBooklist);


