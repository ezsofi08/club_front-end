// @ts-ignore
import { klub } from "iclub.ts"
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";




export class ClubService{

   club:klub[]=[]
   urlclub: string = 'http://localhost:8080/clubs';
   

    constructor(private http: HttpClient){}

    public GetClub():Observable<klub[]>{
       return this.http.get<klub[]>(this.urlclub)        

    }
}






