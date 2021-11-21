$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("pet/petstore/petstore.feature");
formatter.feature({
  "line": 2,
  "name": "Pet store - add/create pets to store, update, verify and remove a pet record.",
  "description": "\nAs a store admin\nI want to utilise endpoint of the pet store API\u0027s\nSo I can add \u0026 update and delete my pet store details in the store",
  "id": "pet-store---add/create-pets-to-store,-update,-verify-and-remove-a-pet-record.",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@petstore"
    }
  ]
});
formatter.scenarioOutline({
  "line": 22,
  "name": "Verify as a admin of the store i can add a pet record",
  "description": "",
  "id": "pet-store---add/create-pets-to-store,-update,-verify-and-remove-a-pet-record.;verify-as-a-admin-of-the-store-i-can-add-a-pet-record",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 21,
      "name": "@sanity"
    },
    {
      "line": 21,
      "name": "@addpet"
    },
    {
      "line": 21,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "create Post request to add a new pet with \"\u003cid\u003e\" and \"\u003cpetName\u003e\" to the store",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "a request to addPet is made",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "I verify the pet is added into pet record",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "I verify the pet id is \"\u003cid\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I verify the petName is \"\u003cpetName\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 29,
  "name": "",
  "description": "",
  "id": "pet-store---add/create-pets-to-store,-update,-verify-and-remove-a-pet-record.;verify-as-a-admin-of-the-store-i-can-add-a-pet-record;",
  "rows": [
    {
      "cells": [
        "id",
        "petName"
      ],
      "line": 30,
      "id": "pet-store---add/create-pets-to-store,-update,-verify-and-remove-a-pet-record.;verify-as-a-admin-of-the-store-i-can-add-a-pet-record;;1"
    },
    {
      "cells": [
        "1040",
        "postpuggiesNo1"
      ],
      "line": 31,
      "id": "pet-store---add/create-pets-to-store,-update,-verify-and-remove-a-pet-record.;verify-as-a-admin-of-the-store-i-can-add-a-pet-record;;2"
    },
    {
      "cells": [
        "1050",
        "postpuggiesNo2"
      ],
      "line": 32,
      "id": "pet-store---add/create-pets-to-store,-update,-verify-and-remove-a-pet-record.;verify-as-a-admin-of-the-store-i-can-add-a-pet-record;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5301953,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Verify as a admin of the store i can add a pet record",
  "description": "",
  "id": "pet-store---add/create-pets-to-store,-update,-verify-and-remove-a-pet-record.;verify-as-a-admin-of-the-store-i-can-add-a-pet-record;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@petstore"
    },
    {
      "line": 21,
      "name": "@regression"
    },
    {
      "line": 21,
      "name": "@sanity"
    },
    {
      "line": 21,
      "name": "@addpet"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "create Post request to add a new pet with \"1040\" and \"postpuggiesNo1\" to the store",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "a request to addPet is made",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "I verify the pet is added into pet record",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "I verify the pet id is \"1040\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I verify the petName is \"postpuggiesNo1\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "1040",
      "offset": 43
    },
    {
      "val": "postpuggiesNo1",
      "offset": 54
    }
  ],
  "location": "PetstoreSteps.createANewPostRequestAddANewPetToTheStore(int,String)"
});
formatter.result({
  "duration": 2184579430,
  "status": "passed"
});
formatter.match({
  "location": "PetstoreSteps.aRequestToAddPetIsMade()"
});
formatter.result({
  "duration": 27747655,
  "status": "passed"
});
formatter.match({
  "location": "PetstoreSteps.iVerifyThePetIsAddedIntoPetRecord()"
});
formatter.result({
  "duration": 74127520,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1040",
      "offset": 24
    }
  ],
  "location": "PetstoreSteps.iVerifyThePetIdIs(int)"
});
formatter.result({
  "duration": 18813982,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "postpuggiesNo1",
      "offset": 25
    }
  ],
  "location": "PetstoreSteps.iVerifyThePetNameIs(String)"
});
formatter.result({
  "duration": 20347926,
  "status": "passed"
});
formatter.after({
  "duration": 111235,
  "status": "passed"
});
formatter.before({
  "duration": 71450,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Verify as a admin of the store i can add a pet record",
  "description": "",
  "id": "pet-store---add/create-pets-to-store,-update,-verify-and-remove-a-pet-record.;verify-as-a-admin-of-the-store-i-can-add-a-pet-record;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@petstore"
    },
    {
      "line": 21,
      "name": "@regression"
    },
    {
      "line": 21,
      "name": "@sanity"
    },
    {
      "line": 21,
      "name": "@addpet"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "create Post request to add a new pet with \"1050\" and \"postpuggiesNo2\" to the store",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "a request to addPet is made",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "I verify the pet is added into pet record",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "I verify the pet id is \"1050\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I verify the petName is \"postpuggiesNo2\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "1050",
      "offset": 43
    },
    {
      "val": "postpuggiesNo2",
      "offset": 54
    }
  ],
  "location": "PetstoreSteps.createANewPostRequestAddANewPetToTheStore(int,String)"
});
formatter.result({
  "duration": 550646410,
  "status": "passed"
});
formatter.match({
  "location": "PetstoreSteps.aRequestToAddPetIsMade()"
});
formatter.result({
  "duration": 932062,
  "status": "passed"
});
formatter.match({
  "location": "PetstoreSteps.iVerifyThePetIsAddedIntoPetRecord()"
});
formatter.result({
  "duration": 15151035,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1050",
      "offset": 24
    }
  ],
  "location": "PetstoreSteps.iVerifyThePetIdIs(int)"
});
formatter.result({
  "duration": 9201218,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "postpuggiesNo2",
      "offset": 25
    }
  ],
  "location": "PetstoreSteps.iVerifyThePetNameIs(String)"
});
formatter.result({
  "duration": 15356171,
  "status": "passed"
});
formatter.after({
  "duration": 51643,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 36,
  "name": "Verify as a admin of the store i can get a pet record",
  "description": "",
  "id": "pet-store---add/create-pets-to-store,-update,-verify-and-remove-a-pet-record.;verify-as-a-admin-of-the-store-i-can-get-a-pet-record",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 35,
      "name": "@sanity"
    },
    {
      "line": 35,
      "name": "@getpet"
    },
    {
      "line": 35,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "create Post request to add a new pet with \"\u003cid\u003e\" and \"\u003cpetName\u003e\" to the store",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "pet was created verify the data",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "I verify the pet is added into pet record",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "I verify the pet id is \"\u003cid\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I verify the petName is \"\u003cpetName\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 43,
  "name": "",
  "description": "",
  "id": "pet-store---add/create-pets-to-store,-update,-verify-and-remove-a-pet-record.;verify-as-a-admin-of-the-store-i-can-get-a-pet-record;",
  "rows": [
    {
      "cells": [
        "id",
        "petName"
      ],
      "line": 44,
      "id": "pet-store---add/create-pets-to-store,-update,-verify-and-remove-a-pet-record.;verify-as-a-admin-of-the-store-i-can-get-a-pet-record;;1"
    },
    {
      "cells": [
        "1060",
        "GetpuggiesNo1"
      ],
      "line": 45,
      "id": "pet-store---add/create-pets-to-store,-update,-verify-and-remove-a-pet-record.;verify-as-a-admin-of-the-store-i-can-get-a-pet-record;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 66270,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "Verify as a admin of the store i can get a pet record",
  "description": "",
  "id": "pet-store---add/create-pets-to-store,-update,-verify-and-remove-a-pet-record.;verify-as-a-admin-of-the-store-i-can-get-a-pet-record;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@petstore"
    },
    {
      "line": 35,
      "name": "@regression"
    },
    {
      "line": 35,
      "name": "@sanity"
    },
    {
      "line": 35,
      "name": "@getpet"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "create Post request to add a new pet with \"1060\" and \"GetpuggiesNo1\" to the store",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "pet was created verify the data",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "I verify the pet is added into pet record",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "I verify the pet id is \"1060\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I verify the petName is \"GetpuggiesNo1\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "1060",
      "offset": 43
    },
    {
      "val": "GetpuggiesNo1",
      "offset": 54
    }
  ],
  "location": "PetstoreSteps.createANewPostRequestAddANewPetToTheStore(int,String)"
});
formatter.result({
  "duration": 536239582,
  "status": "passed"
});
formatter.match({
  "location": "PetstoreSteps.thenVerifyThePetWasCreatedWithCorrectData()"
});
formatter.result({
  "duration": 2556296458,
  "status": "passed"
});
formatter.match({
  "location": "PetstoreSteps.iVerifyThePetIsAddedIntoPetRecord()"
});
formatter.result({
  "duration": 15666449,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1060",
      "offset": 24
    }
  ],
  "location": "PetstoreSteps.iVerifyThePetIdIs(int)"
});
formatter.result({
  "duration": 8098466,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GetpuggiesNo1",
      "offset": 25
    }
  ],
  "location": "PetstoreSteps.iVerifyThePetNameIs(String)"
});
formatter.result({
  "duration": 14517755,
  "status": "passed"
});
formatter.after({
  "duration": 100460,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 46,
      "value": "#      | 1070 | GetpuggiesNo2 |"
    }
  ],
  "line": 49,
  "name": "Verify as a admin of the store i can update a pet record",
  "description": "",
  "id": "pet-store---add/create-pets-to-store,-update,-verify-and-remove-a-pet-record.;verify-as-a-admin-of-the-store-i-can-update-a-pet-record",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 48,
      "name": "@sanity"
    },
    {
      "line": 48,
      "name": "@updatepet"
    },
    {
      "line": 48,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 50,
  "name": "create Post request to add a new pet with \"\u003cid\u003e\" and \"\u003cpetName\u003e\" to the store",
  "keyword": "Given "
});
formatter.step({
  "line": 51,
  "name": "they can update the pet information using the PUT request with new name \"\u003cupdatePetName\u003e\" and \"\u003ctagName\u003e\" to verify the updated information in response",
  "keyword": "When "
});
formatter.step({
  "line": 52,
  "name": "I can verify the record updated with status code \"\u003cstatuscode\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 53,
  "name": "I verify the pet id is \"\u003cid\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "I verify the petName is \"\u003cupdatePetName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "I verify the pettagName is \"\u003ctagName\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 57,
  "name": "",
  "description": "",
  "id": "pet-store---add/create-pets-to-store,-update,-verify-and-remove-a-pet-record.;verify-as-a-admin-of-the-store-i-can-update-a-pet-record;",
  "rows": [
    {
      "cells": [
        "id",
        "petName",
        "updatePetName",
        "tagName",
        "statuscode"
      ],
      "line": 58,
      "id": "pet-store---add/create-pets-to-store,-update,-verify-and-remove-a-pet-record.;verify-as-a-admin-of-the-store-i-can-update-a-pet-record;;1"
    },
    {
      "cells": [
        "1080",
        "labrador",
        "BabyLabrador",
        "owner",
        "200"
      ],
      "line": 59,
      "id": "pet-store---add/create-pets-to-store,-update,-verify-and-remove-a-pet-record.;verify-as-a-admin-of-the-store-i-can-update-a-pet-record;;2"
    },
    {
      "cells": [
        "1090",
        "bulldog",
        "TeenBulldog",
        "owner",
        "200"
      ],
      "line": 60,
      "id": "pet-store---add/create-pets-to-store,-update,-verify-and-remove-a-pet-record.;verify-as-a-admin-of-the-store-i-can-update-a-pet-record;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 113671,
  "status": "passed"
});
formatter.scenario({
  "line": 59,
  "name": "Verify as a admin of the store i can update a pet record",
  "description": "",
  "id": "pet-store---add/create-pets-to-store,-update,-verify-and-remove-a-pet-record.;verify-as-a-admin-of-the-store-i-can-update-a-pet-record;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@petstore"
    },
    {
      "line": 48,
      "name": "@regression"
    },
    {
      "line": 48,
      "name": "@sanity"
    },
    {
      "line": 48,
      "name": "@updatepet"
    }
  ]
});
formatter.step({
  "line": 50,
  "name": "create Post request to add a new pet with \"1080\" and \"labrador\" to the store",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 51,
  "name": "they can update the pet information using the PUT request with new name \"BabyLabrador\" and \"owner\" to verify the updated information in response",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 52,
  "name": "I can verify the record updated with status code \"200\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 53,
  "name": "I verify the pet id is \"1080\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "I verify the petName is \"BabyLabrador\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "I verify the pettagName is \"owner\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "1080",
      "offset": 43
    },
    {
      "val": "labrador",
      "offset": 54
    }
  ],
  "location": "PetstoreSteps.createANewPostRequestAddANewPetToTheStore(int,String)"
});
formatter.result({
  "duration": 534102946,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BabyLabrador",
      "offset": 73
    },
    {
      "val": "owner",
      "offset": 92
    }
  ],
  "location": "PetstoreSteps.theyCanUpdateThePetInformataionUsingThePUTRequestAndVerifyTheUpdatedInformationInResposne(String,String)"
});
formatter.result({
  "duration": 547452866,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 50
    }
  ],
  "location": "PetstoreSteps.iCanVerifyTheRecordUpdatedWithStatusCode(int)"
});
formatter.result({
  "duration": 1463655,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1080",
      "offset": 24
    }
  ],
  "location": "PetstoreSteps.iVerifyThePetIdIs(int)"
});
formatter.result({
  "duration": 7312654,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BabyLabrador",
      "offset": 25
    }
  ],
  "location": "PetstoreSteps.iVerifyThePetNameIs(String)"
});
formatter.result({
  "duration": 7126770,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "owner",
      "offset": 28
    }
  ],
  "location": "PetstoreSteps.iVerifyThePettagNameIs(String)"
});
formatter.result({
  "duration": 18955956,
  "status": "passed"
});
formatter.after({
  "duration": 25153,
  "status": "passed"
});
formatter.before({
  "duration": 51247,
  "status": "passed"
});
formatter.scenario({
  "line": 60,
  "name": "Verify as a admin of the store i can update a pet record",
  "description": "",
  "id": "pet-store---add/create-pets-to-store,-update,-verify-and-remove-a-pet-record.;verify-as-a-admin-of-the-store-i-can-update-a-pet-record;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@petstore"
    },
    {
      "line": 48,
      "name": "@regression"
    },
    {
      "line": 48,
      "name": "@sanity"
    },
    {
      "line": 48,
      "name": "@updatepet"
    }
  ]
});
formatter.step({
  "line": 50,
  "name": "create Post request to add a new pet with \"1090\" and \"bulldog\" to the store",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 51,
  "name": "they can update the pet information using the PUT request with new name \"TeenBulldog\" and \"owner\" to verify the updated information in response",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 52,
  "name": "I can verify the record updated with status code \"200\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 53,
  "name": "I verify the pet id is \"1090\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "I verify the petName is \"TeenBulldog\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "I verify the pettagName is \"owner\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "1090",
      "offset": 43
    },
    {
      "val": "bulldog",
      "offset": 54
    }
  ],
  "location": "PetstoreSteps.createANewPostRequestAddANewPetToTheStore(int,String)"
});
formatter.result({
  "duration": 534190537,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TeenBulldog",
      "offset": 73
    },
    {
      "val": "owner",
      "offset": 91
    }
  ],
  "location": "PetstoreSteps.theyCanUpdateThePetInformataionUsingThePUTRequestAndVerifyTheUpdatedInformationInResposne(String,String)"
});
formatter.result({
  "duration": 532170950,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 50
    }
  ],
  "location": "PetstoreSteps.iCanVerifyTheRecordUpdatedWithStatusCode(int)"
});
formatter.result({
  "duration": 2437986,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1090",
      "offset": 24
    }
  ],
  "location": "PetstoreSteps.iVerifyThePetIdIs(int)"
});
formatter.result({
  "duration": 9474992,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TeenBulldog",
      "offset": 25
    }
  ],
  "location": "PetstoreSteps.iVerifyThePetNameIs(String)"
});
formatter.result({
  "duration": 7405297,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "owner",
      "offset": 28
    }
  ],
  "location": "PetstoreSteps.iVerifyThePettagNameIs(String)"
});
formatter.result({
  "duration": 7605622,
  "status": "passed"
});
formatter.after({
  "duration": 35528,
  "status": "passed"
});
});