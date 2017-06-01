<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html ng-app="app">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>INDICE DE DESEMPEÑO COSTO CPI - RESUMEN </title>
    <jsp:include page="../../parts/head.jsp"></jsp:include>
    <script src="resources/js/angular/report/index/costo.js"></script>
         <script src="resources/js/uploadfile/jquery.uploadfile.min.js"></script>
    <link href="resources/js/uploadfile/uploadfile.css" rel="stylesheet" />
    
   <script>
var page="reporte_costo";
$('.datepicker').datepicker({
	format : 'dd/mm/yyyy',
	language : "es",
	autoclose : true,
});
</script>

</head>
<body ng-controller="CostController">

    <div id="wrapper" >


    <nav class="navbar-default navbar-static-side" role="navigation">
        <div class="sidebar-collapse">
		<jsp:include page="../../parts/part_sidemenu_marketbi.jsp"></jsp:include>
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
                <h5>REPORTE: INDICADORES DE DESEMPEÑO COSTO</h5>
                
            </div>
            <div class="ibox-content">
<div class="row">
			<div class="form-group">
            <label class="col-md-2 control-label alineacion_i">Proyecto:</label>
                                      <div class="col-md-3">  <select class="form-control m-b" ng-change="list()"  ng-model="select.project">
                                             
                                        <option >Proyecto 1</option>
                                        <option >Proyecto 2</option>
                                      
                                        </select>  </div>  
                                  
                                </div> 
                                
              </div>
              
       <div class="row"><div class="col-md-12">
      
       <button class="btn btn-info"ng-disabled="filterbuttoninactive" ng-click="exportToExcel('#exportable')"><span class="glyphicon glyphicon-share"></span>Excel</button>
       <div  class="table-responsive">
         <table  class="table table-striped table-bordered table-hover  " ng-cloak>
	         <thead>
	        
	          <tr >  <h2 class="alineacion_c" ><span class="alineacion_c">INDICADOR DE DESEMPEÑO DEL CRONOGRAMA</span></h2>   </tr>	
	         	
	         	<tr class="alineacion_i">
	         	<td >Investigador</td>
	         	<td class="alineacion_i">Pozo Chávez Stephen Michael</td>
	         	</tr>
		         	<tr class="alineacion_i">
		         	<td>Proyecto</td>
		         	<td class="alineacion_i">{{ detailsedt[0].name}}</td>
		         	</tr>
	         	<tr class="alineacion_i">
	         	<td>Empresa</td>
	         	<td class="alineacion_i">{{ detailsedt[0].clientname}}</td>
	         	</tr>
	         	<tr class="alineacion_i">
	         	<td>AREA</td>
	         	<td class="alineacion_i">Certificación de Software</td>
		        </tr>
		         	<tr class="alineacion_i">
		         	<td>Fecha de Registro</td>
		         	<td class="alineacion_i">{{systemdate}}</td>
		         	</tr>
	         	
	         	        	
	         	<tr class="alineacion_i">
	         	<td >CPI=EV/AC</td>	 
	         	<td class="alineacion_i">
	         	  Donde: <br>
	         	  PV=Valor Planeado<br>
	         	  EV=Valor Ganado
	         	  
	         	  
	         	 
	         	  </tr> 
	         	  
				
	         	
	         	
	         
	         	
	         	
	         </thead>
	         <tbody>
	         	 <tr>
	         	 
	         	</tr>	         
	         </tbody>
         
         </table>
          
            <table class="table table-striped table-bordered table-hover " id="exportable" ng-cloak>
            <thead>
            <tr>
                <th>N°</th>
                <th>Fecha de Inicio</th>
                <th>Actividad</th>
                <th>AC</th>
                <th>BAC</th>
                <th>Porcentaje Planeado</th> 
                <th>Porcentaje Eficiencia</th>                 
                <th>Horas Real</th>
                <th>Horas Estimado</th>
                <th>EV</th>
                <th>PV</th>
                <th>SV</th>
                <th>CV</th>
                <th>CPI</th>
                  <th>SPI</th>

         
         
            
            </tr>
            </thead>
            <tbody>
	
            <tr ng-repeat="item in detailreport ">
                <!--<td> <img  src={{product.path_image}} alt="Logo Viento Sur" height="30" width="30"/> </td>-->
               <td>{{ item.contador }}</td>
                <td>{{ item.startdate }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.ac }} </td>
                <td>{{ item.bc }} </td>
                <td> 100.00% </td>
                <td>{{ item.pe *100 | number:2}}% </td>
                <td>{{ item.realhour}} </td>
                <td>{{ item.estimatehour}} </td>
                <td>{{item.ev | number:2}}</td>
                <td>{{item.pv | number:2}}</td>
                <td>{{item.sv | number:2}}</td>
                <td>{{item.cv | number:3}}</td>
                <td>{{item.cpi | number:3}}</td>
                 <td>{{item.spi | number:3}}</td>
                 
<!--                 <td>{{ item.enddate | date:'dd/MM/yyyy'}} </td> -->
                
     
             
                
            </tr>
             <tr >
                <!--<td> <img  src={{product.path_image}} alt="Logo Viento Sur" height="30" width="30"/> </td>-->
               <td style="color:Red !important|">TOTALES</td>
                <td></td>
                <td></td>
            
                <td>{{ detailreport.totalac | number:2 }} </td>
                <td>{{detailreport.totalbac | number:2}} </td>
                <td> </td>
                <td></td>
                <td>{{ detailreport.totalrealhour}} </td>
                <td>{{detailreport.totalestimatehour}}</td>
                <td></td>
                <td></td>
                <td>{{detailreport.totalsv | number:2}}</td>
                <td>{{detailreport.totalcv | number:2}}</td>
                <td>{{detailreport.totalcpi | number:2}}</td>
                 <td>{{detailreport.totalspi | number:2}}</td>
<!--                 <td>{{ item.enddate | date:'dd/MM/yyyy'}} </td> -->
                
    
                
            </tr>
           
            </tbody>
    
            </table>
            </div>
             
</div></div>


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
                  
                                            <h4 class="modal-title">TAREAS</h4>
                                            
                                        </div>
                                        <div class="modal-body modal_scrolable">
                                        
                    
<!-- aca inicia el formulario-->

                      <div  name="formulario">
                            <form class="form-horizontal">

 					<div ng-show="!newreg" id="fileuploader">Upload</div>
  			      <input id='product_id' type='hidden' ng-model='product.id' value='{{product.id}}' />
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
