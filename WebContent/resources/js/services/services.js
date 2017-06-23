var token = $("meta[name='_csrf']").attr("content");
var header = $("meta[name='_csrf_header']").attr("content");
var csrf_header=[];
csrf_header[header]=token;
	


app.factory('TaskService', function($http) {
	

	return {
		
		task_list_view_main : function(params) {
			return $http.post('task/list_view', params ,{headers:csrf_header});
		},
		task_list_view_main_cost : function(params) {
			return $http.post('task/list_view_cost_chrono', params ,{headers:csrf_header});
		},
		save_task:function(params){return $http.post('task',params ,{headers:csrf_header});},//
		list_activities:function(params){return $http.post('task/list_activities',params ,{headers:csrf_header});},//
		list_project_to_edt:function(params){return $http.post('task/list_view_edt',params ,{headers:csrf_header});},//
	
		
		
		
		
		
		
		remove:function(params){
	        return $http({method:'DELETE',url:'subtransactiondetail/'+params,headers:csrf_header} );  
	        },
	        
	        remove:function(params){
		        return $http({method:'DELETE',url:'subtransactiondetail/'+params,headers:csrf_header} );  
		        },
		        list_clients : function(params) {
					return $http.post('client/list', params ,{headers:csrf_header});
				},
				list_clients_view_main : function(params) {
					return $http.post('client/list_view', params ,{headers:csrf_header});
				},
				list_search: function (params) {return $http.post('client/'+params , {} ,{headers:csrf_header});		        },
				getpoints_client : function(params) {
					return $http.post('client/getpoints', params ,{headers:csrf_header});
				},
		list_drivers : function(params) {
			return $http.post('driver/list_view', params ,{headers:csrf_header});
		},
		list_products : function(params) {
			return $http.post('product/list', params ,{headers:csrf_header});
		},
		list_view_main : function(params) {
			return $http.post('subtransactiondetail/list_view', params ,{headers:csrf_header});
		},
		list_view_main_detail_x_subtransactionid : function(params) {
			return $http.post('subtransactiondetail/list_view_detail_x_subtransactionid', params ,{headers:csrf_header});
		},
		list_view_liquidation : function(params) {
			return $http.post('producer/liquidation_search', params ,{headers:csrf_header});
		},
		list_productss : function(params) {
			return $http.post('sell/list_products_unsubscribe', params ,{headers:csrf_header});
		},
	      list_businesstable: function (params)
	      {return $http.post('product/list_businesstable',params ,{headers:csrf_header})},
	      list_businesstable_view_main: function (params)
	      {return $http.post('businesstable/list_view',params ,{headers:csrf_header})},
	      
	
	  	savesub:function(params){return $http.post('subject',params ,{headers:csrf_header});},
		savebus:function(params){return $http.post('businesssubject',params ,{headers:csrf_header});},
		savebusobjrol:function(params){return $http.post('businesssubjectrol',params ,{headers:csrf_header});},
		
		lists_to_reg_client : function(params) {
			return $http.post('provider/lists', params ,{headers:csrf_header});
		},
		 
	      
		 save_generate_voucher:function(params){return $http.post('voucher',params ,{headers:csrf_header});},//
		 save_businesstransaction:function(params){return $http.post('businesstransaction',params ,{headers:csrf_header});},//
		 save_businesstransactionstate:function(params){return $http.post('businesstransactionstate',params ,{headers:csrf_header});},//
		 save_subtransaction:function(params){return $http.post('subtransaction',params ,{headers:csrf_header});},//
		 save_subtransactionstate:function(params){return $http.post('subtransactionstate',params ,{headers:csrf_header});},//
		 save_paymodetrace:function(params){return $http.post('paymodetrace',params ,{headers:csrf_header});},//
		 save_subtransactiondetail:function(params){return $http.post('subtransactiondetail',params ,{headers:csrf_header});},//
		 save_businesstable:function(params){return $http.post('businesstable',params ,{headers:csrf_header});},//
		 list_search_product: function (params) {
	        	return $http.post('product/'+params ,{},{headers:csrf_header});
	    		 },
	     list_search_businesssubject: function (params) {
	 	        	return $http.post('businesssubject/'+params ,{},{headers:csrf_header});
	 	    		 },
	    		 
	}
});



