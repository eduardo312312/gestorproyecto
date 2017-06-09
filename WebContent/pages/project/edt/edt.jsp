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
                <h2><span>Entregables y estimaciones</span></h2>
<!--                 <h2><span>Actividad: {{activity.shortname}}  {{activity.name}} </span></h2> -->
<!--                 <h3><span class="col-md-6">Fecha de Inicio: {{activity.startdate}}</span><span class="col-md-6">Fecha de Fin: {{activity.enddate}}</span></h3> -->
                
            </div>
            <div class="ibox-content">
           <div class="row">
			<div class="form-group">
            <label class="col-md-2 control-label alineacion_i">Proyecto:</label>
                                      <div class="col-md-6">  <select class="form-control m-b" ng-change="projectselect(select.project)"   ng-model="select.project">
                                             
                                        <option ng-repeat="item in listprojects.list" >{{item.name}}</option>
<!--                                        <option >***Agregar Proyecto***</option> -->
                                      
                                        </select>  </div>  
                                  
                                </div> 
                                
              </div>
            
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
            <table class="table table-striped table-bordered table-hover " id="exportable" ng-cloak>
            <thead>
            <tr>
                <th>Codigo</th>
                <th>Descripcion</th>
                <th>Revision</th>
                <th>H. ESTIMADAS</th>
                <th>H. REAL</th>
                <th>P. ESTIMADO</th> 
                <th>P. REAL</th>                 
                <th>F. INICIO</th>
                <th>F. FIN</th>
                <th>Responsable</th>
                <th>ACCION</th>
         
            
            </tr>
            </thead>
            <tbody>

            <tr ng-repeat="item in tasks.list ">
                <!--<td> <img  src={{product.path_image}} alt="Logo Viento Sur" height="30" width="30"/> </td>-->
               <td>{{ item.shortname }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.description }}</td>
                <td>{{ item.estimatehour }} </td>
                <td>{{ item.realhour }} </td>
                <td>{{ item.estimateamount }} </td>
                <td>{{ item.realamount }} </td>
                <td>{{ item.startdate | date:'dd/MM/yyyy'}} </td>
                <td>{{ item.enddate | date:'dd/MM/yyyy'}} </td>                
                <td>{{item.responsable}}</td>
<!--                 <td>{{ item.enddate | date:'dd/MM/yyyy'}} </td> -->
     
                <td class="center">
<!--                	    <button title="Propiedades" type="button" ng-click="new_asign_properties(product.id)"  data-toggle="modal" data-target="#modal-product-properties" class="btn btn-success btn-sm"><i class="fa fa-sort-amount-asc"></i></button> -->
                    <button title="Editar" type="button" ng-click="edit(item)"  data-toggle="modal" data-target="#myModal" class="btn btn-warning btn-sm" onclick="clearuploadfile()"><i class="fa fa-edit"></i></button>
                    <button title="Eliminar"  type="button"  ng-click="edit(item)" onclick='question_remove()' class="btn btn-danger btn-sm" href><i class="fa fa-trash-o"></i></button>
              
                </td>
                
            </tr>
            
            </tbody>
    
            </table>
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
                                    <div class="col-sm-9"><input ng-disabled="true"  id="activityy" type="text" class="form-control" ng-change="select_activity()" ng-model="task.actividad" list="activities_list"  ></div>
                                    
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
