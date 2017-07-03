
app.controller('ControlChangeController', function ($scope,ProjectService) {
	
	var fe = new Date();
	var dd = fe.getDate();
	var mm = (fe.getMonth() + 1);
	if (dd < 10) {	dd = '0' + dd}
	if (mm < 10) {		mm = '0' + mm	}
	var systemdate = fe.getFullYear() + '-' + mm + '-' +dd ;//fecha del sistema en yy,mm,dd
	$scope.employees={list:[],params:{page:1, maxResults:9999}};
	$scope.change=[];
	$scope.change.businesssubjectid=0;
	$scope.change.comment="";
//  $scope.change.changedate=new Date('yyyy/mm/dd');
	$scope.change.description="";
	
	$scope.page=1;
	$scope.pagesPaginator=1;//paginador de paginador
	$scope.pager=0;//paginador del paginador
	$scope.changes={list:[],params:{page:$scope.page, maxResults:20}};
	$scope.risk=[];
	
	
	$scope.indedit={estado:false};
	$scope.paginador=null;
	$scope.newreg=true;

	
	
	$scope.select_responsable=function()
	{
		$scope.change.businesssubjectid=0;
		        var x = $('#employeeeee2').val();
	            var z = $('#employees_list2');
	            var val = $(z).find('option[value="' + x + '"]');
	            var endval = val.attr('id');
	            if(endval)
	            	$scope.change.businesssubjectid=endval.substring(1) ;  
	            
	           console.log(endval);
	           console.log(endval.substring(1) );
	           console.log("busid"+$scope.change.businesssubjectid);
      
	}	
	
	
	$scope.list=function()
	{
		$scope.changes.list=[];
		$scope.message="Cargando...";

		ProjectService.controlchange_list_view_main($scope.changes.params).success(function(data){
			if(data){	
				console.log(data);
				$scope.changes.list=data.list;
				//console.log($scope.employees.list)
				$scope.message="Se encontraron "+data.totalItems+" registros";	      
				$scope.pages= Math.ceil(data.totalItems/$scope.changes.params.maxResults); 
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
		if($scope.change.businesssubjectid!=0 &&  $scope.change.changedate.length>0 && $scope.change.comment.length>0 && $scope.change.description.length>0)
			{
			valor=true;
			}
		console.log("elvalores"+valor);
			return valor;			
	}


	$scope.save=function(){

		var changeid=0
//		var businesssubjectid = 1;
		var stateid = 1;
		var createdate= new Date();
		//////////convirtiendo creacion a yyyy-mm-dd
		var fecha = $scope.change.changedate;
		var t = fecha.split("/");
		var fe=new Date(t[2], t[1] - 1, t[0]);
		var dd = fe.getDate();
		var mm = (fe.getMonth() + 1);
		if (dd < 10) {	dd = '0' + dd}
		if (mm < 10) {		mm = '0' + mm	}
		var changedate = fe.getFullYear() + '-' + mm + '-' +dd ;
		////////////convirtiendo fecha ejecucion a yyyy-mm-dd


		
		if($scope.newreg==false)
		{
//			businesssubjectid = $scope.change.businesssubjectid;	
			stateid = $scope.change.stateid ;
			changeid = $scope.change.id;
     		createdate=$scope.change.createdate;
	
		}
		
//		if($scope.change.businesssubjectid==0)
//			$scope.change.businesssubjectid=1;//por defecto le mando 1 en caso no se seleccione.
			
				var control_send
				= {
						id : changeid,
						businessubject : {id:$scope.change.businesssubjectid},
						changedate: changedate,
						description:$scope.change.description,
						comment:$scope.change.comment,
						createdate:createdate,
						updateat:new Date(),
						state:{id:stateid},
						priority:1
												
						
					
					
						
					

					}

					var params_change = {
						controlchange : control_send
					};
				ProjectService.save_controlchange(
						params_change).success(
							function(data) {
								if(data)
								$scope.list();

							});

			
	}
	


	$scope.new_register=function(){		
		$scope.change=[];
		$scope.newreg=true;

	}

//HAY UN BUG AL DARLE EDITAR MUCHAS VECES SIN REFRESCAR LA TABLA...SE PONE NAN LA FECHA :s
//SE PUEDE SOLUCIONAR RAPIDO BUSCNADO ESE ROW POR ID...Y SE ACTUALZARIA EN CADA EDIT.
	$scope.edit=function(index){
	$scope.risk=[];
		var temp=$scope.changes.list[index];
		
		$scope.change=temp;			
		$scope.newreg=false;
		console.debug(temp);
		var fe=new Date(temp.changedate)
		var dd = fe.getDate();
		var mm = (fe.getMonth() + 1);
		if (dd < 10) {	dd = '0' + dd}
		if (mm < 10) {		mm = '0' + mm	}
		$scope.change.changedate =dd +"/" + mm + "/"+fe.getFullYear();
		
		
	

	}




	$scope.confirmRemove=function(){
		
		$scope.change.changedate.replace("/", "-");;	
		
		$scope.change.stateid=2;
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


	$scope.exportToExcel=function(tableId){ // ex: '#my-table'
		$scope.excel(tableId);
	}

	$scope.changePage=function(number){

		$scope.changes.params.page=$scope.page=number;
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
	}

	$scope.list();

    

	
	
	$scope.load_businesssubject();


	

	
//	ProjectService.save_risk({riskmatrix:"asdasd"}).success(function(data){
//	if(data.list){	
//		
//		alert("hay respuesta");
//		
//	}else{
//		$scope.message="datos no encontrados";
//	}
//});
	

	
	
			
	
	
});




		