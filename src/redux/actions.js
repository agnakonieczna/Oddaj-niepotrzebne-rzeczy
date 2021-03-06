const USER_LOGGED = "USER_LOGGED";
const USER_LOGGED_OUT = "USER_LOGGED_OUT";
const ADD_TYPE = "ADD_TYPE";
const ADD_BAGS = "ADD_BAGS";
const ADD_LOCALIZATION = "ADD_LOCALIZATION";
const ADD_HELP_GROUPS = "ADD_HELP_GROUPS";
const ADD_LOCALIZATION_SPECIFIC = "ADD_LOCALIZATION_SPECIFIC";
const ADD_ADDRESS_AND_TIME = "ADD_ADDRESS_AND_TIME";

function userLogged(email) {
    return {
        type: USER_LOGGED,
        payload: email
    }
}

function userLoggedOut() {
    return {
        type: USER_LOGGED_OUT,
    }
}

function addType(type) {
    return {
        type: ADD_TYPE,
        payload: type
    }
}

function addBags(bags) {
    return {
        type: ADD_BAGS,
        payload: bags
    }
}

function addLocalization(localization) {
    return {
        type: ADD_LOCALIZATION,
        payload: localization
    }
}

function addHelpGroups(helpGroups) {
    return {
        type: ADD_HELP_GROUPS,
        payload: helpGroups
    }
}

function addSpecificLocalization(localization) {
    return {
        type: ADD_LOCALIZATION_SPECIFIC,
        action: localization
    }
}

function addAddressAndTime(addressAndTime) {
    return {
        type: ADD_ADDRESS_AND_TIME,
        payload: addressAndTime
        
    }
}

export {USER_LOGGED, USER_LOGGED_OUT, ADD_TYPE, ADD_BAGS, ADD_LOCALIZATION, ADD_HELP_GROUPS, ADD_LOCALIZATION_SPECIFIC, ADD_ADDRESS_AND_TIME, userLogged, userLoggedOut, addType, addBags, addLocalization, addHelpGroups, addSpecificLocalization, addAddressAndTime}