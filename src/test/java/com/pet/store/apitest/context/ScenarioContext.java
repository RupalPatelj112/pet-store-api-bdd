package com.pet.store.apitest.context;

import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class ScenarioContext {

    private static final String RESPONSE_KEY = "RESPONSE";

    private Map<String, Object> data = new HashMap<>();

    public void setResponse(Response response) {
        data.put(RESPONSE_KEY, response);
    }

    public Response getResponse() {
        return (Response) data.get(RESPONSE_KEY);
    }

    public void set(String key, Object object) {
        data.put(key, object);
    }

    public Object get(String key) {
        return data.get(key);
    }

    public String getString(String key) {
        return (String) data.get(key);
    }

    public Integer getInteger(String key) {
        return (Integer) data.get(key);
    }

}