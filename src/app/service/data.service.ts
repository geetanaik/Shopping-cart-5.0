import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { SignUp } from '../model/signup.model';

/**
 * DataService supports depencency injection + it can be injected 
 * into other component as depenency because of @Injectable()
 */
@Injectable()  
export class DataService {

  //Type supports Generis - yes yes yes this dataservice is of type SignUp. as we are expecting signup object.
  private messageSource = new BehaviorSubject<SignUp>(new SignUp());
  welcomeMessage = this.messageSource.asObservable();
  //this welcomeMessage will be subscribe by the receiver 
  constructor() { }

  /**
   * 
   * @param message 
   * this method should be called by sender
   */
  public changeMessage(message: SignUp) {
    this.messageSource.next(message);
  }

}