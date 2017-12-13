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
  "duration": 6347586837,
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
  "duration": 109740861,
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
  "duration": 5395283636,
  "status": "passed"
});
formatter.match({
  "location": "AuthorizationSteps.iSubmitLogin()"
});
formatter.result({
  "duration": 4360513829,
  "status": "passed"
});
formatter.match({
  "location": "AuthorizationSteps.opensPasswordPage()"
});
formatter.result({
  "duration": 56867,
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
  "duration": 847550776,
  "status": "passed"
});
formatter.match({
  "location": "AuthorizationSteps.iSubmitPassword()"
});
formatter.result({
  "duration": 147906011,
  "status": "passed"
});
formatter.match({
  "location": "AuthorizationSteps.opensInboxPageAndAuthorizationIsSucceed()"
});
formatter.result({
  "duration": 4856160078,
  "status": "passed"
});
formatter.after({
  "duration": 699685543,
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
  "duration": 6399027667,
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
  "duration": 40500,
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
  "duration": 266339671,
  "status": "passed"
});
formatter.match({
  "location": "AuthorizationSteps.iSubmitLogin()"
});
formatter.result({
  "duration": 132015863,
  "status": "passed"
});
formatter.match({
  "location": "AuthorizationSteps.authorizationIsUnsucceedBecauseLoginInInvalid()"
});
formatter.result({
  "duration": 609424628,
  "status": "passed"
});
formatter.after({
  "duration": 667506348,
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
  "duration": 5744449974,
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
  "duration": 60196,
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
  "duration": 485297390,
  "status": "passed"
});
formatter.match({
  "location": "AuthorizationSteps.iSubmitLogin()"
});
formatter.result({
  "duration": 112634946,
  "status": "passed"
});
formatter.match({
  "location": "AuthorizationSteps.opensPasswordPage()"
});
formatter.result({
  "duration": 56867,
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
  "duration": 837031871,
  "status": "passed"
});
formatter.match({
  "location": "AuthorizationSteps.iSubmitPassword()"
});
formatter.result({
  "duration": 121428440,
  "status": "passed"
});
formatter.match({
  "location": "AuthorizationSteps.authorizationIsUnsucceedBecausePasswordIsInvalid()"
});
formatter.result({
  "duration": 566845810,
  "status": "passed"
});
formatter.after({
  "duration": 664720725,
  "status": "passed"
});
});