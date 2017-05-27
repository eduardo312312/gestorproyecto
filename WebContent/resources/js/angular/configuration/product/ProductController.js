app.controller('ProductController', function ($scope,ProductService,ProductBService,PropertiesService) {


$scope.id_modificar=-1;   

$scope.qualities={list:[]};
$scope.businessobjectid_edit=0;
$scope.objectmodel_edit=0;
$scope.presentationcontainer_edit=0;
$scope.pricesellid_edit=0;
$scope.transportsellid_edit=0;
$scope.brandobjid_edit=0;
$scope.quality_edit="";
$scope.quality_objectmodel='';
$scope.product_filter='';

$scope.product=[];
$scope.product.description='';

$scope.property2={list:[]};//para el datalist


$scope.filter=[];

$scope.brandid_select=0;
$scope.containerid_select=0;
$scope.productbasicid_select=0;




$scope.page=1;
$scope.pagesPaginator=null;//paginador de paginador
$scope.pager=0;//paginador del paginador
$scope.products={list:[],params:{page:1, maxResults:20, productname:'',brandid:'',quality:''}};
$scope.brands={list:[],params:{page:$scope.page, maxResults:9999}};
$scope.basic_products={list:[],params:{page:$scope.page, maxResults:9999}};
$scope.containers={list:[],params:{page:$scope.page, maxResults:9999}};
$scope.products2={list:[],params:{page:1, maxResults:99999, basicobjecttype:'Productos'}};//para el datalist
$scope.qualities={list:[]};

$scope.numero=0;



 $scope.closeModal = function(){
       $modalInstance.close();
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
	$scope.movePager=function(movemment)
	
	{
     if(movemment==-1&&$scope.pager>0){
          $scope.pager--;
     }else if(movemment==1&&$scope.pager<$scope.pagers.length-1){
         $scope.pager++;
     }
     
     $scope.pagesPaginator=$scope.pagers[$scope.pager];
     console.debug($scope.pagesPaginator);
     }
	
	
	$scope.valor=function()
	{
	
		
		var valor=false;
		if($scope.modelid_select>0 && $scope.productbasicid_select>0 && $scope.brandid_select>0 && 	$scope.containerid_select>0 && $scope.product.price>=0 && $scope.product.sell_price>=0 && $scope.product.description.length>0 )
			{
			valor=true;
			}
			return valor;			
	}
	
	$scope.select_filter=function()
	{
		 $scope.filter.brandid="";
		        var x = $('#filterbrand').val();
	            var z = $('#brandss');
	            var val = $(z).find('option[value="' + x + '"]');
	            var endval = val.attr('id');
	            if(endval)
	            $scope.filter.brandid=endval;            
   
	}	
	
	$scope.select_model=function()
	{
		 $scope.modelid_select=0;
		        var x = $('#modelo').val();
	            var z = $('#qualities_list');
	            var val = $(z).find('option[value="' + x + '"]');
	            var endval = val.attr('id');
	            if(endval)
	            $scope.modelid_select=endval;  
//	            alert(endval);
      
	}	
	

	$scope.filter=function()
	{
		$scope.products.params.productname='';
		$scope.products.params.brandid='';
		$scope.products.params.quality='';
		
		if($scope.product_filter!="")
		$scope.products.params.productname=$scope.product_filter.toUpperCase();
		
		if($scope.filter.brandid!="")
		$scope.products.params.brandid= $scope.filter.brandid;
		
		if($scope.filter.brandid=="")
		$scope.products.params.brandid='';
		
		if($scope.quality_objectmodel!="")
		$scope.products.params.quality=$scope.quality_objectmodel.toUpperCase();
		
		
		
		$scope.list();
	}
	
	$scope.new_asign_properties=function(businessobjectid)
	{
		$scope.businessobjectpropertyvalues=[]
		$scope.clean_detailorder_properties();
		$scope.businessobjectid=businessobjectid;
		
		PropertiesService.list_businessobjectpropertyvalue({businessobjectpropertyvalueid:businessobjectid}).success(function(data){
			$scope.businessobjectpropertyvalues.list=data.list;
			for(var j=0;j<data.list.length;j++)
			{
				console.debug(data.list[j].propertyvalueid);
			document.getElementById('pv'+data.list[j].propertyvalueid).checked=1;

			}
		});
		
		
	}
	
	$scope.checked_changed=function(propertyvalueid)
	{
		var index=0;
		for(var i=0;i<$scope.businessobjectpropertyvalues.list.length;i++)
			{
			if(propertyvalueid==$scope.businessobjectpropertyvalues.list[i].propertyvalueid)
				{
				index=i;
				}
			}
			
		if(document.getElementById('pv'+propertyvalueid).checked==0)//si desactivo elimino
			{
			
			PropertiesService.remove_businessobjectpropertyvalue({businessobjectpropertyvalueid:$scope.businessobjectpropertyvalues.list[index].id}).success(function(data){
				
			});			
				
			}
			
			
			else
				{
				if(document.getElementById('pv'+propertyvalueid).checked==1)//si activo creo
				{	
					PropertiesService.save_businessobjectpropertyvalue({businessobjectpropertyvalue:
						{id:0,
						 businessobject:{id:$scope.businessobjectid},
					     propertyvalue:{id:propertyvalueid}						
						}						
					}).success(function(data){
						
					});
				}
				
				}
		
//		console.debug(document.getElementById('pv'+propertyvalueid).checked);
	}
	
	$scope.clean_detailorder_properties=function()
	{
		for(var i=0; i<$scope.property2.list.length;i++)
			{
			for(var j=0;j<$scope.property2.list[i].property.propertyvalues.length;j++)
				{

				document.getElementById('pv'+$scope.property2.list[i].property.propertyvalues[j].propertyvalue.id).checked=0;

				}
			}
		
	}

	
	
	$scope.load=function()
	{
		PropertiesService.list_propertyvalues_asign({abcd:'1234'}).success(function(data){
			$scope.property2.list=data.list;
		});
		
		
		ProductBService.list($scope.products2.params).success(function(data){
			$scope.products2.list=data.list;
			$scope.basic_products.list=data.list;
		});
		ProductService.list_brands($scope.brands.params).success(function(data){
			$scope.brands.list=data.list;
		});

     	ProductService.list_containers($scope.containers.params).success(function(data){
			$scope.containers.list=data.list;
		});
     	ProductBService.list_distinct_qualities({abcd:'1234'}).success(function(data){
			$scope.qualities.list=data.list;
		});
     	
	}
	
	$scope.list_qualities=function(basicobjectid)
	{
		$scope.qualities=[];
		   ProductBService.list_qualities({basicobjectid:basicobjectid}).success(function(data){
			   $scope.qualities.list=data.list; 
	         })
	};
	
	$scope.list=function(){		
		$scope.message="Cargando...";
		$scope.products.list=[];	
		ProductService.list($scope.products.params).success(function(data){
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

	
	$scope.select_basicobj=function(pobj)
	{
		$scope.qualities=[];
		var minuscula= pobj.toLowerCase();            
		console.debug(minuscula);
		for (var i = 0; i < $scope.basic_products.list.length; i++) {			
	        var comparar=$scope.basic_products.list[i].name.toLowerCase();	    
			if (comparar == minuscula) {
				$scope.productbasicid_select = $scope.basic_products.list[i].id;	
				$scope.list_qualities($scope.productbasicid_select);
//				alert($scope.productbasicid_select);
			}

		}
		console.debug($scope.productbasicid_select);

	}
	$scope.select_container=function(pcontainer)
	{
		$scope.containerid_select=0;
		var minuscula= pcontainer.toLowerCase();            
		console.debug(minuscula);
		for (var i = 0; i < $scope.containers.list.length; i++) {			
	        var comparar=$scope.containers.list[i].name.toLowerCase();	    
			if (comparar == minuscula) {
				$scope.containerid_select = $scope.containers.list[i].id;			
			}

		}
		console.debug($scope.containerid_select);

	}
	$scope.select_brand=function(pbrand)
	{
		$scope.brandid_select=0;
		var minuscula= pbrand.toLowerCase();
		for (var i = 0; i < $scope.brands.list.length; i++) {			
	        var comparar=$scope.brands.list[i].provider.toLowerCase()+"("+$scope.brands.list[i].brand_code.toLowerCase()+")";	
	        
	        if (comparar == minuscula) {
				$scope.brandid_select = $scope.brands.list[i].id;				
			}

		}
		console.debug($scope.brandid_select);

	}
	
	$scope.save_objmodel_businesobj_valuedbusobj=function(quality,objectmodelid,businessobjectid,brandobjectid,valuedbusinessobjectid_sell,valuedbusinessobjectid_transport,valuedbusinessobjectid_exchange)
	{
		var require_preparation;
		var classificationcatalog;
		if($scope.product.preparation==true)//no requiere preparacion
		{
			 require_preparation=1;
		}else
			{
			 require_preparation=0;
			}
		var state=18;
		if($scope.product.status=="Inactivo")
			{
			state=17;
			}
	  
		
		             
					 var objectmodel_enviar={
							 id:objectmodelid,
							 name:quality,
							 description:quality,
							 brandobject:{id:brandobjectid},	
					 	     photo:{id:1}
							   				 
					 }
					 var sellpriceid=0;
					 var transportpriceid=0;
					 var exchangepriceid=0;
					 
					 if($scope.id_modificar!=-1)
						 {
						 sellpriceid=valuedbusinessobjectid_sell;
						 transportpriceid=valuedbusinessobjectid_transport;
						 if(valuedbusinessobjectid_exchange!=null)						
							 exchangepriceid=valuedbusinessobjectid_exchange;
						 
						 }
					 
					 
					 var params_objectmodel={objectmodel:objectmodel_enviar};
				     ProductService.save_objectmodel(params_objectmodel).success(function(data){
				    	 
				    	 
									 var businessobject_enviar={
											 id:businessobjectid,
											 name:$scope.product.name.toUpperCase(),
											 measureunit:{id:2},
											 presentationcontainer:{id:$scope.containerid_select},
											 measureunit:{id:2},					
											 objectmodel:{id:data.id},
											 photo:{id:1},
											 iscurrent:1,
											 properties:$scope.product.description,
											 requirepreparation:require_preparation,
											 classificationcatalog:$scope.product.classification,
											 title:$scope.product.title,
										     state:{id:state}
												 
									 }
									 var params_businessobject={businessobject:businessobject_enviar};
									 ProductService.save_businessobject(params_businessobject).success(function(data){
										 
										 
										 var params_objectmodel={objectmodel:objectmodel_enviar};
									 
														 var valued_enviar={
																 id:sellpriceid,
																 businessobject:{id:data.id},
																 amount:$scope.product.price,
																 rate:{id:1},//precio de compra
																 fromtime:new Date(),					
																 totime:new Date(),
																 modificationdate:new Date(),
																
														 }
														 var params_businessobject={valuedbusinessobj:valued_enviar};
														 ProductService.save_valuedbusinessobject(params_businessobject).success(function(data){
															 
															 
														 })
														  var valued_enviar={
																 id:transportpriceid,
																 businessobject:{id:data.id},
																 amount:$scope.product.sell_price,
																 rate:{id:2},//precio de venta
																 fromtime:new Date(),					
																 totime:new Date(),
																 modificationdate:new Date(),
																
														 }
														 var params_businessobject={valuedbusinessobj:valued_enviar};
														 ProductService.save_valuedbusinessobject(params_businessobject).success(function(data){
															 
//															 $scope.list($scope.pagesPaginator);
														 })
														 
														 var valued_enviar={
																 id:exchangepriceid,
																 businessobject:{id:data.id},
																 amount:$scope.product.exchange_price,
																 rate:{id:8},//precio de venta
																 fromtime:new Date(),					
																 totime:new Date(),
																 modificationdate:new Date(),
																
														 }
														 var params_businessobject={valuedbusinessobj:valued_enviar};
														 ProductService.save_valuedbusinessobject(params_businessobject).success(function(data){
															 
															 $scope.list($scope.pagesPaginator);
														 })
										 
										     
										 
									 })//fin de business
								     
					 })//fin de objectmodel
					 	
		
	}
	
$scope.Anadir=function () {
	
	var brandobjid=0;
	var objectmodelid=0;
	var businessobjectid=0;
	
	//idmodificar es el businessobjectid
	if($scope.id_modificar != -1)
		{
		//brandobjid=$scope.id_modificar;
		
		$scope.select_brand($scope.product.brand);
		$scope.select_basicobj($scope.product.name);
		$scope.select_container($scope.product.measure);	
	     brandobjid=$scope.brandobjid_edit;
	     objectmodelid=$scope.objectmodel_edit;
	     businessobjectid=$scope.businessobjectid_edit;
		}

				 
					 
			    if($scope.id_modificar==-1)
			        {
			    	 var brandobject_enviar={
							 id:brandobjid,
							 brand:{id:$scope.brandid_select},
							 basicobject:{id:$scope.productbasicid_select},
							   				 
					 }
					 
					 var params_brandobject={brandobject:brandobject_enviar};
					 ProductService.save_brandobject(params_brandobject).success(function(data){
						//SUPER PRIMERA EXTRA BOLA MANCHADO
						 var brandobjid=data.id;
						 ProductBService.list_qualities({basicobjectid:$scope.productbasicid_select}).success(function(data){
							   $scope.qualities.list=data.list; 
							   for(var i=0;i< $scope.qualities.list.length;i++)
								 {
								   if($scope.qualities.list[i].objectmodel.id==$scope.modelid_select)
									   {
									   $scope.save_objmodel_businesobj_valuedbusobj($scope.qualities.list[i].objectmodel.name,objectmodelid,businessobjectid,brandobjid);
									   }
								 }
					         });
						 
						

					 }) //fin de brandobject
					 $scope.list($scope.pagesPaginator); 
				    
			        }
			        else
			        {
//			        	console.debug("paso por else");
			        	  $scope.save_objmodel_businesobj_valuedbusobj( $scope.product.model,$scope.objectmodel_edit,$scope.businessobjectid_edit,brandobjid,$scope.pricesellid_edit,$scope.transportsellid_edit,$scope.exchangeid_edit);               
			        	  $scope.list($scope.pagesPaginator); 
			        				        	
			        }
    
								
	 		

	 
	 
        }
        ;

        





$scope.delete=function(id)
{
var result=confirm('Estas Seguro?');
if(result==true)
{var index=$scope.getSelectedIndex(id);
$scope.products.splice(index,1);
}
};


$scope.confirmRemove=function(id){
	ProductService.remove($scope.businessobjectid_edit).success(function(data){
		  $scope.list($scope.pagesPaginator); 
	});
}

$scope.edit = function(id) { 


	$scope.product=[];	
	$scope.product.id=id;
	console.debug("el id es"+$scope.product.id);
	$scope.statusedit=true;	
	 $scope.id_modificar=id;//es el businessobjectid	
	ProductService.list_search(id).success(function(data){

		
		
		 $scope.product.name=data.list[0].product;
		 $scope.product.description=data.list[0].description;
		 $scope.product.price=data.list[0].buyprice;
		 $scope.product.exchange_price=data.list[0].exchangeprice;
		 $scope.product.sell_price=data.list[0].sellprice;
		 $scope.product.quality=data.list[0].quality;
		 $scope.product.model=data.list[0].quality;
		 $scope.product.title=data.list[0].title;
		 
		 $scope.product.status="Activo";
		 if(data.list[0].stateid==17)
			{
			 $scope.product.status="Inactivo";
			}		 
		
		 
		 if(data.list[0].requirepreparation==0)
			 {
		 $scope.product.preparation=false;
			 }else
				 {
				 $scope.product.preparation=true;
				 }
		 $scope.product.classification=data.list[0].classificationcatalog;
		 
		 $scope.select_basicobj($scope.product.name);
		 $scope.list_qualities($scope.productbasicid_select);
		 $scope.modelid_select=data.list[0].objectmodelid;
		 $scope.containerid_select=data.list[0].presentationid;
			
		 
		 
		if(data.list[0].provider==null)
			{
			 $scope.product.brand= data.list[0].brand;
			}else
				{
		 $scope.product.brand=data.list[0].provider+"("+data.list[0].brand+")";		
		 $scope.select_brand( $scope.product.brand);
				}
		
		 $scope.product.measure=data.list[0].presentation;
		 
		 $scope.quality_edit=data.list[0].quality;
		 $scope.sellprice_edit=data.list[0].sellprice;
		$scope.pricetransport_edit=data.list[0].transportprice;
		$scope.businessobjectid_edit=data.list[0].busid;
		$scope.objectmodel_edit=data.list[0].objectmodelid;
		$scope.presentationcontainer_edit=data.list[0].transportpriceid;
		$scope.pricesellid_edit=data.list[0].sellpriceid;
		$scope.transportsellid_edit=data.list[0].transportpriceid;
		$scope.exchangeid_edit=data.list[0].exchangepriceid;
		
		$scope.brandobjid_edit=data.list[0].brandobjid;
		
	
	
	
	});

}

$scope.nuevo = function() { 
	$scope.statusedit=false;
	var vnumero=$scope.products.length+1;
	$scope.product=[];
	$scope.product.status="Activo";
	$scope.product.description=''; 
    $scope.product.price=0;
    $scope.product.sell_price=0;
    $scope.id_modificar=-1;
    $scope.product.preparation=true;

$scope.numero=vnumero;


    console.debug(vnumero);

}

$scope.closemodal = function() {
    if($scope.id_modificar>=0)
    {
    
    }
   
};


$scope.getSelectedIndex = function(id) {
{

for(var i=0; i<$scope.products.list.length;i++)
if($scope.products.list[i].id==id)
    return i;

}}

$scope.exportToExcel=function(tableId){ // ex: '#my-table'
    $scope.excel(tableId);
}
$scope.myFilter = function (item) { 
    return name === 'Tomate' || name === 'Pera'; 
};

$scope.list();
$scope.load();
//pegar aqui
 
});

