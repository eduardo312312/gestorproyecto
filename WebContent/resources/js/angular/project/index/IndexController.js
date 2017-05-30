
app.controller('IndexController', function ($scope,ProjectService) {

	$scope.project2={shortname:'',name:''};
	
	$scope.select=[];
	$scope.select.project=[];
	
	$scope.select.project="Proyecto 1";
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
		var projectid=1;//por ahora, luego sera para crear varios proyectos
		
		var project_send = {
				id : projectid,
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

					});
		
		
	}
	
	
	$scope.load=function()
	{
		if($scope.select.project=="Proyecto 1")
		{
		$scope.select.projectid=1;
		}else
			{
			$scope.select.projectid=2;
			}
		
		id=$scope.select.projectid;
		ProjectService.search_project(id).success(
				function(data) {
					if(data.project)
					console.debug(data.project);
					
					$scope.project=data.project;
					$scope.project.state="Activo";
					$scope.project.typepayment="Suma Alzada";
				});
	}
	
	$scope.load();
	


});


		