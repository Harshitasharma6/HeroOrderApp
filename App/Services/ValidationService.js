
function validateSiteCompetitorForm(params) {
	

	if (!validateFieldIsEmpty(params.Brand)) {
		return {
			invalid_area: true,
			invalid_field: 'Brand',
			error_message: 'Brand is not selected'
		}
	}

	if (!validateFieldIsEmpty(params.Product)) {
		return {
			invalid: true,
			invalid_field: 'Product',
			error_message: 'Product is not selected.'
		}
	}

	if (!validateFieldIsEmpty(params.Packing)) {
		return {
			invalid: true,
			invalid_field: 'Packing',
			error_message: 'Packing is not selected.'
		}
	}

	if (!validateNumber(params.RSP)) {
		return {
			invalid: true,
			invalid_field: 'RSP',
			error_message: 'RSP field is empty.'
		}
	}
	
	 if (!validateNumber(params.WSP)) {
		return {
			invalid: true,
			invalid_field: 'WSP',
			error_message: 'RSP field is empty.'
		}
	}

	return false;
}

function validateSiteForm(params) {

	// "SiteName":"SiteTest1",
 // 	"ClientPhone":"9917461449",
 // 	"SiteType":"Residential",
 // 	"SiteAreaSqft":123,
 // 	"SiteCapacityMT":"123",


	if (!validateFieldIsEmpty(params.SiteName)) {
		return {
			invalid_area: true,
			invalid_field: 'SiteName',
			error_message: 'Site Name is empty.'
		}
	}


	if (!validatePhoneNumber(params.ClientPhone)) {
		return {
			invalid: true,
			invalid_field: 'ClientPhone',
			error_message: 'Client Phone number is not valid.'
		}
	}


 // 	if (!validateFieldIsEmpty(params.CurrentBrandUsed)) {
	// 	return {
	// 		invalid: true,
	// 		invalid_field: 'CurrentBrandUsed',
	// 		error_message: 'Current Brand is not selected.'
	// 	}
	// }


	if (params.CurrentBrandPrice && !validateThreeDigitNumber(params.CurrentBrandPrice)) {
		return {
			invalid: true,
			invalid_field: 'CurrentBrandPrice',
			error_message: 'Brand Price per bag must be maximum a 3 digit number.'
		}
	}


	// if (!validateFieldIsEmpty(params.CurrentBrandPrice)) {
	// 	return {
	// 		invalid: true,
	// 		invalid_field: 'CurrentBrandPrice',
	// 		error_message: 'Current Brand Price is empty.'
	// 	}
	// }


	if (!validateFieldIsEmpty(params.SiteType)) {
		return {
			invalid: true,
			invalid_field: 'SiteType',
			error_message: 'Site Type not selected.'
		}
	}

	// if (!validateNumber(params.SiteAreaSqft)) {
	// 	return {
	// 		invalid: true,
	// 		invalid_field: 'SiteAreaSqft',
	// 		error_message: 'SiteAreaSqft is empty.'
	// 	}
	// }


	// if (!validateNumber(params.SiteCapacityMT)) {
	// 	return {
	// 		invalid: true,
	// 		invalid_field: 'SiteCapacityMT',
	// 		error_message: 'SiteCapacityMT is empty.'
	// 	}
	// }




	return false;
}


