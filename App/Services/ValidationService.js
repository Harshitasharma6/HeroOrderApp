

function validateSearchCustomerForm(params) {
	if (!validatePhoneNumber(params.contact_number)) {
		return {
			invalid: true,
			invalid_field: 'contact_number',
			error_message: 'Contact Number is not valid.'
		}
	}
	return false;
}


function validateRegisterCustomerForm(params) {
	// "first_name__c": "test 12",	(*mandatory)
	// "last_name__c": "enquiry visit test",	(*mandatory)
	// "contact_number__c": "1646464944", 	(*mandatory)
	// "age__c":  "28",
	// "genders__c": "Male",
	// "product__c": "a029D000002ZFPtQAO", 	(*mandatory)
	// "mode_of_buying__c": "Cash",
	// "exchange_required__c":"No",
	// "lead_source__c": "Event",
	// "existing_two_wheelers__c": "Yes",
	// "purpose_of_buying__c" : "Nothing",
	// "usage__c": "Nothing",
	// "expected_close_date__c":     "2020-08-19",  (*mandatory)
    // "dealers_sales_person__c": "a0O9D000001hLV9UAM",
	// "email_id__c": "abc@gmail.com",
	// "occupation__c" : "Business",
	// "test_drive_offered__c": "Yes",		(*mandatory)
	// "customer__c": "0039D000008BMX2QAO",
	// “address_line_1__c” : “test address”
	if (!validateFieldIsEmpty(params.first_name__c)) {
		return {
			invalid: true,
			invalid_field: 'first_name__c',
			error_message: 'First Name is empty.'
		}
	}

	if (!validateFieldIsEmpty(params.last_name__c)) {
		return {
			invalid: true,
			invalid_field: 'last_name__c',
			error_message: 'Last Name is empty.'
		}
	}


	if (!validatePhoneNumber(params.contact_number__c)) {
		return {
			invalid: true,
			invalid_field: 'contact_number__c',
			error_message: 'Contact Number is not valid.'
		}
	}


	if (!validateFieldIsEmpty(params.product__c)) {
		return {
			invalid: true,
			invalid_field: 'product__c',
			error_message: 'Please select product interested'
		}
	}


	if (!validateFieldIsEmpty(params.expected_close_date__c)) {
		return {
			invalid: true,
			invalid_field: 'expected_close_date__c',
			error_message: 'Please select Expected Purchase Date'
		}
	}


	if (!validateFieldIsEmpty(params.test_drive_offered__c)) {
		return {
			invalid: true,
			invalid_field: 'test_drive_offered__c',
			error_message: 'Please select Was Test Drive Offered or not'
		}
	}

	return false;
}


function validateCreateFeedbackForm(params) {
	// "model_name__c": "a029D000002ZFPoQAO", (*mandatory)
	// "vehicle_no__c": "DL1CV6565",
	// "ride_comfort__c": "3", 	(*mandatory)
	// "responsiveness_of_the_vehicle__c": "3", 	(*mandatory)
	// "dealers_sales_person_login_info__c": "a0O9D000001hLV9UAM", 	(*mandatory)
	// "ease_of_handeling__c": "4", (*mandatory) 
	// "overall_experience__c": "4", (*mandatory)
	// "date_of_test_drive": "2020-08-16" (*mandatory)
	if (!validateFieldIsEmpty(params.model_name__c)) {
		return {
			invalid: true,
			invalid_field: 'model_name__c',
			error_message: 'Model name is empty.'
		}
	}
	return false;
}




function validatePhoneNumber(number) {
	if (!number) return false;
	var phoneNum = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
	return number.match(phoneNum);
}

function validateNumber(number) {
	if (!number) return false;
	var numValue = "^[0-9]*$"
	return number.match(numValue);
}

function validateThreeDigitNumber(number) {
	if (!number) return false;
	return (Number(number) <= 999);
}



function validateFieldIsEmpty(value) {
	return !!value;
}



export const ValidationService = {
	validateSearchCustomerForm,
	validateRegisterCustomerForm,
	validateCreateFeedbackForm
}