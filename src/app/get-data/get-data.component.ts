import { Component, OnInit } from '@angular/core';
import { HttpServerService } from '../Services/http-server.service';

@Component({
  selector: 'app-get-data',
  templateUrl: './get-data.component.html',
  styleUrls: ['./get-data.component.css']
})
export class GetDataComponent implements OnInit {
constructor(
  private httpService: HttpServerService,
){}

  ngOnInit():void{
    this.httpService.getComments().subscribe(data=>{
      console.log(data);
    });
  }

}
