import { Injectable } from '@angular/core';
import {Leader} from '../shared/leader';
import {Leaders} from '../shared/leaders';
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }
  getLeaders(): Observable<Leader[]> {
    return of (Leaders).pipe(delay(2000));
  }
  getLeaderFeatured(): Observable<Leader>  {
    return of (Leaders.filter((leader) => (leader.featured))[0]).pipe(delay(2000));
  }
}
