var app=angular.module("MobileStore",[]);
var iphone= {
    name: "Apple Iphone7 plus",
    color: "silver",
    memory: "3GB RAM,256GB Internal Memory",
    price: 68000,
    image: "images/iphone7plus.png",
    isSoldOut: true
};
var samsung={
    name:"samsung S8",
    color:"Black",
    memory:"6GB RAM,64GB Internal Memory",
    price:56000,
    image:"images/SamsungS8.png",
    isSoldOut:true
};

app.controller("StoreController",function () {
    this.mobiles = [iphone,samsung]

});
