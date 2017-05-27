
app.controller('EdtController', function ($scope,TaskService) {

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
	$scope.details={list:[],params:{projectid:1}};
	$scope.task=[];
	$scope.task.activityid=0;

	$scope.indedit={estado:false};
	$scope.paginador=null;

	$scope.list=function()
	{
		$scope.details.list=[];
		$scope.message="Cargando...";
		$scope.detailsedt=[];
		$scope.detailsedt.list=[];
		
		
		TaskService.list_project_to_edt({projectid:1}).success(function(data){
			
			$scope.detailsedt=data;
			console.log($scope.detailsedt[0]);
		});	
		
		
		
		$scope.alert=function(d)
		{
			alert(d);
		}
						
			
		
	}
	
	$scope.exportToExcel=function(tableId){ // ex: '#my-table'
		$scope.excel(tableId);
	}
	
	$scope.list();

	



});