app.factory('ProjectService', function($http) {
	

	return {
		
		 save_project:function(params){return $http.post('project',params ,{headers:csrf_header});},
		 search_project: function (params) {
	        	return $http.post('project/'+params ,{},{headers:csrf_header});
	    		 },
	    save_businesssubject:function(params){return $http.post('businesssubject',params ,{headers:csrf_header});},
	    businesssubject_list_view_main : function(params) {
			return $http.post('businesssubject/list_view', params ,{headers:csrf_header});
		}, 
		list_all_projects : function(params) {
			return $http.post('project/list_all_projects', params ,{headers:csrf_header});
		},
		save_phase_activities:function(params){return $http.post('phasesactivities',params ,{headers:csrf_header});},
		 //
		save_risk:function(params){return $http.post('newrisk',params ,{headers:csrf_header});},
		risk_list_view_main : function(params) {
			return $http.post('risk/list_view', params ,{headers:csrf_header});
		},
		controlchange_list_view_main : function(params) {
			return $http.post('controlchange/list_view', params ,{headers:csrf_header});
		},
		save_controlchange:function(params){return $http.post('newcontrolchange',params ,{headers:csrf_header});},
		meetingrecord_list_view_main : function(params) {
			return $http.post('meetingrecord/list_view', params ,{headers:csrf_header});
		},
		save_meetingrecord:function(params){return $http.post('newmeeting',params ,{headers:csrf_header});}
	}
});





app.factory('OrderService', function($http) {

	return {
		remove:function(params){
	        return $http({method:'DELETE',url:'subtransactiondetail/'+params,headers:csrf_header} );  
	        },
	        
	        remove:function(params){
		        return $http({method:'DELETE',url:'subtransactiondetail/'+params,headers:csrf_header} );  
		        },
		        list_clients : function(params) {
					return $http.post('client/list', params ,{headers:csrf_header});
				},
				list_clients_view_main : function(params) {
					return $http.post('client/list_view', params ,{headers:csrf_header});
				},
				list_search: function (params) {return $http.post('client/'+params , {} ,{headers:csrf_header});		        },
				getpoints_client : function(params) {
					return $http.post('client/getpoints', params ,{headers:csrf_header});
				},
		list_drivers : function(params) {
			return $http.post('driver/list_view', params ,{headers:csrf_header});
		},
		list_products : function(params) {
			return $http.post('product/list', params ,{headers:csrf_header});
		},
		list_view_main : function(params) {
			return $http.post('subtransactiondetail/list_view', params ,{headers:csrf_header});
		},
		list_view_main_detail_x_subtransactionid : function(params) {
			return $http.post('subtransactiondetail/list_view_detail_x_subtransactionid', params ,{headers:csrf_header});
		},
		list_view_liquidation : function(params) {
			return $http.post('producer/liquidation_search', params ,{headers:csrf_header});
		},
		list_productss : function(params) {
			return $http.post('sell/list_products_unsubscribe', params ,{headers:csrf_header});
		},
	      list_businesstable: function (params)
	      {return $http.post('product/list_businesstable',params ,{headers:csrf_header})},
	      list_businesstable_view_main: function (params)
	      {return $http.post('businesstable/list_view',params ,{headers:csrf_header})},
	      
	
	  	savesub:function(params){return $http.post('subject',params ,{headers:csrf_header});},
		savebus:function(params){return $http.post('businesssubject',params ,{headers:csrf_header});},
		savebusobjrol:function(params){return $http.post('businesssubjectrol',params ,{headers:csrf_header});},
		
		lists_to_reg_client : function(params) {
			return $http.post('provider/lists', params ,{headers:csrf_header});
		},
		 
	      
		 save_generate_voucher:function(params){return $http.post('voucher',params ,{headers:csrf_header});},//
		 save_businesstransaction:function(params){return $http.post('businesstransaction',params ,{headers:csrf_header});},//
		 save_businesstransactionstate:function(params){return $http.post('businesstransactionstate',params ,{headers:csrf_header});},//
		 save_subtransaction:function(params){return $http.post('subtransaction',params ,{headers:csrf_header});},//
		 save_subtransactionstate:function(params){return $http.post('subtransactionstate',params ,{headers:csrf_header});},//
		 save_paymodetrace:function(params){return $http.post('paymodetrace',params ,{headers:csrf_header});},//
		 save_subtransactiondetail:function(params){return $http.post('subtransactiondetail',params ,{headers:csrf_header});},//
		 save_businesstable:function(params){return $http.post('businesstable',params ,{headers:csrf_header});},//
		 list_search_product: function (params) {
	        	return $http.post('product/'+params ,{},{headers:csrf_header});
	    		 },
	     list_search_businesssubject: function (params) {
	 	        	return $http.post('businesssubject/'+params ,{},{headers:csrf_header});
	 	    		 },
	    		 
	}
});


