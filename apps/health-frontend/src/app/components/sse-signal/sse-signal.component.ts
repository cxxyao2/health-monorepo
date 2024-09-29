import { Component, signal, effect, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

const url="http://localhost:3333/sse-endpoint"; 

@Component({
  selector: 'app-sse-signal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sse-signal.component.html',
  styleUrl: './sse-signal.component.css',
})
export class SseSignalComponent  implements OnDestroy{
   sseMessageSignal = signal<string>('');
    eventSource = new EventSource(SSE_API_URL);
  

   constructor(){
    effect(()=>{
      console.log('new message sent by server side',this.sseMessageSignal());
    });
    this.eventSource.onmessage = (event)=>{
      this.sseMessageSignal.set(event.data);
    };

    this.eventSource.onerror = (error) =>{  
      console.error(error);
      this.sseMessageSignal.set('Error happended.');
    }
   }

   ngOnDestroy(): void {
       this.eventSource.close();
   }

}
