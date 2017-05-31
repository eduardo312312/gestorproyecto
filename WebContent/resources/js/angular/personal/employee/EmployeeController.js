
app.controller('EmployeeController', function ($scope,ProjectService) {

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
	$scope.employees={list:[],params:{page:$scope.page, maxResults:20}};
	$scope.employee=[];
//	$scope.employee.activityid=0;

	$scope.indedit={estado:false};
	$scope.paginador=null;

	$scope.list=function()
	{
		$scope.employees.list=[];
		$scope.message="Cargando...";

		ProjectService.businesssubject_list_view_main($scope.employees.params).success(function(data){
			if(data.list){			 
				$scope.employees.list=data.list;
				//console.log($scope.employees.list)
				$scope.message="Se encontraron "+data.totalItems+" registros";	      
				$scope.pages= Math.ceil(data.totalItems/$scope.employees.params.maxResults); 
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
		$scope.employee.activityid=0;
		        var x = $('#activityy').val();
	            var z = $('#activities_list');
	            var val = $(z).find('option[value="' + x + '"]');
	            var endval = val.attr('id');
	            if(endval)
	            $scope.employee.activityid=endval;  
	            
	           console.log(endval);
      
	}	
	
	$scope.valor=function()
	{	var valor=false;
		if($scope.employee.activityid!=0)
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

	$scope.save=function(){
		
		
		var employeeid = 0;
		var stateid = 1;
		var businesssubjectbossid = 0;
		var businesssubjecttypeid=0
		
		//var activityid = $scope.employee.activityid;
		
		if($scope.newreg==false)
		{
		employeeid = $scope.employee.businesssubject.id;	
		stateid = $scope.employee.businesssubject.stateid ;
		businesssubjectbossid=$scope.employee.businesssubject.id
		businesssubjecttypeid=$scope.employee.businesssubjecttype.id
	
		}
		
			
				var employee_send = {
						id : employeeid,
						name : $scope.employee.name,
						lastname: $scope.employee.description,
						secondlastname:$scope.employee.comment ,
						address : {id:stateid},
						location : systemdate ,
						mail: systemdate,
						phone: systemdate ,
						phone2:$scope.employee.estimatehour,
						startdate : $scope.employee.realhour,
						enddate : $scope.employee.realhour,
						updateat:systemdate,
						businesssubjecttype:
						{
							id:businesssubjecttypeid
						},
						createdate:systemdate,
						state : {
							id : stateid
						},
						
						businessubject:{
							id:businesssubjectbossid
						},
						birthday:systemdate,
						officialdocument:$scope.employee.officialdocument,
						officialdocumenttype:$scope.employee.officialdocumenttype
						
					

					}

					var params_employee = {
						employee : employee_send
					};
				ProjectService.save_businesssubject(
						params_employee).success(
							function(data) {
								if(data)
								$scope.list();

							});

			
	}
	


	$scope.new_register=function(){		
		//$scope.employee=[];
		$scope.newreg=true;

	}


	$scope.edit=function(item){

			
		$scope.employee=[];
		
		$scope.employee=item;			
		$scope.newreg=false;
		console.debug($scope.employee);

	}




	$scope.confirmRemove=function(){
		
		$scope.employee.stateid=2;
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

		$scope.employees.params.page=$scope.page=number;
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

//	$scope.load();


	$scope.exportToExcel=function(tableId){ // ex: '#my-table'
		$scope.excel(tableId);
	}



});

