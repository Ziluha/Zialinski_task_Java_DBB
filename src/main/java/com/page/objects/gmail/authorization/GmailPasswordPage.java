package com.page.objects.gmail.authorization;

import com.wrapper.factory.BrowserFactory;
import org.openqa.selenium.*;
import org.openqa.selenium.support.*;
import org.openqa.selenium.support.ui.*;

public class GmailPasswordPage {
    private WebDriverWait wait;

    @FindBy(how = How.XPATH, using = "//div[@jsname='B34EJ']")
    private WebElement passwordErrorLabel;

    @FindBy(how = How.XPATH, using = "//div[id='password']//div[jsname='YRMmle']")
    private WebElement inputPasswordLabel;

    @FindBy(how = How.NAME, using = "password")
    private WebElement passwordField;

    @FindBy(how = How.ID, using = "passwordNext")
    private WebElement submitPasswordButton;

    public void inputPassword(String password){
        wait = new WebDriverWait(BrowserFactory.getDriver(), 10);
        wait.until(elem -> passwordField.isDisplayed());
        passwordField.click();
        passwordField.sendKeys(password);
    }

    public void submitPassword(){
        submitPasswordButton.click();
    }

    public boolean isPasswordErrorLabelPresented(){
        try {
            wait = new WebDriverWait(BrowserFactory.getDriver(), 10);
            return wait.until(elem -> passwordErrorLabel.isDisplayed());
        }
        catch (NoSuchElementException ex){
            return false;
        }
    }

    public boolean IsLoginApplied(){
        try {
            wait = new WebDriverWait(BrowserFactory.getDriver(), 3);
            return wait.until(elem->inputPasswordLabel.isDisplayed());
        }
        catch (Exception ex){
            return false;
        }
    }
}