app.factory('CatalogoService',function($http){

    return { 
        list: function (params) {
        return $http.post('catalogo/list',params ,{headers:csrf_header});
        },
        save:function(params){return $http.post('catalogo',params ,{headers:csrf_header});},   

    }
});



app.factory('PropertiesService',function($http){

    return { 
        list: function (params) {
        return $http.post('property/list',params ,{headers:csrf_header});
        },
        list_propertyvalues: function (params) {
            return $http.post('propertyvalue/list',params ,{headers:csrf_header});
            },
        list_propertyvalues_asign: function (params) {
                return $http.post('propertyvalue/list_asign',params ,{headers:csrf_header});
                },
       list_businessobjectpropertyvalue: function (params) {
                 return $http.post('businessobjectpropertyvalue/list',params ,{headers:csrf_header});
                    },
        
        save:function(params){return $http.post('property',params ,{headers:csrf_header});},
        save_propertyvalue:function(params){return $http.post('propertyvalue',params ,{headers:csrf_header});},
        save_businessobjectpropertyvalue:function(params){return $http.post('businessobjectpropertyvalue',params ,{headers:csrf_header});},
        remove_businessobjectpropertyvalue: function (params) {
            return $http.post('businessobjectpropertyvalue/delete_businessobjectpropertyvalue',params ,{headers:csrf_header});
            },
        remove_propertyvalue: function (params) {
            return $http.post('propertyvalue/delete_propertyvalueid',params ,{headers:csrf_header});
            },

    }
});


app.factory('ContributorService', function($http) {

	return {
		list : function(params) {
			return $http.post('provider/lists', params ,{headers:csrf_header});
		},
		list_view : function(params) {
			return $http.post('contributor/list_view', params ,{headers:csrf_header});
		},
		list_assistances : function(params) {
			return $http.post('assistance/list', params ,{headers:csrf_header});
		},
		save_assistance:function(params){return $http.post('assistance',params ,{headers:csrf_header});},
		search_assistance : function(params) {
			return $http.post('assistance/search', params ,{headers:csrf_header});
		},
		exist:function(params){return $http.post('assistance/exist',params ,{headers:csrf_header});},
		
		 list_search: function (params) {return $http.post('contributor/'+params , {} ,{headers:csrf_header});		        },
		savesub:function(params){return $http.post('subject',params ,{headers:csrf_header});},
		savebus:function(params){return $http.post('businesssubject',params ,{headers:csrf_header});},
		savebusobjrol:function(params){return $http.post('businesssubjectrol',params ,{headers:csrf_header});},
		
       // savebrand:function(params){return $http.post('brand',params ,{headers:csrf_header});},
        savecontributor:function(params){return $http.post('contributor',params ,{headers:csrf_header});},
        saveemployed:function(params){return $http.post('employed',params ,{headers:csrf_header});},
        savesalary:function(params){return $http.post('salary',params ,{headers:csrf_header});},
        remove:function(params){
            return $http({method:'DELETE',url:'contributor/'+params ,headers:csrf_header} );  
            },
	}
});



app.factory('UserActualService', function($http) {

	return {
		
	         get_user_actual:function(params){return $http.post('actualsystemuser',params ,{headers:csrf_header});}//
//	         asd:function(params){return $http.post('reportutility',params ,{headers:csrf_header});},
	   		       
	}
});


//app.factory('ReportService', function($http) {
//
//	
//});


app.factory('PrimaryReportService', function($http) {

	return {
		report_utility:function(params){return $http.post('reportutility',params ,{headers:csrf_header});},
//	         ReportUtility:function(params){return $http.post('reportutility',params ,{headers:csrf_header});},//
	   		       
	}
});




app.factory('CommitmentService',function($http){

    return { 
        list: function (params) {return $http.post('commitment/list_view_diary',params ,{headers:csrf_header});
            },
        save:function(params){return $http.post('commitment',params ,{headers:csrf_header});},
    	
    }
});

