import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './app-child.component.html',
  styleUrls: ['./app-child.component.css']
})
export class AppChildComponent implements OnInit {
  @Input() tshirt;
  quantityLocal;
  error=false;
  @Output() cancelevent=new EventEmitter();
  @Output() buyevent=new EventEmitter();
  ngOnChanges(): void
  {

  }
  buy()
  {
    if(this.quantityLocal)
    {
      if(this.quantityLocal > this.tshirt.quantity)
      {
        alert("not availabale");
      }
      else
      {
        this.tshirt.quantity=this.tshirt.quantity-this.quantityLocal;
        this.buyevent.emit(this.tshirt);
      }
    }
  }
  cancel()
  {
    this.cancelevent.emit(false);
  }
  constructor() { }

  ngOnInit() : void
  {
    console.log("init");
  }

}
