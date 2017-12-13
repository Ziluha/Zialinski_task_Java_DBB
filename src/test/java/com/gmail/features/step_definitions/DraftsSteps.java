package com.gmail.features.step_definitions;

import com.files.properties.PropertiesReading;
import com.page.objects.Page;
import cucumber.api.java.en.*;
import org.junit.Assert;

public class DraftsSteps {
    String subject = "subject";
    static int countOfDraftsAtStart;

    @And("^I choose first Draft$")
    public void iChooseFirstDraft() throws Throwable {
        Page.gmailDrafts().chooseFirstDraft();
    }

    @Given("^I have opened Gmail on Login Page and authorized with valid data n Inbox Page is opened$")
    public void iHaveOpenedGmailOnLoginPageAndAuthorizedWithValidDataInboxPageIsOpened() throws Throwable {
        Page.gmailLogin().inputLogin(PropertiesReading.getCredentials().getProperty("validLogin"));
        Page.gmailLogin().submitLogin();
        Page.gmailPassword().inputPassword(PropertiesReading.getCredentials().getProperty("validPassword"));
        Page.gmailPassword().submitPassword();
        System.out.print("App is started and user authorized");
    }

    @When("^I click Compose button$")
    public void iClickComposeButton() throws Throwable {
        Page.gmailInbox().clickComposeButton();
    }

    @Then("^Opens Compose box and I input Message Subject$")
    public void opensComposeBoxAndIInputMessageSubject() throws Throwable {
        Page.gmailInbox().inputMessageSubject(subject);
    }

    @When("^Saved label is presented$")
    public void savedLabelIsPresented() throws Throwable {
        Assert.assertTrue("Saved label is not presented", Page.gmailInbox().isSavedLabelPresented());
    }

    @Then("^I click Drafts Link$")
    public void iClickDraftsLink() throws Throwable {
        Page.gmailInbox().clickDraftsLink();
    }

    @When("^Draft Page is opened$")
    public void draftPageIsOpened() throws Throwable {
        Assert.assertTrue("Drafts page is not opened", Page.gmailDrafts().isDraftPageOpened());
        countOfDraftsAtStart = Page.gmailDrafts().getCountOfDrafts();
    }

    @And("^My message is presented in Drafts$")
    public void myMessageIsPresentedInDrafts() throws Throwable {
        Assert.assertTrue("Message is not presented in drafts", Page.gmailDrafts().isDraftAdded(subject));
    }

    @Then("^Message successfully added in drafts$")
    public void messageSuccessfullyAddedInDrafts() throws Throwable {
        System.out.print("Message was added to drafts");
    }

    @Then("^I click Discard Drafts button$")
    public void iClickDiscardDraftsButton() throws Throwable {
        Page.gmailDrafts().clickDiscardDraftButton();
    }

    @When("^Count of Drafts equals count of Drafts at start minus (\\d+)$")
    public void countOfDraftsEqualsCountOfDraftsAtStartMinus(int arg0) throws Throwable {
        Assert.assertEquals("Wrong count of drafts", countOfDraftsAtStart-1, Page.gmailDrafts().getCountOfDrafts());
    }

    @Then("^Draft successfully deleted$")
    public void draftSuccessfullyDeleted() throws Throwable {
        System.out.print("Draft successfully deleted");
    }
}
