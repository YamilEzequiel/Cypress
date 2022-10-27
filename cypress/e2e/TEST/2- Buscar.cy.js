
/// <reference types="cypress" />

import HomePage     from '../../pages/home';
import CurrenciPage from '../../pages/currencies';

const HOME = new HomePage();
const CURRENCI = new CurrenciPage();

describe('Busqueda en la web', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('baseUrl'))
  })

  it('Buscar BTC', () => {
    HOME.getButtonHelp();
    HOME.getButtonSearch();
    cy.wait(1000);
    HOME.writeSearchInput('BTC');
    HOME.getButtonSelectedSearch();
    CURRENCI.readPrice();
  })

  it('Activar modo dark', () => {
    HOME.getButtonHelp();
    CURRENCI.activeNight();
  })



})
