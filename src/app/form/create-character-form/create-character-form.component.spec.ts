import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCharacterFormComponent } from './create-character-form.component';

describe('CreateCharacterFormComponent', () => {
  let component: CreateCharacterFormComponent;
  let fixture: ComponentFixture<CreateCharacterFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCharacterFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCharacterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
