import { Injectable } from '@angular/core';
import { Interest } from './models/Interest';

@Injectable({
  providedIn: 'root'
})
export class InterestService {

  interests: Interest[] = [];

  addInterest(interest: Interest): void {
    this.interests.push(interest);
  }
  getAllInterests():Interest[]{
    return this.interests
}
removeInterest(interest:Interest): void {
  const index = this.interests.indexOf(interest);
  if (index !== -1) {
    this.interests.splice(index, 1);
  }
}
}
