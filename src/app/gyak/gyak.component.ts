/*import { Component, OnInit } from '@angular/core';
import members from "../gyak/json/member.json"
import gadgets from "../gyak/json/gadget.json"
import clubs from "../gyak/json/club.json"*/

import { Component, OnInit } from '@angular/core';
// @ts-ignore
import { gadget } from "igadget.ts"
// @ts-ignore
import { klub } from "iclub.ts"
import { HttpClient } from "@angular/common/http";
import{ClubService} from "./getclub"
import { GadgetService } from './getgadget';




@Component({
  selector: 'app-gyak',
  templateUrl: './gyak.component.html',
  styleUrls: ['./gyak.component.css']
})




export class GyakComponent implements OnInit {


  club:klub[]=[]
  gadget:gadget[]=[]

  
 

  constructor(private http:HttpClient){


    let clubservice= new ClubService(http)
    clubservice.GetClub().subscribe(response=>{
      this.club=response
    })


    let gadgetservice=new GadgetService(http)
    gadgetservice.GetGadget().subscribe(response=>{
      this.gadget=response
    })

  

  }

   

  ngOnInit(): void {
   
   
    }
  }

  

  