
app.controller('ProductControllerb', function ($scope,ProductBService,ProductService) {

$scope.page=1;
$scope.pagesPaginator=null;//paginador de paginador
$scope.pager=0;//paginador del paginador
$scope.products={list:[],params:{page:$scope.page, maxResults:20,productname:'',basicobjecttype:'Productos'}};

$scope.products2={list:[],params:{page:1, maxResults:99999, basicobjecttype:'Productos'}};//para el datalist
$scope.product={id:0, name:"", photo:{id:1}};
$scope.indedit={estado:false};
$scope.paginador=null;
$scope.qualities={list:[]};

$scope.list=function()
{
	$scope.products.list=[];
	$scope.message="Cargando...";

	ProductBService.list($scope.products.params).success(function(data){
		 if(data.list){			 
			 $scope.products.list=data.list;
			 $scope.message="Se encontraron "+data.totalItems+" registros";	      
	         $scope.pages= Math.ceil(data.totalItems/$scope.products.params.maxResults); 
	         $scope.preparePagination($scope.pages); 
	         $scope.pagesPaginator=$scope.pagers[0];         
	         $scope.page=data.page;	      
	        
		 }else{
			 $scope.message="datos no encontrados";
		 }
	 });	
}
$scope.load=function()
{
	ProductBService.list($scope.products2.params).success(function(data){
		$scope.products2.list=data.list;
	});
}
$scope.filter=function(productname)
{
$scope.products.params.productname=productname.toUpperCase();
$scope.list();
}
	$scope.anadir=function(){

		var params={productb:$scope.product};
		ProductBService.save(params).success(function(data){
		if($scope.indexselected==-1)
			{
			var prod={id:0, name:"", photo:{id:1}}
			prod.id=data.id;
			prod.name=data.name;
			prod.photo.id=data.photo.id;
			
			$scope.products.list.push(prod);
			 $scope.list();
			
			}else
				{
				$scope.products.list[$scope.indexselected]=data;
				 $scope.list();
				 
				}
		
		});
		
		
		
		
	}
	$scope.add_quality=function(quality)
	{
		
		 var brandobject_enviar={
				 id:0,
				 brand:{id:1},
				 basicobject:{id:$scope.product.id},
				   				 
		 }
		 var params_brandobject={brandobject:brandobject_enviar};
		 ProductService.save_brandobject(params_brandobject).success(function(data){
					 var objectmodel_enviar={
							 id:0,
							 name:quality,
							 description:quality,
							 brandobject:{id:data.id},	
					 	     photo:{id:1}
							   				 
					 }
					 var params_objectmodel={objectmodel:objectmodel_enviar};
				     ProductService.save_objectmodel(params_objectmodel).success(function(data){
				    	 $scope.list_qualities($scope.product.id);
				    	 //$scope.qualities
				     })
		 })
		 $scope.quality="";
	}
	$scope.list_qualities=function(basicobjectid)
	{
		   ProductBService.list_qualities({basicobjectid:basicobjectid}).success(function(data){
			   $scope.qualities.list=data.list; 
	         })
	}
	
	$scope.nuevo=function(){
	
		$scope.status_edit=false;
		$scope.indedit.estado=false;
		console.debug($scope.indedit.estado);
		$scope.product={id:0, status:1, name:"", photo:{id:1},basicobjecttypeid:1}
		$scope.indexselected=-1;
		
	}


$scope.edit=function(id){
	
	$scope.status_edit=true;
	 $scope.qualities.list=[]; 
	 $scope.list_qualities(id);
	$scope.indedit.estado=true;
	console.debug($scope.indedit.estado);
	$scope.product={id:0, name:"", status:1, photo:{id:1},basicobjecttypeid:1}

		var index=$scope.getSelectedIndex(id);
		
		$scope.indexselected=index;
		
		$scope.product.id=$scope.products.list[$scope.indexselected].id;
		$scope.product.name=$scope.products.list[$scope.indexselected].name;
	
		console.debug($scope.product);
		
	}


$scope.getSelectedIndex = function(id) 
{

for(var i=0; i<$scope.products.list.length;i++)
{if($scope.products.list[i].id==id)
	{
    return i;
	}
}
}

$scope.confirmRemove=function(id){
	console.debug(id);
	ProductBService.remove($scope.product.id).success(function(data){
	var index=$scope.getSelectedIndex(id); 
		$scope.products.list.splice(index,1);
		 $scope.list();
	
});
}
	

$scope.remove=function(brandobjectid,objectmodelid)
{
	ProductBService.remove_obj_brand({brandobjectid:brandobjectid,objectmodelid:objectmodelid}).success(function(data){
		$scope.list_qualities($scope.product.id);
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
		
		$scope.products.params.page=$scope.page=number;
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
//
//$scope.inicio(null);
//
//
	$scope.load();
	
//	$scope.list_qualities(7);
	$scope.exportToExcel=function(tableId){ // ex: '#my-table'
	    $scope.excel(tableId);
	}


});