app.factory('LendingServiceC', function($http) {

	return {
		list_clients : function(params) {
			return $http.post('client/list', params ,{headers:csrf_header});
		},
		list_producers: function (params) {
	            return $http.post('brand/list',params ,{headers:csrf_header});
	            },
	    list_view_detail : function(params) {
	    			return $http.post('subtransactiondetail/debtproducer', params ,{headers:csrf_header});
	    		},      
	    list_view_main : function(params) {
		    			return $http.post('producer/list_view_payments', params ,{headers:csrf_header});
		    		},      		
	    		
	    		
	           
	         save_generate_voucher:function(params){return $http.post('voucher',params ,{headers:csrf_header});},//
	   		 save_businesstransaction:function(params){return $http.post('businesstransaction',params ,{headers:csrf_header});},//
	   		 save_businesstransactionstate:function(params){return $http.post('businesstransactionstate',params ,{headers:csrf_header});},//
	   		 save_subtransaction:function(params){return $http.post('subtransaction',params ,{headers:csrf_header});},//
	   		 save_subtransactionstate:function(params){return $http.post('subtransactionstate',params ,{headers:csrf_header});},//
	   		 save_paymodetrace:function(params){return $http.post('paymodetrace',params ,{headers:csrf_header});},//
	   		 save_subtransactiondetail:function(params){return $http.post('subtransactiondetail',params ,{headers:csrf_header});},//           
	}
});

app.factory('LendingServiceP', function($http) {

	return {
		list_producers: function (params) {
	            return $http.post('brand/list',params ,{headers:csrf_header});
	            },
	    list_view_detail : function(params) {
	    			return $http.post('subtransactiondetail/debtproducer', params ,{headers:csrf_header});
	    		},      
	    list_view_main : function(params) {
		    			return $http.post('producer/list_view_lending', params ,{headers:csrf_header});
		    		},      		
	    		
	    		
	           
	         save_generate_voucher:function(params){return $http.post('voucher',params ,{headers:csrf_header});},//
	   		 save_businesstransaction:function(params){return $http.post('businesstransaction',params ,{headers:csrf_header});},//
	   		 save_businesstransactionstate:function(params){return $http.post('businesstransactionstate',params ,{headers:csrf_header});},//
	   		 save_subtransaction:function(params){return $http.post('subtransaction',params ,{headers:csrf_header});},//
	   		 save_subtransactionstate:function(params){return $http.post('subtransactionstate',params ,{headers:csrf_header});},//
	   		 save_paymodetrace:function(params){return $http.post('paymodetrace',params ,{headers:csrf_header});},//
	   		 save_subtransactiondetail:function(params){return $http.post('subtransactiondetail',params ,{headers:csrf_header});},//           
	}
});



app.factory('ReportService', function($http) {

	return {
		
		list_clients : function(params) {
			return $http.post('client/list', params ,{headers:csrf_header});
		},
		 list_view_detail : function(params) {
 			return $http.post('subtransactiondetail/debtproducer', params ,{headers:csrf_header});
 		},  
 		list_producers: function (params) {
	            return $http.post('brand/list',params ,{headers:csrf_header});
	            },
 		 
	}
});

app.factory('LiquidationService', function($http) {

	return {
		list_total_freight : function(params) {
			return $http.post('producer/liquidation_search', params ,{headers:csrf_header});
		},
		list_drivers : function(params) {
			return $http.post('driver/list_view', params ,{headers:csrf_header});
		},
		 list_brands: function (params) {
	            return $http.post('brand/list',params ,{headers:csrf_header});
	            },
	        	list_view_main : function(params) {
	    			return $http.post('subtransactiondetail/list_view', params ,{headers:csrf_header});
	    		},
	    search_exist_liquidation:function(params){
	    	  return $http.post('producer/searchliquidation',params ,{headers:csrf_header});
	    },
	         save_generate_voucher:function(params){return $http.post('voucher',params ,{headers:csrf_header});},//
	   		 save_businesstransaction:function(params){return $http.post('businesstransaction',params ,{headers:csrf_header});},//
	   		 save_businesstransactionstate:function(params){return $http.post('businesstransactionstate',params ,{headers:csrf_header});},//
	   		 save_subtransaction:function(params){return $http.post('subtransaction',params ,{headers:csrf_header});},//
	   		 save_subtransactionstate:function(params){return $http.post('subtransactionstate',params ,{headers:csrf_header});},//
	   		 save_paymodetrace:function(params){return $http.post('paymodetrace',params ,{headers:csrf_header});},//
	   		 save_subtransactiondetail:function(params){return $http.post('subtransactiondetail',params ,{headers:csrf_header});},//           
	}
});




