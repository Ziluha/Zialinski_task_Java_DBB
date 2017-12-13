package com.gmail.steps;

import com.enums.Browsers;
import com.files.properties.PropertiesReading;
import com.page.objects.Page;
import com.test.config.BaseTest;
import cucumber.api.java.*;

public class Hook {
    @Before
    public void beforeScenario(){
        BaseTest.browserName = Browsers.name.Chrome;
        BaseTest.initTest();
    }

    @After
    public void afterScenario(){
        BaseTest.endTest();
    }
}
