package com.gmail;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(features = "features",
                glue = "/src/main/java/step_definitions",
                format = {"pretty", "html:target/cucumber"})

public class AuthorizationTestRunner {
}
