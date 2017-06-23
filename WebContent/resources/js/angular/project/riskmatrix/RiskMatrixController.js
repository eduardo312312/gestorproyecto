
app.controller('RiskMatrixController', function ($scope,ProjectService) {

	var fe = new Date();
	var dd = fe.getDate();
	var mm = (fe.getMonth() + 1);
	if (dd < 10) {	dd = '0' + dd}
	if (mm < 10) {		mm = '0' + mm	}
	var systemdate = fe.getFullYear() + '-' + mm + '-' +dd ;//fecha del sistema en yy,mm,dd
	
	$scope.risks=[];
	$scope.page=1;
	$scope.pagesPaginator=1;//paginador de paginador
	$scope.pager=0;//paginador del paginador
	$scope.risks={list:[],params:{page:$scope.page, maxResults:20}};
	$scope.risk=[];
	
	
	$scope.indedit={estado:false};
	$scope.paginador=null;
	$scope.newreg=true;

	$scope.list=function()
	{
		$scope.risks.list=[];
		$scope.message="Cargando...";

		ProjectService.risk_list_view_main($scope.risks.params).success(function(data){
			if(data){	
				console.log(data);
				$scope.risks.list=data.list;
				//console.log($scope.employees.list)
				$scope.message="Se encontraron "+data.totalItems+" registros";	      
				$scope.pages= Math.ceil(data.totalItems/$scope.risks.params.maxResults); 
				$scope.preparePagination($scope.pages); 
				$scope.pagesPaginator=$scope.pagers[0];         
				$scope.page=data.page;	      

			}else{
				$scope.message="datos no encontrados";
			}
		});	
	}
	
//	$scope.select_activity=function()
//	{
//		$scope.employee.activityid=0;
//		        var x = $('#activityy').val();
//	            var z = $('#activities_list');
//	            var val = $(z).find('option[value="' + x + '"]');
//	            var endval = val.attr('id');
//	            if(endval)
//	            $scope.employee.activityid=endval;  
//	            
//	           console.log(endval);
//      
//	}	
	
	$scope.valor=function()
	{	var valor=false;
		if($scope.risk.name!="" && $scope.risk.descriptiontype!="" && $scope.risk.createdate!="" && $scope.risk.ejecutiondate!="" && $scope.risk.origin!="" && $scope.risk.description!="")
			{
			valor=true;
			}
			return valor;			
	}
	
	$scope.load=function()
	{
//		ProjectService.list_activities({abc:123}).success(function(data){
//			console.log(data.list);
//			$scope.activities.list=data.list;
//			for(var i=0;i<$scope.activities.list.length;i++)
//				{
//				$scope.activities.list[i].show=$scope.activities.list[i].phase.name+"-"+$scope.activities.list[i].activity.name;
//				}
//		
//		});
	}
//	$scope.filter=function(productname)
//	{
//		$scope.products.params.productname=productname.toUpperCase();
//		$scope.list();
//	}

	$scope.save=function(){
		
		var riskid=0
		var businesssubjectid = 1;
		var stateid = 1;
		var createdate= new Date();
		//////////convirtiendo creacion a yyyy-mm-dd
		var fecha = $scope.risk.identificationdate;
		var t = fecha.split("/");
		var fe=new Date(t[2], t[1] - 1, t[0]);
		var dd = fe.getDate();
		var mm = (fe.getMonth() + 1);
		if (dd < 10) {	dd = '0' + dd}
		if (mm < 10) {		mm = '0' + mm	}
		var identificationdate = fe.getFullYear() + '-' + mm + '-' +dd ;
		////////////convirtiendo fecha ejecucion a yyyy-mm-dd
		var fecha2 = $scope.risk.ejecutiondate;
		var t2 = fecha2.split("/");
		var fe2=new Date(t2[2], t2[1] - 1, t2[0]);
		var dd2 = fe2.getDate();
		var mm2 = (fe2.getMonth() + 1);
		if (dd2 < 10) {	dd2 = '0' + dd2}
		if (mm2 < 10) {		mm2 = '0' + mm2	}
		var ejecutiondate = fe2.getFullYear() + '-' + mm2 + '-' +dd2 ;
		///////////////////////////////////////////////
		
//	alert(identificationdate)
//	alert(ejecutiondate)
		
		//var activityid = $scope.employee.activityid;
		
		if($scope.newreg==false)
		{
			businesssubjectid = $scope.risk.businesssubjectid;	
			stateid = $scope.risk.stateid ;
     		 riskid = $scope.risk.id;
     		createdate=$scope.risk.createdate;
	
		}
		
			
				var risk_send
				= {
						id : riskid,
						name : $scope.risk.name,
						descriptiontype: $scope.risk.descriptiontype,
						identificationdate:identificationdate,
						origin:$scope.risk.origin,
						description:$scope.risk.description,
						impact:$scope.risk.impact,
						impactgrade:$scope.risk.impactgrade,
						probability:$scope.risk.probability,
						severity:$scope.risk.severity,
						trigger:$scope.risk.trigger,
						actionplan:$scope.risk.actionplan,
						ejecutiondate:ejecutiondate,
						observation:$scope.risk.observation,
						state_1:$scope.risk.state,
						createdate:createdate,//fecha de identificacion
						updateat:new Date(),
						cost1:0,
						cost2:0,
						businessubject:
						{
							id:businesssubjectid
						},						
						state : {
							id : stateid//activo
						}						
						
					
					
						
					

					}

					var params_risk = {
						riskmatrix : risk_send
					};
				ProjectService.save_risk(
						params_risk).success(
							function(data) {
								if(data)
								$scope.list();

							});

			
	}
	


	$scope.new_register=function(){		
		$scope.risk=[];
		$scope.newreg=true;

	}

//HAY UN BUG AL DARLE EDITAR MUCHAS VECES SIN REFRESCAR LA TABLA...SE PONE NAN LA FECHA :s
//SE PUEDE SOLUCIONAR RAPIDO BUSCNADO ESE ROW POR ID...Y SE ACTUALZARIA EN CADA EDIT.
	$scope.edit=function(index){
	$scope.risk=[];
		var temp=$scope.risks.list[index];
		$scope.risk=temp;			
		$scope.newreg=false;
		console.debug(temp);
		var fe=new Date(temp.ejecutiondate)
		var dd = fe.getDate();
		var mm = (fe.getMonth() + 1);
		if (dd < 10) {	dd = '0' + dd}
		if (mm < 10) {		mm = '0' + mm	}
		$scope.risk.ejecutiondate =dd +"/" + mm + "/"+fe.getFullYear();
		
		var fe=new Date(temp.identificationdate)
		var dd = fe.getDate();
		var mm = (fe.getMonth() + 1);
		if (dd < 10) {	dd = '0' + dd}
		if (mm < 10) {		mm = '0' + mm	}
		$scope.risk.identificationdate =dd +"/" + mm + "/"+fe.getFullYear();
		
//		alert(dd);
	

	}




	$scope.confirmRemove=function(){
		
		$scope.risk.ejecutiondate.replace("/", "-");;	
		$scope.risk.identificationdate.replace("/", "-");;
		$scope.risk.stateid=2;
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

		$scope.risks.params.page=$scope.page=number;
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




		