function validateSiteVisitForm(params) {



 	// if (!validateFieldIsEmpty(params.MeetingType)) {
	// 	return {
	// 		invalid: true,
	// 		invalid_field: 'MeetingType',
	// 		error_message: 'MeetingType is empty.'
	// 	}
	// }
	

	// if (!validateFieldIsEmpty(params.ConvertedPrice)) {
	// 	return {
	// 		invalid: true,
	// 		invalid_field: 'ConvertedPrice',
	// 		error_message: 'ConvertedPrice not selected.'
	// 	}
	// }


	if (!validateFieldIsEmpty(params.ContactType)) {
		return {
			invalid: true,
			invalid_field: 'ContactType',
			error_message: 'ContactType is not selected.'
		}
	}


	if (!validateFieldIsEmpty(params.ContactPerson)) {
		return {
			invalid: true,
			invalid_field: 'ContactPerson',
			error_message: 'ContactPerson field is empty.'
		}
	} 
	
	 if (!validateNumber(params.ContactPersonNo)) {
		return {
			invalid: true,
			invalid_field: 'ContactPersonNo',
			error_message: 'Only Numbers are allowed.'
		}
	}


	if (params.ConvertedPrice && !validateThreeDigitNumber(params.ConvertedPrice)) {
		return {
			invalid: true,
			invalid_field: 'ConvertedPrice',
			error_message: 'Converted Price must be maximum a 3 digit number.'
		}
	}
	

	// if (!validateFieldIsEmpty(params.ConventedBrand)) {
	// 	return {
	// 		invalid: true,
	// 		invalid_field: 'ConventedBrand',
	// 		error_message: 'ConventedBrand field is empty.'
	// 	}
	// } 

	// if (!validateFieldIsEmpty(params.ConvertedProduct)) {
	// 	return {
	// 		invalid: true,
	// 		invalid_field: 'ConvertedProduct',
	// 		error_message: 'ConvertedProduct field is empty.'
	// 	}
	// } 

	// if (!validateFieldIsEmpty(params.OrderTaken)) {
	// 	return {
	// 		invalid: true,
	// 		invalid_field: 'OrderTaken',
	// 		error_message: 'OrderTaken field is empty.'
	// 	}
	// } 


	if (!params.brands) {
		return {
			invalid: true,
			invalid_field: 'Brands',
			error_message: 'Add atleast one competitor details'
		}
	}


	if (!params.brands.length) {
		return {
			invalid: true,
			invalid_field: 'Brands',
			error_message: 'Add atleast one competitor details'
		}
	}


	return false;
}


function validateInfluencerVisitForm(params) {
	if (!validateFieldIsEmpty(params.InfluencerName)) {
		return {
			invalid: true,
			invalid_field: 'InfluencerName',
			error_message: 'Influencer Name is empty.'
		}
	}

	if (!validateFieldIsEmpty(params.ContactPersonName)) {
		return {
			invalid: true,
			invalid_field: 'ContactPersonName',
			error_message: 'Contact Person Name is empty.'
		}
	}

	// if (!validateFieldIsEmpty(params.currentBrand)) {
	// 	return {
	// 		invalid: true,
	// 		invalid_field: 'currentBrand',
	// 		error_message: 'current Brand is not selected.'
	// 	}
	// }

	// if (!validateFieldIsEmpty(params.currentProduct)) {
	// 	return {
	// 		invalid: true,
	// 		invalid_field: 'currentProduct',
	// 		error_message: 'current Product is not selected.'
	// 	}
	// }


	// if (!validateFieldIsEmpty(params.currentPacking)) {
	// 	return {
	// 		invalid: true,
	// 		invalid_field: 'currentPacking',
	// 		error_message: 'current Packing is not selected.'
	// 	}
	// }


	if (params.proposeShreeBrand == 'YES') {
		if (!validateFieldIsEmpty(params.proposeShreeProduct) || params.proposeShreeProduct == 'None') {
			return {
				invalid: true,
				invalid_field: 'proposeShreeProduct',
				error_message: 'Propose Shree Product is not selected.'
			}
		}

		if (!validateFieldIsEmpty(params.ProposedShreePacking) || params.ProposedShreePacking == 'None') {
			return {
				invalid: true,
				invalid_field: 'ProposedShreePacking',
				error_message: 'Proposed Shree Packing is not selected.'
			}
		}

		if (!validateFieldIsEmpty(params.ProposedShreePrice)) {
			return {
				invalid: true,
				invalid_field: 'ProposedShreePrice',
				error_message: 'Proposed Shree Price is empty.'
			}
		}
	}

	// if (!validateFieldIsEmpty(params.WSP)) {
	// 	return {
	// 		invalid: true,
	// 		invalid_field: 'WSP',
	// 		error_message: 'WSP Type is not empty.'
	// 	}
	// }

	if (params.WSP && !validateThreeDigitNumber(params.WSP)) {
		return {
			invalid: true,
			invalid_field: 'WSP',
			error_message: 'WSP must be maximum a 3 digit number.'
		}
	}

	// if (!validateFieldIsEmpty(params.RSP)) {
	// 	return {
	// 		invalid: true,
	// 		invalid_field: 'RSP',
	// 		error_message: 'RSP is not empty.'
	// 	}
	// }

	if (params.RSP && !validateThreeDigitNumber(params.RSP)) {
		return {
			invalid: true,
			invalid_field: 'RSP',
			error_message: 'WSP must be maximum a 3 digit number.'
		}
	}

	
	return false;
}




