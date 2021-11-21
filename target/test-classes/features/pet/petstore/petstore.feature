@petstore
Feature: Pet store - add/create pets to store, update, verify and remove a pet record.

  As a store admin
  I want to utilise endpoint of the pet store API's
  So I can add & update and delete my pet store details in the store

  @sanity
  Scenario Outline: Verify as a admin of the store i can add , update  and remove a pet record
    Given create Post request to add a new pet with "<id>" and "<petName>" to the store
    When pet was created verify the data
    And they can update the pet information using the PUT request with new name "<updatePetName>" and "<tagName>" to verify the updated information in response
    Then can delete the pet using DELETE request and verify the pet is deleted successfully

    Examples:
      | id  | petName    | updatePetName | tagName |
      | 102 | puggiesNo1 | torn          | owner   |
      | 103 | puggiesNo2 | coco          | owner   |


  @sanity @addpet @regression
  Scenario Outline: Verify as a admin of the store i can add a pet record
    Given create Post request to add a new pet with "<id>" and "<petName>" to the store
    When a request to addPet is made
    Then I verify the pet is added into pet record
    And I verify the pet id is "<id>"
    And I verify the petName is "<petName>"

    Examples:
      | id  | petName    |
      | 1040 | postpuggiesNo1 |
      | 1050 | postpuggiesNo2 |


  @sanity @getpet @regression
  Scenario Outline: Verify as a admin of the store i can get a pet record
    Given create Post request to add a new pet with "<id>" and "<petName>" to the store
    When pet was created verify the data
    Then I verify the pet is added into pet record
    And I verify the pet id is "<id>"
    And I verify the petName is "<petName>"

    Examples:
      | id  | petName       |
      | 1060 | GetpuggiesNo1 |
#      | 1070 | GetpuggiesNo2 |

  @sanity @updatepet @regression
  Scenario Outline: Verify as a admin of the store i can update a pet record
    Given create Post request to add a new pet with "<id>" and "<petName>" to the store
    When they can update the pet information using the PUT request with new name "<updatePetName>" and "<tagName>" to verify the updated information in response
    Then I can verify the record updated with status code "<statuscode>"
    And I verify the pet id is "<id>"
    And I verify the petName is "<updatePetName>"
    And I verify the pettagName is "<tagName>"

    Examples:
      | id  | petName  | updatePetName | tagName | statuscode |
      | 1080 | labrador | BabyLabrador  | owner   | 200        |
      | 1090 | bulldog  | TeenBulldog   | owner   | 200        |