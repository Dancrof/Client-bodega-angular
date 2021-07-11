import { Injectable } from '@angular/core';
import {CreateAuthDto, Response} from '../../models'
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {conectBackendUrl} from '../../constant';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url: string = conectBackendUrl;

  constructor(private http: HttpClient) { }

  singIn(form: CreateAuthDto):Observable<Response>{
    const path = this.url + "/auth/singIn";
    return this.http.post<Response>(path, form)
  }


}
