<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html ng-app="app">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ESTRUCTURA DE DESGLOSE DE TRABAJO.</title>
    <jsp:include page="../../parts/head.jsp"></jsp:include>
    <script src="resources/js/angular/project/edt/EdtController.js"></script>
         <script src="resources/js/uploadfile/jquery.uploadfile.min.js"></script>
    <link href="resources/js/uploadfile/uploadfile.css" rel="stylesheet" />
    
   <script>
var page="edt";
</script>
  <script>
var uploadWidget;

$(function(){
	var product_id=$("#product_id").val();
	
	uploadWidget=$("#fileuploader").uploadFile({
		allowedTypes:"png" ,
		url:"product/upload_product?${_csrf.parameterName}=${_csrf.token}",
		multiple:false,
		dragDrop:true,
		uploadStr:'Cargar Archivo',
		/*maxFileCount:1,*/
		dynamicFormData:function(){
			product_id=$("#product_id").val();
			var data={product_id:product_id}
			return data;
		},
		fileName:"file",
		dragDropStr: "<span><b>Arrastre y suelte un archivo PNG</b></span>",
		extErrorStr:" Extension no valida, solo admite: ",
		onSuccess:function(files,data,xhr,pd){
			//console.debug(files);
		    $("#file").val(data);
		    
		},
		onError:function(files,status,errMsg,pd){
			alert("ERROR al cargar!");
		}
		});
});
function clearuploadfile()
{
	uploadWidget.reset();
}

$('.datepicker').datepicker({
	format : 'dd/mm/yyyy',
	language : "es",
	autoclose : true,
});
</script>
</head>
<body ng-controller="EdtController">

    <div id="wrapper" >


    <nav class="navbar-default navbar-static-side" role="navigation">
        <div class="sidebar-collapse">
		<jsp:include page="../../parts/part_sidemenu_edt.jsp"></jsp:include>
        </div>
     </nav>

    <div id="page-wrapper" class="gray-bg">

        
    <!-- aca inicia el header-->
       <nav style="margin-bottom: 0" role="navigation" class="navbar navbar-fixed-top">
       <jsp:include page="../../parts/part_navbar_edt.jsp"></jsp:include>
        </nav>
      


       <div class="wrapper wrapper-content animated fadeInRight">
          
           
                <br>
                <br>
            <div class="centrar_titulo">
                <h5>Registro de Tareas</h5>
                
            </div>
            <div class="ibox-content">
            <div class="row">
            <button  class="btn btn-primary dim"  ng-click="new_register()" data-toggle="modal" data-target="#myModal" href="javascript:void(0);" >Crear Tarea</button>
			</div>
			 <div class="row">
         
            <div class="col-sm-3"> 
            <div class="ibox float-e-margins">  
                                 
               <div class="form-group" id="data_1">
                  <span>Fase</span> <br />    
                     <datalist id="product">
										<option id="{{prod.id}}" value="{{prod.name | uppercase}}" 	ng-repeat="prod in products2.list">
									</datalist>
										<input id="filterclient" type="text"											
											ng-model="product_filter" class="form-control"
											list="product" />
                     
                    </div>
                   
                    </div>
            </div>
            
              <div class="col-sm-3"> 
            <div class="ibox float-e-margins">  
                                 
               <div class="form-group" id="data_1">
                  <span>Actividad</span> <br />    
                     <datalist id="brandss">
										<option id="{{brand.id}}" value="{{brand.brand_code}} ({{brand.provider | uppercase}})" 	ng-repeat="brand in brands.list">
									</datalist>
										<input id="filterbrand" type="text"
											ng-change="select_filter()"
											ng-model="brand_filter" class="form-control"
											list="brandss" />
                     
                    </div>
                   
                    </div>
            </div>
            
              <div class="col-sm-3"> 
            <div class="ibox float-e-margins">  
                                 
               <div class="form-group" id="data_1">
                  <span>Tarea</span> <br />    
                     <datalist id="qualitiess">
										<option value="{{qualityy.objectmodel | uppercase}}" 	ng-repeat="qualityy in qualities.list">
									</datalist>
										<input id="filterclient" type="text"
										   									
											ng-model="quality_objectmodel" class="form-control"
											list="qualitiess" />
                     
                    </div>
                   
                    </div>
            </div>
             
               <div class="col-sm-3"> <br /> 
                    <button class="btn btn-primary" ng-disabled="filterbuttoninactive" title="Filtrar" ng-click="filter()">Filtrar</button>
     				<button class="btn btn-info"ng-disabled="filterbuttoninactive" ng-click="exportToExcel('#exportable')"><span class="glyphicon glyphicon-share"></span>Excel</button>
               </div>
            
            </div>
            <!-- tabla de datos -->


           <!-- Tabla del listado -->
       <div class="row"><div class="col-md-12">
       <p>{{message}}</p>
       
       <div class="table-responsive">
            
            <li ng-click="alert('item.name')" ng-repeat="item in detailsedt"><span>{{item.name}}</span>
                <ul>
                <li ng-click="alert('item2.phase.name')" ng-repeat="item2 in item.detail"><span>{{item2.phase.name}}</span>
                		<ul>
                		<li ng-click="alert('item3.name')" ng-repeat="item3 in item2.phase.detail" > <span>{{item3.name}} </span> 
                		<ul>
                		  <li ng-click="alert('item4.name')" ng-repeat="item4 in item3.detail" ><span> {{item4.name}}</span>  </li>
                		  </ul>
                		
                		
                		</li>
                		  
                		
                		</ul>
                
                </li>
                </ul>
            </li>
            
            </div>
             
