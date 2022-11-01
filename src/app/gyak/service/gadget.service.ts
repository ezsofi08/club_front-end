import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import { Gadget } from "../interface/igadget";

@Injectable({providedIn: 'root'})
export class GadgetService{
    constructor(private http:HttpClient){ }

    public getGadgets(): Observable<Gadget[]>{
        return this.http.get<Gadget[]>(`${environment.apiBaseUrl}/gadgets`)
    }
}