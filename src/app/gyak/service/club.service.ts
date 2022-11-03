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

   public getClubById(clubId: number): Observable<Club>{
      return this.http.get<Club>(`${environment.apiBaseUrl}/clubs/${clubId}`)
   }

   public deleteClub(clubId: number): Observable<void> {
      return this.http.delete<void>(`${environment.apiBaseUrl}/clubs/deleteclub/${clubId}`)
   }

   public addClub(club:Club): Observable<Club>{      
      console.log("add", club)

      return this.http.post<Club>(`${environment.apiBaseUrl}/clubs/addclub`, club)
   }

   public updateClub(club:Club): Observable<Club>{
      return this.http.post<Club>(`${environment.apiBaseUrl}/clubs/updateclub/${club.id}`, club)
   }
}