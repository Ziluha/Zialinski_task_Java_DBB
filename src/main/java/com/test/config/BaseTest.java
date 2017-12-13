package com.test.config;

import com.aventstack.extentreports.Status;
import com.driver.config.DriverConfig;
import com.enums.Browsers;
import com.files.properties.PropertiesReading;
import com.wrapper.factory.BrowserFactory;
import org.openqa.selenium.*;

public class BaseTest {
    public static WebDriver driver;
    public static Browsers.name browserName;
    private static String screenshotPath;

    private static void chooseDriverInstance(Browsers.name browserName){
        switch (browserName){
            case Firefox:
                driver = BrowserFactory.getInstance().initBrowser(Browsers.name.Firefox);
                break;
            case Chrome:
                driver = BrowserFactory.getInstance().initBrowser(Browsers.name.Chrome);
                break;
        }
    }
    public static void initTest(){
        chooseDriverInstance(browserName);
        DriverConfig.loadApp(driver, PropertiesReading.getURLs().getProperty("gmailURL"));
    }

    public static void endTest(){
        BrowserFactory.getInstance().CloseAllDrivers();
    }
}
