<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html ng-app="app">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MATRIZ DE RIESGO</title>
    <jsp:include page="../../parts/head.jsp"></jsp:include>
    <script src="resources/js/angular/project/riskmatrix/RiskMatrixController.js"></script>
         <script src="resources/js/uploadfile/jquery.uploadfile.min.js"></script>
    <link href="resources/js/uploadfile/uploadfile.css" rel="stylesheet" />
    
   <script>
var page="matrix";
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
<body ng-controller="RiskMatrixController">

    <div id="wrapper" >


    <nav class="navbar-default navbar-static-side" role="navigation">
        <div class="sidebar-collapse">
		<jsp:include page="../../parts/part_sidemenu_commerce.jsp"></jsp:include>
        </div>
     </nav>

    <div id="page-wrapper" class="gray-bg">

        
    <!-- aca inicia el header-->
       <nav style="margin-bottom: 0" role="navigation" class="navbar navbar-fixed-top">
       <jsp:include page="../../parts/part_navbar.jsp"></jsp:include>
        </nav>
      


       <div class="wrapper wrapper-content animated fadeInRight">
          
           
                <br>
                <br>
            <div class="centrar_titulo">
                <h5>Registro de Riesgos</h5>
                
            </div>
            <div class="ibox-content">
            <div class="row">
            <button  class="btn btn-primary dim"  ng-click="new_register()" data-toggle="modal" data-target="#myModal"  >Nuevo</button>
			</div>
<!-- 			 <div class="row"> -->
         
<!--             <div class="col-sm-4">  -->
<!--             <div class="ibox float-e-margins">   -->
                                 
<!--                <div class="form-group" id="data_1"> -->
<!--                   <span>Equipo</span> <br />     -->
<!--                      <datalist id="product"> -->
<!-- 										<option id="{{prod.id}}" value="{{prod.name | uppercase}}" 	ng-repeat="prod in products2.list"> -->
<!-- 									</datalist> -->
<!-- 										<input id="filterclient" type="text"											 -->
<!-- 											ng-model="product_filter" class="form-control" -->
<!-- 											list="product" /> -->
                     
<!--                     </div> -->
                   
<!--                     </div> -->
<!--             </div> -->
            
             
             
<!--                <div class="col-sm-3"> <br />  -->
<!--                     <button class="btn btn-primary" ng-disabled="filterbuttoninactive" title="Filtrar" ng-click="filter()">Filtrar</button> -->
<!--      				<button class="btn btn-info"ng-disabled="filterbuttoninactive" ng-click="exportToExcel('#exportable')"><span class="glyphicon glyphicon-share"></span>Excel</button> -->
<!--                </div> -->
            
<!--             </div> -->
            <!-- tabla de datos -->


           <!-- Tabla del listado -->
       <div class="row"><div class="col-md-12">
       <p>{{message}}</p>
       
       <div class="table-responsive">
            <table class="table table-striped table-bordered table-hover " id="exportable" ng-cloak>
            <thead>
            <tr>
                <th>NOMBRE</th>
                <th>TIPO</th>
                <th>FECHA IDENTIFICACION</th>
                <th>ORIGEN</th>
                <th>DESCRIPCION</th>
                <th>IMPACTO</th>    
                <th>GRADO DE IMPACTO</th>  
                <th>PROBABILIDAD DE OCURRENCIA</th> 
                <th>SEVERIDAD DEL RIESGO</th>    
                <th>DISPARADOR</th>  
                <th>PLAN DE ACCION</th>  
                <th>FECHA DE EJECUCION DEL PLAN</th>  
                <th>ESTADO</th>  
                <th>OBSERVACIONES</th>   
                  
                <th>ACCION</th>            
            </tr>
            </thead>
            <tbody>

            <tr ng-repeat="item in risks.list ">
                <!--<td> <img  src={{product.path_image}} alt="Logo Viento Sur" height="30" width="30"/> </td>-->
               <td>{{ item.name }}</td>
                <td>{{ item.descriptiontype }}</td>
                <td>{{ item.identificationdate | date:'dd/MM/yyyy'}}</td>
                <td>{{ item.origin }}</td>
                <td>{{ item.description }} </td>
                <td>{{ item.impact }} </td>
                <td>{{  item.impactgrade}} </td>
                 <td>{{  item.probability }} </td>
                <td>{{  item.severity }} </td>
                <td>{{  item.trigger }} </td>
                <td>{{  item.actionplan }} </td>
                <td>{{  item.ejecutiondate  | date:'dd/MM/yyyy'}} </td>
                <td>{{  item.state }} </td>
                <td>{{  item.observation }} </td>

                <td class="center">
               	    <button title="Editar" type="button" ng-click="edit($index)"  data-toggle="modal" data-target="#myModal" class="btn btn-warning btn-sm" onclick="clearuploadfile()"><i class="fa fa-edit"></i></button>
                    <button title="Eliminar"  type="button"  ng-click="edit($index)" onclick='question_remove()' class="btn btn-danger btn-sm" href><i class="fa fa-trash-o"></i></button>
              
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
                                         
                                      
					         <button type="button" class="btn btn-primary dim btnclose" onclick="hide_modal_remove()"  data-dismiss="modal" >Cancelar</button>
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
                  
                                            <h4 class="modal-title">DETALLE DEL RIESGO</h4>
                                            
                                        </div>
                                        <div class="modal-body modal_scrolable">
                                        
                    
