import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IdentificationService {

  id;
  identity=null;
  routeStatus=false;
  userName:String=null;
  paymentId;
  constructor() { }
}
