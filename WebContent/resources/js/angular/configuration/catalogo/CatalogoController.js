app.controller('CatalogoController', function($scope,CatalogoService) {
	
	$scope.list_catalogo=[];
	
	$scope.load=function()
	{
		CatalogoService.list().success(
				function(data)
				{
					$scope.list_catalogo=data;
					
					for(var i=0;i<$scope.list_catalogo.list.length;i++)
						{
						if($scope.list_catalogo.list[i].stateid==18)
							{
							$scope.list_catalogo.list[i].status=1;
							}else
								{
								$scope.list_catalogo.list[i].status=0;
								}
				     	}					
				
					
				}				
		)
		
	}
	
	$scope.change_catalogo=function(status,id,index){
	var stateid;
	if(document.getElementById("c"+$scope.list_catalogo.list[index].id).checked==1)
		{
			stateid=18;	
		}else
			{
			stateid=17;	
			}
			//$scope.list_catalogo.list[index].stateid=stateid;
		
			
	var catalogo_enviar={id:$scope.list_catalogo.list[index].id,
		name:$scope.list_catalogo.list[index].name,
		description:$scope.list_catalogo.list[index].description,
		state:{id:stateid}
					}

		CatalogoService.save({catalogo:catalogo_enviar}).success(function(data){
		
		});
	}
	
	
	$scope.load();
});