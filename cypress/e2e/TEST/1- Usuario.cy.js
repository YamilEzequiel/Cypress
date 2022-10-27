
/// <reference types="cypress" />

import HomePage from '../../pages/home';

import User     from '../../fixtures/user.json';
import Error    from '../../fixtures/error.json';

const HOME = new HomePage();

describe('Registro de Usuario', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('baseUrl'))
  })

  it('Email incorrecto', () => {
    HOME.completeInput(User.emailWrong,User.passwordWrong);
    HOME.getErrorEmail(Error.email);
  })

  it('Password incorrecto', () => {
    HOME.completeInput(User.emailWrong,User.passwordWrong);
    HOME.getErrorPass(Error.pass);
  })

  it('Correcto 😁', () => {
    HOME.completeInput(User.email,User.password);
  })


})