function validateAddShreeVisitDetailForm(params) {
	if (!validateFieldIsEmpty(params.CounterType)) {
		return {
			invalid: true,
			invalid_field: 'Counter_Type__c',
			error_message: 'CounterType is not selected.'
		}
	}

	if (!validateFieldIsEmpty(params.Packing)) {
		return {
			invalid: true,
			invalid_field: 'Packing',
			error_message: 'Packing is not selected.'
		}
	}

	if (!validateFieldIsEmpty(params.Product)) {
		return {
			invalid: true,
			invalid_field: 'Product',
			error_message: 'Product is not selected.'
		}
	}


	if (!validateFieldIsEmpty(params.Brand)) {
		return {
			invalid: true,
			invalid_field: 'Brand',
			error_message: 'Brand is not selected.'
		}
	}

	if (!validateFieldIsEmpty(params.RSP)) {
		return {
			invalid: true,
			invalid_field: 'RSP',
			error_message: 'RSP is empty.'
		}
	}

	if (!validateFieldIsEmpty(params.WSP)) {
		return {
			invalid: true,
			invalid_field: 'WSP',
			error_message: 'WSP Type is empty.'
		}
	}

	return false;
}


function validateShreeVisitForm(params) {
 	if (!validateFieldIsEmpty(params.CounterName)) {
		return {
			invalid: true,
			invalid_field: 'CounterName',
			error_message: 'Counter Name field is empty.'
		}
	}

	if (!validateFieldIsEmpty(params.ContactPersonName)) {
		return {
			invalid: true,
			invalid_field: 'ContactPersonName',
			error_message: 'Contact Person Name is empty.'
		}
	}


	if (!validatePhoneNumber(params.PhoneNumber)) {
		return {
			invalid: true,
			invalid_field: 'PhoneNumber',
			error_message: 'Phone number is not valid.'
		}
	}

	// if (!validateFieldIsEmpty(params.Stock)) {
	// 	return {
	// 		invalid: true,
	// 		invalid_field: 'Stock',
	// 		error_message: 'Stock is empty.'
	// 	}
	// }


	// if (!validateFieldIsEmpty(params.OrderTaken)) {
	// 	return {
	// 		invalid: true,
	// 		invalid_field: 'OrderTaken',
	// 		error_message: 'Order Taken  is empty.'
	// 	}
	// }


	if (!params.brands) {
		return {
			invalid: true,
			invalid_field: 'Brands',
			error_message: 'Add atleast one competitor details'
		}
	}


	if (!params.brands.length) {
		return {
			invalid: true,
			invalid_field: 'Brands',
			error_message: 'Add atleast one competitor details'
		}
	}

	
	return false;
} 



function validateAddShreeRetailerForm(params) {
	if (!validateFieldIsEmpty(params.CounterName)) {
		return {
			invalid: true,
			invalid_field: 'CounterName',
			error_message: 'Counter field is empty.'
		}
	}

	if (!validateFieldIsEmpty(params.ContactPerson)) {
		return {
			invalid: true,
			invalid_field: 'ContactPerson',
			error_message: 'Contact Person is empty.'
		}
	}

	if (!validatePhoneNumber(params.ContactPersonNo)) {
		return {
			invalid: true,
			invalid_field: 'ContactPersonNo',
			error_message: 'Phone number not valid.'
		}
	}


	if (!validateFieldIsEmpty(params.CounterPotential)) {
		return {
			invalid: true,
			invalid_field: 'CounterPotential',
			error_message: 'Counter Potential is empty.'
		}
	}

	if (!validateFieldIsEmpty(params.CustomerType)) {
		return {
			invalid: true,
			invalid_field: 'CustomerType',
			error_message: 'Customer Type is empty.'
		}
	}

	if (!validateFieldIsEmpty(params.CustomerType)) {
		return {
			invalid: true,
			invalid_field: 'CustomerType',
			error_message: 'Customer Type is empty.'
		}
	}

	if (!validateFieldIsEmpty(params.AddComment)) {
		return {
			invalid: true,
			invalid_field: 'AddComment',
			error_message: 'AddComment field is empty.'
		}
	} 

	return false;
}

