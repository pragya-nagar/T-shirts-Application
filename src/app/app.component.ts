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
  name="Pragya Nagar";
  ngOnInit()
  {
    this.tshirts=this.getTShirts();
    console.log(this.tshirts);
  }
  getTShirts() {
     return  [
      {
        "productId": 1,
        "productName": "White T-shirt male",
        "productCode": "GDN-0011",
        "description": "A comfortable summer wear",
        "price": 19.95,
        "backimage":"https://github.com/pragya-nagar/T-shirts-Application/blob/master/src/assets/Images/t1back.jpg?raw=true",
        "imageUrl": "https://github.com/pragya-nagar/T-shirts-Application/blob/master/src/assets/Images/t1front.jpg?raw=true",
        "quantity":40,
        "imggsrc":"",
        "releaseDate": "",
        "size":"medium"
      },
      {
        "productId": 2,
        "productName": "Red T-shirt male",
        "productCode": "GDN-0023",
        "description": "A comfortable summer wear",
        "price": 32.99,
        "quantity":80,
        "backimage":"https://github.com/pragya-nagar/T-shirts-Application/blob/master/src/assets/Images/t2back.jpg?raw=true",
        "imggsrc":"",
        "imageUrl": "https://github.com/pragya-nagar/T-shirts-Application/blob/master/src/assets/Images/t2front.jpg?raw=true",
        "releaseDate": "",
        "size":"medium"
      },
      {
        "productId": 5,
        "productName": "Pink T-shirt female",
        "productCode": "TBX-0048",
        "description": "This is a comfortable t-shirt available in all sizes",
        "price": 8.9,
        "starRating": 4.8,
        "quantity":23,
        "backimage":"https://github.com/pragya-nagar/T-shirts-Application/blob/master/src/assets/Images/t3back.jpg?raw=true",
        "imggsrc":"",
        "imageUrl": "https://github.com/pragya-nagar/T-shirts-Application/blob/master/src/assets/Images/t3front.jpg?raw=true",
        "releaseDate": "",
        "size":"medium"
      },
      {
        "productId": 8,
        "productName": "Red t-shirt male",
        "productCode": "TBX-0022",
        "description": "This is red T-shirt male ",
        "price": 11.55,
        "quantity":253,
        "backimage":"https://github.com/pragya-nagar/T-shirts-Application/blob/master/src/assets/Images/t2back.jpg?raw=true",
        "imggsrc":"",
        "imageUrl": "https://github.com/pragya-nagar/T-shirts-Application/blob/master/src/assets/Images/t2front.jpg?raw=true",
        "releaseDate": "",
        "size":"medium"
      },
      {
        "productId": 10,
        "productName": "White T-shirt male",
        "productCode": "GMG-0042",
        "description": "White T-shirt available in all sizes",
        "price": 35.95,
        "quantity":66,
        "backimage":"https://github.com/pragya-nagar/T-shirts-Application/blob/master/src/assets/Images/t1back.jpg?raw=true",
        "imggsrc":"",
        "imageUrl": "https://github.com/pragya-nagar/T-shirts-Application/blob/master/src/assets/Images/t1front.jpg?raw=true",
        "releaseDate": "",
        "size":"medium"
      }
    ]
  }
}
    
     
