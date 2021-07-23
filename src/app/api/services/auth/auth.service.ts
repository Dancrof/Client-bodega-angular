import { Injectable } from '@angular/core';
import {CreateAuthDto} from '../../models'
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {conectBackendUrl} from '../../constant';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url: string = conectBackendUrl;

  constructor(private http: HttpClient) { }

  singIn(form: CreateAuthDto):Observable<CreateAuthDto>{
    const path = this.url + "/auth/singIn";
    return this.http.post<CreateAuthDto>(path, form);
  }


}
