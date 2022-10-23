// @ts-ignore
import {Gadget} from "igadget.ts"


export interface Member{
    member_name:string,
    member_id:number,
    club_id:number,
    member_gender:boolean,
    gadgets:Gadget[]
 }