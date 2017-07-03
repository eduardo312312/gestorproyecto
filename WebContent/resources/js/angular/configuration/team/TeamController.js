
app.controller('TeamController', function ($scope,ProjectService,TeamService) {
//	alert("hola")
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
	//alert(systemdate);
	$scope.activities=[];
	$scope.page=1;
	$scope.pagesPaginator=1;//paginador de paginador
	$scope.pager=0;//paginador del paginador
	$scope.employees={list:[],params:{page:$scope.page, maxResults:9999}};
	$scope.employee=[];

	
	$scope.detail={id:"",personal:"",role:"",costbyhour:"",hourbyday:"",businesssubjectid:0};
	$scope.detailsteam=[];
	
	
	$scope.teams={list:[],params:{page:$scope.page, maxResults:20}};
	$scope.team=[];
	

	$scope.indedit={estado:false};
	$scope.paginador=null;
	

	
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
		
		$scope.listprojects=[];
		ProjectService.list_all_projects({portfolioid:1}).success(
				function(data) {
			
					$scope.listprojects=data;
//				    $scope.listprojects.list.push({id:'agregar',name:'***Agregar Proyecto***'})
        
				});

		
		
	}


	$scope.list=function()
	{
		
		$scope.teams.list=[];
		$scope.message="Cargando...";

		TeamService.team_list_view_main($scope.teams.params).success(function(data){
			if(data.list){			 
				$scope.teams.list=data.list;
				//console.log($scope.employees.list)
				$scope.message="Se encontraron "+data.totalItems+" registros";	      
				$scope.pages= Math.ceil(data.totalItems/$scope.teams.params.maxResults); 
				$scope.preparePagination($scope.pages); 
				$scope.pagesPaginator=$scope.pagers[0];         
				$scope.page=data.page;	      

			}else{
				$scope.message="datos no encontrados";
			}
		});	
	}
	
	
	
	$scope.valor=function()
	{	var valor=false;
		if($scope.team.name!="" && $scope.team.name!=null && $scope.team.description!="" && $scope.team.description!=null && $scope.team.project!="" 
			&& $scope.team.project!=null && $scope.team.leader!="" && $scope.team.leader!=null && $scope.detailsteam.length>0 && $scope.team.projectid!=0  && $scope.team.projectid!=null&& $scope.team.leaderid!=0 && $scope.team.leaderid!=null)
			{
			valor=true;
			}
			return valor;			
	}
	
	$scope.valor_personal=function()
	{	var valor=false;
		if($scope.team.personalid!=0)
			{
			valor=true;
			}
			return valor;			
	}
	
	$scope.load=function()
	{
		ProjectService.list_activities({abc:123}).success(function(data){
			console.log(data.list);
			$scope.activities.list=data.list;
			for(var i=0;i<$scope.activities.list.length;i++)
				{
				$scope.activities.list[i].show=$scope.activities.list[i].phase.name+"-"+$scope.activities.list[i].activity.name;
				}
		
		});
	}
	$scope.filter=function(productname)
	{
		$scope.products.params.productname=productname.toUpperCase();
		$scope.list();
	}
	
$scope.new_register=function(){		
		
		$scope.employee=[];
		$scope.team=[];
		$scope.newreg=true;
		$scope.detailsteam=[];
		$scope.load_businesssubject();
		$scope.searchpersonal="";

	}
	
	$scope.new_register_detail=function(){		
		$scope.employee=[];
		//$scope.detailsteam=[];
		$scope.searchpersonal="";
		$scope.newreg_detail=true;
		 $scope.index_member=0;
		$scope.load_businesssubject();

	}
	
	
	$scope.add_detail_team=function()
	{
		if($scope.newreg_detail==true)
			{
		
		$scope.detail=$scope.employee;
		$scope.detail.groupteamid=0;
		$scope.detailsteam.push($scope.detail);
		
		$scope.detail=null;
		$scope.employee=null;
		
			}else
				{
				
				$scope.detail=$scope.employee;
				$scope.detail.groupteamid= $scope.edit_group_id;
				$scope.detailsteam[$scope.index_member]=$scope.detail;
				}
		
		console.log($scope.detailsteam)
	}
	
	$scope.edit=function(item){
       
		$scope.load_businesssubject();	
		$scope.employee=[];
		
		$scope.employee=item;	//employeee tiene todo el detalle a nivel de team		
		$scope.newreg=false;
		console.debug($scope.employee);
		
		$scope.team.stateid=1;//al momento de editar seteo 1 por defecto. al estado
		
		$scope.detailsteam=item.detail
		$scope.team.id=item.id;
		$scope.team.name=item.name;
		$scope.team.description=item.description;
		$scope.team.project=item.projectname;
		$scope.team.projectid=item.projectid;
		$scope.team.leader=item.leader;
		$scope.team.leaderid=item.businesssubjectid;
		}
	
	$scope.edit_member=function(item)//edicion de detalle de equipo
	{
		 console.log(item.groupteamid);
		$scope.employee=[];
		$scope.newreg_detail=false;
	    $scope.search_detail_persona(item.businesssubjectid);
	    $scope.edit_group_id=item.groupteamid;
	    
	    //employeee es para buscar personal		
	    $scope.employee.personal=item.personal;
		$scope.employee.role=item.role;
	    $scope.employee.costbyhour=item.costbyhour;
	    $scope.employee.hourbyday=item.hourbyday;
	    $scope.employee.businesssubjectid=item.businesssubjectid;
	    $scope.searchpersonal=name;
	    
	
	}
	
	$scope.search_detail_persona=function(businesssubjectid)	
	{
		for(var i=0; i<$scope.detailsteam.length;i++)
			{			
			if($scope.detailsteam[i].businesssubjectid==businesssubjectid)
				{
				//alert("encontro");
				$scope.index_member=i;
				}				
			}
		
	}
	
	
	
	$scope.confirmRemove_personal=function()
	{
		if($scope.newreg!=true)
			{
		var groupteam_to_send = {
				id :$scope.edit_group_id,
				team:{id:$scope.team.id},
				createdate : new Date(),
				description: "",
				businessubject:{ id:$scope.employee.businesssubjectid },
				
				state : {id: 2},
				cost1: $scope.employee.costbyhour,
			    cost2:$scope.employee.hourbyday
			}

			var params_groupteam = {
				groupteam : groupteam_to_send
			};
		
		TeamService.save_groupteam(
				params_groupteam).success(
					function(data) {
					
						
						
							$scope.detailsteam.splice($scope.index_member, 1);
						
					})
			}else
				{
				$scope.detailsteam.splice($scope.index_member, 1);
				}
		
		console.log($scope.detailsteam)
	}
	

	
	$scope.autocomplete_information_personal=function()
	{
		for(var i=0;i<$scope.employees.list.length;i++)
		{
			if($scope.team.personalid==$scope.employees.list[i].businesssubject.id)
				{
				$scope.employee.personal=$scope.employees.list[i].businesssubject.name+" "+$scope.employees.list[i].businesssubject.lastname+" "+$scope.employees.list[i].businesssubject.secondlastname;
				$scope.employee.role=$scope.employees.list[i].businesssubjecttype.name;
			    $scope.employee.costbyhour=$scope.employees.list[i].businesssubject.costbyhour;
			    $scope.employee.hourbyday=$scope.employees.list[i].businesssubject.hourbyday;
			    $scope.employee.businesssubjectid=$scope.employees.list[i].businesssubject.id;
				
				}
		}	
	}

	

	
	
	
	$scope.save=function(){
		
		
		var teamid=0;
		var stateid = 1;
		var createdate=new Date()
	
		
		//var activityid = $scope.employee.activityid;
		
		if($scope.newreg==false)
		{
		teamid = $scope.team.id;	
		stateid = $scope.team.stateid ;
		createdate=$scope.team.createdate;
	
		}
		
		

			
				var team_send = {
						id : teamid,
						name : $scope.team.name,
						description: $scope.team.description,
						businessubject:{ id:$scope.team.leaderid },
						updateat : new Date(),
						state : {id: stateid},
						createdate: createdate,
						project:{id: $scope.team.projectid }
					}

					var params_team = {
						team : team_send
					};
				TeamService.save_team(
						params_team).success(
							function(data) {
								if(data)
									{	
									var newteamid=data.id;
									
//									TeamService.delete_team	
									//elimino los detalles de ese equipo en groupteam
								
											
												var contador_reg_guardados=0;
													for(var i=0;i<$scope.detailsteam.length;i++)
														{
														var groupteam_to_send = {
																id : $scope.detailsteam[i].groupteamid,
																team:{id:newteamid},
																createdate : new Date(),
																description: "",
																businessubject:{ id:$scope.detailsteam[i].businesssubjectid },
																
																state : {id: 1},
																cost1: $scope.detailsteam[i].costbyhour,
															    cost2:$scope.detailsteam[i].hourbyday 
															}
		
															var params_groupteam = {
																groupteam : groupteam_to_send
															};
														
														TeamService.save_groupteam(
														    		 params_groupteam).success(
																	function(data) {
																		contador_reg_guardados++
																		if(contador_reg_guardados==$scope.detailsteam.length)
																			$scope.list();
																		
																	})										
													
									
														}
											
									}
							});
					


			
	}
	





	$scope.confirmRemove=function(){
		
		$scope.team.stateid=2;		
		$scope.save()
	}


	

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

		$scope.teams.params.page=$scope.page=number;
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
	
	$scope.select_leader=function()
	{
		$scope.team.leaderid=0;
		        var x = $('#employeeeee2').val();
	            var z = $('#employees_list2');
	            var val = $(z).find('option[value="' + x + '"]');
	            var endval = val.attr('id');
	            if(endval)
	            	$scope.team.leaderid=endval.substring(1) ;  
	            
	           console.log(endval);
	           console.log(endval.substring(1) );
      
	}	
	
	$scope.select_personal=function()
	{
		$scope.team.personalid=0;
		        var x = $('#employeeeee').val();
	            var z = $('#employees_list');
	            var val = $(z).find('option[value="' + x + '"]');
	            var endval = val.attr('id');
	            if(endval)
	            	$scope.team.personalid=endval.substring(1) ;  
	            
	           console.log(endval);
	           console.log(endval.substring(1) );
	          
	           if($scope.team.personalid!=0)
	        	   {
	        	   $scope.autocomplete_information_personal();
	        	   }
      
	}
	
	$scope.select_project=function(name)
	{
		$scope.team.projectid=0;
		for(var i=0; i<$scope.listprojects.list.length;i++)
		{

			if($scope.listprojects.list[i].name.toUpperCase() ==name.toUpperCase())
			{
//				idproject=$scope.listprojects.list[i].id;
				$scope.team.projectid=$scope.listprojects.list[i].id;
				console.log("projecto elegido id"+	$scope.team.projectid);
//				$scope.document.id=$scope.select.projectid;
			}
				

		}
	}
	

	
	
	
	

	
	
	
	

	$scope.list();
	
	//$scope.load_businesssubject();
	
	



	$scope.exportToExcel=function(tableId){ // ex: '#my-table'
		$scope.excel(tableId);
	}



});

