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

    public getGadgetById(gadgetId: number): Observable<Gadget>{
      return this.http.get<Gadget>(`${environment.apiBaseUrl}/gadgets/${gadgetId}`)
    }

    public deleteGadget(gadgetId: number): Observable<void> {
        return this.http.delete<void>(`${environment.apiBaseUrl}/gadgets/deleteGadget/${gadgetId}`)
    }

    public addGadget(gadget:Gadget): Observable<Gadget>{
        return this.http.post<Gadget>(`${environment.apiBaseUrl}/gadgets/addGadget`, gadget)
    }

    public updateGadget(gadget:Gadget): Observable<Gadget>{
        return this.http.post<Gadget>(`${environment.apiBaseUrl}/gadgets/updateGadget/${gadget.id}`, gadget)
    }
}