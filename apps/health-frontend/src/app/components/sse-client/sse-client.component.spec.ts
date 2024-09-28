import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SseClientComponent } from './sse-client.component';

describe('SseClientComponent', () => {
  let component: SseClientComponent;
  let fixture: ComponentFixture<SseClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SseClientComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SseClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
