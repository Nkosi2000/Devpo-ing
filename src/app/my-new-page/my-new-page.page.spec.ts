import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyNewPagePage } from './my-new-page.page';

describe('MyNewPagePage', () => {
  let component: MyNewPagePage;
  let fixture: ComponentFixture<MyNewPagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MyNewPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
