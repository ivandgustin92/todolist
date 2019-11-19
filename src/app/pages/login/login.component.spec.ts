import { async, ComponentFixture, TestBed } from '@angular/core/testing';
<<<<<<< HEAD
=======
import { ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
>>>>>>> 6962227a6b8c597741305f0f0816b5d97d3a6b01

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
<<<<<<< HEAD
      declarations: [ LoginComponent ]
    })
    .compileComponents();
=======
      declarations: [ LoginComponent ],
      imports: [
        NoopAnimationsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatRadioModule,
        MatSelectModule,
      ]
    }).compileComponents();
>>>>>>> 6962227a6b8c597741305f0f0816b5d97d3a6b01
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

<<<<<<< HEAD
  it('should create', () => {
=======
  it('should compile', () => {
>>>>>>> 6962227a6b8c597741305f0f0816b5d97d3a6b01
    expect(component).toBeTruthy();
  });
});