function validateNonShreeForm(params) {
	if (!validateFieldIsEmpty(params.CounterName)) {
		return {
			invalid_area: true,
			invalid_field: 'CounterName',
			error_message: 'CounterName  field is empty.'
		}
	}


	if (!validateFieldIsEmpty(params.ContactPerson)) {
		return {
			invalid: true,
			invalid_field: 'ContactPerson',
			error_message: 'ContactPerson is empty.'
		}
	}

	if (!validatePhoneNumber(params.ContactPersonNo)) {
		return {
			invalid: true,
			invalid_field: 'ContactPersonNo',
			error_message: 'Phone number not valid.'
		}
	}



	if (!validateFieldIsEmpty(params.CustomerType)) {
		return {
			invalid: true,
			invalid_field: 'CustomerType',
			error_message: 'CustomerType is empty.'
		}
	}


	if (params.Brand1 && !params.Brand1Potential) {
		return {
			invalid: true,
			invalid_field: 'Brand1Potential',
			error_message: 'Brand 1 Potential is empty.'
		}
	}

	if (params.Brand2 && !params.Brand2Potential) {
		return {
			invalid: true,
			invalid_field: 'Brand1Potential',
			error_message: 'Brand 2 Potential is empty.'
		}
	}

	if (params.Brand3 && !params.Brand3Potential) {
		return {
			invalid: true,
			invalid_field: 'Brand1Potential',
			error_message: 'Brand 3 Potential is empty.'
		}
	}

	if (params.Brand4 && !params.Brand4Potential) {
		return {
			invalid: true,
			invalid_field: 'Brand1Potential',
			error_message: 'Brand 4 Potential is empty.'
		}
	}

	if (params.Brand5 && !params.Brand5Potential) {
		return {
			invalid: true,
			invalid_field: 'Brand1Potential',
			error_message: 'Brand 5 Potential is empty.'
		}
	}


	return false;
}





function validateInOfficeForm(params) {
	if (!validateFieldIsEmpty(params.inOfficeRemark)) {
		return {
			invalid: true,
			invalid_field: 'inOfficeRemark',
			error_message: 'Remarks is empty.'
		}
	}

	return false;
}




function validateInfluencerForm(params) { //Todo: write validations
	if (!validateFieldIsEmpty(params.Name)) {
		return {
			invalid_area: true,
			invalid_field: 'Name',
			error_message: 'Name is empty.'
		}
	}


	if (!validateFieldIsEmpty(params.FirmName)) {
		return {
			invalid_area: true,
			invalid_field: 'FirmName',
			error_message: 'Firm Name is empty.'
		}
	}

	if (!validatePhoneNumber(params.Phone)) {
		return {
			invalid: true,
			invalid_field: 'Phone',
			error_message: 'Phone is empty.'
		}
	}

	if (!validateFieldIsEmpty(params.InfluencerType)) {
		return {
			invalid: true,
			invalid_field: 'InfluencerType',
			error_message: 'InfluencerType is not Selected.'
		}
	} 

	return false;
}



function validateFeedBackForm(param) {
	if (!validateFieldIsEmpty(param.Subject)) {
		return {
			invalid: true,
			invalid_field: 'Subject',
			error_message: 'Subject value is empty.'
		}
	}

	if (!validateFieldIsEmpty(param.Body)) {
		return {
			invalid: true,
			invalid_field: 'Body',
			error_message: 'Body value is empty.'
		}
	}

	return false;
}


function validateAllBrandForms(params) {
	let validation  = false;
	if (!params) {
		return {
			invalid: true,
			invalid_field: 'Brands',
			error_message: 'Add atleast one Brand details'
		}
	}

	params.map((obj, index) => {
		validation = validateBrandForm(obj, index) || validation;
	});

	return validation;
}


function validateFinalObservation(params) {
	let validation  = false;

	if (!params) {
		return {
			invalid: true,
			invalid_field: 'Brands',
			error_message: 'Add atleast one Brand details'
		}
	}

	if (!params.length) {
		return {
			invalid: true,
			invalid_field: 'Brands',
			error_message: 'Add atleast one Brand details'
		}
	}

	params.map((obj, index) => {
		validation = validateFinalObservationBrandForm(obj, index) || validation;
	});

	return validation;
}



