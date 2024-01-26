/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Cadastro_usuarioComponent } from './cadastro_usuario.component';

describe('Cadastro_usuarioComponent', () => {
  let component: Cadastro_usuarioComponent;
  let fixture: ComponentFixture<Cadastro_usuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cadastro_usuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cadastro_usuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
