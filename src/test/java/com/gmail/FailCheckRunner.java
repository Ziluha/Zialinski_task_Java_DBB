package com.gmail;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/java/com/gmail/features/failcheck.feature",
        format = {"pretty", "html:target/cucumber/failcheck"})

public class FailCheckRunner {
}
