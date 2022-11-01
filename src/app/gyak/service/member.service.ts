import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import { Member } from "../interface/imember";

@Injectable({providedIn: 'root'})
export class MemberService{
    constructor(private http:HttpClient){ }

    public getMembers(): Observable<Member[]>{
        return this.http.get<Member[]>(`${environment.apiBaseUrl}/members`)
    }
}