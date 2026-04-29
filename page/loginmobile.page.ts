
import { Page,Locator } from '@playwright/test';

export class loginmobile{
    readonly pag:Page;
    readonly login:Locator;
    readonly username:Locator;
    readonly password:Locator;
    readonly loginbutton:Locator;

    constructor(pages:Page){
        this.pag=pages;
        this.login=pages.locator("#login2");
        this.username=pages.locator("#loginusername");
        this.password=pages.locator("#loginpassword");
        this.loginbutton=pages.locator("button[onclick='logIn()']");

    }

    async gotologinpage(){
        await this.pag.goto("https://www.demoblaze.com/index.html");
    }

    async loginbuttonclick(username:string,password:string){
        await this.login.click();
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginbutton.click();
        

    }
    

}

