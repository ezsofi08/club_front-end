import { Conditional } from '@angular/compiler';
import { Component, getNgModuleById, OnInit } from '@angular/core';
import members from "./member.json"
import objects from "./object.json"
import clubs from "./club.json"


interface Object{
  nev:string,
  id:number,
  member_id:number
}


interface Member{
   nev:string,
   id:number,
   club_id:number,
   objects:Object[]
}


interface Member0{
  nev:string,
  id:number,
  club_id:number
}

interface Club{
  nev:string,
  id:number,
  members:Member[]
}

interface Club0{
  nev:string,
  id:number,
}






@Component({
  selector: 'app-gyak',
  templateUrl: './gyak.component.html',
  styleUrls: ['./gyak.component.css']
})



export class GyakComponent implements OnInit {

member:Member[]=[]
club:Club[]=[]


member0:Member0[]=members;
object:Object[]=objects;
club0:Club0[]=clubs;

  
 
  constructor() { 


    for (let x=0;x<this.member0.length;x++){
      let member1:Member={
        nev:this.member0[x].nev,
        id:this.member0[x].id,
        club_id:this.member0[x].club_id,
        objects:[]
      }
      this.member.push(member1)
    }

    for(let a=0;a<this.club0.length;a++){
      let club1:Club={
        nev:this.club0[a].nev,
        id:this.club0[a].id,
        members:[]
      }
      this.club.push(club1)
    }

    for (let y=0;y<this.member.length;y++){

      for(let z=0; z<this.object.length;z++){
       if(this.member[y].id==this.object[z].member_id){
        this.member[y].objects.push(this.object[z])
       }
    }
  }

    for (let b=0;b<this.club.length;b++){
      for (let c=0;c<this.member.length;c++){
        if(this.club[b].id==this.member[c].club_id){
          this.club[b].members.push(this.member[c])
        }
      }
    }


    
  }


  ngOnInit(): void {
  }

}
