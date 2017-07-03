<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html ng-app="app">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ADMINISTRACION DE EQUIPOS DE PROYECTOS</title>
    <jsp:include page="../../parts/head.jsp"></jsp:include>
    <script src="resources/js/angular/configuration/team/TeamController.js"></script>
<!--          <script src="resources/js/uploadfile/jquery.uploadfile.min.js"></script> -->
<!--     <link href="resources/js/uploadfile/uploadfile.css" rel="stylesheet" /> -->
    
   <script>
var page="team";
</script>
  <script>
$('.datepicker').datepicker({
	format : 'dd/mm/yyyy',
	language : "es",
	autoclose : true,
});
</script>
</head>
<body ng-controller="TeamController">

    <div id="wrapper" >


    <nav class="navbar-default navbar-static-side" role="navigation">
        <div class="sidebar-collapse">
		<jsp:include page="../../parts/part_sidemenu_configuration.jsp"></jsp:include>
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
                <h5>Registro de Equipos de Proyectos</h5>
                
            </div>
            <div class="ibox-content">
            <div class="row">
            <button  class="btn btn-primary dim"  ng-click="new_register()" data-toggle="modal" data-target="#myModal">Nuevo Equipo</button>
			</div>
			 <div class="row">
         
            <div class="col-sm-4"> 
            <div class="ibox float-e-margins">  
                                 
               <div class="form-group" id="data_1">
                  <span>Proyecto</span> <br />    
                     <datalist id="product">
										<option id="{{prod.id}}" value="{{prod.name | uppercase}}" 	ng-repeat="prod in products2.list">
									</datalist>
										<input id="filterclient" type="text"											
											ng-model="product_filter" class="form-control"
											list="product" />
                     
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
                <th>DENOMINACION</th>
                <th>DESCRIPCION BREVE</th>
                <th>PROYECTO</th>
                <th>LIDER</th>                 
                <th>ACCION</th>            
            </tr>
            </thead>
            <tbody>

            <tr ng-repeat="item in teams.list ">
                <!--<td> <img  src={{product.path_image}} alt="Logo Viento Sur" height="30" width="30"/> </td>-->
               <td>{{ item.name }}</td>
                <td>{{ item.description }} {{ item.businesssubject.secondlastname }}</td>
                <td>{{ item.projectname }}</td>
                <td>{{ item.leader}} </td>
            

                <td class="center">
<!--                	    <button title="Propiedades" type="button" ng-click="new_asign_properties(product.id)"  data-toggle="modal" data-target="#modal-product-properties" class="btn btn-success btn-sm"><i class="fa fa-sort-amount-asc"></i></button> -->
                    <button title="Editar" type="button" ng-click="edit(item)"  data-toggle="modal" data-target="#myModal" class="btn btn-warning btn-sm" ><i class="fa fa-edit"></i></button>
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
					                <button type="button" id='confirm-remove-btn'   onclick="hide_modal_remove()"  ng-click='confirmRemove(team.id)' class="btn btn-primary dim"  >Confirmar</button>
					 			</div>	
							
					 			
					 			
                            </div>
                    </div>
                </div>
                
                
                
             <div class="modal inmodal" id="modal-confirm-remove-personal-team" tabindex="-1" role="dialog" aria-hidden="true" >
                                <div class="modal-dialog">
                                <div class="modal-content animated bounceInRight">
                                        <div class="modal-header">
                                            <button type="button" class="close" data-dismiss="modal" onclick='hide_modal_remove()'><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                                         
                                            
                                            <h1 class="modal-title">ELIMINAR</h1>
                                           <p>¿Realmente desea eliminar el miembro del equipo?</p>   
                                        </div>
                
                              
                                          <div class="modal-footer">
                                         
                                      
					         <button type="button" class="btn btn-primary dim btnclose" data-dismiss="modal" >Cancelar</button>
					                <button type="button" id='confirm-remove-btn-detail-team'    data-dismiss="modal"  ng-click='confirmRemove_personal()' class="btn btn-primary dim"  >Confirmar</button>
					 			</div>	
							
					 			
					 			
                            </div>
                    </div>
                </div>


<div class="modal inmodal" id="myModal" tabindex="-1" role="dialog" aria-hidden="true" >
                                <div class="modal-dialog">
                                <div class="modal-content animated bounceInRight">
                                        <div class="modal-header">
                                            <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                  
                                            <h4 class="modal-title">EQUIPO</h4>
                                            
                                        </div>
                                        <div class="modal-body modal_scrolable">
                                        
                    
<!-- aca inicia el formulario-->

                      <div  name="formulario">
                            <form class="form-horizontal">

<!--  					<div ng-show="!newreg" id="fileuploader">Upload</div> -->
<!--   			      <input id='product_id' type='hidden' ng-model='product.id' value='{{product.id}}' /> -->
  			      
						
                                   <div class="form-group"><label class="col-sm-3 control-label" >Nombre</label>

                                    <div class="col-sm-9"><input type="text" class="form-control" ng-model="team.name" /></div>
                                </div>
                                <div class="form-group"><label class="col-sm-3 control-label" >Descripcion</label>

                                    <div class="col-sm-9"><input type="text" class="form-control" ng-model="team.description" /></div>
                                </div>
                                 <div class="form-group"><label class="col-sm-3 control-label" >Proyecto Asignado</label>

                                    <div class="col-sm-9">
                                    
                                    <select class="form-control m-b" ng-change="select_project(team.project)"   ng-model="team.project">
                                             
                                        <option ng-repeat="itemp in listprojects.list" >{{itemp.name}}</option>
