
app.controller('UserController', function ($scope,$window,UserService,ContributorService) {
	
	$scope.employeds={list:[]};
	$scope.page=1;
	$scope.pagesPaginator=null;//paginador de paginador
	$scope.pager=0;//paginador del paginador
	$scope.users={list:[],params:{page:$scope.page, maxResults:20}};	
	$scope.indicador=0;
	$scope.employed=[];
	
	$scope.load = function() {
		UserService.list_employed_user().success(
				function(data) {							
			$scope.employeds.list=data.list;    
			
				});	
		
	
		
		    
		
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
		$scope.users.params.page=$scope.page=number;
    $scope.list();
   }
	$scope.movePager=function(movemment){
    if(movemment==-1&&$scope.pager>0){
         $scope.pager--;
    }else if(movemment==1&&$scope.pager<$scope.pagers.length-1){
        $scope.pager++;
    }
    
    $scope.pagesPaginator=$scope.pagers[$scope.pager];
  
   }
	
	
	$scope.list= function()
	{		
		$scope.message="Cargando...";
		$scope.users.list=[];
		UserService.list_view_main($scope.users.params).success(function(data){
			 if(data.list){
				 $scope.users.list=data.list;       
		         $scope.message="Se encontraron "+data.totalItems+" registros";
		         $scope.pages= Math.ceil(data.totalItems/$scope.users.params.maxResults);
		         $scope.preparePagination($scope.pages);			         
		         $scope.pagesPaginator=$scope.pagers[0];
		         $scope.page=data.page;
		        
			 }else{
				 $scope.message="datos no encontrados";
			 }
		 });
	}
	
	
	
	$scope.select_personal=function(pnombre)
	{
		console.debug(pnombre);
		 $scope.businesssubjectid_select=0;
		
			  var i=0;
				$scope.index;
				$scope.status=false;
				while(i<$scope.employeds.list.length)
				{
					
				if($scope.employeds.list[i].businesssubject.businessname.toUpperCase()==pnombre)
					{				
			
					$scope.employed=$scope.employeds.list[i].employed;
					$scope.index= i;
					$scope.status=true;
					 $scope.businesssubjectid_select=$scope.employeds.list[i].businesssubject.id;
					 console.debug($scope.businesssubjectid_select);
					}
				i=i+1;
				}
	}
	
	$scope.Nuevo=function(){
		$scope.indicador=-1;
		$scope.user=[];
		$scope.user.rol="VENTAS";
		$scope.systemuserid=0;
		$scope.systemuserstateid=0;
		$scope.systemuserstatusid=18;
	}
	
	$scope.Anadir=function()
	{
		
		
		 var systemuser_enviar={
		    		id:$scope.systemuserid,
		    		name:$scope.user.name,
		    		password:$scope.user.password,
		    		businesssubject:{id:$scope.businesssubjectid_select}		    	
		    		}
			var params_systemuser={systemuser:systemuser_enviar};
		 UserService.savesystemuser(params_systemuser).success(function(data){	
				 var systemuserstate_enviar={
				    		id:$scope.systemuserstateid,
				    		systemuser:{id:data.id},
				    		state:{id:$scope.systemuserstatusid},
				    		atdate:$scope.user.date,
				    		comment:""	
				    		}
					var params_systemuserstate={systemuserstate:systemuserstate_enviar};
				 UserService.savesystemuserstate(params_systemuserstate).success(function(data){
					
					  var employed_enviar={
				 				 id:$scope.employed.id,
				 				 businesssubject:{id:$scope.employed.businesssubjectid},
				 				 position:$scope.user.rol,//PREGUNTAR
				 				 subsidiary:{id:$scope.employed.subsidiaryid}  				 
				 		 }
				 		
				 		 var params_employed={employed:employed_enviar};
				 		
				 		 ContributorService.saveemployed(params_employed).success(function(data){	
				 			 $scope.list();       
				 		 })
					
					 
					 
					 
				 })
			 
		 })
		 
		
		 
		 if($scope.systemuserstatusid!=17)
			 {
			$("#myModal_user").modal('toggle');
			 }

	}
	
	$scope.edit=function(item)
	{
		$scope.employed=[];
		$scope.employed=item.employed;		
		$scope.systemuserid=item.systemuser.id;
		$scope.systemuserstateid=item.systemuserstate.id;
		$scope.user.personal=item.businesssubject.businessname.toUpperCase();
		$scope.user.name=item.systemuser.name;
		$scope.businesssubjectid_select=item.businesssubject.id;
		$scope.status=true;
		$scope.user.date=item.systemuserstate.atdate;
		$scope.user.password=item.systemuser.password;
		$scope.user.rol=item.employed.position.toUpperCase();
		$scope.systemuserstatusid=18;
		$scope.indicador=1;
	}
	$scope.confirmRemove=function()
	{
		$scope.systemuserstatusid=17;
		$scope.Anadir();
	}
	
	
	$scope.load();
	$scope.list();
});