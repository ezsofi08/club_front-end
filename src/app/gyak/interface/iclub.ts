// @ts-ignore
import {Member} from "imember.ts"

export interface Club{
    club_name:string,
    club_id:number,
    club_num_members:number,
    members:Member[]
  }