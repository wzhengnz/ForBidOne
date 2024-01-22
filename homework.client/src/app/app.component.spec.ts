import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [HttpClientTestingModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });
  
  it('post person info to the server', () => {
    const mockPerson =  { firstName: 'first', lastName: 'last' };
    
    component.ngOnInit();

    const req = httpMock.expectOne('/person');
    expect(req.request.method).toEqual('POST');
    req.flush(mockPerson);

   // expect(component.firstName).toEqual(mockForecasts); Todo: need to check the right resp info
  }); 
});
