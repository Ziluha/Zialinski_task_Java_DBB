package com.gmail;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/java/com/gmail/features/authorization.feature",
                format = {"pretty", "html:target/cucumber/authorization"},
                monochrome = true)

public class AuthorizationRunner {
}
