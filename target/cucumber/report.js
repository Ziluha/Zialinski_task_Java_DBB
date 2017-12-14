$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("authorization.feature");
formatter.feature({
  "line": 1,
  "name": "GmailAuthorization",
  "description": "In that case I want to check different ways to authorize in GMail",
  "id": "gmailauthorization",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Authorization With Valid Data",
  "description": "",
  "id": "gmailauthorization;authorization-with-valid-data",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I have opened Gmail on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter \u003cValidLogin\u003e in Login Field",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I submit Login",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Opens Password Page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I enter \u003cValidPassword\u003e in Password Field",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I submit Password",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Opens Inbox Page and authorization is succeed",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "gmailauthorization;authorization-with-valid-data;",
  "rows": [
    {
      "cells": [
        "ValidLogin",
        "ValidPassword"
      ],
      "line": 14,
      "id": "gmailauthorization;authorization-with-valid-data;;1"
    },
    {
      "cells": [
        "test.task.zel",
        "Test1234Test"
      ],
      "line": 15,
      "id": "gmailauthorization;authorization-with-valid-data;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6723939774,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Authorization With Valid Data",
  "description": "",
  "id": "gmailauthorization;authorization-with-valid-data;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I have opened Gmail on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter test.task.zel in Login Field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I submit Login",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Opens Password Page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I enter Test1234Test in Password Field",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I submit Password",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Opens Inbox Page and authorization is succeed",
  "keyword": "Then "
});
formatter.match({
  "location": "AuthorizationSteps.iHaveOpenedGmailOnLoginPage()"
});
formatter.result({
  "duration": 816141082,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test.task.zel",
      "offset": 8
    }
  ],
  "location": "AuthorizationSteps.iEnterValidLoginInLoginField(String)"
});
formatter.result({
  "duration": 284092264,
  "status": "passed"
});
formatter.match({
  "location": "AuthorizationSteps.iSubmitLogin()"
});
formatter.result({
  "duration": 129599455,
  "status": "passed"
});
formatter.match({
  "location": "AuthorizationSteps.opensPasswordPage()"
});
formatter.result({
  "duration": 58808,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test1234Test",
      "offset": 8
    }
  ],
  "location": "AuthorizationSteps.iEnterValidPasswordInPasswordField(String)"
});
formatter.result({
  "duration": 870371419,
  "status": "passed"
});
formatter.match({
  "location": "AuthorizationSteps.iSubmitPassword()"
});
formatter.result({
  "duration": 107653446,
  "status": "passed"
});
formatter.match({
  "location": "AuthorizationSteps.opensInboxPageAndAuthorizationIsSucceed()"
});
formatter.result({
  "duration": 4088522188,
  "status": "passed"
});
formatter.after({
  "duration": 778895781,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 17,
  "name": "Authorization With Invalid Login",
  "description": "",
  "id": "gmailauthorization;authorization-with-invalid-login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "I have opened Gmail on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I enter \u003cInvalidLogin\u003e in Login Field",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I submit Login",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Authorization is unsucceed, because Login in invalid",
  "keyword": "Then "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "gmailauthorization;authorization-with-invalid-login;",
  "rows": [
    {
      "cells": [
        "InvalidLogin"
      ],
      "line": 24,
      "id": "gmailauthorization;authorization-with-invalid-login;;1"
    },
    {
      "cells": [
        "test.invalid.zel"
      ],
      "line": 25,
      "id": "gmailauthorization;authorization-with-invalid-login;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 13739267638,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Authorization With Invalid Login",
  "description": "",
  "id": "gmailauthorization;authorization-with-invalid-login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "I have opened Gmail on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I enter test.invalid.zel in Login Field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I submit Login",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Authorization is unsucceed, because Login in invalid",
  "keyword": "Then "
});
formatter.match({
  "location": "AuthorizationSteps.iHaveOpenedGmailOnLoginPage()"
});
formatter.result({
  "duration": 51873,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test.invalid.zel",
      "offset": 8
    }
  ],
  "location": "AuthorizationSteps.iEnterValidLoginInLoginField(String)"
});
formatter.result({
  "duration": 415391888,
  "status": "passed"
});
formatter.match({
  "location": "AuthorizationSteps.iSubmitLogin()"
});
formatter.result({
  "duration": 167786797,
  "status": "passed"
});
formatter.match({
  "location": "AuthorizationSteps.authorizationIsUnsucceedBecauseLoginInInvalid()"
});
formatter.result({
  "duration": 619533262,
  "status": "passed"
});
formatter.after({
  "duration": 681468586,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 27,
  "name": "Authorization With Invalid Password",
  "description": "",
  "id": "gmailauthorization;authorization-with-invalid-password",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 28,
  "name": "I have opened Gmail on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "I enter \u003cValidLogin\u003e in Login Field",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "I submit Login",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Opens Password Page",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "I enter \u003cInvalidPassword\u003e in Password Field",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "I submit Password",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "Authorization is unsucceed, because Password is invalid",
  "keyword": "Then "
});
formatter.examples({
  "line": 36,
  "name": "",
  "description": "",
  "id": "gmailauthorization;authorization-with-invalid-password;",
  "rows": [
    {
      "cells": [
        "ValidLogin",
        "InvalidPassword"
      ],
      "line": 37,
      "id": "gmailauthorization;authorization-with-invalid-password;;1"
    },
    {
      "cells": [
        "test.task.zel",
        "Test1234Inv"
      ],
      "line": 38,
      "id": "gmailauthorization;authorization-with-invalid-password;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5554574309,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Authorization With Invalid Password",
  "description": "",
  "id": "gmailauthorization;authorization-with-invalid-password;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 28,
  "name": "I have opened Gmail on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "I enter test.task.zel in Login Field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "I submit Login",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Opens Password Page",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "I enter Test1234Inv in Password Field",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "I submit Password",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "Authorization is unsucceed, because Password is invalid",
  "keyword": "Then "
});
formatter.match({
  "location": "AuthorizationSteps.iHaveOpenedGmailOnLoginPage()"
});
formatter.result({
  "duration": 44107,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test.task.zel",
      "offset": 8
    }
  ],
  "location": "AuthorizationSteps.iEnterValidLoginInLoginField(String)"
});
formatter.result({
  "duration": 484089879,
  "status": "passed"
});
formatter.match({
  "location": "AuthorizationSteps.iSubmitLogin()"
});
formatter.result({
  "duration": 115764266,
  "status": "passed"
});
formatter.match({
  "location": "AuthorizationSteps.opensPasswordPage()"
});
formatter.result({
  "duration": 39668,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test1234Inv",
      "offset": 8
    }
  ],
  "location": "AuthorizationSteps.iEnterValidPasswordInPasswordField(String)"
});
formatter.result({
  "duration": 832308905,
  "status": "passed"
});
formatter.match({
  "location": "AuthorizationSteps.iSubmitPassword()"
});
formatter.result({
  "duration": 109754731,
  "status": "passed"
});
formatter.match({
  "location": "AuthorizationSteps.authorizationIsUnsucceedBecausePasswordIsInvalid()"
});
formatter.result({
  "duration": 579608304,
  "status": "passed"
});
formatter.after({
  "duration": 721637654,
  "status": "passed"
});
formatter.uri("drafts.feature");
formatter.feature({
  "line": 1,
  "name": "GmailDraft",
  "description": "In that case I want to check Gmail Drafts",
  "id": "gmaildraft",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5277828356,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Add Message To Drafts",
  "description": "",
  "id": "gmaildraft;add-message-to-drafts",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@addMessage"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I have opened Gmail on Login Page and authorized with valid data n Inbox Page is opened",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click Compose button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Opens Compose box and I input Message Subject",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Saved label is presented",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I click Drafts Link",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Draft Page is opened",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "My message is presented in Drafts",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Message successfully added in drafts",
  "keyword": "Then "
});
formatter.match({
  "location": "DraftsSteps.iHaveOpenedGmailOnLoginPageAndAuthorizedWithValidDataInboxPageIsOpened()"
});
formatter.result({
  "duration": 1316338589,
  "status": "passed"
});
formatter.match({
  "location": "DraftsSteps.iClickComposeButton()"
});
formatter.result({
  "duration": 3862748541,
  "status": "passed"
});
formatter.match({
  "location": "DraftsSteps.opensComposeBoxAndIInputMessageSubject()"
});
formatter.result({
  "duration": 3797407889,
  "status": "passed"
});
formatter.match({
  "location": "DraftsSteps.savedLabelIsPresented()"
});
formatter.result({
  "duration": 2555595131,
  "status": "passed"
});
formatter.match({
  "location": "DraftsSteps.iClickDraftsLink()"
});
formatter.result({
  "duration": 198284686,
  "status": "passed"
});
formatter.match({
  "location": "DraftsSteps.draftPageIsOpened()"
});
formatter.result({
  "duration": 700051707,
  "status": "passed"
});
formatter.match({
  "location": "DraftsSteps.myMessageIsPresentedInDrafts()"
});
formatter.result({
  "duration": 93583857,
  "status": "passed"
});
formatter.match({
  "location": "DraftsSteps.messageSuccessfullyAddedInDrafts()"
});
formatter.result({
  "duration": 50486,
  "status": "passed"
});
formatter.after({
  "duration": 800623478,
  "status": "passed"
});
formatter.before({
  "duration": 5955362062,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Delete Message From Drafts",
  "description": "",
  "id": "gmaildraft;delete-message-from-drafts",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@deleteMessage"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I have opened Gmail on Login Page and authorized with valid data n Inbox Page is opened",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I click Drafts Link",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Draft Page is opened",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I choose first Draft",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click Discard Drafts button",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Count of Drafts equals count of Drafts at start minus 1",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "Draft successfully deleted",
  "keyword": "Then "
});
formatter.match({
  "location": "DraftsSteps.iHaveOpenedGmailOnLoginPageAndAuthorizedWithValidDataInboxPageIsOpened()"
});
formatter.result({
  "duration": 1624854575,
  "status": "passed"
});
formatter.match({
  "location": "DraftsSteps.iClickDraftsLink()"
});
formatter.result({
  "duration": 3972334892,
  "status": "passed"
});
formatter.match({
  "location": "DraftsSteps.draftPageIsOpened()"
});
formatter.result({
  "duration": 152724402,
  "status": "passed"
});
formatter.match({
  "location": "DraftsSteps.iChooseFirstDraft()"
});
formatter.result({
  "duration": 100614213,
  "status": "passed"
});
formatter.match({
  "location": "DraftsSteps.iClickDiscardDraftsButton()"
});
formatter.result({
  "duration": 145746751,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 54
    }
  ],
  "location": "DraftsSteps.countOfDraftsEqualsCountOfDraftsAtStartMinus(int)"
});
formatter.result({
  "duration": 75042067,
  "status": "passed"
});
formatter.match({
  "location": "DraftsSteps.draftSuccessfullyDeleted()"
});
formatter.result({
  "duration": 66020,
  "status": "passed"
});
formatter.after({
  "duration": 1133134606,
  "status": "passed"
});
formatter.uri("failcheck.feature");
formatter.feature({
  "line": 1,
  "name": "GmailFailCheck",
  "description": "In that case I want to check test fail",
  "id": "gmailfailcheck",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Fail Check",
  "description": "",
  "id": "gmailfailcheck;fail-check",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I have opened Gmail on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter \u003cInvalidLogin\u003e in Login Field",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I submit Login",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Authorization is unsucceed, but fails",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "gmailfailcheck;fail-check;",
  "rows": [
    {
      "cells": [
        "InvalidLogin"
      ],
      "line": 11,
      "id": "gmailfailcheck;fail-check;;1"
    },
    {
      "cells": [
        "test.invalid.zel"
      ],
      "line": 12,
      "id": "gmailfailcheck;fail-check;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5246048614,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Fail Check",
  "description": "",
  "id": "gmailfailcheck;fail-check;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I have opened Gmail on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter test.invalid.zel in Login Field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I submit Login",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Authorization is unsucceed, but fails",
  "keyword": "Then "
});
formatter.match({
  "location": "AuthorizationSteps.iHaveOpenedGmailOnLoginPage()"
});
formatter.result({
  "duration": 128157,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test.invalid.zel",
      "offset": 8
    }
  ],
  "location": "AuthorizationSteps.iEnterValidLoginInLoginField(String)"
});
formatter.result({
  "duration": 300754132,
  "status": "passed"
});
formatter.match({
  "location": "AuthorizationSteps.iSubmitLogin()"
});
formatter.result({
  "duration": 233397911,
  "status": "passed"
});
formatter.match({
  "location": "AuthorizationSteps.authorizationIsUnsucceedButFails()"
});
formatter.result({
  "duration": 10058840679,
  "error_message": "java.lang.AssertionError: Password page is not opened\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat com.gmail.features.step_definitions.AuthorizationSteps.authorizationIsUnsucceedButFails(AuthorizationSteps.java:62)\r\n\tat ✽.Then Authorization is unsucceed, but fails(failcheck.feature:8)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 689059562,
  "status": "passed"
});
});