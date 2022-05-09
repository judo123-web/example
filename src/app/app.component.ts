import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, ElementRef, HostListener, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { EChartsOption } from 'echarts';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Example';
  constructor(private http: HttpClient) { }

  public activeItemIndex : number = 0
  public amount !: number


  public items = [
    {amount : 5000, amountStr : "5 000", active : false},
    {amount : 10000, amountStr : "10 000",active : false},
    {amount : 20000, amountStr : "20 000", active : false},


  ]

  public whichIsActive() {
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
    setTimeout(() => {
      this.amount = 3000
      this.whichIsActive()
    }, 0);
  }











  

  // ngOnInit(): void {
  //   this._echartOptions = {
  //     title: {
  //       text: 'Referer of a Website',
  //       subtext: 'Fake Data',
  //       left: 'center'
  //     },
  //     legend: {
  //       top: 'bottom'
  //     },
  //     toolbox: {
  //       show: true,
  //       feature: {
  //         mark: { show: true },
  //         dataView: { show: true, readOnly: false },
  //         restore: { show: true },
  //         saveAsImage: { show: true }
  //       }
  //     },
  //     series: [
  //       {
  //         name: 'Nightingale Chart',
  //         type: 'pie',
  //         radius: ['10%', '70%'],
  //         center: ['50%', '50%'],
  //         roseType: 'area',
  //         itemStyle: {
  //           borderRadius: 8
  //         },
  //         data: [
  //           { value: 40, name: 'rose 1' },
  //           { value: 38, name: 'rose 2' },
  //           { value: 32, name: 'rose 3' },
  //           { value: 30, name: 'rose 4' },
  //           { value: 28, name: 'rose 5' },
  //           { value: 26, name: 'rose 6' },
  //           { value: 22, name: 'rose 7' },
  //           { value: 18, name: 'rose 8' }
  //         ]
  //       }
  //     ]
  //   };

  //   this.lineChart = {
  //     title: {
  //       text: 'Stacked Line'
  //     },
  //     tooltip: {
  //       trigger: 'axis'
  //     },
  //     legend: {
  //       data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
  //     },
  //     grid: {
  //       left: '3%',
  //       right: '4%',
  //       bottom: '3%',
  //       containLabel: true
  //     },
  //     toolbox: {
  //       feature: {
  //         saveAsImage: {}
  //       }
  //     },
  //     xAxis: {
  //       type: 'category',
  //       boundaryGap: false,
  //       data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  //     },
  //     yAxis: {
  //       type: 'value'
  //     },
  //     series: [
  //       {
  //         name: 'Email',
  //         type: 'line',
  //         stack: 'Total',
  //         data: [120, 132, 101, 134, 90, 230, 210]
  //       },
  //       {
  //         name: 'Union Ads',
  //         type: 'line',
  //         stack: 'Total',
  //         data: [220, 182, 191, 234, 290, 330, 310]
  //       },
  //       {
  //         name: 'Video Ads',
  //         type: 'line',
  //         stack: 'Total',
  //         data: [150, 232, 201, 154, 190, 330, 410]
  //       },
  //       {
  //         name: 'Direct',
  //         type: 'line',
  //         stack: 'Total',
  //         data: [320, 332, 301, 334, 390, 330, 320]
  //       },
  //       {
  //         name: 'Search Engine',
  //         type: 'line',
  //         stack: 'Total',
  //         data: [820, 932, 901, 934, 1290, 1330, 1320]
  //       }
  //     ]
  //   };
  // }
  



}
