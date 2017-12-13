package com.gmail.features.step_definitions;

import com.page.objects.Page;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class AuthorizationSteps {
    @And("^I submit Login$")
    public void iSubmitLogin() throws Throwable {
        Page.gmailLogin().submitLogin();
    }

    @Given("^I have opened Gmail on Login Page$")
    public void iHaveOpenedGmailOnLoginPage() throws Throwable {
        System.out.print("App started and login page is opened");
    }

    @When("^I enter ([^\"]*) in Login Field$")
    public void iEnterValidLoginInLoginField(String login) throws Throwable {
        Page.gmailLogin().inputLogin(login);
    }

    @Then("^Opens Password Page$")
    public void opensPasswordPage() throws Throwable {
        System.out.print("Password page is opened");
    }

    @When("^I enter ([^\"]*) in Password Field$")
    public void iEnterValidPasswordInPasswordField(String password) throws Throwable {
        Page.gmailPassword().inputPassword(password);
    }

    @And("^I submit Password$")
    public void iSubmitPassword() throws Throwable {
        Page.gmailPassword().submitPassword();
    }

    @Then("^Opens Inbox Page and authorization is succeed$")
    public void opensInboxPageAndAuthorizationIsSucceed() throws Throwable {
        Assert.assertTrue("User was not logged in",
                Page.gmailInbox().isLoginSucceed());
    }

    @Then("^Authorization is unsucceed, because Login in invalid$")
    public void authorizationIsUnsucceedBecauseLoginInInvalid() throws Throwable {
        Assert.assertTrue("Login Error Lable is not presented",
                Page.gmailLogin().isLoginErrorLabelPresented());
    }

    @Then("^Authorization is unsucceed, because Password is invalid$")
    public void authorizationIsUnsucceedBecausePasswordIsInvalid() throws Throwable {
        Assert.assertTrue("Password Error Lable is not presented",
                Page.gmailPassword().isPasswordErrorLabelPresented());
    }
}
