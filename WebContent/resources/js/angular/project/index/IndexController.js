
app.controller('IndexController', function ($scope,ProjectService) {
	$scope.employees={list:[],params:{page:1, maxResults:20}};
	$scope.employee=[];
	$scope.project2={shortname:'',name:''};
	$scope.indicador_nuevo=false;
	$scope.stylenew="border: rgb(229, 230, 231) 1px solid !important";
	
	$scope.select=[];
	$scope.select.project=[];
	$scope.listprojects=[];
	$scope.document=[];
	
	
	$scope.select.projectid=1;
	
	$scope.project=[];
	
	$scope.project.controlid=0;
	$scope.project.leaderid=0;
	
	var fe = new Date();
	var dd = fe.getDate();
	var mm = (fe.getMonth() + 1);
	if (dd < 10) {
		dd = '0' + dd
	}
	if (mm < 10) {
		mm = '0' + mm
	}
	var systemdate = fe.getFullYear() + '-' + mm + '-' +dd ;
	
	//metodo que selecciona el id del businesssubject por el nombre seleccionado en el datalist de la vista.
	$scope.select_control=function()
	{
		$scope.project.controlid=0;
		        var x = $('#employeeeee').val();
	            var z = $('#employees_list');
	            var val = $(z).find('option[value="' + x + '"]');
	            var endval = val.attr('id');
	            if(endval)
	            	$scope.project.controlid=endval.substring(1) ;  
	            
	           console.log(endval);
	           console.log(endval.substring(1) );
      
	}	
	
	$scope.select_leader=function()
	{
		$scope.project.leaderid=0;
		        var x = $('#employeeeee2').val();
	            var z = $('#employees_list2');
	            var val = $(z).find('option[value="' + x + '"]');
	            var endval = val.attr('id');
	            if(endval)
	            	$scope.project.leaderid=endval.substring(1) ;  
	            
	           console.log(endval);
	           console.log(endval.substring(1) );
      
	}	
	
	
	$scope.save_project=function()	
	{
		var projectid=$scope.select.projectid;//por ahora, luego sera para crear varios proyectos
		
		var project_send = {
				id : $scope.select.projectid,
				name : $scope.project.name,
				description: $scope.project.description,
				comment:$scope.project.comment ,
				businessubjectByBusinesssubjectleaderid : {id:$scope.project.leaderid},
				businessubjectByBusinesssubjectcontrolid :{id:$scope.project.controlid},
				state: "....",
				startdate: systemdate ,
				enddate:systemdate,
				createdate : systemdate,
				daysleft:$scope.project.daysleft,
				totalamount:$scope.project.totalamount,
				location:$scope.project.location,
				size:$scope.project.size,
				typepayment:{id:1},
				entitytype:{id:1},
				institutionalcost:"true",
				marketline:{id:1},
				businessline:{id:1},
				detailfile:{id:1},
				state:{id:1},
				portfolio:{id:1},
				shortname:$scope.project.shortname,
				clientname:$scope.project.clientname,
				clientcontact:$scope.project.clientcontact,
				clientphone:$scope.project.clientphone,
				clientfax:$scope.project.clientfax,
				clientmovil:$scope.project.clientmovil,
				clientmail:$scope.project.clientmail,
				clientaddress:$scope.project.clientaddress,
			}

			var params_project = {
				project : project_send
			};
		
		ProjectService.save_project(params_project).success(
					function(data) {
						if(data)
						console.debug(data.project);
						
						$scope.load();
						$scope.project2.shortname=data.shortname;
						$scope.project2.name=data.name;
						$scope.indicador_nuevo=false;
						$scope.stylenew="border: rgb(229, 230, 231) 1px solid !important ";
					});
		
		
	}
	
	
	$scope.load=function(id)
	{
		var projectid=id;
		
		$scope.listprojects=[];
		
		ProjectService.search_project(id).success(
				function(data) {
					if(data.project)
				
					
					$scope.project=data.project;
					$scope.project.state="Activo";
					$scope.project.typepayment="Suma Alzada";
						$scope.select.project=data.project.name;
				});

		
		ProjectService.list_all_projects({portfolioid:1}).success(
				function(data) {
			
					$scope.listprojects=data;
				    $scope.listprojects.list.push({id:'agregar',name:'***Agregar Proyecto***'})
        
				});

		$scope.document.id=$scope.select.projectid;
	

	
		
	}
	
	$scope.validator_save=function()
	{
		var retorno=false;
		if($scope.project.name!="" && $scope.project.description!="" && $scope.project.comment!="" && $scope.project.daysleft!="" && $scope.project.totalamount!="" &&
				$scope.project.location!="" && $scope.project.size!="" && $scope.project.shortname!="" && $scope.project.clientname!="" && $scope.project.clientcontact!=""
					&& $scope.project.clientphone!="" && $scope.project.clientfax!="" && $scope.project.clientmovil!="" && $scope.project.clientmail!="" && $scope.project.clientaddress!=""
		)
			{
			retorno=true;
			}
			
		return retorno;
		
		
	}
	
	////////FUNCION QUE BUSCA EL ID POR EL NOMBRE DEL PROYECTO SELECCIONADO.
	$scope.select_project=function(name)
	{
		$scope.document=[];
    
		if(name=="***Agregar Proyecto***")
			{
			$scope.indicador_nuevo=true;
			
			$scope.project=[];
			$scope.project.name="";
			$scope.project.description="";
		
			$scope.select.projectid=0;
			$scope.stylenew="border: #7FB3D5 3px dashed !important; ";
			
			}
		else
			{
			
			$scope.indicador_nuevo=false;
			$scope.stylenew="border: rgb(229, 230, 231) 1px solid !important ";
			
			$scope.select.projectid=0;
				for(var i=0; i<$scope.listprojects.list.length;i++)
				{
		
					if($scope.listprojects.list[i].name.toUpperCase() ==name.toUpperCase())
					{
						idproject=$scope.listprojects.list[i].id;
						$scope.select.projectid=$scope.listprojects.list[i].id;
						$scope.document.id=$scope.select.projectid;
					}
						
					
//					console.log("en buscar"+$scope.select.projectid);
						
				}
				
				$scope.load($scope.select.projectid);
		   }

		
	
	}
	$scope.load_businesssubject=function()
	{
		$scope.employees.list=[];
		

		ProjectService.businesssubject_list_view_main($scope.employees.params).success(function(data){
			if(data.list){			 
				$scope.employees.list=data.list;
				      
				for(var i=0;i<$scope.employees.list.length;i++)
				{
				$scope.employees.list[i].show=$scope.employees.list[i].businesssubject.name+" "+$scope.employees.list[i].businesssubject.lastname+" "+$scope.employees.list[i].businesssubject.secondlastname;
				}

			}else{
				$scope.message="datos no encontrados";
			}
		});
	}
	
	
	$scope.load_businesssubject();
	
	
	$scope.load(1);
	
  

});


		