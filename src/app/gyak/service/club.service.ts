import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import { Club } from "../interface/iclub";

@Injectable({providedIn: 'root'})
export class ClubService{
    constructor(private http:HttpClient){ }

    public getClubs(): Observable<Club[]>{
        return this.http.get<Club[]>(`${environment.apiBaseUrl}/clubs`)
    }
}