
app.controller('TaskController', function ($scope,TaskService) {

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

	$scope.indedit={estado:false};
	$scope.paginador=null;

	$scope.list=function()
	{
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

			}else{
				$scope.message="datos no encontrados";
			}
		});	
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
		if($scope.task.activityid!=0)
			{
			valor=true;
			}
			return valor;			
	}
	
	$scope.load=function()
	{
		TaskService.list_activities({abc:123}).success(function(data){
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

	$scope.anadir=function(){
		var taskid = 0;
		var stateid = 1;
		var businesssubjectcreatorid = 1;
		var businesssubjectmodifierid = 1;
		var businesssubjectresponsableid=1;
		//var activityid = $scope.task.activityid;
		
		if($scope.newreg==false)
		{
		 taskid = $scope.task.id;	
		stateid = $scope.task.stateid ;
		businesssubjectcreatorid = 1;
			//$scope.task.businesssubjectcreatorid;
	    businesssubjectmodifierid =1;
	    	//$scope.task.businesssubjectmodifierid;
		businesssubjectresponsableid=1;
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
							id : businesssubjectresponsableid
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
		//$scope.task=[];
		$scope.newreg=true;

	}


	$scope.edit=function(item){

			
		$scope.task=[];
		
		$scope.task=item;			
		$scope.newreg=false;
		console.debug($scope.task);

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

	$scope.list();

	$scope.load();


	$scope.exportToExcel=function(tableId){ // ex: '#my-table'
		$scope.excel(tableId);
	}



});

