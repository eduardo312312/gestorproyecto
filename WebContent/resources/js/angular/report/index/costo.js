
app.controller('CostController', function ($scope,TaskService) {

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

		TaskService.task_list_view_main_cost($scope.details.params).success(function(data){
			if(data.list){			 
				$scope.details.list=data.list;
				$scope.totalhourestimate=0
				$scope.totalhourreal=0
				$scope.totalamountestimate=0
				$scope.totalamountreal=0
				
				//calculo los totales
				for(var i=0; i<$scope.details.list.length;i++)
					{
					$scope.totalhourestimate+=$scope.details.list[i].task.estimatehour;
					$scope.totalhourreal+=$scope.details.list[i].task.realhour;
					$scope.totalamountestimate+=$scope.details.list[i].task.estimateamount;
					$scope.totalamountreal+=$scope.details.list[i].task.realamount;
					
					}
				
				for(var i=0; i<$scope.details.list.length;i++)
				{
					if(i==0)//no acumulad
						{
						$scope.details.list[i].percentage_p= $scope.details.list[i].task.estimatehour/$scope.totalhourestimate;//porcentaje planeado  horas estimadas/total horas estimadas
						$scope.details.list[i].percentage_e= $scope.details.list[i].task.realhour/$scope.totalhourreal;//porcentaje ejecutado	  horas real/ total horas reales
						$scope.details.list[i].ac= $scope.details.list[i].task.realamount;//prespuesto real
						}else
							{
							$scope.details.list[i].percentage_p= $scope.details.list[i-1].percentage_p+ $scope.details.list[i].task.estimatehour/$scope.totalhourestimate;//anterior+porcentaje planeado  horas estimadas/total horas estimadas
							$scope.details.list[i].percentage_e=$scope.details.list[i-1].percentage_e+ $scope.details.list[i].task.realhour/$scope.totalhourreal;//anterior+porcentaje ejecutado	  horas real/ total horas reales
							$scope.details.list[i].ac=$scope.details.list[i-1].ac+ $scope.details.list[i].task.realamount;//anterior+ presupuesto real
							}
					
					$scope.details.list[i].ev=$scope.details.list[i].percentage_e*$scope.totalamountestimate;//ev = porcentaje ejecutado / total presupuesto estimado
					$scope.details.list[i].pv=$scope.details.list[i].percentage_p*$scope.totalamountreal   ;//pv=porcentaje planeado*Total presupuesto real

					$scope.details.list[i].cpi=$scope.details.list[i].ev/$scope.details.list[i].ac; //					cpi= ev/ac
					$scope.details.list[i].spi=$scope.details.list[i].ev/$scope.details.list[i].pv;//					spi= ev/pv	

				}
				
				 $scope.totalcpi=0;
				 $scope.totalspi=0;
				for(var i=0; i<$scope.details.list.length;i++)
				{
				   $scope.totalcpi+=$scope.details.list[i].cpi;
				   $scope.totalspi+=$scope.details.list[i].spi;

				}
				
				$scope.totalcpi=$scope.totalcpi/$scope.details.list.length;//average of total cpis
				 $scope.totalspi=$scope.totalspi/$scope.details.list.length//average of totals spis
				
				//console.log($scope.tasks.list)
				//$scope.message="Se encontraron "+data.totalItems+" registros";	      
				//$scope.pages= Math.ceil(data.totalItems/$scope.details.params.maxResults); 
				//$scope.preparePagination($scope.pages); 
				//$scope.pagesPaginator=$scope.pagers[0];         
				//$scope.page=data.page;	      

			}else{
				$scope.message="datos no encontrados";
			}
		});	
	}
	
	$scope.exportToExcel=function(tableId){ // ex: '#my-table'
		$scope.excel(tableId);
	}
	
	$scope.list();

	



});

