import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit
{
  showDetails=false;
  buyButton=false;
  tshirts=[];
  tshirtdetails:any;

  addtocart(t)
  {
    this.tshirtdetails=t;
    this.showDetails=true;
    this.buyButton=true;

  }
  cancel(d)
  {
    this.showDetails=false;
    this.buyButton=false;
  }
  
  update(d):void
  {
    console.log(d.productId);
    this.showDetails=false;
    this.buyButton=false;
  }
  name="vidha paradkar";
  ngOnInit()
  {
    this.tshirts=this.getTShirts();
    console.log(this.tshirts);
  }
  getTShirts() {
    return  [
      {
        "productId": 1,
        "productName": "black shirt female",
        "productCode": "GDN-0011",
        "description": "this is a female black tshirt",
        "price": 19.95,
        "backimage":"assets/Images/t1back.jpg",
        "imageUrl": "assets/Images/t1front.jpg",
        "quantity":40,
        "imggsrc":"",
        "releaseDate": "",
        "size":"medium"
      },
      {
        "productId": 2,
        "productName": "blue shirt female",
        "productCode": "GDN-0023",
        "description": "this is a blue female shirt",
        "price": 32.99,
        "quantity":80,
        "backimage":"assets/Images/t2back.jpg",
        "imggsrc":"",
        "imageUrl": "assets/Images/t2front.jpg",
        "releaseDate": "",
        "size":"medium"
      },
      {
        "productId": 5,
        "productName": "grey shirt female",
        "productCode": "TBX-0048",
        "description": "this is a grey shirt female",
        "price": 8.9,
        "starRating": 4.8,
        "quantity":23,
        "backimage":"assets/Images/t3back.jpg",
        "imggsrc":"",
        "imageUrl": "assets/Images/t3front.jpg",
        "releaseDate": "",
        "size":"medium"
      },
      {
        "productId": 8,
        "productName": "whhite shirt female",
        "productCode": "TBX-0022",
        "description": "this is a white shirt female ",
        "price": 11.55,
        "quantity":253,
        "backimage":"assets/Images/t2back.jpg",
        "imggsrc":"",
        "imageUrl": "assets/Images/t2front.jpg",
        "releaseDate": "",
        "size":"medium"
      },
      {
        "productId": 10,
        "productName": "Summer T-shirt male",
        "productCode": "GMG-0042",
        "description": "this is a yellow shirt female",
        "price": 35.95,
        "quantity":66,
        "backimage":"assets/Images/t1back.jpg",
        "imggsrc":"",
        "imageUrl": "assets/Images/t1front.jpg",
        "releaseDate": "",
        "size":"medium"
      }
    ]
  }
}