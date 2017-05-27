
app.controller('ProducerController', function($scope, ProducerService,ProductService) {

	$scope.regionid_select = 0;
	$scope.provinceid_select = 0;
	$scope.districtid_select = 0;
	$scope.documentid_select=0;
    $scope.buseliminar=0;
    $scope.bussubeliminar=0;
    $scope.producer={};
	
    $scope.filter=[];
    $scope.producer_filter='';
    $scope.brand_filter='';
    
	$scope.page = 1;
	$scope.pagesPaginator = null;// paginador de paginador
	$scope.pager = 0;// paginador del paginador

	$scope.producers={list:[],params:{page:$scope.page, maxResults:20,brandid:'',producername:''}};	
	$scope.countries = {
		list : [],
	};
	$scope.departments = {
		list : []
		}
	$scope.producers2 = {
			list : []
			}
	
	$scope.provinces = {
		list : []
		}
	
	$scope.districts = {
		list : []
		}
	
	$scope.typedocs = {
			list : []
		
			}
	
	$scope.brands = {
			list : []
		
			}
	

	$scope.producer = {
			
		id : 0,
		"country" : "",
		"department" : "",
		"province" : "",
		"district" : "",
		"document_type" : "DNI",
		"document" : "",
		"first_name" : "",
		"last_name" : "",
		"address" : "",
		"birth_date" : "",
		"phone" : "",
		"brand" : ""
	};

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
			$scope.producers.params.page=$scope.page=number;
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
		$scope.select_filter=function(brand_filter)
		{
			//alert(brand_filter);
			console.debug(brand_filter);
			if(brand_filter!='')
				{
			 $scope.filter.brandid='';
			        var x = $('#filterbrand').val();
		            var z = $('#brandss');
		            var val = $(z).find('option[value="' + x + '"]');
		            var endval = val.attr('id');
		            if(endval)
		            $scope.filter.brandid=endval;            
//		            alert(endval);	
				}else
					{
					 $scope.filter.brandid='';
					}
		            
		}	
		
		$scope.filter=function()
		{
			$scope.producers.params.producername= '';
			$scope.producers.params.brandid='';
			if($scope.brand_filter.length==0 || $scope.brand_filter=='')
				{
				$scope.producers.params.producername= $scope.producer_filter.toUpperCase();
			
				$scope.list();
				}else{
					$scope.producers.params.brandid=$scope.filter.brandid;
					$scope.producers.params.producername= $scope.producer_filter.toUpperCase();
					$scope.list();
				}
		
		}

	$scope.load = function() {		
		
		ProducerService.list({page:1,maxResults:999999}).success(
				function(data) {
					
					$scope.departments.list = data.listdep;
					$scope.provinces.list = data.listpro;
					$scope.districts.list = data.listdis;
                    $scope.typedocs.list=data.listdoc;
                    $scope.brands.list=data.listbra;
                    
                    for(var i=0;i<$scope.typedocs.list.length;i++)
                    	{
                    	if($scope.typedocs.list[i].nombre=="PLACA")
                    		{
                    	
                    		$scope.typedocs.list.splice(i,1);	
                    		
                    		}
                    	}
				});	
		
		ProductService.list_brands({page:1,maxResults:999999}).success(function(data){
			$scope.producers2.list=data.list;
		});
	};
	
	$scope.list=function(){
		
		$scope.message="Cargando...";
		$scope.producers.list=[];
	
		ProducerService.list_view($scope.producers.params).success(function(data){
			 if(data.list){
				 $scope.producers.list=data.list;
			
		         $scope.message="Se encontraron "+data.totalItems+" registros";
		         $scope.pages= Math.ceil(data.totalItems/$scope.producers.params.maxResults);
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
		
		ProducerService.list_search_brand(pbrand).success(function(data){
			if(data.list[0].cantidad!=0)
				{
				alert("La MARCA ingresada, ya esta en uso, igrese otra.")
				$scope.producer.brand="";
				}
				
			})
	}
	
	$scope.ingresando_dni=function(pdni_ruc)
	{
				
		if( pdni_ruc.length==8 && $scope.producer.document_type=="DNI" )
			{
			ProducerService.list_search_dni(pdni_ruc).success(function(data){
			if(data.list[0].cantidad!=0)
				{
				alert("El DNI ingresado, ya esta en uso, ingrese otro.")
				$scope.producer.document="";
				}
				
			})
			
			}
		if( pdni_ruc.length==10 && $scope.producer.document_type=="RUC" )
		{
		ProducerService.list_search_ruc(pdni_ruc).success(function(data){
		if(data.list[0].cantidad!=0)
			{
			alert("El RUC ingresado, ya esta en uso, ingrese otro.")
			$scope.producer.document="";
			}
			
		})
		
		}
		
	

	}
	
	$scope.mensaje=function()
	{
		console.debug($scope.producer);
	}
	$scope.Anadir = function() {


		var fecha=$scope.producer.birth_date;
		var t=fecha.split("/");

		var subid=0;
		var busid=0;
		var prodid=0;
		var brandid=0;
		var bussubrol=0;
		
		if($scope.id_modificar != -1)
			{
			prodid=$scope.producers.list[$scope.id_modificar].producer.id;
			subid=$scope.producers.list[$scope.id_modificar].subject.id;
			busid=$scope.producers.list[$scope.id_modificar].businesssubject.id;
			brandid=$scope.producers.list[$scope.id_modificar].brand.id;
			$scope.select_department($scope.producer.department);
			$scope.select_province($scope.producer.province);
			$scope.select_district($scope.producer.district);
			$scope.select_document($scope.producer.document_type);
		
			}
		
		
	    var subject_enviar={
	    		id:subid,
	    		identitydocument:{id:$scope.documentid_select},
	    		identitynumber:$scope.producer.document,
	    		firstname:$scope.producer.first_name,
	    		secondname:$scope.producer.last_name,
	    		subjectclass:{id:2},	    		
	    		address:$scope.producer.address,
	    		phone:$scope.producer.phone,
	    		subjecttype:{id:3},
	    		district:{id:$scope.districtid_select},
	    		birthday:new Date(t[2],t[1]-1,t[0])
	    		}
		var params_subject={subject:subject_enviar};
	    
	    
	    
		
	    ProducerService.savesub(params_subject).success(function(data){	
	    	
	    	
	    	
	    	var businesssubject_enviar={
	    			id:busid,	    			
	    			subject:{id:data.id},
		    		
		    		businessname:($scope.producer.first_name+" "+$scope.producer.last_name),
		    		subjectrolcategory:{id:1},
		    		startdate:new Date(),
		    		phones:$scope.producer.phone,
		    		address:$scope.producer.address,
		    		districtid:$scope.districtid_select
	    	}
	    	var params_businesssubject={businesssubject:businesssubject_enviar};
	    	 ProducerService.savebus(params_businesssubject).success(function(data){	
	    		 var idbusinesssubject=data.id; 
	    		 
	    		 
	    		 if($scope.id_modificar==-1)
	    			 {
	    		 var businesssubjectrol_enviar={
	    				 id:bussubrol,
	    				 businesssubject:{id:idbusinesssubject},
	    				 subjectrol:{id:7},
	    				 startdate:new Date()   				 
	    		 }
	    		 var params_bussubrol={busssubrol:businesssubjectrol_enviar};
	    		 ProducerService.savebusobjrol(params_bussubrol).success(function(data){
	    		 })
	    			 }
	    		 
	    		 
	    		 var brand_enviar={
	    				 id:brandid,
	    				 name:$scope.producer.brand,
	    			     photo:{id:1}
	    		 }
	    		 var params_brand={brand:brand_enviar};
		    	 ProducerService.savebrand(params_brand).success(function(data){
		    		 
	    		   
			    		 var producer_enviar={
			    				 id:prodid,
			    				 businesssubject:{id:idbusinesssubject},
			    			     brand:{id:data.id}
			    		 }
			    		 var params_producer={producer:producer_enviar};
			    		 
				    	 ProducerService.saveproducer(params_producer).success(function(data){	
			    		 
			    		 
	
							if ($scope.id_modificar == -1) {
								console.debug($scope.producer);
							
								 $scope.list();
					
							} else {
								
								 $scope.list();
					  
							}
							 $scope.list($scope.pagesPaginator);
				    	 })//fin guardar productor
				    	 
		    	 })//fin guardar marca
	    	 })//fin guardado businesssubj
		})//fin guardado subject
	    

	};

	$scope.confirmRemove = function(id) {
		
	
		
		 var businesssubjectrol_enviar={
				 id:$scope.bussubeliminar,
				 businesssubject:{id:$scope.buseliminar},
				 subjectrol:{id:7},
				 enddate:new Date()   				 
		 }
		 
		 var params_bussubrol={busssubrol:businesssubjectrol_enviar};
		 ProducerService.savebusobjrol(params_bussubrol).success(function(data){
			 
			 var i=0;
				while(i<$scope.producers.list.length)
				{
				if($scope.producers.list[i].producer.id==$scope.id_modificar)
					{
					var index= i;
					}
				i=i+1;
				}
				
			
				$scope.producers.list.splice(index, 1);
				
				 $scope.list($scope.pagesPaginator);
		 })
		
		
		

	}

	$scope.edit = function(id) {
		$scope.id_modificar =id;
		
		ProducerService.list_search(id).success(function(data){
			var i=0;
			var index=0;
			while(i<$scope.producers.list.length)
			{
			if($scope.producers.list[i].producer.id==id)
				{
				 index= i;
				}
			i=i+1;
			}
			
			$scope.id_modificar =index;
			
	    $scope.producer.country="PERU";
	    $scope.producer.department=$scope.producers.list[index].region.name.toUpperCase();
	    $scope.producer.province=$scope.producers.list[index].province.name.toUpperCase();
	    $scope.producer.district=$scope.producers.list[index].district.name.toUpperCase();	
	    $scope.producer.document_type=$scope.producers.list[index].identitydocument.shortname;
	    $scope.producer.document=$scope.producers.list[index].businesssubject.identitynumber;
	    $scope.producer.first_name=$scope.producers.list[index].subject.firstname;
	    $scope.producer.last_name=$scope.producers.list[index].subject.lastname;
	    $scope.producer.address=$scope.producers.list[index].businesssubject.address;
	    $scope.producer.birth_date=$scope.producers.list[index].fecha.fecha;
	    $scope.producer.phone=$scope.producers.list[index].businesssubject.phones;
	    $scope.producer.brand=$scope.producers.list[index].brand.name.toUpperCase();
	    $scope.buseliminar=$scope.producers.list[index].businesssubject.id;
	    $scope.bussubeliminar=$scope.producers.list[index].businesssubjectrol.id;
	    console.debug($scope.producer);
		
    
		})

	

	}
	$scope.select_item=function(id)
	
	{   
		var i=0;
		while(i<$scope.producers.list.length)
			{
			if($scope.producers.list.producer.id==id)
				{
				return i;
				}
			}
	}

	$scope.nuevo = function() {

		$scope.producer=[];
		$scope.producer.country="PERU";
		$scope.producer.department="HUANUCO";
		$scope.producer.province="LEONCIO PRADO";
		
		$scope.producer.document_type="RUC";
		$scope.producer.district="RUPA RUPA";
		$scope.select_district($scope.producer.district);
		$scope.select_document($scope.producer.document_type);
	
		$scope.id_modificar = -1;
	}


	$scope.getSelectedIndex = function(id) {

		for (var i = 0; i < $scope.producers.list.length; i++)
			if ($scope.producers.list[i].prodid == id)
				return i;
		
	}
	$scope.exportToExcel=function(tableId){ // ex: '#my-table'
	    $scope.excel(tableId);
	}
	
	 $scope.load();
	 $scope.list();

});
