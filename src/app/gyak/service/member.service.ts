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

    public getMemberById(memberId: number): Observable<Member>{
        return this.http.get<Member>(`${environment.apiBaseUrl}/Members/${memberId}`)
    }

    public deleteMember(memberId: number): Observable<void> {
    return this.http.delete<void>(`${environment.apiBaseUrl}/deleteMember/${memberId}`)
    }

    public addMember(member:Member): Observable<Member>{
    return this.http.post<Member>(`${environment.apiBaseUrl}/addMember`, member)
    }

    public updateMember(member:Member): Observable<Member>{
    return this.http.post<Member>(`${environment.apiBaseUrl}/updateMember/${member.id}`, member)
    }
}