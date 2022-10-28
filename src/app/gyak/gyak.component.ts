import { Component, OnInit } from '@angular/core';
import members from "../gyak/json/member.json"
import gadgets from "../gyak/json/gadget.json"
import clubs from "../gyak/json/club.json"
// @ts-ignore
import { Gadget } from "igadget.ts"
// @ts-ignore
import { Member } from "imember.ts"
// @ts-ignore
import { Club } from "iclub.ts"

// @ts-ignore
import { klub } from "iclub0.ts"
// @ts-ignore
import { Member0 } from "imember0.ts"
import { HttpClient } from "@angular/common/http";
import { JsonPipe } from '@angular/common';












@Component({
  selector: 'app-gyak',
  templateUrl: './gyak.component.html',
  styleUrls: ['./gyak.component.css']
})




export class GyakComponent implements OnInit {


  public temp:any;

  club:klub[]=[]



 /* public klub2:klub={
    id:1,
    name:"",
    numOfMembers:1,
    members:[]

 
  }*/
 

  constructor(private http: HttpClient){

    let tempclub:klub={
      id:NaN,
      name:"almas",
      numOfMembers:NaN,
      members:[]
    }

    const url: string = 'http://localhost:8080/clubs';

    this.http.get(url).subscribe((response) => {
    this.temp= response;

    for (let i=0;i<this.temp.length;i++){
    tempclub=this.temp[i]
    console.log(tempclub.name)
    }
    
<<<<<<< HEAD
    this.club.push(tempclub)}
    )

  }

   

  ngOnInit(): void {
   
   
    }
  }

  

  /*ngOnInit(): void {
   
=======
    console.log("res from gyak")
    console.log(res)
>>>>>>> e6d61ecaffdfc34f564e964f5c2e262828b016b1
  }

  member: Member[] = []
  club: Club[] = []

  member0: Member0[] = members;
  gadget: Gadget[] = gadgets;
  club0: Club0[] = clubs;/*

  

  constructor() { }

    /* for(let a = 0; a<this.member0.length; a++) {
       let member1: Member = {
         member_name: this.member0[a].member_name,
         member_id: this.member0[a].member_id,
         club_id: this.member0[a].club_id,
         member_gender: this.member0[a].member_gender,
         gadgets: []
       }
       this.member.push(member1)
     }
  
     for (let b = 0; b < this.club0.length; b++) {
       let club1: Club = {
         club_name: this.club0[b].club_name,
         club_id: this.club0[b].club_id,
         club_num_members: this.club0[b].club_num_members,
         members: []
       }
       this.club.push(club1)
     }
  
     for (let c = 0; c < this.member.length; c++) {
  
       for (let d = 0; d < this.gadget.length; d++) {
         if (this.member[c].member_id == this.gadget[d].member_id) {
           this.member[c].gadgets.push(this.gadget[d])
         }
       }
     }
  
     for (let e = 0; e < this.club.length; e++) {
       for (let f = 0; f < this.member.length; f++) {
         if (this.club[e].club_id == this.member[f].club_id) {
           this.club[e].members.push(this.member[f])
         }
       }
     }
   }*/

  

 


