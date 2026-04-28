import { Page,Locator } from '@playwright/test';

export class loginpage{//export is used to use this file in another class/file
    readonly page:Page;
    readonly mail:Locator;
    readonly password:Locator;
    readonly loginbutton:Locator;


    constructor(page:Page){//once we created object it will aitomattivcally create a constructor
        this.page=page
        this.mail=page.locator('#Email');//this keyword is used to represent the page
        this.password=page.locator('#Password')
        this.loginbutton=page.locator('input[value='Log in']');


    }
    async gotoLoginpage(){
        await this.page.goto("https://demowebshop.tricentis.com/login")
    }
    async login(mail:string,password:string){//we will put diff username and pass so i hav egn it in the input()
        this.mail.fill(mail);
        this.password.fill(password);
        this.loginbutton.click();

    }

}