app.factory('FreightService', function($http) {

	return {
		remove:function(params){
	        return $http({method:'DELETE',url:'subtransactiondetail/'+params,headers:csrf_header} );  
	        },
		list_drivers : function(params) {
			return $http.post('driver/list_view', params ,{headers:csrf_header});
		},
		list_products : function(params) {
			return $http.post('product/list', params ,{headers:csrf_header});
		},
		list_view_main : function(params) {
			return $http.post('subtransactiondetail/list_view', params ,{headers:csrf_header});
		},
		list_view_liquidation : function(params) {
			return $http.post('producer/liquidation_search', params ,{headers:csrf_header});
		},
		list_productss : function(params) {
			return $http.post('sell/list_products_unsubscribe', params ,{headers:csrf_header});
		},
	
	
		 save_generate_voucher:function(params){return $http.post('voucher',params ,{headers:csrf_header});},//
		 save_businesstransaction:function(params){return $http.post('businesstransaction',params ,{headers:csrf_header});},//
		 save_businesstransactionstate:function(params){return $http.post('businesstransactionstate',params ,{headers:csrf_header});},//
		 save_subtransaction:function(params){return $http.post('subtransaction',params ,{headers:csrf_header});},//
		 save_subtransactionstate:function(params){return $http.post('subtransactionstate',params ,{headers:csrf_header});},//
		 save_paymodetrace:function(params){return $http.post('paymodetrace',params ,{headers:csrf_header});},//
		 save_subtransactiondetail:function(params){return $http.post('subtransactiondetail',params ,{headers:csrf_header});},//
		 list_search_product: function (params) {
	        	return $http.post('product/'+params ,{},{headers:csrf_header});
	    		 },
	    		 
	}
});

app.factory('ReportServiceL', function($http) {

	return {
		reporte_kardex : function(params) {
			return $http.post('product/report_kardex', params ,{headers:csrf_header});
		},
		list_view_main : function(params) {
			return $http.post('subtransactiondetail/list_view', params ,{headers:csrf_header});
		},
	list_view_report : function(params) {
		return $http.post('subtransactiondetail/report_freight', params ,{headers:csrf_header});
	},
	list_drivers : function(params) {
		return $http.post('driver/list_view', params ,{headers:csrf_header});
	},
	 list_producers: function (params) {
         return $http.post('brand/list',params ,{headers:csrf_header});
         },
	    		 
	}
});



app.factory('OpenService', function($http) {

	return {
				
		list_products_c: function (params) {
	            return $http.post('sell/list_products_closing',params,{headers:csrf_header});
	            },
		   list: function (params) {
	            return $http.post('sell/list_view_main_openingclosing',params,{headers:csrf_header});
	            },
	       list_opening_products_number:function(params){
	    	   return $http.post('sell/list_products_only_registered',params,{headers:csrf_header});
	       },
	       search_detail: function (params) {
		         return $http.post('sell/search_detail',params ,{headers:csrf_header});
		         },  
		    search_profit: function (params) {
			     return $http.post('sell/search_profit',params ,{headers:csrf_header});
			     },           
		           
	     consult_repeat:function(params){return $http.post('sell/repeat',params ,{headers:csrf_header});},//
            save_generate_voucher:function(params){return $http.post('voucher',params ,{headers:csrf_header});},//
     		 save_businesstransaction:function(params){return $http.post('businesstransaction',params ,{headers:csrf_header});},//
     		 save_businesstransactionstate:function(params){return $http.post('businesstransactionstate',params ,{headers:csrf_header});},//
     		 save_subtransaction:function(params){return $http.post('subtransaction',params ,{headers:csrf_header});},//
     		 save_subtransactionstate:function(params){return $http.post('subtransactionstate',params ,{headers:csrf_header});},//
     		 save_paymodetrace:function(params){return $http.post('paymodetrace',params ,{headers:csrf_header});},//
     		 save_subtransactiondetail:function(params){return $http.post('subtransactiondetail',params ,{headers:csrf_header});},//
	}
});