<!--                                        <option >***Agregar Proyecto***</option> -->
                                      
                                        </select> 
                                    
                                    </div>
                                </div>
                                
                                 <div class="form-group"><label class="col-sm-3 control-label" >Lider de Equipo</label>
 										
                                    <div class="col-sm-9">
                                   <input style={{stylenew}} id="employeeeee2" type="text" class="form-control" ng-change="select_leader()" ng-model="team.leader" list="employees_list2"   >
                                     <datalist id="employees_list2">
									<option ng-repeat="item2 in employees.list" id={{'l'+item2.businesssubject.id}} value={{item2.show}} > 
									</datalist>
                                    
                                    </div>
                                </div>
                                
                                
                                
                                
 <div class="row">
              <h2 class="alineacion_c">MIEMBROS DEL EQUIPO</h2>
             
      <div style="overflow-y: scroll; height:500px;">
     <div class="table-responsive">    
       <button  class="btn btn-primary dim"  ng-click="new_register_detail()" data-toggle="modal" data-target="#myModal_personal">Nuevo Miembro</button>
			 
    <table ng-show="true" class="table table-striped table-bordered table-hover">
    <thead>
            <tr>
               
                <th >Personal</th>
                 <th >Rol</th>
                <th >Costo/Hora </th>
                <th >Horas Diarias</th>
                <th >ACCION</th>   
            </tr>
            </thead>
            <tbody>   
          
        <tr ng-repeat="item_p in detailsteam" >
        
          <td>{{item_p.personal}} </td>
            <td >{{item_p.role}}</td>                                    
            <td >{{item_p.costbyhour}}</td >
               <td>{{item_p.hourbyday}}    </td>       
             
                <td class="col-sm-1 center">
                 <button title="Editar" type="button" ng-click="edit_member(item_p)"  data-toggle="modal" data-target="#myModal_personal" class="btn btn-warning btn-sm" ><i class="fa fa-edit"></i></button> 
             
                 <button title="Eliminar" type="button"    ng-click="edit_member(item_p)"  class="btn btn-danger btn-sm" data-toggle="modal" data-target="#modal-confirm-remove-personal-team"  ><i class="fa fa-trash-o"></i></button>
                 
                 </td>
        </tr>
     
        
           </tbody>
           <tfoot>
           
           
           </tfoot>
        </table> 
        </div>
     
      </div>  
        
        
   
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
           
           
<div class="modal inmodal" id="myModal_personal" tabindex="-1" role="dialog" aria-hidden="true" >
                                <div class="modal-dialog">
                                <div class="modal-content animated bounceInRight">
                                        <div class="modal-header">
                                            <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                  
                                            <h4 class="modal-title">PERSONAL</h4>
                                            
                                        </div>
                                        <div class="modal-body modal_scrolable">
                                        
                    
<!-- aca inicia el formulario-->

                      <div  name="formulario">
                            <form class="form-horizontal">

<!--  					<div ng-show="!newreg" id="fileuploader">Upload</div> -->
<!--   			      <input id='product_id' type='hidden' ng-model='product.id' value='{{product.id}}' /> -->
  			      
						   <div class="row" style="margin-top: 10px !important;">
                                 <label class="col-md-3 control-label alineacion_i">Buscar Personal</label>
                                    <div class="col-md-9">
<!--                                     <input  type="text" class="form-control" ng-model="project.businesssubjectcontrol"> -->
                                    
                                    <datalist id="employees_list">
									<option ng-repeat="item2 in employees.list" id={{'c'+item2.businesssubject.id}} value={{item2.show}} > 
									</datalist>
<!--                                     <div class="col-sm-12"> -->
                                    
                                    <input style={{stylenew}}  id="employeeeee" type="text" class="form-control" ng-change="select_personal()"  ng-blur="employee=[]; select_personal()" ng-model="searchpersonal" list="employees_list"  >
                                    
<!--                                     </div> -->
                                    
                                    
                                    </div>   
                                  
                                </div>  
                                  <br>
                                   <div class="form-group"><label class="col-sm-3 control-label" >Personal</label>

                                    <div class="col-sm-9"><input ng-disabled="true" type="text" class="form-control" ng-model="employee.personal" /></div>
                                </div>
                                <div class="form-group"><label class="col-sm-3 control-label" >Posicion</label>

                                    <div class="col-sm-9"><input  ng-disabled="true" type="text" class="form-control" ng-model="employee.role" /></div>
                                </div>
                                 <div class="form-group"><label class="col-sm-3 control-label" >Costo por Hora</label>

                                    <div class="col-sm-9"><input ng-disabled="true"  type="text" class="form-control" ng-model="employee.costbyhour" /></div>
                                </div>
                                 <div class="form-group"><label  class="col-sm-3 control-label" >Jornada Laboral</label>

                                    <div class="col-sm-9"><input ng-disabled="true" type="text" class="form-control" ng-model="employee.hourbyday" /></div>
                                </div>
                                
                               
                               
                            </form>
                        </div>
                        </div>

    <!-- aca termina el formuilario -->
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-white dim btnclose" data-dismiss="modal">Cerrar</button>
                                            <button  ng-disabled="!valor_personal()" id="btnadd" type="button" data-dismiss="modal"  class="btn btn-primary dim" ng-click="add_detail_team()" >Agregar</button>
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
