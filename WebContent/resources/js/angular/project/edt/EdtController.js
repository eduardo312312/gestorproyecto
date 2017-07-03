
app.controller('EdtController', function ($scope,TaskService,ProjectService) {
	$scope.employees={list:[],params:{page:1, maxResults:20}};
	$scope.employee=[];
	$scope.select=[];
	
	$scope.select.project="Proyecto 1";
	$scope.select.projectid=1;
	
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
	$scope.tasks={list:[],params:{page:$scope.page, maxResults:20,activityid:'',phasename:''}};
	$scope.task=[];
	
	
	$scope.task.activityid=0;
	
	$scope.activity=[];
	

	$scope.indedit={estado:false};
	$scope.paginador=null;
	
	$scope.find_activityname_by_id=function(id)
	{
		var name="";
		for(var i=0;i<$scope.activities.list.length;i++)
		{
			if($scope.activities.list[i].id==id)
				{
				name=$scope.activities.list[i].show;
				}

		}
		
		return name;
	}
	
	$scope.list=function(first)
	{
		
		if(first)//si first tiene un solo valor entonces hace load...y eso solo lo hace al momento de hacer la primera llamada al js...
		$scope.load();
		
		$scope.tasks.list=[];
		$scope.message="Cargando...";

		TaskService.task_list_view_main($scope.tasks.params).success(function(data){
			if(data.list){			 
				$scope.tasks.list=data.list;
				//console.log($scope.tasks.list)
				$scope.message="Se encontraron "+data.totalItems+" registros";	      
				$scope.pages= Math.ceil(data.totalItems/$scope.tasks.params.maxResults); 
				$scope.preparePagination($scope.pages); 
				$scope.pagesPaginator=$scope.pagers[0];         
				$scope.page=data.page;
				
				//$scope.task.actividad=$scope.find_activityname_by_id($scope.tasks.params.activityid);//mando un nombre de actividad para todo proceso de esta tabla..
				//console.debug("el nombre es:"+$scope.find_activityname_by_id($scope.tasks.params.activityid));
				
			}else{
				$scope.message="datos no encontrados";
			}
		});	
	}
	
	
	//CARGA Todo EL SIDEBAR A PARTIR DE LA SELECCION DE UN PROYECTO
	$scope.load_sidebar=function()
	{
		
		TaskService.list_project_to_edt({projectid:$scope.select.projectid}).success(function(data){
			
			$scope.detailsedt=data;
			console.log($scope.detailsedt[0]);
		});	
	}

	$scope.select_employee=function()
	{
		$scope.task.employeeid=0;
		        var x = $('#employeeeee').val();
	            var z = $('#employees_list');
	            var val = $(z).find('option[value="' + x + '"]');
	            var endval = val.attr('id');
	            if(endval)
	            	$scope.task.employeeid=endval.substring(1) ;  
	            
	           console.log(endval);
	           console.log(endval.substring(1) );
      
	}	
	
	
	$scope.select_activity=function()
	{
		$scope.task.activityid=0;
		        var x = $('#activityy').val();
	            var z = $('#activities_list');
	            var val = $(z).find('option[value="' + x + '"]');
	            var endval = val.attr('id');
	            if(endval)
	            $scope.task.activityid=endval;  
	            
	           console.log(endval);
      
	}	
	
	$scope.valor=function()
	{	var valor=false;
		if($scope.task.shortname!="" && $scope.task.shortname!=null && $scope.task.name!="" && $scope.task.name!=null && $scope.task.description!="" && $scope.task.description!=null && $scope.task.employeeid!=0 && $scope.task.employeeid!=null && 
				 $scope.task.actividad!="" &&  $scope.task.actividad!=null)
			{
			valor=true;
			}
			return valor;			
	}
	
	
	
	$scope.load=function()
	{    $scope.activity=[];
		TaskService.list_activities({abc:123}).success(function(data){
//			console.log(data.list);
			$scope.activities.list=data.list;
			
			
			for(var i=0;i<$scope.activities.list.length;i++)
				{
				$scope.activities.list[i].show=$scope.activities.list[i].activity.name;
				
				
				}
			
			
			for(var i=0;i<$scope.activities.list.length;i++)
			{
				if($scope.activities.list[i].activity.id==$scope.task.activityid)
					{
					$scope.task.actividad=$scope.activities.list[i].show;
					$scope.activity=$scope.activities.list[i].activity;
					console.debug($scope.activity);
					}

			}
		
		});
		
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
	$scope.filter=function(productname)
	{
		$scope.products.params.productname=productname.toUpperCase();
		$scope.list();
	}

	$scope.anadir=function(){
		var taskid = 0;
		var stateid = 1;
		var businesssubjectcreatorid = 1;
		var businesssubjectmodifierid = 1;
//		var businesssubjectresponsableid=1;
		//var activityid = $scope.task.activityid;
		
		if($scope.newreg==false)
		{
		 taskid = $scope.task.id;	
		stateid = $scope.task.stateid ;
		businesssubjectcreatorid = 1;
			//$scope.task.businesssubjectcreatorid;
	    businesssubjectmodifierid =1;
	    	//$scope.task.businesssubjectmodifierid;
//		businesssubjectresponsableid=1;
		//	$scope.task.businesssubjectresponsableid;
		//activityid =$scope.task.activityid;		
		}
		
			
				var task_send = {
						id : taskid,
						name : $scope.task.name,
						description: $scope.task.description,
						comment:$scope.task.comment ,
						state : {id:stateid},
						startdate : systemdate ,
						enddate: systemdate,
						createdate: systemdate ,
						estimatehour:$scope.task.estimatehour,
						realhour : $scope.task.realhour,
						businessubjectByBusinesssubjectcreatorid:{
							id:businesssubjectcreatorid
						},
						businessubjectByBusinesssubjectresponsableid : {
							id : $scope.task.employeeid
						},
						businessubjectByBusinesssubjectmodifierid:
						{
							id:businesssubjectmodifierid
						},
						changedate : systemdate,
						shortname : $scope.task.shortname,
						updateat : systemdate,
						activity : {
							id : $scope.task.activityid
						},
						realamount : $scope.task.realamount,
						estimateamount : $scope.task.estimateamount

					}

					var params_task = {
						task : task_send
					};
				TaskService.save_task(
						params_task).success(
							function(data) {
								if(data)
								$scope.list();

							});

			
	}
	


	$scope.new_register=function(){		
		$scope.task=[];
		
		$scope.newreg=true;

	}

	
	
	
	$scope.edit=function(item){

		console.log(item);
		$scope.newreg=false;
		$scope.task=[];
		
		$scope.task=item;	
		$scope.task.actividad=item.activityname;
		$scope.task.activityid=item.activityid;
		$scope.task.employeeeeeee=item.responsable;
		$scope.task.employeeid=item.businesssubjectresponsableid;
		
		console.log($scope.task.actividad);
		console.log($scope.task.activityid);
		

	}




	$scope.confirmRemove=function(){
		
		$scope.task.stateid=2;
		$scope.anadir()
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

		$scope.tasks.params.page=$scope.page=number;
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



	

	$scope.colapsar=function(id)
	{
		var click_act=false;
		var xd=''+id

					$("#"+id).attr("class", "collapsing");
					id='ul'+id;
				
				
						//console.log('1'+id);
					if($("#"+id).attr("class")=="nav collapse")//si esta comprimido
						{
						$("#"+id).attr("class", "nav collapse in");//lo abro
						
			
						}
					
					else
						{
						
					  $("#"+id).attr("class", "nav collapse");//si no esta comprimido, lo cierro
			
					
						
						}
					
					
	
	
	}
	
	$scope.exportToExcel=function(tableId){ // ex: '#my-table'
		$scope.excel(tableId);
	}
	
	$scope.process_activity=function(id)
	{//se sobre entiende que todas las modificaciones, creaciones u eliminaciones de registros son de la actividad con id "id" ingresado....
	
//	alert(id);
		
		$scope.tasks.params.activityid=id;		
		$scope.task.activityid=id;// mando un id de actividad fijo para todos los procesos con esta tabla.
		
		console.log('process_activity'+id);
		$scope.list();
		
	}
	
	$scope.projectselect=function(name)
	{		
		$scope.select.projectid=0;
		for(var i=0; i<$scope.listprojects.list.length;i++)
		{

			if($scope.listprojects.list[i].name.toUpperCase() ==name.toUpperCase())
			{
				
				$scope.select.projectid=$scope.listprojects.list[i].id;
				$scope.load_sidebar();	
			}				
						
		}
	}

	
	ProjectService.list_all_projects({portfolioid:1}).success(
			function(data) {

				$scope.listprojects=data;			
				for(var i=0; i<$scope.listprojects.list.length;i++)
				{
//						alert("entro");
					if($scope.listprojects.list[i].id ==$scope.select.projectid)
					{
//						alert("lo encontro");
						$scope.select.project=$scope.listprojects.list[i].name;
					}				
								
				}
				
				$scope.projectselect();
			  //  $scope.listprojects.list.push({id:'agregar',name:'***Agregar Proyecto***'})
    
			});
	
	$scope.list("usar_load");

	$scope.load();
	
	$scope.load_sidebar();
	
	

	


});


		