app.factory('ReportServiceS', function($http) {

	return {
		report_profit: function (params) {
            return $http.post('subtransactiondetail/report_profit',params ,{headers:csrf_header});
            },	
	}
});

app.factory('SaleService', function($http) {

	return {
		remove:function(params){
		        return $http({method:'DELETE',url:'subtransactiondetail/'+params,headers:csrf_header} );  
		        },
		lists_to_reg_client : function(params) {
			return $http.post('producer/lists', params ,{headers:csrf_header});
		},
		savesub:function(params){return $http.post('subject',params ,{headers:csrf_header});},
		savebus:function(params){return $http.post('businesssubject',params ,{headers:csrf_header});},
		savebusobjrol:function(params){return $http.post('businesssubjectrol',params ,{headers:csrf_header});},
		
		
		list_clients : function(params) {
			return $http.post('client/list', params ,{headers:csrf_header});
		},
		number_to_word : function(params) {
			return $http.post('sell/numbertoword', params ,{headers:csrf_header});
		},
		list_products : function(params) {
			return $http.post('sell/list_products', params ,{headers:csrf_header});
		},
		list_view_main : function(params) {
			return $http.post('subtransactiondetail/list_view', params ,{headers:csrf_header});
		},
		 list_search_product: function (params) {
	        	return $http.post('product/'+params ,{headers:csrf_header});
	    		 },
	    list_search_subtransaction: function (params) {
	     return $http.post('sell/searchdetails',params ,{headers:csrf_header});
	 	  },	
	 	 
	    		 
	   	 save_generate_voucher:function(params){return $http.post('voucher',params ,{headers:csrf_header});},//
	     save_businesstransaction:function(params){return $http.post('businesstransaction',params ,{headers:csrf_header});},//
	     save_businesstransactionstate:function(params){return $http.post('businesstransactionstate',params ,{headers:csrf_header});},//
	     save_subtransaction:function(params){return $http.post('subtransaction',params ,{headers:csrf_header});},//
	     save_subtransactionstate:function(params){return $http.post('subtransactionstate',params ,{headers:csrf_header});},//
	     save_paymodetrace:function(params){return $http.post('paymodetrace',params ,{headers:csrf_header});},//
	     save_subtransactiondetail:function(params){return $http.post('subtransactiondetail',params ,{headers:csrf_header});},//
	     save_fee:function(params){return $http.post('fee',params ,{headers:csrf_header});},//
	     save_fee_state:function(params){return $http.post('feestate',params ,{headers:csrf_header});},//
	
	    		 
	}
});


app.factory('ServiceCommerce',function($http){

    return { 
        list: function (params) {
            return $http.post('commitment/list_view_diary',params ,{headers:csrf_header});
            },
     
    	
    }
});

app.factory('ProducerService', function($http) {

	return {
		list : function(params) {
			return $http.post('producer/lists', params ,{headers:csrf_header});
		},
		list_view : function(params) {
			return $http.post('producer/list_view', params ,{headers:csrf_header});
		},
		 list_search: function (params) {
		        return $http.post('producer/'+params ,params,{headers:csrf_header});
		        },
		 list_search_dni: function (params) {
			 return $http.post('subject/'+params ,{},{headers:csrf_header});
			        },       
		list_search_ruc: function (params) {
			return $http.post('subject/ruc/'+params ,{},{headers:csrf_header});
				        }, 	  
		list_search_brand: function (params) {
		return $http.post('brand/'+params,{} ,{headers:csrf_header});
		 }, 	    
		        
		savesub:function(params){return $http.post('subject',params ,{headers:csrf_header});},
		savebus:function(params){return $http.post('businesssubject',params ,{headers:csrf_header});},
		savebusobjrol:function(params){return $http.post('businesssubjectrol',params ,{headers:csrf_header});},
		
        savebrand:function(params){return $http.post('brand',params ,{headers:csrf_header});},
        saveproducer:function(params){return $http.post('producer',params ,{headers:csrf_header});},
        remove:function(params){
            return $http({method:'DELETE',url:'producer/'+params,headers:csrf_header} );  
            },
	}
});

