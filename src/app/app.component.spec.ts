import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Store, StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { UsersFacade } from './state/users/users.facade';
import { SnarkyTextPipe } from './test/pipes/snarky-text.pipe';
import { TestModule } from './test/test.module';

describe('AppComponent', () => {
  let usersFacade: UsersFacade;
  let app: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [
        FormsModule,
        StoreModule.forRoot({}),
        TestModule,
      ],
      providers: [UsersFacade, Store, SnarkyTextPipe],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

    usersFacade = TestBed.inject(UsersFacade);

    const fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it('should call usersFacade.getUsers', () => {
    jest.spyOn(usersFacade, 'getUsers');
    app.ngOnInit();

    expect(usersFacade.getUsers).toHaveBeenCalled();
  });

  it('should toggle showSubscribeButton', () => {
    app.showSubscribeButton = true;

    app.toggleSubscribe();
    expect(app.showSubscribeButton).toBe(false);

    app.toggleSubscribe();
    expect(app.showSubscribeButton).toBe(true);
  });

  it('should call usersFacade.deleteUsers', () => {
    jest.spyOn(usersFacade, 'deleteUsers')
    app.onDeleteUser(1);

    expect(usersFacade.deleteUsers).toHaveBeenCalledWith(1);
  });
});
