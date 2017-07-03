
app.controller('CostController', function ($scope,TaskService,ProjectService) {

	$scope.select=[];
	$scope.listprojects=[];
	
	$scope.select.project="";
	$scope.select.project="Proyecto 1";
	$scope.detailsedt=[];
	$scope.detailreport=[];
	$scope.projectid=1;
	var fe = new Date();
	var dd = fe.getDate();
	var mm = (fe.getMonth() + 1);
	if (dd < 10) {
		dd = '0' + dd
	}
	if (mm < 10) {
		mm = '0' + mm
	}
	var systemdate = dd+ '-' + mm +'-'+ fe.getFullYear() ;
	$scope.systemdate=systemdate;
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

		
		//esto voy a quitarlo cuando agregue el filtro Javascript por nombre -> id
		
		
		
		
			TaskService.list_project_to_edt({projectid:$scope.projectid}).success(function(data){
				$scope.detailreport=[];
	
				
				
			$scope.detailsedt=data;
			var constante=16;
			
			
			var contador=0;
			for(var i=0;i<$scope.detailsedt[0].detail.length;i++)//recorro las fases
				{
				
				//console.log($scope.detailreport[i])
				for(var j=0;j<$scope.detailsedt[0].detail[i].detail.length;j++)//aca jalo actividades a mi detailreport
				  {
				  $scope.detailreport[contador]=$scope.detailsedt[0].detail[i] .detail[j]//aca jalo toda la actividad
				  $scope.detailreport[contador].realhour=0;
				  $scope.detailreport[contador].estimatehour=0;
				  $scope.detailreport[contador].ac=0;//agregue 30/06/2017 por el costo de personal.
				  $scope.detailreport[contador].bc=0;//agregue 30/06/2017 por el costo de personal.
				 
				  $scope.detailreport[contador].contador=contador+1
				  
				      for(var k=0; k<$scope.detailsedt[0].detail[i].detail[j].detail.length;k++)//a este nivel recorro tareas. para sumar las horas y ponerlas en totalact
				    	  {
				    	  $scope.detailreport[contador].realhour+=$scope.detailsedt[0].detail[i].detail[j].detail[k].realhour;
				    	  $scope.detailreport[contador].estimatehour+=$scope.detailsedt[0].detail[i].detail[j].detail[k].estimatehour;
				    	  $scope.detailreport[contador].ac+= $scope.detailsedt[0].detail[i].detail[j].detail[k].personal_cost_by_hour*$scope.detailsedt[0].detail[i].detail[j].detail[k].realhour;//agregue 30/06/2017 por el costo de personal.
						  $scope.detailreport[contador].bc+= $scope.detailsedt[0].detail[i].detail[j].detail[k].personal_cost_by_hour*$scope.detailsedt[0].detail[i].detail[j].detail[k].estimatehour;//agregue 30/06/2017 por el costo de personal.
				    	
				    	  }
				    	   
				  
				  contador++;
				  }
				
				}
			$scope.contador=contador;
			
			console.log("tamaño"+$scope.detailreport.length);
			$scope.detailreport.totalac=0;
		           $scope.detailreport.totalbac=0;
		           $scope.detailreport.totalrealhour=0;
		           $scope.detailreport.totalestimatehour=0;
		           $scope.detailreport.totalsv=0;
		           $scope.detailreport.totalcv=0;
		           $scope.detailreport.totalcpi=0;
		           $scope.detailreport.totalspi=0;
		        	   
			for(var i=0; i<$scope.detailreport.length;i++)
				{
				
				
				
					  $scope.detailreport[i].ac = $scope.detailreport[i].ac;	
					  $scope.detailreport[i].bc = $scope.detailreport[i].bc ;	
					  
					  $scope.detailreport[i].pe = $scope.detailreport[i].estimatehour / $scope.detailreport[i].realhour ;
					  if($scope.detailreport[i].estimatehour==0)
						   $scope.detailreport[i].pe=0;
					
					  $scope.detailreport[i].sv = $scope.detailreport[i].estimatehour - $scope.detailreport[i].realhour ;
					  
					 
					  
					       if(i>0)//las columnas acumulativas :S
					    	  { 
					    	   $scope.detailreport[i].ac=$scope.detailreport[i].ac+$scope.detailreport[i-1].ac;	   
					    	   $scope.detailreport[i].bc=$scope.detailreport[i].bc+$scope.detailreport[i-1].bc;	
					    	   $scope.detailreport[i].sv= $scope.detailreport[i].sv+ $scope.detailreport[i-1].sv;
					    	   }
					       
			       $scope.detailreport[i].ev = $scope.detailreport[i].bc * $scope.detailreport[i].pe ;       
		           $scope.detailreport[i].pv = $scope.detailreport[i].bc ;
		           $scope.detailreport[i].cv = $scope.detailreport[i].ev - $scope.detailreport[i].ac ;
		           $scope.detailreport[i].cpi = $scope.detailreport[i].ev / $scope.detailreport[i].ac ;
		           $scope.detailreport[i].spi=$scope.detailreport[i].ev / $scope.detailreport[i].pv ;
		           
		           
		        
				
		           
		           $scope.detailreport.totalrealhour+=$scope.detailreport[i].realhour;
		           $scope.detailreport.totalestimatehour+=$scope.detailreport[i].estimatehour;
		         
		           $scope.detailreport.totalcv+=$scope.detailreport[i].cv;
		           $scope.detailreport.totalcpi+=$scope.detailreport[i].cpi;
		           $scope.detailreport.totalspi+=$scope.detailreport[i].spi;
		           
				}
			
			//totales
			  $scope.detailreport.totalsv=$scope.detailreport[contador-1].sv;		
			  $scope.detailreport.totalac=$scope.detailreport[contador-1].ac;	
	          $scope.detailreport.totalbac=$scope.detailreport[contador-1].bc;	
			  
			  
			  
			  $scope.detailreport.totalcv=$scope.detailreport.totalcv/($scope.contador);
	          $scope.detailreport.totalcpi=$scope.detailreport.totalcpi/($scope.contador);
	          $scope.detailreport.totalspi=$scope.detailreport.totalspi/($scope.contador);
	           
			
			  console.log($scope.detailreport.totalcpi) 
			  console.log($scope.detailreport.totalspi) 
			  
			
			
			
		
			
			
		});	


	}
	
	$scope.exportToExcel=function(tableId){ // ex: '#my-table'
		$scope.excel(tableId);
	}
	
	
	
	$scope.projectselect=function(name)
	{
		console.log(name);
		$scope.projectid=0;
		for(var i=0; i<$scope.listprojects.list.length;i++)
		{

			if($scope.listprojects.list[i].name.toUpperCase() ==name.toUpperCase())
			{
				
				$scope.projectid=$scope.listprojects.list[i].id;
				$scope.list();
			}				
					
		}
	}

	
	ProjectService.list_all_projects({portfolioid:1}).success(
			function(data) {
		
				$scope.listprojects=data;
			  //  $scope.listprojects.list.push({id:'agregar',name:'***Agregar Proyecto***'})
    
			});
	
	$scope.list();


});