app.factory('ProductBService',function($http){

    return { 
        list: function (params) {
        return $http.post('product/list_basic_object',params ,{headers:csrf_header});
        },
        list_qualities: function (params) {
            return $http.post('productb/list_objectmodels',params ,{headers:csrf_header});
            },
       list_distinct_qualities: function (params) {
                return $http.post('productb/list_distinct_objectmodels',params ,{headers:csrf_header});
                },
        remove_obj_brand: function (params) {
                return $http.post('productb/delete_objectmodels',params ,{headers:csrf_header});
                },
            
        get:function(params){
        return $http.get('product/get',{params:params});  
        },
        save:function(params){return $http.post('productb',params ,{headers:csrf_header});},
        remove:function(params){
        return $http({method:'DELETE',url:'productb/'+params,headers:csrf_header} );  
        },
    }
});


app.factory('ProductService',function($http){

    return { 
        list: function (params) {
        return $http.post('product/list',params ,{headers:csrf_header});
        },
        list_basics: function (params) {
            return $http.post('product/list_basic_object',params ,{headers:csrf_header});
            },
        list_brands: function (params) {
            return $http.post('brand/list',params ,{headers:csrf_header});
            },
        list_containers: function (params) {
            return $http.post('presentationcontainer/list',params ,{headers:csrf_header});
             },
        list_search: function (params) {
        	return $http.post('product/'+params ,{},{headers:csrf_header});
    		 },
        get:function(params){
        return $http.get('product/get',{params:params});  
        },
        save_brandobject:function(params){return $http.post('brandobject',params ,{headers:csrf_header});},
        save_objectmodel:function(params){return $http.post('objectmodel',params ,{headers:csrf_header});},
        save_businessobject:function(params){return $http.post('businessobject',params ,{headers:csrf_header});},
        save_valuedbusinessobject:function(params){return $http.post('valuedbusinessobject',params ,{headers:csrf_header});},
        remove:function(params){
        return $http({method:'DELETE',url:'product/'+params,headers:csrf_header} );  
        },
    }
});

app.factory('UserService', function($http) {

	return {
		list_employed_user : function(params) {
			return $http.post('employed/list_employed_user', params ,{headers:csrf_header});
		},
		login_user : function(params) {
			return $http.post('employed/login', params ,{headers:csrf_header});
		},
		
		
		list_view_main : function(params) {
			return $http.post('employed/list_view_user', params ,{headers:csrf_header});
		},		
		 savesystemuser:function(params){return $http.post('systemuser',params ,{headers:csrf_header});},
	     savesystemuserstate:function(params){return $http.post('systemuserstate',params ,{headers:csrf_header});},
	
	}
});

app.factory('PriceDiaryService',function($http){

    return { 
        list: function (params) {
            return $http.post('registerprice/list_view',params ,{headers:csrf_header});
            },
            exist:function(params){return $http.post('registerprice/exist',params ,{headers:csrf_header});},
            list_search: function (params) {
                return $http.post('registerprice/list_search',params ,{headers:csrf_header});
                },
        list_basics: function (params) {
                return $http.post('product/list_basic_object',params ,{headers:csrf_header});
                },
        save:function(params){return $http.post('registerprice',params ,{headers:csrf_header});},
        
    	
    }
});


app.factory('DriverService', function($http) {

	return {
		list : function(params) {
			return $http.post('producer/lists', params ,{headers:csrf_header});
		},
		list_view : function(params) {
			return $http.post('driver/list_view', params ,{headers:csrf_header});
		},
		 list_search: function (params) {return $http.post('driver/'+params ,{},{headers:csrf_header});		        },
		savesub:function(params){return $http.post('subject',params ,{headers:csrf_header});},
		savebus:function(params){return $http.post('businesssubject',params ,{headers:csrf_header});},
		savebusobjrol:function(params){return $http.post('businesssubjectrol',params ,{headers:csrf_header});},
		
       // savebrand:function(params){return $http.post('brand',params ,{headers:csrf_header});},
        savecontributor:function(params){return $http.post('contributor',params ,{headers:csrf_header});},
        saveemployed:function(params){return $http.post('employed',params ,{headers:csrf_header});},
        savedriven:function(params){return $http.post('driven',params ,{headers:csrf_header});},
        savesalary:function(params){return $http.post('salary',params ,{headers:csrf_header});},
        remove:function(params){
            return $http({method:'DELETE',url:'contributor/'+params,headers:csrf_header} );  
            },
	}
});

