import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {ApiResponseModel} from "../../core/api-response.model";
import {IMember} from "../../models/member";

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  private api = "http://localhost:8080/api/members/";
  private members:IMember | null = null;

  constructor(private http: HttpClient) { }

  public getMembers(): Observable<IMember[]> {
    return this.http.get<ApiResponseModel<IMember[]>>(this.api + "all").pipe(
      map(res => res.data )
    );
  }

  public addMember(member: IMember) : Observable<IMember>{
    return this.http.post( `${this.api}/add` , member);
  }
}

export class ResponseModel<T> {
  message!: string;
  result!: T;
  error!: object
}


