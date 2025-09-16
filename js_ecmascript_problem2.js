// CART FOR TRAVELLING TICKETS

const Ticketprice=(Tickets)=>{
    return "your total cost for travel is "+ Tickets.reduce((totalcost, numberofticket)=>totalcost+numberofticket.price, 0);

}

Tickets=[
{name:"assam",price:20000},
{name:"arunachal" ,price:10000},
{name:'shillong' , price:30000}
]
console.log(Ticketprice(Tickets));
