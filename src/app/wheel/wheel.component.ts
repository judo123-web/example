import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wheel',
  templateUrl: './wheel.component.html',
  styleUrls: ['./wheel.component.scss']
})
export class WheelComponent implements OnInit {
  title = 'Example';


  constructor (private cf : ChangeDetectorRef) {}

  public activeItemIndex : number = 0
  public amount !: number

  change(val : any) {
    this.amount = val.target.value
    this.whichIsActive()
    console.log(this.amount);
    
  }



  public items = [
    {amount : 5000, amountStr : "5 000", active : false},
    {amount : 10000, amountStr : "10 000",active : false},
    {amount : 20000, amountStr : "20 000", active : false},
  ]


  public whichIsActive() {
    for (let item of this.items) {
      item.active = false
    }

    for (let i = 0; i < this.items.length; i++) {
      if (i == this.items.length - 1) {
        this.items[i].active = true
        this.activeItemIndex = i
        break
      }
      else if (this.amount < this.items[i].amount) {
        this.items[i].active = true
        this.activeItemIndex = i
        break
      }
    }
  }

  public fillLength (index : number) : any {
    console.log("here");
    
    if (this.items[index].amount <= this.amount) {
      return '100%'
    }
    else if (index == this.activeItemIndex && index !== 0) {
      let firstNumber = this.amount - this.items[index-1].amount
      let secondNumber = this.items[index].amount - this.items[index-1].amount
      return `${this.getPercent(firstNumber, secondNumber)}%`
    }
    
    else if (index == this.activeItemIndex) {
      return `${this.getPercent(this.amount, this.items[index].amount)}%`
    }
  }

  public getPercent(num1 : number,num2 : number) {
    return (100 * num1) / num2
  }

  

  ngOnInit(): void {
    this.amount = 11100
    this.whichIsActive()
  }

}
