import { TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { provideMockStore } from '@ngrx/store/testing';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { ObservablesModule } from './observables/observables.module';
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
        LayoutModule,
        ObservablesModule,
        TestModule,
      ],
      providers: [UsersFacade, SnarkyTextPipe, provideMockStore()],
    }).compileComponents();

    usersFacade = TestBed.inject(UsersFacade);

    const fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it('should call usersFacade.getUsers', () => {
    spyOn(usersFacade, 'getUsers');
    app.ngOnInit();

    expect(usersFacade.getUsers).toHaveBeenCalled();
  });

  it('should toggle showSubscribeButton', () => {
    app.showSubscribeButton = true;

    app.toggleSubscribe();
    expect(app.showSubscribeButton).toBeFalse();

    app.toggleSubscribe();
    expect(app.showSubscribeButton).toBeTrue();
  });

  it('should call usersFacade.deleteUsers', () => {
    spyOn(usersFacade, 'deleteUsers');
    app.onDeleteUser(1);

    expect(usersFacade.deleteUsers).toHaveBeenCalledWith(1);
  });
});
