import { Injectable } from '@angular/core';
import {Leader} from '../shared/leader';
import {Leaders} from '../shared/leaders';
import {Observable, of} from 'rxjs';
import {delay, map} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor(private http: HttpClient) { }
  getLeaders(): Observable<Leader[]> {
    return this.http.get<Leader[]>(baseURL + 'leadership');
  }
  getLeaderFeatured(): Observable<Leader>  {
    return this.http.get<Leader[]>(baseURL + 'leadership?featured=true').pipe(map(leadership => leadership[0]));
  }
}