function validateFinalObservationBrandForm(params, index) {
	if (!validateFieldIsEmpty(params.Market__c)) {
		return {
			invalid: true,
			invalid_field: 'Market__c',
			error_message: 'Market field is necessary to fill'
		}
	}

	if (!validateFieldIsEmpty(params.WSP__c)) {
		return {
			invalid: true,
			invalid_field: 'WSP__c',
			error_message: 'WSP value is empty in brand form '+ (index + 1)
		}
	}

	if (!validateFieldIsEmpty(params.RSP__c)) {
		return {
			invalid: true,
			invalid_field: 'RSP__c',
			error_message: 'RSP value is empty in brand form '+ (index + 1)
		}
	}

	if (!validateFieldIsEmpty(params.Brand__c) || params.Brand__c == 'None') {
		return {
			invalid: true,
			invalid_field: 'Brand__c',
			error_message: 'Brand value is empty in brand form '+ (index + 1)
		}
	}

	if (!validateFieldIsEmpty(params.Product__c) || params.Product__c == 'None') {
		return {
			invalid: true,
			invalid_field: 'Product__c',
			error_message: 'Product value is empty in brand form '+ (index + 1)
		}
	}

	if (!validateFieldIsEmpty(params.Packing__c) || params.Packing__c == 'None') {
		return {
			invalid: true,
			invalid_field: 'Packing__c',
			error_message: 'Packing value is empty in brand form '+ (index + 1)
		}
	}


	if (!validateThreeDigitNumber(params.WSP__c)) {
		return {
			invalid: true,
			invalid_field: 'WSP__c',
			error_message: 'WSP must be maximum a 3 digit number in brand form '+ (index + 1)
		}
	}

	if (!validateThreeDigitNumber(params.RSP__c)) {
		return {
			invalid: true,
			invalid_field: 'RSP__c',
			error_message: 'RSP must be maximum a 3 digit number in brand form '+ (index + 1)
		}
	}
}


function validateBrandForm(params, index) {
	if (!validateFieldIsEmpty(params.WSP__c)) {
		return {
			invalid: true,
			invalid_field: 'WSP__c',
			error_message: 'WSP value is empty in brand form '+ (index + 1)
		}
	}

	if (!validateFieldIsEmpty(params.RSP__c)) {
		return {
			invalid: true,
			invalid_field: 'RSP__c',
			error_message: 'RSP value is empty in brand form '+ (index + 1)
		}
	}

	if (!validateFieldIsEmpty(params.Brand__c)) {
		return {
			invalid: true,
			invalid_field: 'Brand__c',
			error_message: 'Brand value is empty in brand form '+ (index + 1)
		}
	}
	

	if (!validateFieldIsEmpty(params.Product__c) || params.Product__c == 'None') {
		return {
			invalid: true,
			invalid_field: 'Product__c',
			error_message: 'Product value is empty in brand form '+ (index + 1)
		}
	}


	if (!validateFieldIsEmpty(params.Packing__c) || params.Packing__c == 'None') {
		return {
			invalid: true,
			invalid_field: 'Packing__c',
			error_message: 'Packing value is empty in brand form '+ (index + 1)
		}
	}

	
	if (!validateThreeDigitNumber(params.WSP__c)) {
		return {
			invalid: true,
			invalid_field: 'WSP__c',
			error_message: 'WSP must be maximum a 3 digit number in brand form '+ (index + 1)
		}
	}

	if (!validateThreeDigitNumber(params.RSP__c)) {
		return {
			invalid: true,
			invalid_field: 'RSP__c',
			error_message: 'RSP must be maximum a 3 digit number in brand form '+ (index + 1)
		}
	}

	return false;	
}



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
	validateInfluencerForm,
	validateSiteVisitForm,
	validateInOfficeForm,
	validateNonShreeForm,
	validateFeedBackForm,
	validateAddShreeRetailerForm,
	validateShreeVisitForm,
	validateAddShreeVisitDetailForm,
	validateInfluencerVisitForm,
	validateSiteCompetitorForm,
	validateSiteForm,
	validateAllBrandForms,
	validateFinalObservation,
	validateBrandForm,


	validateSearchCustomerForm,
	validateRegisterCustomerForm
}