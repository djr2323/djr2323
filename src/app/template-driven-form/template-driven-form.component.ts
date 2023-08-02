import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {
  public name=""
  constructor(private cm : CommonService,){}
  ngOnInit():void {
  };

  public submitForm():void {

    console.log('submit form : name = + ' + this.name );
    this.cm.submitData(this.name)
  }
}
