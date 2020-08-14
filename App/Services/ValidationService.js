




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
	// if (!validatePhoneNumber(params.contact_number)) {
	// 	return {
	// 		invalid: true,
	// 		invalid_field: 'contact_number',
	// 		error_message: 'Contact Number cannot be empty.'
	// 	}
	// }
	return false;
}


function validateCreateFeedbackForm(params) {
	// “model_sfid” : “a029D000002ZFPoQAO”,   (*mandatory)
	// "vehicle_number": "DL1CV6565",
	// "ride_comfort": "3",    (*mandatory)
	// "responsiveness_of_vehicle": "3",   (*mandatory)
	// "dealers_sales_person_sfid": "a0O9D000001hLV9UAM",  (*mandatory)
	// "ease_of_handling": "4",    (*mandatory)
	// "overall_experience": "4",        (*mandatory)
	// "date_of_test_drive": "2020-08-16" ,   (*mandatory)
	// "enquiry_id": "133"  (*mandatory)

	if (!validateFieldIsEmpty(params.model_sfid)) {
		return {
			invalid: true,
			invalid_field: 'model_sfid',
			error_message: 'Model name is empty.'
		}
	}

	// if (!validateFieldIsEmpty(params.ride_comfort)) {
	// 	return {
	// 		invalid_area: true,
	// 		invalid_field: 'ride_comfort',
	// 		error_message: 'Please submit Ride Comfort feedback'
	// 	}
	// }

	// if (!validateFieldIsEmpty(params.responsiveness_of_vehicle)) {
	// 	return {
	// 		invalid_area: true,
	// 		invalid_field: 'responsiveness_of_vehicle',
	// 		error_message: 'Please submit responsiveness of vehicle feedback'
	// 	}
	// }

	// if (!validateFieldIsEmpty(params.ease_of_handling)) {
	// 	return {
	// 		invalid_area: true,
	// 		invalid_field: 'ease_of_handling',
	// 		error_message: 'Please submit ease of handling feedback'
	// 	}
	// }

	// if (!validateFieldIsEmpty(params.overall_experience)) {
	// 	return {
	// 		invalid_area: true,
	// 		invalid_field: 'overall_experience',
	// 		error_message: 'Please submit overall experience feedback'
	// 	}
	// }
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