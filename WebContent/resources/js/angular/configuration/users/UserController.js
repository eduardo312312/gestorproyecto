
app.controller('UserController', function ($scope,ProjectService) {
	
	$scope.employeds={list:[]};
	$scope.page=1;
	$scope.pagesPaginator=null;//paginador de paginador
	$scope.pager=0;//paginador del paginador
	$scope.users={list:[],params:{page:$scope.page, maxResults:20}};
	$scope.user=[];
	
	$scope.indicador=0;
	
	$scope.employees={list:[],params:{page:$scope.page, maxResults:9999}};
	$scope.employee=[];
	
	$scope.employed=[];
	
	
	
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
		$scope.users.list=[];
		$scope.message="Cargando...";

		ProjectService.systemuser_list_view_main($scope.users.params).success(function(data){
			if(data.list){			 
				$scope.users.list=data.list;
				//console.log($scope.employees.list)
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
	
	$scope.valor=function()
	{	var valor=false;
		if($scope.user.login!="" && $scope.user.login!=null &&
		   $scope.user.password!="" && $scope.user.password!=null &&
		   $scope.user.businesssubjectname!="" && $scope.user.businesssubjectname!=null &&
		   $scope.user.businessubjectid!=0 && $scope.user.businessubjectid!=null &&
		   $scope.user.comment!="" && $scope.user.comment!=null)
			{
			valor=true;
			}
			return valor;			
	}
	
	$scope.select_personal=function()
	{
		$scope.user.businessubjectid=0;
		        var x = $('#employeeeee2').val();
	            var z = $('#employees_list2');
	            var val = $(z).find('option[value="' + x + '"]');
	            var endval = val.attr('id');
	            if(endval)
	            	$scope.user.businessubjectid=endval ;  
	            
	           console.log(endval);
//	           console.log(endval.substring(1) );
      
	}
	
	$scope.Nuevo=function(){
		$scope.user=[];
		$scope.user.stateid=1;
		$scope.user.id=0;
		$scope.newreg=true;
	}
	
	$scope.edit=function(item)
	{
	    $scope.user=[];
		
	    $scope.user.id=item.systemuser.id;
		$scope.user.businesssubjectname=item.systemuser.businesssubjectname;
		$scope.user.businessubjectid=item.systemuser.businesssubjectid;
		$scope.user.login=item.systemuser.login;
		$scope.user.password=item.systemuser.password;
		$scope.user.comment=item.systemuser.comment;
		$scope.user.stateid=item.systemuser.stateid;
		
		$scope.newreg=false;
		console.debug($scope.employee);
	}
	
	$scope.confirmRemove=function()
	{
		$scope.user.stateid=2;
		$scope.Anadir();
	}
	
	$scope.Anadir=function()
	{
		
		
		 var systemuser_enviar={
		    		id:$scope.user.id,
		    		login:$scope.user.login,
		    		password:$scope.user.password,
		    		createdate:new Date(),
		    		businessubject:{id:$scope.user.businessubjectid},
		    		state:{id:$scope.user.stateid},
		    		updateat:new Date(),
		    		comment:$scope.user.comment		    	
		    		}
			var params_systemuser={systemuser:systemuser_enviar};
	
		 	ProjectService.save_systemuser(params_systemuser).success(function(data){	
				 			 $scope.list();       
				 		 })
					
		

	}
	
	
	
	$scope.load = function() {
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
	
	
	$scope.load();
	
	$scope.list();
	
});