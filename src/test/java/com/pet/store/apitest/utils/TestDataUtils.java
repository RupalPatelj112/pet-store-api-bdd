package com.pet.store.apitest.utils;

import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

public class TestDataUtils {

    private static Properties properties;

    public static void load() {
        properties = new Properties();

        try (InputStream inputStream = TestDataUtils.class.getClassLoader().getResourceAsStream(ConfigUtils.getTestdataFile())) {
            properties.load(inputStream);
        } catch (IOException e) {
            System.err.println("Unable to load properties file : " + ConfigUtils.getTestdataFile());
        }
    }

    public static boolean isLoaded() {
        return properties != null;
    }

}