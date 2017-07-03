<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html ng-app="app">

<head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>USUARIOS</title>
	<jsp:include page="../../parts/head.jsp"></jsp:include>
     <script src="resources/js/angular/configuration/users/UserController.js"></script>
<script>
var page="usuarios";
</script>


</head>

<body ng-controller="UserController">

    <div id="wrapper" >
    <nav class="navbar-default navbar-static-side" role="navigation">
        <div class="sidebar-collapse">
			<jsp:include page="../../parts/part_sidemenu_configuration.jsp"></jsp:include>
        </div>
     </nav>

    <div id="page-wrapper" class="gray-bg">

        <div class="row border-bottom">
    <!-- aca inicia el header-->
       <nav style="margin-bottom: 0" role="navigation" class="navbar navbar-fixed-top">
      <jsp:include page="../../parts/part_navbar.jsp"></jsp:include>
        </nav>
       </div>


       <div class="wrapper wrapper-content animated fadeInRight">
          
            <div class="ibox float-e-margins">
                <br />
                <br />
            <div class="centrar_titulo">
                <h5>REGISTRO DE USUARIOS</h5>
                
            </div>
            <div class="ibox-content">
            <div class="">
            <button  class="btn btn-primary dim" title="Nuevo"  ng-click="Nuevo()" data-toggle="modal" data-target="#myModal_user"  >Nuevo Registro</button>


      <br>
<!--       <span style="border: 1px solid black !important; " ng-click="consultar(proceso.id,0,0)" ng-repeat="proceso in listado.list">{{proceso.nombre}} <br> -->
<!--         <span style="border: 1px solid black !important; " ng-click="consultar(proceso.id,actividad.id,0)" ng-repeat="actividad in proceso.list">&nbsp&nbsp&nbsp{{actividad.nombre}} <br>   -->
<!--           <span style="border: 1px solid black !important; "  ng-click="consultar(proceso.id,actividad.id, tarea.id)" ng-repeat="tarea in actividad.tareas">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp{{tarea.nombre}} <br>       -->
<!--        </span>  -->
      
       </span>  <br></br> 
      </span>
           
            <!-- tabla de datos -->
            
 

           <!-- Tabla del listado -->
     <p>{{message}}</p>
            <table class="table table-striped table-bordered table-hover " id="editable" ng-cloak>
            <thead>
            <tr>
<!--                 <th>ID</th> -->
             
                <th>NOMBRES Y APELLIDOS</th>
                 <th>USUARIO</th>
                  <th>ROL EN EL SISTEMA</th>
                <th>CORREO</th>
                <th>TELEFONO</th>              
               
<!--                 <th>ACCESO HASTA</th> -->
                <th>ACCION</th>
         
            
            </tr>
            </thead>
            <tbody>

            <tr ng-repeat="item in users.list ">
               
                <td >{{ item.systemuser.businesssubjectname | uppercase}}</td>
                <td >{{  item.systemuser.login }} </td>
                <td >{{ item.systemuser.comment}}</td> 
                 <td >{{ item.businesssubject.mail}}</td> 
                 <td >{{ item.businesssubject.phone}} / {{ item.businesssubject.phone2}}</td>
                <td class="center">
                    <button type="button" title="Editar" ng-click="edit(item)"  data-toggle="modal" data-target="#myModal_user" class="btn btn-warning btn-sm"><i class="fa fa-edit"></i></button>
                    <button type="button" title="Eliminar"  ng-click="edit(item)" onclick='question_remove()' class="btn btn-danger btn-sm" href><i class="fa fa-trash-o"></i></button>
                     
                </td>
                
            </tr>
            
            </tbody>
         
            
            </table>
            
              <div  id='paginator-content'>
	    <div><a class='btn btn-default' ng-click='movePager(-1)' href > << </a></div>
	    <div>
	      <ul class="pagination">
	        <li ng-repeat="i in pagesPaginator" title="Ir a Pagina {{i}}" class='{{i==page?"active":""}}'><a class="red-btn" href="#" ng-click='changePage(i)'>{{i}}</a></li>
	        
	      </ul>
	   </div>

      <div><a class='btn btn-default' ng-click='movePager(1)' href > >> </a></div>
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
                                          <button type="button" title="Cerrar" class="close" data-dismiss="modal" onclick='hide_modal_remove()'><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                                         
                                            
                                            <h1 class="modal-title">ELIMINAR</h1>
                                           <p>Realmente desea eliminar el registro?</p>   
                                        </div>
                                   
                                 <div class="modal-footer">
                                            <button type="button"  title="Cancelar" class="btn btn-white dim btnclose" data-dismiss="modal" onclick="hide_modal_remove()">Cancelar</button>
                                            <button type="button" title="Confirmar" onclick="hide_modal_remove()" id='confirm-remove-btn dim' ng-click='confirmRemove()' class="btn btn-primary dim" >Confirmar</button>
                                        </div>
                                        
                            </div>
                    </div>
                </div>
   




<div  class="modal inmodal" id="myModal_user" tabindex="-1" role="dialog" aria-hidden="true" >
                                <div class="modal-dialog">
                                <div class="modal-content animated bounceInRight">
                                        <div class="modal-header">
                                        <button type="button" class="close" title="Cerrar" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                                         
                                            <h4 class="modal-title">Detalle de Registro</h4>
                                            
                                        </div>
                                        <div class="modal-body modal_scrolable">                       
<!-- aca inicia el formulario-->
<div class="row">
   <div class="form-group"><label class="col-sm-4 control-label" >Personal</label>
 										
                                    <div class="col-sm-8">
                                   <input style={{stylenew}} id="employeeeee2" type="text" class="form-control" ng-change="select_personal()" ng-model="user.businesssubjectname" list="employees_list2"   >
                                     <datalist id="employees_list2">
									<option ng-repeat="item2 in employees.list" id={{item2.businesssubject.id}} value={{item2.show}} > 
									</datalist>
                                    
                                    </div>
                                </div>
                     

</div>
 <br>
<div class="row">
     <div class="form-group"><label class="col-sm-4 control-label" >Nombre de Usuario</label>
                          
                            <div class="col-sm-8"><input type="text" class="form-control" ng-model="user.login" /></div>
                            </div>
                     
</div>

 <br>
<div class="row">
       
                          <div class="form-group"><label class="col-sm-4 control-label" >Contraseña</label>
                          
                            <div class="col-sm-8"><input type="password" class="form-control" ng-model="user.password" /></div>
                            </div>
                            
</div>
 <br>
<div class="row">
       
                          <div class="form-group"><label class="col-sm-4 control-label" >Rol</label>
                          
                              <div class="col-sm-8"><select class="form-control m-b" name="account" ng-model="user.comment">
                                        <option>SUPERADMIN</option>
                                         <option>PROYECTO</option>
                                         <option>PERSONAL</option>
                                          <option>CONFIGURACION</option>
                                         <option>REPORTES</option>
                                         
                                        </select>                                       
                                    </div>
                            </div>
                            
</div>
 <br>

                                        <div class="modal-footer">
                                         
                                      
           
                <button ng-disabled="!valor()" type="button" title="Guardar" id="btnadd" class="btn btn-primary dim" ng-click="Anadir()" >Guardar</button>
                <button type="button" class="btn btn-primary dim btnclose" title="Cerrar" data-dismiss="modal">Cerrar</button>
 			</div>	
                                 
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
