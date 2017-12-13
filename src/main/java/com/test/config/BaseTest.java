package com.test.config;

import com.aventstack.extentreports.Status;
import com.driver.config.DriverConfig;
import com.enums.Browsers;
import com.files.properties.PropertiesReading;
import com.reports.extent.settings.BaseReport;
import com.reports.extent.settings.GetScreenshot;
import com.wrapper.factory.BrowserFactory;
import org.openqa.selenium.*;

import java.io.IOException;

public class BaseTest extends BaseReport {
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

    public static void initReport(){
        startReport();
    }

    public static void initTest(){
        test = null;
        chooseDriverInstance(browserName);
        DriverConfig.loadApp(driver, PropertiesReading.getURLs().getProperty("gmailURL"));
    }

    public static void endTest(){
        try {
            screenshotPath = GetScreenshot.capture(testCaseName);
            test.log(Status.INFO, "Snapshot below: "+
                    test.addScreenCaptureFromPath(screenshotPath));
        } catch (IOException e) {
            e.printStackTrace();
        }
        BrowserFactory.getInstance().CloseAllDrivers();
    }

    public static void endReport(){
        stopReport();
    }

}
