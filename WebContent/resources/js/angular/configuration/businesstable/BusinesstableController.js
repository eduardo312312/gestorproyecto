app.controller('BusinesstableController', function ($scope,ProductService,ProductBService,PropertiesService,OrderService) {

	
	
	$scope.page=1;
	$scope.pagesPaginator=null;//paginador de paginador
	$scope.pager=0;//paginador del paginador
	
	
	$scope.businesstable=[];
	
	$scope.businesstables={list:[],params:{page:1, maxResults:20, businesstableid:''}};

//////////////////////////PAGINACION
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
			$scope.businesstables.params.page=$scope.page=number;
	     $scope.list();
	   }
		$scope.movePager=function(movemment)
		
		{
	     if(movemment==-1&&$scope.pager>0){
	          $scope.pager--;
	     }else if(movemment==1&&$scope.pager<$scope.pagers.length-1){
	         $scope.pager++;
	     }
	     
	     $scope.pagesPaginator=$scope.pagers[$scope.pager];
//	     console.debug($scope.pagesPaginator);
	     }
		
		////////////////////////
	
	
	
	
	$scope.list=function(){		
		$scope.message="Cargando...";
		$scope.businesstables.list=[];	
		OrderService.list_businesstable_view_main($scope.businesstables.params).success(function(data){
			 if(data.list){
				 $scope.businesstables.list=data.list;
		         $scope.message="Se encontraron "+data.totalItems+" registros";
		         $scope.pages= Math.ceil(data.totalItems/$scope.businesstables.params.maxResults);
		         $scope.preparePagination($scope.pages);
		         $scope.pagesPaginator=$scope.pagers[0];
		         $scope.page=data.page;
		             
		        
			 }else{
				 $scope.message="datos no encontrados";
			 }
		 });
	}
	
	$scope.nuevo=function()
	{
		$scope.id_modificar=-1;
		$scope.businesstable.state="Disponible";
		$scope.businesstable.properties="";
		$scope.businesstable.name="";
		$scope.businesstable.type="Piso 1";
	}
	
	$scope.edit=function(item)
	{
		$scope.id_modificar=1;
		$scope.businesstable.state="Disponible";
		$scope.businesstable=item;
		$scope.businesstable.name=item.businessobject.name;
		$scope.businesstable.state=item.state.name;
		$scope.businesstable.properties=item.businessobject.properties;
		$scope.businesstable.type=item.businesstable.type;
		
	}
	
	$scope.Anadir=function()
	{
		
		var businesssobjectid=0;
		var objectmodelid=0;
		var businesstableid=0;
		var businessobjectstateid=0;
		
		
		var employedid=null;
		var subtransactionid=null;
		var stateid_businesstable=21;
		
		if($scope.businesstable.state=="Disponible")
			{
			stateid_businesstable=22;
			}
		
		if($scope.id_modificar != -1)
			{
			businesssobjectid=$scope.businesstable.businessobject.id;
//			objectmodelid=$scope.businesstable.businessobject.objectmodelid;
			businesstableid=$scope.businesstable.businesstable.id;
			businessobjectstateid=$scope.businesstable.businessobject.stateid;
			
			
			 employedid=null;
			 subtransactionid=null;
			
			
			}
		
		var businessobject_enviar={
				 id:businesssobjectid,
				 name:$scope.businesstable.name.toUpperCase(),
				 measureunit:{id:2},
				 presentationcontainer:{id:9},		
				 objectmodel:{id:913},
				 photo:{id:1},
				 iscurrent:1,
				 properties:$scope.businesstable.properties,
				 requirepreparation:null,
				 classificationcatalog:null,
				 title:null,
			     state:{id:18}
					 
		 }
		 var params_businessobject={businessobject:businessobject_enviar};
		 ProductService.save_businessobject(params_businessobject).success(function(data){
			 
			 
					 var businesstable_enviar={
					    		id:businesstableid,
					    		employed:{id:employedid},
					    		state:{id:stateid_businesstable},
					    		businessobject:{id:data.id},
					    		subtransaction:{id:subtransactionid}
					    					};
				    	
						var params_businesstable={businesstable:businesstable_enviar};
					    OrderService.save_businesstable(params_businesstable).success(function(data){
					    	$scope.list();
					    })
			 
		 })
		 
		 
	}
	
	$scope.list();
 
});

