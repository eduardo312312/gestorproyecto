<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html ng-app="app">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FICHA DE INICIO</title>
    <jsp:include page="../../parts/head.jsp"></jsp:include>
    <script src="resources/js/angular/project/index/IndexController.js"></script>
         <script src="resources/js/uploadfile/jquery.uploadfile.min.js"></script>
    <link href="resources/js/uploadfile/uploadfile.css" rel="stylesheet" />
    
   <script>
var page="indexfile";
</script>
  <script>
var uploadWidget;

$(function(){
	var document_id=$("#document_id").val();
	
	uploadWidget=$("#fileuploader").uploadFile({
		allowedTypes:"pdf" ,
		url:"document/upload_index?${_csrf.parameterName}=${_csrf.token}",
		multiple:false,
		dragDrop:true,
		uploadStr:'Cargar Archivo',
		/*maxFileCount:1,*/
		dynamicFormData:function(){
			document_id=$("#document_id").val();
			var data={document_id: document_id }
			return data;
		},
		fileName:"file",
		dragDropStr: "<span><b>Arrastre y suelte un archivo PDF</b></span>",
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
<body ng-controller="IndexController">

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
             <br>
                <br>
                <h3>Ficha de Inicio</h3>
               

                <h3>{{project2.shortname}} - {{project2.name}}</h3>
            </div>
            <div class="ibox-content ">
<!--             <div class="row"> -->
<!--             <button  class="btn btn-primary dim"  ng-click="new_register()" data-toggle="modal" data-target="#myModal" href="javascript:void(0);" >Crear Tarea</button> -->
<!-- 			</div> -->
			<div class="row">
			<div class="form-group">
            <label class="col-md-2 control-label alineacion_i">Proyecto:</label>
                                      <div class="col-md-6">  <select class="form-control m-b" ng-change="select_project(select.project)"   ng-model="select.project">
                                             
                                        <option ng-repeat="item in listprojects.list" >{{item.name}}</option>
<!--                                        <option >***Agregar Proyecto***</option> -->
                                      
                                        </select>  </div>  
                                  
                                </div> 
                                
              </div>
			
            <!-- tabla de datos -->


           <!-- Tabla del listado -->
      <div class="row"   >
                <div class="col-md-12" >
                    <div class="ibox float-e-margins" >
                        <div class="ibox-title">
                            <h5>Detalles del Proyecto </h5>
                            
                        </div>
                        <div class="ibox-content">
                            <form method="get" class="form-horizontal">
                               
                                
                                <div class="form-group row">
                                
                                <div class="row">
	                               
	                                <label class="col-md-2 control-label alineacion_i">Codigo </label>
	                                    
	                                    <div class="col-md-2"><input style={{stylenew}}  type="text" class="form-control"  ng-model="project.shortname" ></div>
	                                
	                                
	                                 
	                               
	                               
	                                 <label   class="col-md-2 control-label alineacion_i">Propuesta</label>
	                                    <div class="col-md-6"  ><input style={{stylenew}} type="text" class="form-control" ng-model="project.comment"></div>   
	                                
                                	
                                
                                </div>
                                
                                
                                <div class="row" style="margin-top: 10px !important;">
                                <label class="col-md-2 alineacion_i">T�tulo</label>
                                    <div class="col-md-10"><input style={{stylenew}} type="text"  class="form-control"  ng-model="project.name"  ></div>
                                </div> 
                                 
                               <div class="row" style="margin-top: 10px !important;">
                                 <label class="col-md-2 control-label alineacion_i">Descripci�n</label>
                                    <div class="col-md-10"><input style={{stylenew}} type="text" class="form-control" ng-model="project.description"></div>   
                               </div> 
                                
                                <div class="row" style="margin-top: 10px !important;">
                                 <label class="col-md-2 control-label alineacion_i">Jefe de Proyecto</label>
                                    <div class="col-md-10"><input style={{stylenew}} type="text" class="form-control"  ng-model="project.businesssubjectleader"  ></div>   
                                </div>
                                
                                <div class="row" style="margin-top: 10px !important;">
                                 <label class="col-md-2 control-label alineacion_i">Control de Proyecto</label>
                                    <div class="col-md-10"><input style={{stylenew}} type="text" class="form-control" ng-model="project.businesssubjectcontrol"></div>   
                                </div>                                
                                
                               <div class="row" style="margin-top: 10px !important;">
                                 <label class="col-md-2 control-label alineacion_i">Estado</label>
                               
                               <div class="col-md-4">
                                 <select style={{stylenew}}   class="form-control m-b" ng-model="project.state">
                                              <option></option>
                                        <option>Activo</option>
<!--                                         <option>Inactivo</option> -->
<!--                                         <option>Espera Aprobacion</option> -->
<!--                                         <option>En Curso</option> -->
<!--                                         <option>Terminado</option> -->
                                        </select> 
                                 </div>
                                 
                               </div> 
                               
                               <div class="row" style="margin-top: 10px !important;">
                                 <label class="col-md-2 control-label alineacion_i">Subir Documento</label>
                                     <div ng-show="!indicador_nuevo" id="fileuploader">Upload</div>
  			     				 <input id='document_id' type='hidden'  ng-model='document.id' value={{document.id}} />
  			     				  <a href="http://localhost:8080/gestorproyecto/resources/pdf/index/{{document.id}}.pdf" target="_blank">Abrir</a>
                                </div>  
                               
                              
  			      
  			         
                                                 
                            </div>
                                
                                
                               
                             </form>
		 			</div>  
		 		 </div>  
		   	</div>  
		   	
   	
   			  <div class="col-md-12">
                    <div class="ibox float-e-margins">
                        <div class="ibox-title">
                            <h5>Detalles del Cliente </h5>
                            
                        </div>
                        <div class="ibox-content">
                            <form method="get" class="form-horizontal">
                            
                             <div class="form-group row">
                            <div class="row" style="margin-top: 10px !important;">
                                 <label class="col-md-2 control-label alineacion_i">Cliente:</label>
                                    <div class="col-md-10"><input style={{stylenew}}  type="text" class="form-control" ng-model="project.clientname"></div>   
                                </div>
                                
                                <div class="row" style="margin-top: 10px !important;">
                                 <label class="col-md-2 control-label alineacion_i">Contacto:</label>
                                    <div class="col-md-10"><input style={{stylenew}} type="text" class="form-control" ng-model="project.clientcontact"></div>   
                                </div>  
                                
                                
                                  <div class="row" style="margin-top: 10px !important;">
                                 <label class="col-md-2 control-label alineacion_i">Telefono:</label>
                                    <div class="col-md-4"><input style={{stylenew}} type="text" class="form-control" ng-model="project.clientphone"></div>   
                                
                                
                                
                                  
                                 <label class="col-md-2 control-label alineacion_i">Direccion:</label>
                                    <div class="col-md-4"><input style={{stylenew}} type="text" class="form-control" ng-model="project.clientaddress"></div>   
                                </div>  
                                
                                
                                  <div class="row" style="margin-top: 10px !important;">
                                 <label class="col-md-2 control-label alineacion_i">Fax:</label>
                                    <div class="col-md-4"><input style={{stylenew}} type="text" class="form-control" ng-model="project.clientfax"></div>   
                                
                                 <label class="col-md-2 control-label alineacion_i">Celular:</label>
                                    <div class="col-md-4"><input style={{stylenew}} type="text" class="form-control" ng-model="project.clientmovil" ></div>   
                                </div>  
                                
                                  <div class="row" style="margin-top: 10px !important;">
                                 <label class="col-md-2 control-label alineacion_i">Email:</label>
                                    <div class="col-md-10"><input style={{stylenew}} type="text" class="form-control" ng-model="project.clientmail" ></div>   
                                </div>  
                                 
                                
                                </div>
                               
                               
                                
                                
                               
                             </form>
		 			</div>  
		 		 </div>  
		   	</div>
   	
   			 <div class="col-md-12">
                    <div class="ibox float-e-margins" >
                        <div class="ibox-title">
                            <h5>Caracteristicas del proyecto </h5>
                            
                        </div>
                        <div class="ibox-content">
                            <form method="get" class="form-horizontal">
                            
                             <div class="form-group row">
                            <div class="row" style="margin-top: 10px !important;">
                                 <label class="col-md-2 control-label alineacion_i">Fecha de Inicio:</label>
                                    <div class="col-md-2">
                                    <div class="input-group date" style={{stylenew}} >
														<span class="input-group-addon"><i
															class="fa fa-calendar"></i></span><input type="text"
															class="form-control" 
															ng-change="mensaje()" ng-model="project.startdate"
															placeholder="dia/mes/a�o">
													</div>
                                    
                                    </div>   
                               
                                 <label class="col-md-2 control-label alineacion_i">Fecha de cierre:</label>
                                    <div class="col-md-2">
                                    <div class="input-group date" style={{stylenew}} >
														<span class="input-group-addon"><i
															class="fa fa-calendar"></i></span><input type="text"
															class="form-control" 
															ng-change="mensaje()" ng-model="project.enddate"
															placeholder="dia/mes/a�o">
													</div>
                                    
                                    </div>   
                                
                                 <label class="col-md-2 control-label alineacion_i">Plazo(Dias):</label>
                                    <div class="col-md-2"><input style={{stylenew}}  type="number" class="form-control" value="00" ng-model="project.daysleft"></div>  
                                  
                                </div>  
                                
                                 <div class="row" style="margin-top: 10px !important;">
                                 <label class="col-md-2 control-label alineacion_i" ng-model="project.location" >Ubicacion:</label>
                                    <div class="col-md-2">
                                    
                                    <select style={{stylenew}}   class="form-control m-b" ng-model="project.location">
                                              
                                        <option>	Amazonas	</option>
										<option>	Ancash	</option>
										<option>	Apurimac	</option>
										<option>	Arequipa	</option>
										<option>	Ayacucho	</option>
										<option>	Cajamarca	</option>
										<option>	Callao	</option>
										<option>	Cusco	</option>
										<option>	Huancavelica	</option>
										<option>	Huanuco	</option>
										<option>	Ica	</option>
										<option>	Junin	</option>
										<option>	La Libertad	</option>
										<option>	Lambayeque	</option>
										<option>	Lima	</option>
										<option>	Loreto	</option>
										<option>	Madre De Dios	</option>
										<option>	Moquegua	</option>
										<option>	Pasco	</option>
										<option>	Piura	</option>
										<option>	Puno	</option>
										<option>	San Martin	</option>
										<option>	Tacna	</option>
										<option>	Tumbes	</option>
										<option>	Ucayali	</option>

                                      
                                      
                                        </select>
                                    
                                    </div>   
                                    
                                    
                               
                                 <label class="col-md-2 control-label alineacion_i"  >Monto del Contrato:</label>
                                    <div class="col-md-2"><input  style={{stylenew}}  type="number" class="form-control" ng-model="project.totalamount"></div>   
                                
                                 <label class="col-md-2 control-label alineacion_i">Tama�o:</label>
                                      <div class="col-md-2">  <select  style={{stylenew}}  class="form-control m-b"  ng-model="project.size">
                                              <option></option>
                                        <option>Muy Grande</option>
                                        <option>Grande</option>
                                        <option>Estandar</option>
                                        <option>Peque�a</option>
                                        <option>Muy Peque�a</option>
                                        </select>  </div>  
                                  
                                </div> 
                                
                                  <div class="row" style="margin-top: 10px !important;">
                                 <label class="col-md-2 control-label alineacion_i">Forma de Pago:</label>
                                    <div class="col-md-2">  <select style={{stylenew}}  class="form-control m-b" ng-model="project.typepayment">
                                      
                                        <option>Suma Alzada</option>
                                        <option>Forma 2</option>
                                        <option>Forma 3</option>
                                        </select>  </div>   
                               
                                 <label class="col-md-2 control-label alineacion_i" style={{stylenew}} >Tipo de Entidad:</label>
                                    <div class="col-md-2"> <input style={{stylenew}}  type="radio" name="tipoentidad" value="publica" > <label class="control-label">P�blica</label> </div>
                                    <div class="col-md-2">  <input  style={{stylenew}}  type="radio" name="tipoentidad" value="privada" ><label class="control-label"> Privada</label> </div>
                                    </div>   
                                
                              
                                </div>
                                
                                
                                  <div class="row" style="margin-top: 10px !important;">
                                 <label class="col-md-2 control-label alineacion_i" >Costo Institucional:</label>
                                    <div class="col-md-10">
										
									<div class="checkbox i-checks"><label> <input style={{stylenew}}  type="checkbox" value=""  > <i></i> </label></div>
									</div>   
                                
                                   
                                </div>  
                                
                                  
                              </form>
                                
                           </div>
                               
                               
                                
                                
                               
                            
		 			</div>  
		 		 </div>  
		 		 
		 		 
	
		   	</div>
		   	
		   	
		   	
		   	<div class="row">
		   	 <div class="col-lg-6">
                    <div class="ibox float-e-margins">
                        <div class="ibox-title">
                            <h5 style={{stylenew}} >Linea de Negocio</h5>
                           
                        </div>
                        <div class="ibox-content">
                            <form class="form-horizontal">
                           <div class="form-group">
		                             <div class="row">
		                                    <div class="col-md-6"> <input type="radio" name="tipoentidad" value="publica" ><label class="control-label"> Ingenieria</label></div>
		                                     <div class="col-md-6">  <input type="radio" name="tipoentidad" value="privada" > <label class="control-label">EPCM </label> </div>
		                             		 
		                             </div>
                           </div> 
                                 
                            <div class="form-group">        
                              <div class="row">
                                    <div class="col-md-6"> <input type="radio" name="tipoentidad" value="publica" ><label class="control-label"> EPCM 2 </label></div>
                                    <div class="col-md-6"> <input type="radio" name="tipoentidad" value="privada" ><label class="control-label"> EP</label> </div>
                           	 </div> 
                            </div> 	    
                              
                               
                            </form>
                        </div>
   				</div>
   			</div>
   			
   			
   			<div class="col-lg-6" style="border-left:#e7eaec 3px solid !important;">
                    <div class="ibox float-e-margins">
                       <div class="ibox-title">
                            <h5 style={{stylenew}} >Mercado</h5>
                           
                        </div>
                        <div class="ibox-content">
                            <form class="form-horizontal">
                           <div class="form-group">
		                             <div class="row">
		                                    <div class="col-md-6"> <input type="radio" name="tipoentidad" value="publica" ><label class="control-label">Otros</label></div>
		                                     <div class="col-md-6">  <input type="radio" name="tipoentidad" value="privada" ><label class="control-label"> Alcantarillado</label> </div>
		                             		 
		                             </div>
                           </div> 
                                 
                            <div class="form-group">        
                              <div class="row">
                                    <div class="col-md-6"> <input type="radio" name="tipoentidad" value="publica" ><label class="control-label">Edificaciones Generales</label></div>
                                    <div class="col-md-6"> <input type="radio" name="tipoentidad" value="privada" ><label class="control-label">Procesos Industriales Mineros</label></div>
                           	 </div> 
                            </div> 	    
                              
                               
                            </form>
                        </div>
   				</div>
   			</div>
   		</div>
   	
   		<div class="row alineacion_c" >
            <button  class="btn btn-primary dim"  ng-disabled="!validator_save()"  ng-click="save_project()" data-toggle="modal"  href="javascript:void(0);" >Guardar</button>
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
                                           <p>�Realmente desea eliminar el registro?</p>   
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
