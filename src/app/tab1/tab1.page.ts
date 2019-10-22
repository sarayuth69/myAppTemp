import { Component, OnInit, NgModule } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

import * as firebase from 'firebase';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

   customYearValues = [2020, 2016, 2008, 2004, 2000, 1996];
  customDayShortNames = ['s\u00f8n', 'man', 'tir', 'ons', 'tor', 'fre', 'l\u00f8r'];
  customPickerOptions: any;
public setTemp: any;

public hum:any;
public tem:any;
public tempStart:any;

public varlue:any;

public Timer1Starthr : any ;
public Timer1Startmin : any ;
public Timer1Stophr : any ;
public Timer1Stopmin : any ;


  constructor(public fb:AngularFireDatabase,
    public router: Router,) {
    this.customPickerOptions = {
      buttons: [{
        text: 'Save',
        handler: () => console.log('Clicked Save!')
      }, {
        text: 'Log',
        handler: () => {
          console.log('Clicked Log. Do not Dismiss.');
          return false;
        }
      }]
    }
  }
 

  // public setTemp(TempStart){
  //   console.log(this.TempStart);
  //   let dt = new Date(TempStart)
  //   this.fb
  //       .object("/setTemperature")
  //       .set(dt.getMinutes()).then(()=>{

  //       });
  // }
  ngOnInit(){
    this.fb
    .object("/Timer1/Start/hr")
    .valueChanges()
    .subscribe((value: any) => {
      console.log(value);
      this.Timer1Starthr = value;
    });
    this.fb
    .object("/Timer1/Start/min")
    .valueChanges()
    .subscribe((value: any) => {
      console.log(value);
      this.Timer1Startmin = value;
    });

    this.fb
    .object("/Timer1/Stop/hr")
    .valueChanges()
    .subscribe((value: any) => {
      console.log(value);
      this.Timer1Stophr = value;
    });
    this.fb
    .object("/Timer1/Stop/min")
    .valueChanges()
    .subscribe((value: any) => {
      console.log(value);
      this.Timer1Stopmin = value;
    });


     
      this.fb
      .object("/humidity")
      .valueChanges()
      .subscribe((value: any) => {
        console.log(value);
        this.hum = value;
      });

      this.fb
      .object("/temperature")
      .valueChanges()
      .subscribe((value: any) => {
        console.log(value);
        this.tem = value;
      });



        // this.fb
        // .object("/Timer1/Start/min")
        // .valueChanges()
        // .subscribe((value: any) => {
        //   console.log(value);
        //   this.Timer1Startmin = value;
        // });

  


  }


  public getTimeStart1 (timeStart){
    let dt = new Date(timeStart)

    this.fb
        .object("/Timer1/Start/hr")
        .set(dt.getHours())
        .then(() => {
        });   
        
    this.fb
        .object("/Timer1/Start/min")
        .set(dt.getMinutes())
        .then(() => {
        });       
  }




  public getTimeStop1 (timeStop){
    let dt = new Date(timeStop)
    this.fb
    .object("/Timer1/Stop/hr")
    .set(dt.getHours())
    .then(() => {

    });   
 this.fb
    .object("/Timer1/Stop/min")
    .set(dt.getMinutes())
    .then(() => {

    });       
  }  

  
  public click(varlue){
    this.fb
        .object("/setTemperature/")
        .set(varlue)
        .then(() => {
  
        }); 
        console.log(varlue);
  }


}