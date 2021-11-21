package com.pet.store.apitest.stepDefinitions;

import com.pet.store.apitest.requests.petstore.Petstore;
import com.pet.store.apitest.service.AbstractSteps;
import com.pet.store.apitest.utils.TestDataRecord;
import cucumber.api.PendingException;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.response.Response;


import static com.pet.store.apitest.constants.ScenarioKeys.*;
import static org.hamcrest.CoreMatchers.*;

public class PetstoreSteps extends AbstractSteps {

    private Petstore petstore;
    private TestDataRecord testDataRecord;

    public PetstoreSteps() {
        petstore = new Petstore();
        testDataRecord = new TestDataRecord();
    }

    @Before
    public void beforeEachScenario() {
        super.beforeEachScenario();
    }

    @Given("^create Post request to add a new pet with \"([^\"]*)\" and \"([^\"]*)\" to the store$")
    public void createANewPostRequestAddANewPetToTheStore(int id, String petName) {
        Response response = petstore.postPetStore(id,petName);
        Integer petId = response.jsonPath().get("id");

        getScenarioContext().set(PET_ID, petId);
        getScenarioContext().set(PET_NAME, petName);
        getScenarioContext().setResponse(response);

    }

    @When("^pet was created verify the data$")
    public void thenVerifyThePetWasCreatedWithCorrectData() throws InterruptedException {
        Thread.sleep(2000);

        int petId = getScenarioContext().getInteger(PET_ID);
        Response response = petstore.VerifyPetIdCreated(petId);

        getScenarioContext().setResponse(response);
    }

    @And("^they can update the pet information using the PUT request with new name \"([^\"]*)\" and \"([^\"]*)\" to verify the updated information in response$")
    public void theyCanUpdateThePetInformataionUsingThePUTRequestAndVerifyTheUpdatedInformationInResposne(String updatedName, String updatedtagName) {
        int petId = getScenarioContext().getInteger(PET_ID);
        Response response = petstore.putPetDetails(petId, updatedName, updatedtagName);
        getScenarioContext().setResponse(response);
    }

    @Then("^can delete the pet using DELETE request and verify the pet is deleted successfully$")
    public void theyCanDeleteThePETUsingDELETERequestAndVerifyThePetIsDeletedSuccessfully() {
        int petId = getScenarioContext().getInteger(PET_ID);
        Response response = petstore.deletePetDetails(petId);
        response
                .then()
                .statusCode(200)
                .log()
                .all();

        getScenarioContext().setResponse(response);
    }


    @After
    public void afterEachScenario() {
        super.afterEachScenario();

    }

    @Then("^I verify the pet is added into pet record$")
    public void iVerifyThePetIsAddedIntoPetRecord() {
        int petId = getScenarioContext().getInteger(PET_ID);
        String petName = getScenarioContext().getString(PET_NAME);
        Response response = getScenarioContext().getResponse();
        response
                .then()
                .log()
                .all()
                .statusCode(200)
                .body("id", equalTo(petId))
                .body("name", equalTo(petName));

    }

    @When("^a request to addPet is made$")
    public void aRequestToAddPetIsMade() {
        Response response = getScenarioContext().getResponse();
        response
                .then()
                .log()
                .all()
                .statusCode(200);
    }

    @And("^I verify the pet id is \"([^\"]*)\"$")
    public void iVerifyThePetIdIs(int petId) throws Throwable {
        Response response = getScenarioContext().getResponse();
        response
                .then()
                .log()
                .all()
                .statusCode(200)
                .body("id", equalTo(petId));
    }

    @And("^I verify the petName is \"([^\"]*)\"$")
    public void iVerifyThePetNameIs(String petName) throws Throwable {
        Response response = getScenarioContext().getResponse();
        response
                .then()
                .log()
                .all()
                .statusCode(200)
                .body("name", equalTo(petName));
    }

    @Then("^I can verify the record updated with status code \"([^\"]*)\"$")
    public void iCanVerifyTheRecordUpdatedWithStatusCode(int statuscode) throws Throwable {
        Response response = getScenarioContext().getResponse();
        response
                .then()
                .log()
                .all()
                .statusCode(statuscode);
    }

    @And("^I verify the pettagName is \"([^\"]*)\"$")
    public void iVerifyThePettagNameIs(String tagName) throws Throwable {
        Response response = getScenarioContext().getResponse();
        response
                .then()
                .log()
                .all()
                .statusCode(200)
                .body("tags[0].name", equalTo(tagName));
    }
}
