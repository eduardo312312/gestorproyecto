
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
	
	
	
	$scope.valor=function()
	{	var valor=false;
		if($scope.employee.activityid!=0 && $scope.employee.roleid!=0 && $scope.employee.roleid!=null && $scope.employee.name!="" && $scope.employee.lastname!="" && $scope.employee.secondlastname!=""
			&& $scope.employee.name!=null && $scope.employee.lastname!=null && $scope.employee.secondlastname!=null
		)
			{
			valor=true;
			}
			return valor;			
	}
	
	$scope.load=function()
	{
		ProjectService.list_all_roles({abc:123}).success(function(data){
			//console.log(data.list);
		$scope.roles=data;
			
		
		});
	}
	
	$scope.select_role=function()
	{
		$scope.employee.roleid=0;
		        var x = $('#idtiporol').val();
	            var z = $('#role_list');//id de datalist
	            var val = $(z).find('option[value="' + x + '"]');
	            var endval = val.attr('id');
	            if(endval)
	            	$scope.employee.roleid=endval ;  
	            
	           console.log(endval);
	           console.log($scope.employee.roleid );
      
	}	
	
	
	
	$scope.filter=function(productname)
	{
		$scope.products.params.productname=productname.toUpperCase();
		$scope.list();
	}

	$scope.save=function(){
		
		var fecha = $scope.employee.birthdate;
		var t = fecha.split("/");
		var fe=new Date(t[2], t[1] - 1, t[0]);
		var dd = fe.getDate();
		var mm = (fe.getMonth() + 1);
		if (dd < 10) {	dd = '0' + dd}
		if (mm < 10) {		mm = '0' + mm	}
		var birthdate = fe.getFullYear() + '-' + mm + '-' +dd ;
		
		var employeeid = 0;
		var stateid = 1;
		var businesssubjectbossid = 0;
		var businesssubjecttypeid=3
		
		//var activityid = $scope.employee.activityid;
		
		if($scope.newreg==false)
		{
		employeeid = $scope.employee.id;	
		stateid = $scope.employee.stateid ;
		businesssubjectbossid=$scope.employee.businessubjectid.id
		businesssubjecttypeid=$scope.employee.roleid
	
		}
		
			
				var employee_send = {
						id : employeeid,
						name : $scope.employee.name,
						lastname: $scope.employee.lastname,
						secondlastname:$scope.employee.secondlastname ,
						address : $scope.employee.address,
						location : $scope.employee.location,
						mail: $scope.employee.mail,
						phone: $scope.employee.phone,
						phone2:$scope.employee.phone2,
						startdate : systemdate,
						enddate : systemdate,
						updateat:systemdate,
						performancebyday:8,
						costbyhour:$scope.employee.costbyhour,
						businesssubjecttype:
						{
							id:$scope.employee.roleid
						},
						createdate:systemdate,
						state : {
							id : stateid
						},
						
						businessubject:{
							id:1
						},
						birthday:birthdate,
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
		$scope.employee=[];
		$scope.newreg=true;

	}


	$scope.edit=function(item){

		
			
		$scope.employee=[];
		
		$scope.employee=item.businesssubject;
		//$scope.employee.birthdate=item.businesssubject.birthday;
		$scope.employee.role=item.businesssubjecttype.name;
		$scope.employee.roleid=item.businesssubjecttype.id;
		$scope.newreg=false;
	
///////////////////////fecha birthdate
//		var fe=new Date($scope.employee.birthdate)
//		var dd = fe.getDate();
//		var mm = (fe.getMonth() + 1);
//		if (dd < 10) {	dd = '0' + dd}
//		if (mm < 10) {		mm = '0' + mm	}
//		$scope.employee.birthdate =dd +"/" + mm + "/"+fe.getFullYear();
		//////////////////////////////////////
		console.debug($scope.employee);
		
	}




	$scope.confirmRemove=function(){
		
		$scope.employee.stateid=2;
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

	$scope.load();


	$scope.exportToExcel=function(tableId){ // ex: '#my-table'
		$scope.excel(tableId);
	}



});

