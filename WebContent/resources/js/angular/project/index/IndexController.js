
app.controller('IndexController', function ($scope,ProjectService) {

	$scope.project2={shortname:'',name:''};
	$scope.indicador_nuevo=false;
	$scope.stylenew="border: rgb(229, 230, 231) 1px solid !important";
	
	$scope.select=[];
	$scope.select.project=[];
	$scope.listprojects=[];
	$scope.document=[];
	
	$scope.select.projectid=1;
	
	$scope.project=[];
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
	
	
	
	$scope.save_project=function()	
	{
		var projectid=$scope.select.projectid;//por ahora, luego sera para crear varios proyectos
		
		var project_send = {
				id : $scope.select.projectid,
				name : $scope.project.name,
				description: $scope.project.description,
				comment:$scope.project.comment ,
				businessubjectByBusinesssubjectleaderid : {id:1},
				businessubjectByBusinesssubjectcontrolid :{id:2},
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
				});
//		console.log("dsps de buscar proyecto"+$scope.select.projectid);
		
		ProjectService.list_all_projects({portfolioid:1}).success(
				function(data) {
			
					$scope.listprojects=data;
				    $scope.listprojects.list.push({id:'agregar',name:'***Agregar Proyecto***'})
        
				});
//		console.log("dsps de listar proyectos"+$scope.select.projectid);
		$scope.document.id=$scope.select.projectid;
		$scope.select.projectid=projectid
		$scope.document.id=$scope.select.projectid;
		
//		console.log("dsps de devolverle su valors"+$scope.select.projectid);
		
//		alert($("#documentid").val());
	
		
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
	
	
	
	
	
	$scope.load(1);
	
  

});


		