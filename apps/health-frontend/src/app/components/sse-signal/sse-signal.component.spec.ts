import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SseSignalComponent } from './sse-signal.component';

describe('SseSignalComponent', () => {
  let component: SseSignalComponent;
  let fixture: ComponentFixture<SseSignalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SseSignalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SseSignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
