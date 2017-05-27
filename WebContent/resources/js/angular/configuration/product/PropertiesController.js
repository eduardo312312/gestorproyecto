
app.controller('PropertiesController', function ($scope,PropertiesService) {
//ProductBService,ProductServic,
$scope.page=1;
$scope.pagesPaginator=null;//paginador de paginador
$scope.pager=0;//paginador del paginador


$scope.property2={list:[],params:{page:1, maxResults:99999, property:''}};//para el datalist
$scope.properties={list:[],params:{page:1, maxResults:20, property:''}};//para el datalist

$scope.property=[];
$scope.property.name='';
$scope.property.description='';

$scope.product={id:0, name:"", photo:{id:1}};
$scope.indedit={estado:false};

$scope.values={list:[]};

$scope.list=function()
{
	$scope.properties.list=[];
	$scope.message="Cargando...";

	PropertiesService.list($scope.properties.params).success(function(data){
		 if(data.list){			 
			 $scope.properties.list=data.list;
			 $scope.message="Se encontraron "+data.totalItems+" registros";	      
	         $scope.pages= Math.ceil(data.totalItems/$scope.properties.params.maxResults); 
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
	
	
	PropertiesService.list($scope.property2.params).success(function(data){
		$scope.property2.list=data.list;
	});
	
	
}
$scope.filter=function(productname)
{
$scope.products.params.productname=productname.toUpperCase();
$scope.list();
}

	$scope.SaveProperties=function(){
		
		
		var propertyid=0;
		
		if($scope.indicator==1)
		{
			propertyid=$scope.item.id;
		}

		var property_enviar={
				 id:propertyid,
				 name:$scope.property.name,
				 description:$scope.property.description,
				 regexp:'1'
		 }
		 var params_property={property:property_enviar};
		PropertiesService.save(params_property).success(function(data){
			
			 if($scope.indicator==-1)
			 {
			 for(var i=0;i<$scope.property2.list.length;i++)
				 {
				 
					$scope.save_propertyvalue(data.id,$scope.property2.list[i].propertyvalue.value);
				 
				 }				 
			 }
			 $scope.list();
		 });
		
	}
		 

	$scope.valor=function()
	{
		var valor=true;
		if($scope.property.name.length>0 && $scope.property.description.length>0 && $scope.property2.list.length>0 )
			{
			valor=false;
			}
		return valor;
	}
	$scope.save_propertyvalue=function(propertyid,propertyvalue)
	{
		var propertyvalue_enviar={
				 id:0,
				 property:{id:propertyid},
				 value:propertyvalue
				   				 
		   }
		  var params_propertyvalue={propertyvalue:propertyvalue_enviar};
		 
		 PropertiesService.save_propertyvalue(params_propertyvalue).success(function(data){
			 
			 PropertiesService.list_propertyvalues({page:1, maxResults:99999, propertyid:propertyid}).success(function(data){
					$scope.property2.list=data.list;
				});
		 });
	}
	$scope.add_propertyvalue=function()
	{
		if($scope.indicator==1)
			{
		
			$scope.save_propertyvalue($scope.item.id,$scope.propertyvalue);
		
		  }else
			  {
//			  var propertyvalue_enviar={
//						 id:0,
//						 property:{id:$scope.item.id},
//						 value:$scope.propertyvalue
//						   				 
//				 }	
			  $scope.property2.list.push({propertyvalue:{value:$scope.propertyvalue}});
			  console.debug( $scope.property2.list);
			  }
		  
		$scope.propertyvalue='';
				 
	}
	
//	$scope.list_qualities=function(basicobjectid)
//	{
//		   ProductBService.list_qualities({basicobjectid:basicobjectid}).success(function(data){
//			   $scope.qualities.list=data.list; 
//	         })
//	}
	
	$scope.new_property=function(){
	
//		$scope.status_edit=false;
//		$scope.indedit.estado=false;
//		console.debug($scope.indedit.estado);
//		$scope.product={id:0, status:1, name:"", photo:{id:1},basicobjecttypeid:1}
//		$scope.indexselected=-1;
		
		$scope.indicator=-1;
		$scope.property=[];
		$scope.property.name='';
		$scope.property.description='';
		$scope.propertyvalue='';
		$scope.property2.list=[];
		
	}


$scope.edit=function(item){
	
	
	$scope.property=[];
	$scope.property2.list=[];

	$scope.indicator=1;
	$scope.item=item;
	$scope.values.list=[]
	
	$scope.property.name=item.name.toUpperCase();
	$scope.property.description=item.description.toUpperCase();
	$scope.propertyvalue='';
	
	PropertiesService.list_propertyvalues({page:1, maxResults:99999, propertyid:item.id}).success(function(data){
		$scope.property2.list=data.list;
	});
	
//	$scope.status_edit=true;
//	 $scope.qualities.list=[]; 
//	 $scope.list_qualities(id);
//	$scope.indedit.estado=true;
//	console.debug($scope.indedit.estado);
//	$scope.product={id:0, name:"", status:1, photo:{id:1},basicobjecttypeid:1}
//
//		var index=$scope.getSelectedIndex(id);
//		
//		$scope.indexselected=index;
//		
//		$scope.product.id=$scope.products.list[$scope.indexselected].id;
//		$scope.product.name=$scope.products.list[$scope.indexselected].name;
//	
//		console.debug($scope.product);
		
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

$scope.confirmRemove=function(){
	
	var property_enviar={
			 id:$scope.item.id,
			 name:$scope.item.name,
			 description:$scope.item.description,
			 regexp:'0'
	 }
	 var params_property={property:property_enviar};
	PropertiesService.save(params_property).success(function(data){
		$scope.list();
	});
	
}
	

$scope.remove=function(index)
{
	if($scope.indicator==-1)
		{
		$scope.property2.list.splice(index,1);
		
		
		}
	else
		{
		if($scope.indicator==1)
		{
			PropertiesService.remove_propertyvalue({propertyvalueid:$scope.property2.list[index].propertyvalue.id}).success(function(data){
				PropertiesService.list_propertyvalues({page:1, maxResults:99999, propertyid:$scope.item.id}).success(function(data){
					$scope.property2.list=data.list;
				});
			});
		}
			
			
		}
	
	
	
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

	$scope.load();
	
	
	$scope.exportToExcel=function(tableId){ // ex: '#my-table'
	    $scope.excel(tableId);
	}


});

