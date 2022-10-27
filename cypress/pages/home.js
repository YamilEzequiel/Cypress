class homeLocators{
    constructor() {

        //Button
        this.btnSingUp      = '.HBft';
        this.btnLogin       = '.latwGv';
        this.btnHelp        = '.gv-footer > .sc-1ebmiy2-0';
        this.btnRegister    = '.dgbbt4-5 > .sc-1ebmiy2-0';
        this.iAgreeButton   = '.q04qem-4';
        this.btnSelected    = '.ldDpTG > .select-control > .sc-14rfo7b-0';
        this.btnSerach      = '.zafg3t-1'

        // Input
        this.emailInput     = ':nth-child(1) > .snii6e-0';
        this.passwordInput  = '.jgii2y-0 > .snii6e-0';
        this.searchInput    = '.sc-1ez0d80-6 > .sc-1ez0d80-3';

        //Error
        this.errorEmail     = ':nth-child(1) > .dgbbt4-4';
        this.errorPass      = ':nth-child(2) > .dgbbt4-4';
    }
}

export default class Home extends homeLocators{
    constructor(){super()}

    getButtonHelp(){
        cy.get(this.btnHelp).click();
    }

    getButtonRegister(){
        cy.get(this.btnSingUp).click();
    }

    getButtonLogin(){
        cy.get(this.btnLogin).click();
    }

    getButtonSearch(){
        cy.get(this.btnSerach).click();
    }

    getButtonAgree(){
        cy.get(this.iAgreeButton).click();
    }

    getButtonSelectedSearch(){
        cy.get(this.btnSelected).click();
    }

    getButtonRegisterFinish(){
        cy.get(this.btnRegister).click();
    }

    writeEmailInput(email){
        cy.get(this.emailInput).type(email).should('have.value', email)
    }

    writePasswordInput(pass){
        cy.get(this.passwordInput).type(pass).should('have.value',pass);
    }

    writeSearchInput(text){
        cy.get(this.searchInput).type(text).should('have.value',text);
    }

    getErrorEmail(expected){
        return cy.get(this.errorEmail).should('have.text',expected);
    }

    getErrorPass(expected){
        return cy.get(this.errorPass).should('have.text',expected);
    }

    completeInput(email,pass){
        this.getButtonHelp();
        this.getButtonRegister();
        this.writeEmailInput(email);
        this.writePasswordInput(pass);
        this.getButtonAgree();
        this.getButtonRegisterFinish();
    }

}