
app.controller('MeetingRecordController', function ($scope,ProjectService) {
	
	var fe = new Date();
	var dd = fe.getDate();
	var mm = (fe.getMonth() + 1);
	if (dd < 10) {	dd = '0' + dd}
	if (mm < 10) {		mm = '0' + mm	}
	var systemdate = fe.getFullYear() + '-' + mm + '-' +dd ;//fecha del sistema en yy,mm,dd
	$scope.employees={list:[],params:{page:1, maxResults:9999}};
	$scope.meet=[];
	$scope.meet.businesssubjectid=0;
	$scope.meet.comment="";
//  $scope.meet.meetdate=new Date('yyyy/mm/dd');
	$scope.meet.description="";
	
	$scope.page=1;
	$scope.pagesPaginator=1;//paginador de paginador
	$scope.pager=0;//paginador del paginador
	$scope.meets={list:[],params:{page:$scope.page, maxResults:20}};
	$scope.risk=[];
	
	
	$scope.indedit={estado:false};
	$scope.paginador=null;
	$scope.newreg=true;

	
	
	$scope.select_responsable=function()
	{
		$scope.meet.businesssubjectid=0;
		        var x = $('#employeeeee2').val();
	            var z = $('#employees_list2');
	            var val = $(z).find('option[value="' + x + '"]');
	            var endval = val.attr('id');
	            if(endval)
	            	$scope.meet.businesssubjectid=endval.substring(1) ;  
	            
	           console.log(endval);
	           console.log(endval.substring(1) );
	           console.log("busid"+$scope.meet.businesssubjectid);
      
	}	
	
	
	$scope.list=function()
	{
		$scope.meets.list=[];
		$scope.message="Cargando...";

		ProjectService.meetingrecord_list_view_main($scope.meets.params).success(function(data){
			if(data){	
				console.log(data);
				$scope.meets.list=data.list;
				//console.log($scope.employees.list)
				$scope.message="Se encontraron "+data.totalItems+" registros";	      
				$scope.pages= Math.ceil(data.totalItems/$scope.meets.params.maxResults); 
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
		if($scope.meet.businesssubjectid!=0 &&  $scope.meet.meetdate.length>0 && $scope.meet.comment.length>0 && $scope.meet.description.length>0)
			{
			valor=true;
			}
		console.log("elvalores"+valor);
			return valor;			
	}


	$scope.save=function(){

		var meetid=0
//		var businesssubjectid = 1;
		var stateid = 1;
		var createdate= new Date();
		//////////convirtiendo creacion a yyyy-mm-dd
		var fecha = $scope.meet.meetdate;
		var t = fecha.split("/");
		var fe=new Date(t[2], t[1] - 1, t[0]);
		var dd = fe.getDate();
		var mm = (fe.getMonth() + 1);
		if (dd < 10) {	dd = '0' + dd}
		if (mm < 10) {		mm = '0' + mm	}
		var meetdate = fe.getFullYear() + '-' + mm + '-' +dd ;
		////////////convirtiendo fecha ejecucion a yyyy-mm-dd


		
		if($scope.newreg==false)
		{
//			businesssubjectid = $scope.meet.businesssubjectid;	
			stateid = $scope.meet.stateid ;
			meetid = $scope.meet.id;
     		createdate=$scope.meet.createdate;
	
		}
		
//		if($scope.meet.businesssubjectid==0)
//			$scope.meet.businesssubjectid=1;//por defecto le mando 1 en caso no se seleccione.
			
				var meetingrecord_send
				= {
						id : meetid,
						businessubject : {id:$scope.meet.businesssubjectid},
						meetname: $scope.meet.meetname,
						meetdate: meetdate,						
						comment:$scope.meet.comment,
						createdate:createdate,
						updateat:new Date(),
						state:{id:stateid},
						priority:1,
						description:$scope.meet.description,
						location:$scope.meet.location

					}

					var params_meet = {
						meetingrecord : meetingrecord_send
					};
				ProjectService.save_meetingrecord(
						params_meet).success(
							function(data) {
								if(data)
								$scope.list();

							});

			
	}
	


	$scope.new_register=function(){		
		$scope.meet=[];
		$scope.newreg=true;

	}

//HAY UN BUG AL DARLE EDITAR MUCHAS VECES SIN REFRESCAR LA TABLA...SE PONE NAN LA FECHA :s
//SE PUEDE SOLUCIONAR RAPIDO BUSCNADO ESE ROW POR ID...Y SE ACTUALZARIA EN CADA EDIT.
	$scope.edit=function(index){
	$scope.meet=[];
		var temp=$scope.meets.list[index];
		
		$scope.meet=temp;			
		$scope.newreg=false;
		console.debug(temp);
		var fe=new Date(temp.meetdate)
		var dd = fe.getDate();
		var mm = (fe.getMonth() + 1);
		if (dd < 10) {	dd = '0' + dd}
		if (mm < 10) {		mm = '0' + mm	}
		$scope.meet.meetdate =dd +"/" + mm + "/"+fe.getFullYear();
		
		
	

	}




	$scope.confirmRemove=function(){
		
		$scope.meet.meetdate.replace("/", "-");;	
		
		$scope.meet.stateid=2;
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

		$scope.meets.params.page=$scope.page=number;
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




		