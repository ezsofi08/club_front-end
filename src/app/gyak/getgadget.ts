import { HttpClient } from "@angular/common/http";
// @ts-ignore
import { gadget } from "igadget.ts"
import { Observable } from "rxjs";

export class GadgetService{

    gadget:gadget[]=[]
    urlgadget: string = 'http://localhost:8080/gadgets';


    constructor(private http: HttpClient){}

    public GetGadget():Observable<gadget[]>{
      return this.http.get<gadget[]>(this.urlgadget)
    }


    
}