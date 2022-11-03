/*import { Component, OnInit } from '@angular/core';
import members from "../gyak/json/member.json"
import gadgets from "../gyak/json/gadget.json"
import clubs from "../gyak/json/club.json"*/

import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Club } from './interface/iclub';
import { Gadget } from './interface/igadget';
import { Member } from './interface/imember';
import { ClubService } from "./service/club.service"
import { GadgetService } from './service/gadget.service';
import { MemberService } from './service/member.service';
import {MatDialogModule} from '@angular/material/dialog';

@Component({
  selector: 'app-gyak',
  templateUrl: './gyak.component.html',
  styleUrls: ['./gyak.component.css']
})

export class GyakComponent implements OnInit {

  constructor(private clubService: ClubService, private gadgetService: GadgetService, private memberService: MemberService) {  }

  club: Club[] = []
  gadget: Gadget[] = []
  member: Member[] = []
  clubAdd: Club = {"name" : "valami", "id" : 0, "numOfMembers":  3, "members": []}

  ngOnInit(): void {
    this.addClub();
    this.getClubs();
    this.getGadgets();
    this.getMembers();
  }

  public addClub(): void{
    this.clubService.addClub(this.clubAdd).subscribe(
      (response) => {
        console.log(response)  
      })
  }

  public getClubs(): void {
    this.clubService.getClubs().subscribe(
      (response) => {
        this.club = response
      },
      (error: HttpErrorResponse) => {
        alert(error.url)
      }
    )
  }

  public getGadgets(): void {
    this.gadgetService.getGadgets().subscribe(
      (response) => {
        this.gadget = response
      },
      (error: HttpErrorResponse) => {
        alert(error.url)
      }
    )
  }

  public getMembers(): void {
    this.memberService.getMembers().subscribe(
      (response) => {
        this.member = response
      },
      (error: HttpErrorResponse) => {
        alert(error.url)
      }
    )
  }

}



