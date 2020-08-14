export const Config = {
	API_URL: 'https://herodealersapp.herokuapp.com/',

	USER_SERVICE: {
		LOGIN: 'login/login'
	},

	VISITOR_SERVICE: {
		SEARCH_CUSTOMER  : 'customers/search',
		REGISTER_CUSTOMER: 'visitors/create',
		UPDATE_VISITOR   : 'visitors/update',
		CREATE_FEEDBACK  : 'feedback/create',
		GET_ALL_VISITS   : 'visit/getAll',
		GET_FEEDBACKS    : 'feedback/get'
	}, 


	COMMON_SERVICE: {
		FETCH_PRODUCTS: '',
		FETCH_SOURCE_OF_ENQUIRY: '',
		FETCH_OCCUPATIONS: ''
	},













































































	RETAILER_SERVICE: {
		CREATE: 'sellers/add',
		UPDATE: 'sellers/update',
		FETCH_RETAILERS: 'sellers/getAll',
		FETCH_DEALERS: 'sellers/getAll',
		FETCH_ORDERS: 'orders/getAll',
		UPDATE_LOCATION: 'sellers/updateLocation',
		FETCH_COMPETITORS: 'competitors/getAll?offset=0&limit=200',
		SEARCH_BY_LOCATION: 'sellers/searchByLocation',
		FETCH_DEALER_ORDERS: 'dealer-orders/getAll',
		FETCH_DEALER_INVOICE: 'invoices/getAll',
		FETCH_DEALER_OUTSTANDING: 'outstandings/getAll',
		INVOICE_DETAIL: 'invoice-line-items/getAll?offset=0&limit=1000',
		DEALER_ORDER_DETAILS: 'dealer-order-line-items/getAll'

	},

	ORDERS_SERVICE: {
		DETAIL: '/order-line/getAll?offset=0&limit=1000',
		FETCH_ORDERS: 'orders/getAll',
		DEALER_ORDER_DETAIL: 'dealer-order-line-items/getAll'
	},


	VISITS_SERVICE: {
		GET_VISITS: '/visits/getAll',
		PLAN_VISIT: '/visits/planVisit',
		CANCEL_VISIT: '/visits/cancel',
		EDIT_VISIT: '/visits/edit',
		PLACE_ORDER: '/orders/placeOrder',
		ADD_VISIT_INFO: '/visits/addVisitInfo',
		START_VISIT: '/visits/start',
		END_VISIT: '/visits/close',
		FETCH_VISIT_INFO: '/visits/detail'
	},


	PRODUCT_SERVICE: {
		GET_PRODUCTS: '/products/getAll',
		GET_CATEGORIES: '/productCategories/getAll',
		GET_SUBCATEGORIES: '/productCategories/getAllSubCategory',
		GET_SUBSUBCATEGORIES: '/productCategories/getAllSubSubCategory'
	},


	EVENT_SERVICE: {
		CREATE: 'events/add',
		UPDATE: 'events/edit',
		FETCH_EVENTS: 'events/getAll',
		FETCH_PARTICIPANTS: 'eventParticipants/getAll',
		ADD_PARTICIPANTS: 'eventParticipants/add'
	},

	DASHBOARD_SERVICE: {
		ORDER_VALUE: '/dashboard/getOrderValue',
		COUNTERS: '/dashboard/getCounters',
		SITE_COUNT: '/dashboard/getSiteCount',
		VISIT_COUNT: '/dashboard/getVisitCount',
		EVENTS_COUNT: '/dashboard/getEventCount'
	},


	INFLUENCERS_SERVICE: {
		FETCH_INFLUENCERS: 'influencers/getAll',
		CREATE: 'influencers/add',
		UPDATE: 'influencers/edit',
		FETCH_INFLUENCER_DETAIL: 'influencers/detail',
		FETCH_INFLUENCER_SITES: 'sites/getAll'
	},


	SITES_SERVICE: {
		CREATE: 'sites/add',
		UPDATE: 'sites/edit',
		CREATE_SITE_PRODUCT: 'siteProducts/add',
		UPDATE_SITE_PRODUCT: 'siteProducts/edit',
		FETCH_SITES: 'sites/getAll',
		FETCH_SITE_PRODUCTS: 'siteProducts/getAll'
	},

	LOCAL_EXPENSE_SERVICE: {
		FETCH_EXPENSES: 'expenses/getAll',
		FETCH_EXPENSE_ITEM: 'expense-item/getAll',
		UPDATE_EXPENSES: 'expense-item/updateExpense',
		SEND_APPROVAL: 'expenses/sendingForApproval',
		APPROVE_REJECT_EXPENSE: 'expenses/approveRejectExpence',
		ADD_REMARK: 'expense-item/addRemark'
	},

	TOUR_SERVICE: {
		FETCH_CITIES: 'cities/getAll',
		CREATE_TOUR: 'tours/create',
		UPDATE_TOUR: 'tours/updateTour',
		SEND_APPROVAL: 'tours/sendingForApproval',
		FETCH_TOUR: 'tours/getAll',
		APPROVE_REJECT_TOUR: 'tours/approveRejectTour'
	},

	OUTSTATION_EXPENSE_SERVICE: {
		FETCH_EXPENSES: 'expenses/getAll',
		FETCH_EXPENSE_ITEM: 'expense-item/getAll',
		UPDATE_EXPENSES: 'expense-item/addExpenseItem',
		UPDATE_EXPENSE_ITEM: 'expense-item/updateExpenseItem',
		SEND_APPROVAL: 'expenses/sendingForApproval',
		APPROVE_REJECT_EXPENSE: 'expenses/approveRejectExpence',
		ADD_REMARK: 'expense-item/addRemark'
	},
	START_DAY_SERVICE: {
		FETCH_GLOBLE_TOKEN_SERVICE: "https://test.salesforce.com/services/oauth2/token?password=Qwerty@123&client_secret=B34B95E9525468BECB0DCD1CFC9D4D8144E987D44FA307292129C8C41197AAE2&client_id=3MVG9N6eDmZRVJOnjqe.8shkQISu9fuPZDVcd4svd1JVNPsOwZ7ZLw_QUc6eoCJgmkcZDtt.vIKifhW2J4fmd&username=shree.zoxima-exgs@force.com.shree&grant_type=password",

		FETCH_GLOBLE_TOKEN_SERVICE_TEST:  "https://login.salesforce.com/services/oauth2/token?password=passwordId&client_secret=2C643DA8D7AEB4F996F4060B31498F80702EAC186348364BF2348B5B6961A2A8&client_id=3MVG9n_HvETGhr3Dg8JNgd0jAXz1T.xKWqNcQRU_MSLNMPwFBkDf6A5eM8gcEEcH_hQ1e_sgvLQH9VKMITSnK&username=userId&grant_type=password",



		ON_LEAVE_SERVICE: 'https://ap16.salesforce.com/services/apexrest/AttandenceAPIOnLeave/',

		CHECK_IN_SERVICE: 'https://ap16.salesforce.com/services/apexrest/CheckInAPI/',

		IN_OFFICE_SERVICE: 'https://ap16.salesforce.com/services/apexrest/AttandenceAPIinOffice/',

		FETCH_ALL_DEALER_SERVICE: "https://ap16.salesforce.com/services/data/v45.0/query/?q=select+id,name,Counter_Code__c,Company_Name__c,Type_of_Counter__c,Contact__c,Email__c,Security_Deposit__c,Potential__c,Customer_Category__c,Customer_Sub_Category__c,GST_Registration_Number__c,Latitude__c,Longitude__c,Zone__c,State__c,City__c,Taluka__c,District__c,Address__c,Postal_Code__c+from+Account+Where+Type_of_Counter__c+=+'Shree'",

		FETCH_ALL_NON_SHREE_DETAIL_SERVICE: "https://ap16.salesforce.com/services/data/v45.0/query/?q=select+id,name,Counter_Code__c,Name_Of_Shop__c,Contact_Person__c,Contact_Person_No__c,Type_of_Counter__c,Shop_Type__c,Counter_Potential__c,Add_Comment__c,Latitude__c,Longitude__c,City__c,State__c,Tehsil__c,Address__c+from+Account+Where+Type_of_Counter__c+=+'Non Shree'",
		
		GLOBLE_USER_DETAIL_SERVICE: "https://ap16.salesforce.com/services/data/v45.0/query/?q=select+id,Employment_Code__c,name,Username,Phone,MobilePhone,CompanyName,User_State__c+from+User+Where+Id+=+",


		FETCH_AGENT_DETAILS: "https://ap16.salesforce.com/services/data/v45.0/query/?q=select+id,User__c,State__c,Name,Check_In_Date__c,Date__c,Check_In__c,Attendance_Status__c,Check_Out__c,OwnerId+from+Attendance__c+Where+Date__c+=+date+AND+OwnerId+=+'owner'+ORDER BY+createddate+DESC +LIMIT 1",


		CHECK_OUT_SERVICE: 'https://ap16.salesforce.com/services/apexrest/CheckOutAPI/',


		GET_APP_VERSION: 'https://ap16.salesforce.com/services/data/v45.0/query/?q=select+id,name,IOS__c+ from+App_version__c'


	},

	NON_SHREE: {
		FETCH_ALL_NON_SHREE: "https://ap16.salesforce.com/services/data/v45.0/query/?q=select+id,name,Contact_Person__c,Contact_Person_No__c,Type_of_Counter__c,Shop_Type__c,Add_Comment__c,Latitude__c,Longitude__c,Zone__c,State__c,City__c,Taluka__c,District__c,Address__c,Postal_Code__c,Brand1__c,Brand1_Potential__c,Brand2__c,Brand2_Potential__c,Brand3__c,Brand3_Potential__c,Brand4__c,Brand4_Potential__c,Brand5__c,Brand5_Potential__c+from+Account+Where+State__c+=+'state'+AND+Type_of_Counter__c='Non Shree'",


		CREATE_NON_SHREE: 'https://ap16.salesforce.com/services/apexrest/CreateNonShreeCounter/',


		CREATE_COMPITITOR: 'https://ap16.salesforce.com/services/apexrest/CreateCompetitor/'
	},
	SHREE: {
		FETCH_ALL_SHREE: "https://ap16.salesforce.com/services/apexrest/GetAlldata/?State=state",


		FETCH_ALL_SHREE_RETAILERS: "https://ap16.salesforce.com/services/data/v45.0/query/?q=select+id,name,Contact_Person__c,Contact_Person_No__c,Counter_Potential__c,Add_Comment__c,Counter_Code__c,Company_Name__c,Type_of_Counter__c,Contact__c,Email__c,Security_Deposit__c,Potential__c,Customer_Category__c,Customer_Sub_Category__c,GST_Registration_Number__c,Latitude__c,Longitude__c,Zone__c,State__c,City__c,Taluka__c,District__c,Address__c,Postal_Code__c,Party_Type__c,Shop_Type__c+from+Account+Where+Type_of_Counter__c='Shree'+AND+Shop_Type__c='Retailer'+AND+State__c+=+'state'",



		UPDATE_LOCATION: "https://ap16.salesforce.com/services/apexrest/LatLongUpdtforShreeDealer/?",



		UPDATE_POTENTIAL: "https://ap16.salesforce.com/services/apexrest/UpdtPotentialOfDealer/",

		SALES_INFO: "https://ap16.salesforce.com/services/data/v45.0/query/?q=select+id,Yesterday_Sale__c,Last_Three_Month__c,Last_Three_Month_Average__c,Last_Six_Month__c,Month_till_Date__c,Product__c,Packing__c+from+Sales_Info__c+Where+Customer_ID__c+=+'counter'",



		FETCH_SHREE_DEALER_OUTSTANDING: "https://ap16.salesforce.com/services/data/v45.0/query/?q=select+id,Dealer_Code__c,Customer_Name__c,Customer_Name__r.Name,State__c,X0_3_Days__c,X4_7_Days__c,X8_15_Days__c,X16_30_Days__c,X31_45_Days__c,X46_60_Days__c,X61_90_Days__c,X91_180_Days__c,X180_Days__c+from+Outstanding_Report__c+Where+Customer_Name__c+=+'owner'",



		FETCH_PAYMENTS: "https://ap16.salesforce.com/services/data/v45.0/query/?q=select+id,Account_Id__c,Account_Id__r.Name,Amount__c,Last_Refresh_Date_ERP__c,Payment_Date__c,Status__c+from+Payment__c+Where+Account_Id__c+='account'+ORDER BY+createddate+DESC+LIMIT 3",


		FETCH_PREVIOUS_VISITS: "https://ap16.salesforce.com/services/data/v45.0/query/?q=select+id,Contact_Person_Name__c,Counter_City__c,Counter_District__c,Counter__c,Counter_Phone__c,Counter_State__c,Counter_Type__c,Geo_Latitude__c,Geo_Longitude__c,Meeting_Type__c,Order_Taken__c,Remark__c,Stock__c,User__c,Visit_Date__c,Visit_Number__c,Visit_Time__c,OwnerId,(select+id,Counter_Visit__c,Counter__c,Counter_Type__c,Brand__c,Packing__c,Product__c,Site_Visit_Name__c,WSP__c,RSP__c,District__c+from+Competitors__r)+from+Counter_Visit__c+Where+Counter__c+=+'counter'+AND+OwnerId+=+'owner'+ORDER BY+createddate+DESC+LIMIT 3",


		// FETCH_LATEST_VISITS: "https://ap16.salesforce.com/services/data/v45.0/query/?q=select+id,Contact_Person_Name__c,Counter_City__c,Counter_District__c,Counter__c,Counter_Phone__c,Counter_State__c,Counter_Type__c,Geo_Latitude__c,Geo_Longitude__c,Meeting_Type__c,Order_Taken__c,Remark__c,Stock__c,User__c,Visit_Date__c,Visit_Number__c,Visit_Time__c,OwnerId,(select+id,Counter_Visit__c,Counter__c,Counter_Type__c,Brand__c,Packing__c,Product__c,Site_Visit_Name__c,WSP__c,RSP__c,District__c+from+Competitors__r)+from+Counter_Visit__c+Where+Counter__c+=+'counter'+AND+OwnerId+=+'owner'+AND+Visit_Date__c+=+date",


		FETCH_LATEST_VISITS: "https://ap16.salesforce.com/services/data/v45.0/query/?q=select+id,Contact_Person_Name__c,Counter_City__c,Counter_District__c,Counter__c,Counter_Phone__c,Counter_State__c,Counter_Type__c,Geo_Latitude__c,Geo_Longitude__c,Meeting_Type__c,Order_Taken__c,Remark__c,Stock__c,User__c,Visit_Date__c,Visit_Number__c,Visit_Time__c,OwnerId,(select+id,Counter_Visit__c,Counter__c,Counter_Type__c,Brand__c,Packing__c,Product__c,Site_Visit_Name__c,WSP__c,RSP__c,District__c+from+Competitors__r)+from+Counter_Visit__c+Where+Counter__c+=+'counter'+AND+OwnerId+=+'owner'+AND+Visit_Date__c+=+date",


		FETCH_ALL_VISITS: "https://ap16.salesforce.com/services/data/v45.0/query/?q=select+id,Contact_Person_Name__c,Counter_City__c,Counter_District__c,Counter__c,Counter_Phone__c,Counter_State__c,Counter_Type__c,Geo_Latitude__c,Geo_Longitude__c,Meeting_Type__c,Order_Taken__c,Remark__c,Stock__c,User__c,Visit_Date__c,Visit_Number__c,Visit_Time__c,OwnerId,(select+id,Counter_Visit__c,Counter__c,Counter_Type__c,Brand__c,Packing__c,Product__c,Site_Visit_Name__c,WSP__c,RSP__c,District__c+from+Competitors__r)+from+Counter_Visit__c+Where+OwnerId+=+'owner'+AND+Visit_Date__c+>=+yesterday+order by+Visit_Date__c",



		FETCH_ALL_SITE_VISITS: "https://ap16.salesforce.com/services/data/v45.0/query/?q=select+id,Name,Contact_Person__c,Contact_Person_No__c,Contact_Type__c,Repeat_Visit__c,Influencer_Involved__c,Influencer_Name__c,Influencer_Name__r.Name,Dealer_Involved__c,Dealer_Name__c,Dealer_Name__r.Name,Can_Convert_Site_to_Shree__c,Converted_Brand__c,Shree_Site__c,Site__c,Order_Taken__c,Remark__c,Latitude__c,Longitude__c,City__c,District__c,State__c,Address__c,Visit_Date__c,Visit_Time__c,OwnerId,(select+id,Counter_Visit__c,Counter__c,Counter_Type__c,Brand__c,Packing__c,Product__c,Site_Visit_Name__c,WSP__c,RSP__c,District__c+from+Competitors__r)+from+Site_Visit__c+Where+OwnerId+=+'owner'+AND+Visit_Date__c+>=+yesterday+order by+Visit_Date__c",


		FETCH_ALL_INFLUENCER_VISITS: "https://ap16.salesforce.com/services/data/v45.0/query/?q=select+id,Counter_Name__c,Counter_Name__r.Name,Current_Brand_Used__c,Current_Packing__c,Current_Product_Used__c,Current_Price_Bag__c,City__c,District__c,Geo_Latitude__c,Geo_Longitude__c,Influencer_Contact_No__c,Influencer_Name__c,Influencer_Name__r.Name,Order_Taken__c,Propose_Shree_Brand__c,Propose_Shree_Packing__c,Propose_Shree_Price__c,Propose_Shree_Product__c,Remark__c,Site_Visit_Name__c,State__c,Visit_Date__c,Visit_Number__c,Visit_time__c,OwnerId,Contact_Person_Name__c+from+Influencer_Visit__c+Where+State__c+=+'state'+AND+OwnerId+=+'owner'+AND+Visit_Date__c+>=+yesterday+order by+Visit_Date__c",

		SUBMIT_SHREE_VISIT_FORM: "https://ap16.salesforce.com/services/apexrest/CreateCounterVisit/",

		
		CREATE_SHREE_VISIT_DETAIL: "https://ap16.salesforce.com/services/data/v45.0/composite/tree/Competitor__c/",


		GET_ALL_COUNTERS: "https://ap16.salesforce.com/services/data/v45.0/query/?q=select+id,name,Party_Type__c+from+Account+Where+",


		// GET_ALL_DISTRICTS: "https://ap16.salesforce.com/services/data/v45.0/query/?q=select+Customer_Name__r.District__c+from+Outstanding_Report__c+Where+PrimaryFunctions__c+=+'state'+Group By +Customer_Name__r.District__c",


		GET_ALL_DISTRICTS: "https://ap16.salesforce.com/services/data/v45.0/query/?q=select+Customer_Name__r.Billing_District__c+from+Outstanding_Report__c+Where+PrimaryFunctions__c+=+'state'+Group By +Customer_Name__r.Billing_District__c"

	},

	SHREE_SITE_SERVICE: {
		SHREE_FETCH_SITE_SERVICE: "https://ap16.salesforce.com/services/data/v45.0/query/?q=select+id,Name,Client_Phone__c,Address__c,Latitude__c,Longitude__c,Site_Area_Sq_Ft__c,Site_Capacity__c,Site_District__c,Site_State__c,Site_Type__c,OwnerId,Current_Brand_Used__c,Current_Brand_Price_Per_Bag__c+from+Site__c+Where+Site_State__c+=+'state'",

		CREATE_SITE_VISIT: "https://ap16.salesforce.com/services/apexrest/CreateSiteVisit/",

		CREATE_SITE: 'https://ap16.salesforce.com/services/apexrest/CreateSite/',

		CREATE_SITE_VISIT_COMPETITOR: "https://ap16.salesforce.com/services/data/v45.0/composite/tree/Competitor__c/",

	

		SHREE_FETCH_SITE_VISIT_SERVICE: "https://ap16.salesforce.com/services/data/v45.0/query/?q=select+id,Name,Contact_Person__c,Contact_Person_No__c,Contact_Type__c,Repeat_Visit__c,Influencer_Involved__c,Influencer_Name__c,Influencer_Name__r.Name,Dealer_Involved__c,Dealer_Name__c,Dealer_Name__r.Name,Can_Convert_Site_to_Shree__c,Converted_Brand__c,Shree_Site__c,Site__c,Order_Taken__c,Remark__c,Latitude__c,Longitude__c,City__c,District__c,State__c,Address__c,Visit_Date__c,Visit_Time__c,OwnerId,(select+id,Counter_Visit__c,Counter__c,Counter_Type__c,Brand__c,Packing__c,Product__c,Site_Visit_Name__c,WSP__c,RSP__c,District__c+from+Competitors__r)+from+Site_Visit__c+Where+State__c+=+'state'+AND+OwnerId+=+'owner'+AND+Site__c+=+'site'",



	},
	SHREE_INFLUENCER_SERVICE: {
		FETCH_INFLUENCERS: "https://ap16.salesforce.com/services/data/v45.0/query/?q=select+id,LastName,AccountId,Phone,Influencer_Type__c,Remark__c,Firm_Name__c,City__c,District__c,State__c,Address__c,Latitude__c,Longitude__c,OwnerId+from+Contact+Where+",

		CREATE_SHREE_INFLUENCER_SERVICE: 'https://ap16.salesforce.com/services/apexrest/CreateInfluencer/',

		CREATE_INFLUENCER_VISIT_FORM: 'https://ap16.salesforce.com/services/apexrest/CreateInfluencerVisit/',


		FETCH_ALL_INFLUENCER_VISITS: "https://ap16.salesforce.com/services/data/v45.0/query/?q=select+id,Counter_Name__c,Counter_Name__r.Name,Current_Brand_Used__c,Current_Packing__c,Current_Product_Used__c,Current_Price_Bag__c,City__c,District__c,Geo_Latitude__c,Geo_Longitude__c,Influencer_Contact_No__c,Influencer_Name__c,Influencer_Name__r.Name,Order_Taken__c,Propose_Shree_Brand__c,Propose_Shree_Packing__c,Propose_Shree_Price__c,Propose_Shree_Product__c,Remark__c,Site_Visit_Name__c,State__c,Visit_Date__c,Visit_Number__c,Visit_time__c,OwnerId,Contact_Person_Name__c+from+Influencer_Visit__c+Where+State__c+=+'state'+AND+OwnerId+=+'userId'+AND+Influencer_Name__c+=+'influencer'",


	},
	DASHBOARD: {
		 FEEDBACK_SERVICE:'https://ap16.salesforce.com/services/apexrest/MarketingFeedback/',


		 OUTSTANDING_SERVICE: "https://ap16.salesforce.com/services/data/v45.0/query/?q=select+id,Dealer_Code__c,Customer_Name__c,Dealer_District__c,PrimaryFunctions__c,X31_45_Days__c,X46_60_Days__c,X61_90_Days__c,X91_180_Days__c,X180_Days__c+from+Outstanding_Report__c+Where+queryParams+AND+(X31_45_Days__c+>+0+OR+X46_60_Days__c+>+0+OR+X61_90_Days__c+>+0+OR+X91_180_Days__c+>+0+OR+X180_Days__c+>+0)",






		 FETCH_COMMUNICATIONS: "https://ap16.salesforce.com/services/data/v45.0/query/?q=select+id,Name,Description__c,Status__c,State__c,User__c+from+Communication__c+Where+",


		 FETCH_COMMUNICATIONS_ATTACHMENTS: "https://ap16.salesforce.com/services/data/v45.0/query/?q=SELECT+ContentDocument.FileExtension,ContentDocumentId +FROM+ContentDocumentLink +WHERE+ LinkedEntityId = ",

		 FETCH_COMMUNICATIONS_ATTACHMENTS_DETAILS: "https://ap16.salesforce.com/services/data/v45.0/connect/files/attachmentId/content?versionNumber=1",


		 SUBMIT_FINAL_OBSERVATION: "https://ap16.salesforce.com/services/data/v45.0/composite/tree/Final_Observation__c/",

		 FETCH_FINAL_OBSERVATION: "https://ap16.salesforce.com/services/data/v45.0/query/?q=select+id,User__c,Date__c,Brand__c,Packing__c,Product__c,RSP__c,WSP__c,Market__c+from+Final_Observation__c+Where+User__c+=+'user'+AND+OwnerId+=+'owner'+AND+Date__c+=+date",



		 'SEND_ATTACHMENT': "https://ap16.salesforce.com/services/data/v37.0/sobjects/Attachment"
	}

}
