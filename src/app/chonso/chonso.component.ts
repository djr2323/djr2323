import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { soDts } from '../sodt';
import { CommonService } from '../Services/common.service';
@Component({
  selector: 'app-chonso',
  templateUrl: './chonso.component.html',
  styleUrls: ['./chonso.component.css']
})
export class ChonsoComponent implements OnInit {
  soDts = [...soDts]
  public counter = 0;
  public counterBinhPhuong = 0;
  constructor(
    private fb:FormBuilder,
    private common :CommonService
  ){}
    
  ngOnInit(): void {
    this.counter = this.common.counter;
    this.counterBinhPhuong = this.common.binhPhuong(this.counter);
    this.common.counter ++
  }
    checkForm = this.fb.group( {
        camket:'Tất cả',
        nhapso:''
      }
      )
  
  camkets=['Tất cả','CK300 Giá 300,000','CK250 Giá 250,000','CK150 Giá 150,000','Không cam kết']

  onSubmit():void{
    var arr = []
    var arr1=''
    let result = this.checkForm.value.nhapso;
    let index = result?.charAt(0)

    let str1 = result?.split("").splice(1).join("");
    let str = '0902020123'
    if(str1!=undefined){
      arr1 = str.slice(str.length-str1?.length)
    }
    if(arr1 === str1){
      arr.push(str)
    }


    const resultSdt = soDts.find(s=>{
      this.checksdt(s.phone)
    })
   console.log(
     this.checksdt('0902020123')
   );

    // let str2 = str.slice(0-(length))

    console.log(arr);
    console.log(resultSdt);
    
    console.log(soDts);
     console.log(this.camkets);
    
  };
 checksdt(str:String):void{
    var arr = []
    var arr1=''
    let result = this.checkForm.value.nhapso;
    let index = result?.charAt(0)
    let str1 = result?.split("").splice(1).join("");
    if(str1!=undefined){
      arr1 = str.slice(str.length-str1?.length)
    }
    if(arr1 === str1){
      str;
    }
  }
}