</div></div>
<div class="row">
<div class="col-md-10">
    <div  id='paginator-content' >
    <div><a class='btn btn-default' ng-click='movePager(-1)' href > << </a></div>
    <div>
      <ul class="pagination">
        <li ng-repeat="i in pagesPaginator" class='{{i==page?"active":""}}'><a class="red-btn" href="#" ng-click='changePage(i)'>{{i}}</a></li>
        
      </ul>
   </div>

      <div><a class='btn btn-default' ng-click='movePager(1)' href > >> </a></div>
     </div>
</div>
</div>

            </div>
            </div>
         

        </div>




   </div>
  

       

   <div class="modal inmodal" id="modal-confirm-remove" tabindex="-1" role="dialog" aria-hidden="true" >
                                <div class="modal-dialog">
                                <div class="modal-content animated bounceInRight">
                                        <div class="modal-header">
                                            <button type="button" class="close" data-dismiss="modal" onclick='hide_modal_remove()'><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                                         
                                            
                                            <h1 class="modal-title">ELIMINAR</h1>
                                           <p>¿Realmente desea eliminar el registro?</p>   
                                        </div>
                
                              
                                          <div class="modal-footer">
                                         
                                      
					         <button type="button" class="btn btn-primary dim btnclose" data-dismiss="modal" >Cancelar</button>
					                <button type="button" id='confirm-remove-btn'   onclick="hide_modal_remove()"  ng-click='confirmRemove(product.id)' class="btn btn-primary dim"  >Confirmar</button>
					 			</div>	
							
					 			
					 			
                            </div>
                    </div>
                </div>


<div class="modal inmodal" id="myModal" tabindex="-1" role="dialog" aria-hidden="true" >
                                <div class="modal-dialog">
                                <div class="modal-content animated bounceInRight">
                                        <div class="modal-header">
                                            <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                  
                                            <h4 class="modal-title">TAREA</h4>
                                            
                                        </div>
                                        <div class="modal-body modal_scrolable">
                                        
                    
<!-- aca inicia el formulario-->

                      <div  name="formulario">
                            <form class="form-horizontal">

<!--  					<div ng-show="!newreg" id="fileuploader">Upload</div> -->
<!--   			      <input id='product_id' type='hidden' ng-model='product.id' value='{{product.id}}' /> -->
  			      
							<div class="form-group"><label class="col-sm-3 control-label" >Codigo</label>

                                    <div class="col-sm-9"><input type="text" class="form-control" ng-model="task.shortname" /></div>
                                </div>
                                   <div class="form-group"><label class="col-sm-3 control-label" >Nombre</label>

                                    <div class="col-sm-9"><input type="text" class="form-control" ng-model="task.name" /></div>
                                </div>
                                <div class="form-group"><label class="col-sm-3 control-label" >Descripcion</label>

                                    <div class="col-sm-9"><input type="text" class="form-control" ng-model="task.description" /></div>
                                </div>

                       
                                  <div class="form-group"><label class="col-sm-3 control-label" >Otras Especificaciones</label>

                                    <div class="col-sm-9"><input type="text" class="form-control" ng-model="task.comment" /></div>
                                </div>

                                 <div class="form-group"><label class="col-sm-3 control-label" >Horas Estimadas</label>

                                    <div class="col-sm-9"><input type="number" class="form-control" ng-model="task.estimatehour" /></div>
                                </div>
                                 <div class="form-group"><label class="col-sm-3 control-label" >Horas Real</label>

                                    <div class="col-sm-9"><input type="number" class="form-control" ng-model="task.realhour" /></div>
                                </div>
                                 <div class="form-group"><label class="col-sm-3 control-label" >Presupuesto Estimado</label>

                                    <div class="col-sm-9"><input type="number" class="form-control" ng-model="task.estimateamount" /></div>
                                </div>
                                 <div class="form-group"><label class="col-sm-3 control-label" >Gasto Real</label>

                                    <div class="col-sm-9"><input type="number" class="form-control" ng-model="task.realamount" /></div>
                                </div>
                                  
                                  <div  class="form-group"><label class="col-sm-3 control-label" >Actividad</label>
									<datalist id="activities_list">
									<option ng-repeat="item in activities.list" id="{{item.activity.id}}" value={{item.show}} > 
									</datalist>
                                    <div class="col-sm-9"><input id="activityy" type="text" class="form-control" ng-change="select_activity()" ng-model="task.actividad" list="activities_list"  ></div>
                                    
                                </div>
                                 
                              
                                
                                
                                
                                 

                               
                            </form>
                        </div>
                        </div>

    <!-- aca termina el formuilario -->
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-white dim btnclose" data-dismiss="modal">Cerrar</button>
                                            <button  ng-disabled="!valor()" id="btnadd" type="button"  class="btn btn-primary dim" ng-click="anadir()" >Guardar</button>
                                        </div>
                                   
                                </div>
                            </div>
                    </div>
           




<!-- aca termina el modal-->

    <!-- Mainly scripts -->
    

    <!-- Data Tables -->
   
    <!-- Page-Level Scripts -->
   

</body>

</html>