<!-- aca inicia el formulario-->

                      <div  name="formulario">
                            <form class="form-horizontal">

<!--  					<div ng-show="!newreg" id="fileuploader">Upload</div> -->
<!--   			      <input id='product_id' type='hidden' ng-model='product.id' value='{{product.id}}' /> -->
  			      
						
                                   <div class="form-group"><label class="col-sm-3 control-label" >Nombre</label>


                                    <div class="col-sm-9"><input type="text" class="form-control" ng-model="risk.name" /></div>
                                </div>
                                
                                <div class="form-group">
                                  <label class="col-md-3 control-label">Tipo</label>
                               
                               <div class="col-md-9">
                                 <select   class="form-control m-b" ng-model="risk.descriptiontype">
                                              <option></option>
                                        <option>Ambiente de ejecucion</option>
                                        <option>Capacitacion usuario final</option>
                                        <option>Entregable</option>
                                        <option>Software</option>
                                        <option>Harware</option>
                                        <option>Presupuesto</option>
                                        <option>Recursos Humanos.</option>
                                        </select> 
                                 </div>
                                </div>
                                <div class="form-group">
									<label class="col-sm-3 control-label">Fecha de Identificacion:</label>

									<div class="col-md-9">
                                    <div class="input-group date" >
														<span class="input-group-addon"><i
															class="fa fa-calendar"></i></span><input type="text"
															class="form-control" 
															 ng-model="risk.identificationdate"
															placeholder="haga click aqui para seleccionar la fecha...">
													</div>
                                    
                                    </div> 
                                    
								</div>
                                
                                
                                
                                
                                <div class="form-group"><label class="col-sm-3 control-label" >Origen</label>

                                    <div class="col-sm-9"><input type="text" class="form-control" ng-model="risk.origin" /></div>
                                </div>
                                 <div class="form-group"><label class="col-sm-3 control-label" >Descripcion</label>

                                    <div class="col-sm-9"><input type="text" class="form-control" ng-model="risk.description" /></div>
                                </div>
                                
                                  <div class="form-group"><label class="col-sm-3 control-label" >Impacto</label>

                                    <div class="col-sm-9"><input type="text" class="form-control" ng-model="risk.impact" /></div>
                                </div>
                                <div class="form-group"><label class="col-sm-3 control-label" >Grado de Impacto</label>

                                    <div class="col-sm-9"><input type="text" class="form-control" ng-model="risk.impactgrade" /></div>
                                </div>
                                <div class="form-group"><label class="col-sm-3 control-label" >Probabiidad de Ocurrencia</label>

                                    <div class="col-sm-9"><input type="text" class="form-control" ng-model="risk.probability" /></div>
                                </div>
                                <div class="form-group"><label class="col-sm-3 control-label" >Severidad de Riesgo</label>

                                    <div class="col-sm-9"><input type="text" class="form-control" ng-model="risk.severity" /></div>
                                </div>
                                <div class="form-group"><label class="col-sm-3 control-label" >Disparador</label>

                                    <div class="col-sm-9"><input type="text" class="form-control" ng-model="risk.trigger" /></div>
                                </div>
                                <div class="form-group"><label class="col-sm-3 control-label" >Plan de Accion</label>

                                    <div class="col-sm-9"><input type="text" class="form-control" ng-model="risk.actionplan" /></div>
                                </div>
                                <div class="form-group"><label class="col-sm-3 control-label" >Fecha de Ejecucion del plan</label>

                                    <div class="col-sm-9">
                                    <div class="input-group date" >
														<span class="input-group-addon"><i
															class="fa fa-calendar"></i></span><input type="text"
															class="form-control" 
															 ng-model="risk.ejecutiondate"
															placeholder="haga click aqui para seleccionar la fecha...">
									</div>
                                    
                                    </div>
                                </div>
                                <div class="form-group"><label class="col-sm-3 control-label" >Estado</label>

                                    <div class="col-sm-9">
                                    <select style={{stylenew}}   class="form-control m-b" ng-model="risk.state">
                                              <option></option>
                                        <option>Estado 1</option>
                                        <option>Estado 2</option>
                                        <option>Estado 3</option>
                                     
                                        </select> 
                                    
                                    </div>
                                </div>
                                <div class="form-group"><label class="col-sm-3 control-label" >Observaciones</label>

                                    <div class="col-sm-9"><input type="text" class="form-control" ng-model="risk.observation" /></div>
                                </div>

                               
                            </form>
                        </div>
                        </div>

    <!-- aca termina el formuilario -->
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-white dim btnclose" data-dismiss="modal">Cerrar</button>
                                            <button  ng-disabled="!valor()" id="btnadd" type="button"  class="btn btn-primary dim" ng-click="save()" >Guardar</button>
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
