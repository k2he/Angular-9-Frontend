import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class NewProjectCountService {

    private _count = new Subject<any>();
    
    newEvent(event) {
      this._count.next(event);
    }

    get events$ () {
      return this._count.asObservable();
    }

}
