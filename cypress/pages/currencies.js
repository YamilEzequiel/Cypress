class homeLocators{
    constructor() {

        //Text
        this.price      = '.priceValue > span';

        //Btn
        this.btnNight   = '.icon-Moon';
    }
}

export default class Home extends homeLocators{
    constructor(){super()}

    readPrice(){
        cy.get(this.price).should('not.be.empty')
    }

    activeNight(){
        cy.get(this.btnNight).click();
    }
}