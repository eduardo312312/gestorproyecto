
app.controller('ClientController', function($scope, OrderService,ContributorService,DiscountService) {
	
	$scope.regionid_select = 0;
	$scope.provinceid_select = 0;
	$scope.districtid_select = 0;
	$scope.documentid_select=0;
    $scope.buseliminar=0;
    $scope.bussubeliminar=0;
    $scope.employedid_select=0;
    $scope.salaryid_select=0;
    $scope.employees=[];
    
    
    $scope.month_select=0;
    $scope.year_select=0;
    $scope.employeeid_select=0;
    
    
	$scope.page = 1;
	$scope.pagesPaginator = null;// paginador de paginador
	$scope.pager = 0;// paginador del paginador

	$scope.countries = {list:[]};
	$scope.departments = {list : []};
	$scope.provinces = {list : []};
	$scope.districts = {list : []};
	$scope.typedocs = {list : []};
	
//	$scope.clients={list:[],params:{page:$scope.page, maxResults:20,employeename:''}};	
//	$scope.client = {			
//			id : 0,
//			country : "",
//			department : "",
//			province : "",
//			district : "",
//			document_type : "DNI",
//			document : "",
//			first_name : "",
//			last_name : "",
//			address : "",
//			birth_date : "",
//			phone : "",
//			brand : "",
//		};
//	
	$scope.clients={list:[],params:{page:$scope.page, maxResults:20,clientdni:''}};	
    $scope.client=[];

	$scope.id_modificar = -1;



	 $scope.preparePagination=function(pages){
	     $scope.pagers=[[]];
	     var y=0;
	     var j=0;
	     for(var i=1;i<=pages;i++){
	         $scope.pagers[y][j]=i;
	         j++;
	         if(i%10==0) {
	             j=0;
	             y++;
	             $scope.pagers[y]=[];
	         }
	     }
	 }

		$scope.changePage=function(number){
			$scope.clients.params.page=$scope.page=number;
	     $scope.list();
	 }
		$scope.movePager=function(movemment){
	     if(movemment==-1&&$scope.pager>0){
	          $scope.pager--;
	     }else if(movemment==1&&$scope.pager<$scope.pagers.length-1){
	         $scope.pager++;
	     }
	     $scope.pagesPaginator=$scope.pagers[$scope.pager];
	     console.debug($scope.pagesPaginator);
	 }
	$scope.load = function() {
		ContributorService.list({page:1,maxResults:1000}).success(
				function(data) {
					$scope.departments.list = data.listdep;	console.debug("1");
					$scope.provinces.list = data.listpro;console.debug("2");
					$scope.districts.list = data.listdis;console.debug("3");
                    $scope.typedocs.list=data.listdoc;console.debug("4");
                    
                
                    
				});	
		ContributorService.list_view({page:1, maxResults:99999}).success(function(data){
		
				 $scope.employees.list=data.list;
			 
			 })
			 
			 OrderService.list_clients_view_main($scope.clients.params).success(function(data){
		$scope.clients.list=data.list;  })
		
	};
	
	$scope.list=function(){
		
		$scope.message="Cargando...";
		$scope.clients.list=[];
	
		OrderService.list_clients_view_main($scope.clients.params).success(function(data){
			 if(data.list){
				 $scope.clients.list=data.list;
				  $scope.message="Se encontro "+data.totalItems+" registro";
			         if(data.list.length>1)
			          $scope.message="Se encontraron "+data.totalItems+" registros";	
		         $scope.pages= Math.ceil(data.totalItems/$scope.clients.params.maxResults);
		         $scope.preparePagination($scope.pages);		         
		         $scope.pagesPaginator=$scope.pagers[0];
		         $scope.page=data.page;
		        
			 }else{
				 $scope.message="datos no encontrados";
			 }
		 });
	}

	$scope.select_department=function(pdepartment)
	{
		var minuscula= pdepartment.toLowerCase();            
        
		for (var i = 0; i < $scope.departments.list.length; i++) {			
	        var comparar=$scope.departments.list[i].nombre.toLowerCase();	    
			if (comparar == minuscula) {
				$scope.regionid_select = $scope.departments.list[i].id;			
			}

		}

	}
	$scope.select_province=function(pprovince)
	{
		var minuscula= pprovince.toLowerCase();            
        
		for (var i = 0; i < $scope.provinces.list.length; i++) {			
	        var comparar=$scope.provinces.list[i].nombre.toLowerCase();	    
			if (comparar == minuscula) {
				$scope.provinceid_select = $scope.provinces.list[i].id;	
				console.debug($scope.provinceid_select);
			}

		}

	}
	$scope.select_district=function(pdistrict)
	{
		var minuscula= pdistrict.toLowerCase();            
        
		for (var i = 0; i < $scope.districts.list.length; i++) {			
	        var comparar=$scope.districts.list[i].nombre.toLowerCase();	    
			if (comparar == minuscula) {
				$scope.districtid_select = $scope.districts.list[i].id;		
				console.debug("District:"+$scope.districtid_select);
			}

		}

	}
    
	$scope.select_document=function(pdocument)
	{
		var minuscula= pdocument.toLowerCase();            
        
		for (var i = 0; i < $scope.typedocs.list.length; i++) {			
	        var comparar=$scope.typedocs.list[i].nombre.toLowerCase();	    
			if (comparar == minuscula) {
				$scope.documentid_select = $scope.typedocs.list[i].id;			
			}

		}
		if(pdocument=="DNI")
		{
		  $("#document").attr('maxlength','8');
		}else
			{
			$("#document").attr('maxlength','10');
			}

	}
	$scope.unique_brand=function(pbrand)
	{
		var unico=true;
		var minuscula= pbrand.toLowerCase();  
		for (var i = 0; i < $scope.brands.list.length; i++) {			
	        var comparar=$scope.brands.list[i].nombre.toLowerCase();	    
			if (comparar == minuscula && comparar!="") {
			//	unico= false;	
				alert("La marca ya existe");
			}

		}
		
	}
	
	
	
	$scope.Anadir_basic=function(payindicador,date,voucherid,businesstransactionid,businesstransactionstateid,subtransactionid,subtransactionstateid,paymodetraceid,subtransactiondetailid,totalmoney,comentary,typediscount,externalsubjectid)
	{
		
//		var datereg= new Date();
//		var formate_date=(datereg.getDate()) + '/' + (datereg.getMonth()+1) + '/' +  datereg.getFullYear();
//	
		var datereg= new Date();
	  	  var dd=datereg.getDate();
	  	  var mm=(datereg.getMonth()+1);
	  	  if(dd<10){
	  	        dd='0'+dd
	  	    } 
	  	    if(mm<10){
	  	        mm='0'+mm
	  	    } 
	  		var formate_date=dd + '/' + mm + '/' +  datereg.getFullYear();
	  		
		  var voucher_enviar={
		    		id:voucherid,
		    		vouchertype:{id:8},//Pago Flete
		    		serialid:1,
		    		number:1,
		    		serialnumber:"1",
		    		isvalid:"1",	    		
		    					}
			var params_voucher={voucher:voucher_enviar};
		  DiscountService.save_generate_voucher(params_voucher).success(function(data){	
		    	voucherid=data.id;
		    	var businesstransaction_enviar={
				    		id:businesstransactionid,
				    		time:formate_date,//fecha seleccionada
				    		businesssubject: {id:externalsubjectid},//id productor
				    		transactiontype:{id:22},//
				    		updateat: new Date(),
				    		comment:typediscount,
				    		comment2:'',
				    		subsidiaryarea:{id:4},
				    		systemuser:{id:1},
				    		voucher:{id:data.id},
				    	
		    		}
				    		
				    		
					var params_businesstransaction={businesstransaction:businesstransaction_enviar};
		    	DiscountService.save_businesstransaction(params_businesstransaction).success(function(data){	
				    	businesstransactionid=data.id;
				    	
						    	var businesstransactionstate_enviar={
							    		id:businesstransactionstateid,
							    		businesstransaction:{id:businesstransactionid},
							    		state:{id:16},//14=en deuda
							    		atdate:new Date(),
							    		comment:""									    		
							    					}
						    	
								var params_businesstransactionstate={businesstransactionstate:businesstransactionstate_enviar};
						    	DiscountService.save_businesstransactionstate(params_businesstransactionstate).success(function(data){	
							    });
							    
							     var subtransaction_enviar={
							    		id:subtransactionid,
							    		time:formate_date,
							    		totalmoney:totalmoney,							    		
							    		businesstransaction:{id:businesstransactionid},
							    		voucher:{id:voucherid},
							    		transactiontype:{id:22},							    		
							    		updateat: new Date(),
							    		comment:typediscount,
							    		comment2:''
							    					};
						    	
								var params_subtransaction={subtransaction:subtransaction_enviar};
								DiscountService.save_subtransaction(params_subtransaction).success(function(data){
							    		subtransactionid=data.id;
								    	 var subtransactionstate_enviar={
										    		id:subtransactionstateid,
										    		subtransaction:{id:subtransactionid},
										    		state:{id:16},//14=en deuda
										    		atdate:new Date(),
										    		comment:""												    	
										    					}
									    	
											var params_subtransactionstate={subtransactionstate:subtransactionstate_enviar};
								    	 DiscountService.save_subtransactionstate(params_subtransactionstate).success(function(data){	
										    })//fin de subtransactionstate
										    		
										        if(payindicador==1)
										        	{
										         var paymodetrace_enviar={
										    		id:paymodetraceid,
										    		subtransaction:{id:subtransactionid},
										    		paymode:{id:2},//2=Efectivo
										    		trace:"Pago realizado en efectivo",
										    											    	
										    					}
										   
													var params_paymodetrace={paymodetrace:paymodetrace_enviar};
										         DiscountService.save_paymodetrace(params_paymodetrace).success(function(data){	
												    })//fin de subtransactionstate
										        	}
												                            //este id es del businessobjectid
														     
											
							    })//fin de subtransaction
							  
				    })//fin de businesstransaction
		    })//fin de voucher
	
	}
	
	
	$scope.Anadir = function() {


		$scope.select_document($scope.client.document_type);
		var fecha=$scope.client.birth_date;
		var t=fecha.split("/");
		var subid=0;
		var busid=0;
		//var prodid=0;
		//var brandid=0;
		var bussubrol=0;
		var employedid=0;
		var salaryid=0;

		if($scope.id_modificar != -1)
			{
			//prodid=$scope.id_modificar;
			subid=$scope.client.subjectid;
			busid=$scope.client.busid;
			var bussubrol=$scope.client.bussubrolid;
			var employedid= $scope.employedid_select;
			var salaryid=$scope.salaryid_select;
			$scope.select_department($scope.client.department);
			$scope.select_province($scope.client.province);
			$scope.select_district($scope.client.district);
			$scope.select_document($scope.client.document_type);
		
			}
		
		
	    var subject_enviar={
	    		id:subid,
	    		identitydocument:{id:$scope.documentid_select},
	    		identitynumber:$scope.client.document,
	    		firstname:$scope.client.first_name,
	    		secondname:$scope.client.last_name,
	    		subjectclass:{id:2},	    		
	    		address:$scope.client.address,
	    		phone:$scope.client.phone,
	    		subjecttype:{id:3},
	    		district:{id:$scope.districtid_select},
	    		birthday:new Date(t[2],t[1]-1,t[0])
	    		}
		var params_subject={subject:subject_enviar};
	    
	    ContributorService.savesub(params_subject).success(function(data){	
	    	
	    	var businesssubject_enviar={
	    			id:busid,	    			
	    			subject:{id:data.id},		    		
		    		businessname:($scope.client.first_name+" "+$scope.client.last_name),
		    		subjectrolcategory:{id:2},
		    		startdate:new Date(),
		    		phones:$scope.client.phone,
		    		address:$scope.client.address,
		    		districtid:$scope.districtid_select
	    	}

	    	var params_businesssubject={businesssubject:businesssubject_enviar};  	
	    	 ContributorService.savebus(params_businesssubject).success(function(data){	  
	    		
	    		 var idbusinesssubject=data.id;   	
	    		 $scope.list();
	    		 
			    		 if($scope.id_modificar==-1)
			    			 {  	
			    		 var businesssubjectrol_enviar={
			    				 id:bussubrol,
			    				 businesssubject:{id:idbusinesssubject},
			    				 subjectrol:{id:1},//PREGUNTAR
			    				 startdate:new Date()   				 
			    		 }
			    		
			    		 var params_bussubrol={busssubrol:businesssubjectrol_enviar};
			    		
			    		 ContributorService.savebusobjrol(params_bussubrol).success(function(data){
			    			 $scope.list();
			    		 })
			    			 }     
		    		
		    	


	    	 })//fin guardado businesssubj
		})//fin guardado subject

	};

	$scope.confirmRemove = function() {
		 var businesssubjectrol_enviar={
				 id:$scope.bussubeliminar,
				 businesssubject:{id:$scope.buseliminar},
				 subjectrol:{id:5},
				 enddate:new Date()   				 
		 }
		 var params_bussubrol={busssubrol:businesssubjectrol_enviar};
		 ContributorService.savebusobjrol(params_bussubrol).success(function(data){
			 
			 var index = $scope.getSelectedIndex($scope.buseliminar);	
			 console.debug("index eliminado:"+index);
				$scope.clients.list.splice(index, 1);
				 $scope.list();
		 })
		
		
		

	}
	$scope.mensaje=function()
	{
		console.debug($scope.client.birth_date);
	}

	$scope.edit = function(id,item) {
		console.debug("id seleccionado"+id);
		//busca por id busssubject
		OrderService.list_search(id).success(function(data){
			console.debug(data);
			$scope.id_modificar = id;	
			$scope.employee_id=id;//id para guardar la foto
          $scope.client=data.list[0].businesssubject;
          console.debug("CLIENT" +$scope.client);
          $scope.client.country="PERU";
          
          $scope.client.document=item.businesssubject.identitynumber;
          $scope.client.country=$scope.client.country.toUpperCase();          
          $scope.buseliminar=data.list[0].busid;
          console.debug( $scope.buseliminar);
          $scope.bussubeliminar=data.list[0].bussubrolid;
       ////   $scope.driverid_select=$scope.clients.list[index].driven.id;
//          $scope.salaryid_select=item.salary.id;          
//          $scope.employedid_select=item.employed.id;
          console.debug(  $scope.bussubeliminar);
		})
	}

	$scope.nuevo = function() {
		$scope.client=[];
		$scope.client.document_type="DNI";
		$scope.select_document("DNI");
		$scope.client.country="PERU";
	    $scope.salaryid_select=0;
	    $scope.employedid_select=0;
		$scope.id_modificar = -1;
	}
	$scope.getSelectedIndex = function(id) {
		for (var i = 0; i < $scope.clients.list.length; i++)
			if ($scope.clients.list[i].id == id)
				return i;
	}
	$scope.select_month=function(month)
	{	console.debug(month);

	}	
	
	$scope.select_justification=function(justification){
		if(justification=='SI')
			{
			$scope.assistance.justification2=true;
			}else
				{
				if(justification=='NO')
				{
				
					$scope.assistance.justification2=false;
				}
				}
	}
	
	$scope.select_assist=function(assist)
	{	
		if(assist=="Asistio")
			{
		$scope.assistance.assistance2=true;
			}else
				{
				$scope.assistance.assistance2=false;
				}
	}
	/*-------Assistance: Brian-----*/
	$scope.assitanceOf=function($index){
		
		$scope.assistances=[];
		$scope.assitance=[];
		var datereg= new Date();
		var formate_date=(datereg.getDate()) + '/' + (datereg.getMonth()+1) + '/' +  datereg.getFullYear();
	   $scope.date=formate_date;	
		$scope.personal=$scope.clients.list[$index];
	    $scope.month_now=(datereg.getMonth()+1);
	    $scope.year_now=(datereg.getFullYear());	  
	    $scope.month=''+$scope.month_now+'';
	    $scope.year=$scope.year_now;	 
	    $scope.employeeid_select=$scope.personal.employed.id;	

		$scope.list_assistance($scope.employeeid_select,$scope.year_now,$scope.month_now);

	
	}
	$scope.list_assistance=function(employeeid,year,month)
	{
		$scope.assistances=[];
		ContributorService.list_assistances({employeid:employeeid,year:year,month:month}).success(function(data){
			$scope.assistances=data.list;			
		});
	}
	
	$scope.save_assistance_employed=function(id,date,employedid,comment,status,assistance,justification,edit){		
		ContributorService.exist({date:date,employedid:employedid}).success(function(data){
			if(!data.result || edit==true)//si no existe un registro de asistencia en ese dia de un empleado X entonces graba.
				{
					 var assistance_enviar={
					    		id:id,
					    		time:date,
					    		employed:{id:employedid},//el usuari logeado al sistema.
					    		comment:comment.trim(),
					    		status:status,
					    		assistance:assistance,
					    		justification:justification					    
					    					};
				    	
						var params_assistance={assistance:assistance_enviar};
						ContributorService.save_assistance(params_assistance).success(function(data){
							var date_reg= date.split('/');
							var datereg= new Date(date_reg[2],date_reg[1]-1,date_reg[0]);
							var year=datereg.getFullYear();
							var month=(datereg.getMonth()+1);
							$scope.list_assistance(employedid,year,month);							
						});
				}
		});	
		
	}
	
	$scope.edit_assistance=function(assistance)
	{
		
	$scope.assistance=[];
  $scope.assistance=assistance;

if($scope.assistance.assistance==true)
	{
	$scope.assistance.assist2="Asistio";
	assistance.assistance2=true;
	}else
		{
		$scope.assistance.assist2="Falto";
		assistance.assistance2=false;
		}

if($scope.assistance.justification==true)
{
	$scope.assistance.justif2="SI";
	assistance.justification2=true;
}else
	{
	$scope.assistance.justif2="NO";
	assistance.justification2=false;
	}



	}
	$scope.filter=function()
	{
		$scope.clients.params.employeename=$scope.filter.employee.toUpperCase();
		$scope.list();
	}
	
	$scope.saveDiscount=function()
	{
		var discount={};
		ContributorService.saveDiscount(discount).success(function(data){
			alert("Descuento Generado!");
		});
	}

	

	 $scope.load();
	 $scope.list();
});
