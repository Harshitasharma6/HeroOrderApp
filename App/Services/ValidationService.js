

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

	if (params.age__c&&!validateAgeNumber(params.age__c)) {
		return {
			invalid: true,
			invalid_field: 'age__c',
			error_message: 'Please Enter valid Age '
		}
	}
	if (params.email_id__c&&!validateEmail(params.email_id__c)) {
		return {
			invalid: true,
			invalid_field: 'email_id__c',
			error_message: 'Please Enter valid Email Id'
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


function validateRegisterCustomerCallForm(params) {
	return false;
}



function validateBookingForm(params) {
	// "tally_invoice_no__c" : "213213b12bnnbnb",
	// "customer_gstin_no__c" : "sadasd",
	// "online_order_no__c":"wewewe",
	// "reference_no__c":"weqwewqe",
	// "first_name__c": "Rohit New",
	// "last_name__c": "Shukla",
	// "contact_number__c": "09818512785",
	// "email_id__c":  "xyz111@gmails.com",
	// "address_line_1__c": "delhi",
	// "chassis_no__c": "weweqwe",
	// "motor_no__c": "qwewqe",
	// "charger_no__c": "ewewqeq",
	// "battery_no__c": "asdasd",
	// "model_color__c":"Red",
	// "make_of_battery__c":"wewewe",
	// "capacity_of_each_battery__c":"xasasd",
	// "type_of_battery__c":"wwewe",
	// "owner_s_handbook_no__c":"wqewqewe",
	// "other_financier_name__c":"IDFC",
	// "financier_name__c":"HDFC",
	// "aadhar_card__c":"https://abc.com/a.png",
	// "acknowledgement__c": "https://abc.com/a.png",
	// "driving_license__c" : "https://abc.com/a.png",
	// "insurance__c" :"https://abc.com/a.png",
	// "rc__c" : "https://abc.com/a.png",
	// "others__c" : ["https://abc.com/a.png","https://abc.com/a1.png"],
	// "voter_id_card__c" :"https://abc.com/a.png",  
	// "product__c":"a029D000002ZFPtQAO",
	// "amount_paid_at_booking__c":1000,
	// "total_amount_payable__c": 2000,
	// "basic_amount__c" : 25000,
	// "total_tax__c": 100, 
	// "total_subsidy__c": 50,
	// "dealer_discount__c" : 100,
	//  "offer_applied__c" : true,
	// "total_scheme_amount__c": 100
	// "outstanding_amount__c"

	if (!validateFieldIsEmpty(params.first_name__c)) {
		return {
			invalid: true,
			invalid_field: 'first_name__c',
			error_message: 'First Name cannot be empty.'
		}
	}

	if (!validatePhoneNumber(params.contact_number__c)) {
		return {
			invalid: true,
			invalid_field: 'contact_number__c',
			error_message: 'Contact Number is not valid.'
		}
	}

	if (params.amount_paid_at_booking__c && params.amount_paid_at_booking__c < 0 ) {
		return {
			invalid: true,
			invalid_field: 'amount_paid_at_booking__c',
			error_message: 'Invalid Amount entered.'
		}
	}


	if (params.customer_gstin_no__c&&!validateGstNumber(params.customer_gstin_no__c)) {
		return {
			invalid: true,
			invalid_field: 'customer_gstin_no__c',
			error_message: 'Please Enter valid GST number.'
		}
	}

	if (params.email_id__c&&!validateEmail(params.email_id__c)) {
		return {
			invalid: true,
			invalid_field: 'email_id__c',
			error_message: 'Please Enter valid Email Id'
		}
	}

	if (!validateFieldIsEmpty(params.aadhar_card__c)) {
		return {
			invalid: true,
			invalid_field: 'aadhar_card__c',
			error_message: 'Aadhar Card(front & back)/VoterId/ PAN Card/Driving License cannot be empty.'
		}
	}

	if (!validateFieldIsEmpty(params.insurance__c)) {
		return {
			invalid: true,
			invalid_field: 'insurance__c',
			error_message: 'Insurance/Rc/Tax Token cannot be empty.'
		}
	}

	if (!validateFieldIsEmpty(params.invoice__c)) {
		return {
			invalid: true,
			invalid_field: 'invoice__c',
			error_message: 'Invoice cannot be empty.'
		}
	}

	if (!validateFieldIsEmpty(params.acknowledgement__c)) {
		return {
			invalid: true,
			invalid_field: 'acknowledgement__c',
			error_message: 'Customer Acknolegment cannot be empty.'
		}
	}


	if (params.outstanding_amount__c && (Number(params.amount_paid_at_booking__c) > Number(params.outstanding_amount__c))) {
		return {
			invalid: true,
			invalid_field: 'amount_paid_at_booking__c',
			error_message: `Amount cannot be greater than outstanding amount. Max value can be ${params.outstanding_amount__c}`
		}
	}


	if (!params.outstanding_amount__c && (Number(params.amount_paid_at_booking__c) > Number(params.total_amount_payable__c))) {
		return {
			invalid: true,
			invalid_field: 'amount_paid_at_booking__c',
			error_message: `Amount cannot be greater than payable amount. Max value can be ${params.total_amount_payable__c}`
		}
	}

	return false;

}



function validateMarkWonAction(params) {
	// "tally_invoice_no__c" : "213213b12bnnbnb",
	// "customer_gstin_no__c" : "sadasd",
	// "online_order_no__c":"wewewe",
	// "reference_no__c":"weqwewqe",
	// "first_name__c": "Rohit New",
	// "last_name__c": "Shukla",
	// "contact_number__c": "09818512785",
	// "email_id__c":  "xyz111@gmails.com",
	// "address_line_1__c": "delhi",
	// "chassis_no__c": "weweqwe",
	// "motor_no__c": "qwewqe",
	// "charger_no__c": "ewewqeq",
	// "battery_no__c": "asdasd",
	// "model_color__c":"Red",
	// "make_of_battery__c":"wewewe",
	// "capacity_of_each_battery__c":"xasasd",
	// "type_of_battery__c":"wwewe",
	// "owner_s_handbook_no__c":"wqewqewe",
	// "other_financier_name__c":"IDFC",
	// "financier_name__c":"HDFC",
	// "aadhar_card__c":"https://abc.com/a.png",
	// "acknowledgement__c": "https://abc.com/a.png",
	// "driving_license__c" : "https://abc.com/a.png",
	// "insurance__c" :"https://abc.com/a.png",
	// "rc__c" : "https://abc.com/a.png",
	// "others__c" : ["https://abc.com/a.png","https://abc.com/a1.png"],
	// "voter_id_card__c" :"https://abc.com/a.png",  
	// "product__c":"a029D000002ZFPtQAO",
	// "amount_paid_at_booking__c":1000,
	// "total_amount_payable__c": 2000,
	// "basic_amount__c" : 25000,
	// "total_tax__c": 100, 
	// "total_subsidy__c": 50,
	// "dealer_discount__c" : 100,
	//  "offer_applied__c" : true,
	// "total_scheme_amount__c": 100
	// "outstanding_amount__c"

	if (!validateFieldIsEmpty(params.chassis_no__c)) {
		return {
			invalid: true,
			invalid_field: 'chassis_no__c',
			error_message: 'Cannot Mark Won!! Chassis No. is empty.'
		}
	}



	if (!validateFieldIsEmpty(params.motor_no__c)) {
		return {
			invalid: true,
			invalid_field: 'motor_no__c',
			error_message: 'Cannot Mark Won!! Motor No. is empty.'
		}
	}


	if (!validateFieldIsEmpty(params.charger_no__c)) {
		return {
			invalid: true,
			invalid_field: 'charger_no__c',
			error_message: 'Cannot Mark Won!! Charger No. is empty.'
		}
	}

	if (!validateFieldIsEmpty(params.battery_no__c)) {
		return {
			invalid: true,
			invalid_field: 'battery_no__c',
			error_message: 'Cannot Mark Won!! Battery No. is empty.'
		}
	}

	if (!validateFieldIsEmpty(params.model_color__c)) {
		return {
			invalid: true,
			invalid_field: 'model_color__c',
			error_message: 'Cannot Mark Won!! Model Color is empty.'
		}
	}

	if (!validateFieldIsEmpty(params.make_of_battery__c)) {
		return {
			invalid: true,
			invalid_field: 'make_of_battery__c',
			error_message: 'Cannot Mark Won!! Make of Battery is empty.'
		}
	}


	if (!validateFieldIsEmpty(params.type_of_battery__c)) {
		return {
			invalid: true,
			invalid_field: 'type_of_battery__c',
			error_message: 'Cannot Mark Won!! Type of Battery is empty.'
		}
	}

	if (!validateFieldIsEmpty(params.capacity_of_each_battery__c)) {
		return {
			invalid: true,
			invalid_field: 'capacity_of_each_battery__c',
			error_message: 'Cannot Mark Won!! Capacity of each Battery is empty.'
		}
	}


	


	if (params.outstanding_amount__c > 0) {
		return {
			invalid: true,
			invalid_field: 'outstanding_amount__c',
			error_message: 'Outstanding amount with this booking!! Cannot Mark Won',
		}
	}


	return false;
}




function validatePhoneNumber(number) {
	if (!number) return false;
	var phoneNum = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
	return number.match(phoneNum);
}

function validateEmail(email) {
	var userEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	return userEmail.test(email);
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

function validateGstNumber(number) {
	return (number.length == 15)
	// var gstinformat = new RegExp('^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]1}[1-9A-Z]{1}Z[0-9A-Z]{1}$');    
	// if (gstinformat.test(number)) {    
 //        return true;    
 //    } else {    
 //        return false;    
 //    }    
}

function validateAgeNumber(number) {
	
	if(isNaN(number)||number<15||number>100){
	return false
	}
	else
	{
		return true
	}
	// var gstinformat = new RegExp('^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]1}[1-9A-Z]{1}Z[0-9A-Z]{1}$');    
	// if (gstinformat.test(number)) {    
 //        return true;    
 //    } else {    
 //        return false;    
 //    }    
}



function validateFieldIsEmpty(value) {
	return !!value;
}


function validateCreateSubDealerForm(params) {
	
	if (!validateFieldIsEmpty(params.name)) {
		return {
			invalid: true,
			invalid_field: 'name',
			error_message: ' Name is empty.'
		}
	}

	


	if (!validatePhoneNumber(params.phone)) {
		return {
			invalid: true,
			invalid_field: 'phone',
			error_message: 'Contact Number is not valid.'
		}
	}


	


	

	return false;
}

function validateLoginForm(params) {
	if (!validatePhoneNumber(params.mobile)) {
		return {
			invalid_number: true,
			error_message: 'Invalid mobile Number'
		}
	}

	if (!validateFieldIsEmpty(params.password)) {
		return {
			invalid_password: true,
			error_message: 'Invalid Password'
		}
	}

	return false;
}


function validateMarkLost(params) {
	if (!validateFieldIsEmpty(params.lead_status_reason__c)) {
		return {
			invalid_number: true,
			error_message: 'Cannot Submit.Please select the reason'
		}
	}

	return false;
}

function validateEditClaimForm(params) {
	

	if (!validateFieldIsEmpty(params.aadhar_voter_pan_driving)) {
		return {
			invalid: true,
			invalid_field: 'aadhar_voter_pan_driving',
			error_message: 'Aadhar Card(front & back)/VoterId/ PAN Card/Driving License cannot be empty.'
		}
	}

	if (!validateFieldIsEmpty(params.insurance__c)) {
		return {
			invalid: true,
			invalid_field: 'insurance__c',
			error_message: 'Insurance/Rc/Tax Token cannot be empty.'
		}
	}

	if (!validateFieldIsEmpty(params.invoice__c)) {
		return {
			invalid: true,
			invalid_field: 'invoice__c',
			error_message: 'Invoice cannot be empty.'
		}
	}

	if (!validateFieldIsEmpty(params.acknowledgement__c)) {
		return {
			invalid: true,
			invalid_field: 'acknowledgement__c',
			error_message: 'Customer Acknolegment cannot be empty.'
		}
	}

	

	
	


	

	


	

	return false;

}




export const ValidationService = {
	validateSearchCustomerForm,
	validateRegisterCustomerForm,
	validateCreateFeedbackForm,
	validateRegisterCustomerCallForm,
	validateCreateSubDealerForm,
	validateMarkWonAction,
	validateBookingForm,
	validateLoginForm,
	validateMarkLost,
	validateEditClaimForm,
}