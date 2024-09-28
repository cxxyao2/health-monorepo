import { SseClientService } from '@health-frontend/app/services/sse-client.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sse-client',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sse-client.component.html',
  styleUrl: './sse-client.component.css',
})
export class SseClientComponent implements OnInit, OnDestroy {

  message: string | null = null;
  private sseSubscription: Subscription | null = null;

  constructor(private sseService: SseClientService){}

  ngOnInit(): void {
      const sseUrl="http://localhost:3333/sse-endpoint";
      this.sseSubscription = this.sseService.getServerSentEvent(sseUrl).subscribe({
        next: (data:string)=> {
          this.message = data;
        },
        error:(error:any)=>{
          console.error('SSE error',error);
        }
      });
  }

  ngOnDestroy(): void {
      if(this.sseSubscription) {
        this.sseSubscription.unsubscribe();
      }
  }
  
}
