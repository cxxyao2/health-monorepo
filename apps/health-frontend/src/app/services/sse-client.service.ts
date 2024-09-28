import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SseClientService {

  constructor(private zone:NgZone) { }

  getServerSentEvent(url:string): Observable<any> {
    return new Observable(observer => {
      const eventSource = new EventSource(url);

      // Listen for message from the server
      eventSource.onmessage = (event) => {
        this.zone.run(()=>{
          observer.next(event.data);
        })
      };

      // Handle Error
      eventSource.onerror = (error) =>{
        this.zone.run(()=>{
          observer.error(error);
        });
      };

      // Clean up the event source when the observe is unsbuscribed
      return () =>{
        eventSource.close();
      }
    });
  }
}
