import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public counter = 0;


  constructor() { }

  public binhPhuong(n:number) : number { 
    return n*n;
  }
  public submitData(name:any): void {
    console.log('gửi data lên server . data =', name);
    
  }
}
