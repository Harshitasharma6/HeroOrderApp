




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