app.factory('DiscountService', function($http) {

	return {
		report_profit: function (params) {
            return $http.post('subtransactiondetail/report_profit',params ,{headers:csrf_header});
            },	
		list_employed: function (params) {
            return $http.post('employed/list_combo',params ,{headers:csrf_header});
            },
        list_view_detail : function(params) {
    			return $http.post('subtransactiondetail/debtproducer', params ,{headers:csrf_header});
    		},   
    	    list_view_main : function(params) {
    			return $http.post('employed/list_view_discounts', params ,{headers:csrf_header});
    		},     
	         save_generate_voucher:function(params){return $http.post('voucher',params ,{headers:csrf_header});},//
	   		 save_businesstransaction:function(params){return $http.post('businesstransaction',params ,{headers:csrf_header});},//
	   		 save_businesstransactionstate:function(params){return $http.post('businesstransactionstate',params ,{headers:csrf_header});},//
	   		 save_subtransaction:function(params){return $http.post('subtransaction',params ,{headers:csrf_header});},//
	   		 save_subtransactionstate:function(params){return $http.post('subtransactionstate',params ,{headers:csrf_header});},//
	   		 save_paymodetrace:function(params){return $http.post('paymodetrace',params ,{headers:csrf_header});},//
	   		 save_subtransactiondetail:function(params){return $http.post('subtransactiondetail',params ,{headers:csrf_header});},//           
	}
	
});

app.factory('PaymentService',function($http){

    return { 
    	list_employed: function (params) {
            return $http.post('employed/list_combo',params ,{headers:csrf_header});
            },
        list_view_main : function(params) {
    			return $http.post('subtransactiondetail/list_view', params ,{headers:csrf_header});
    		}, 
        consult_discount : function(params) {
     			return $http.post('employed/discounts', params ,{headers:csrf_header});
     		}, 	
     	search_assistance : function(params) {
      			return $http.post('employed/discounts', params ,{headers:csrf_header});
      		}, 		
    		
        save_generate_voucher:function(params){return $http.post('voucher',params ,{headers:csrf_header});},//
  		 save_businesstransaction:function(params){return $http.post('businesstransaction',params ,{headers:csrf_header});},//
  		 save_businesstransactionstate:function(params){return $http.post('businesstransactionstate',params ,{headers:csrf_header});},//
  		 save_subtransaction:function(params){return $http.post('subtransaction',params ,{headers:csrf_header});},//
  		 save_subtransactionstate:function(params){return $http.post('subtransactionstate',params ,{headers:csrf_header});},//
  		 save_paymodetrace:function(params){return $http.post('paymodetrace',params ,{headers:csrf_header});},//
  		 save_subtransactiondetail:function(params){return $http.post('subtransactiondetail',params ,{headers:csrf_header});},//     
    }
});

app.factory('ExpenseService',function($http){

    return {     
        list_view_main : function(params) {
    			return $http.post('subtransactiondetail/list_view', params ,{headers:csrf_header});
    		},     		
        save_generate_voucher:function(params){return $http.post('voucher',params ,{headers:csrf_header});},
  		 save_businesstransaction:function(params){return $http.post('businesstransaction',params ,{headers:csrf_header});},
  		 save_businesstransactionstate:function(params){return $http.post('businesstransactionstate',params ,{headers:csrf_header});},
  		 save_subtransaction:function(params){return $http.post('subtransaction',params ,{headers:csrf_header});},
  		 save_subtransactionstate:function(params){return $http.post('subtransactionstate',params ,{headers:csrf_header});},
  		 save_paymodetrace:function(params){return $http.post('paymodetrace',params ,{headers:csrf_header});},
  		 save_subtransactiondetail:function(params){return $http.post('subtransactiondetail',params ,{headers:csrf_header});},  
    }
});
/*Tutorial https://gist.github.com/umidjons/352da2a4209691d425d4*/
app.factory('ExcelService',function($window){
    var uri='data:application/vnd.ms-excel;base64,',
        template='<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>',
        base64=function(s){return $window.btoa(unescape(encodeURIComponent(s)));},
        format=function(s,c){return s.replace(/{(\w+)}/g,function(m,p){return c[p];})};
    return {
        tableToExcel:function(tableId,worksheetName){
            var table=$(tableId),
                ctx={worksheet:worksheetName,table:table.html()},
                href=uri+base64(format(template,ctx));
            return href;
        }
    };
});