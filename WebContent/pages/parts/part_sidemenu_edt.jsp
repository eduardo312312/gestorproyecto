<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    
     <script>
     
 $(function(){
	 $("#side-menu .level1").fadeIn(500);
 	$("#"+page).parent().parent().find("a").trigger("click");
 	$("#"+page).find("a").addClass("sombreado"); 
 	$(".navbar-nav li:nth-child(4)").addClass("selected");
 });
 </script>

        <div class="sidebar-collapse">
            <ul class="nav" id="side-menu" style="display: block;">
                <li class="nav-header">
                    <div class="dropdown profile-element"> <span>
                            <img alt="image" class="img-circle" width="100%" height="100%" src="resources/img/logo.png">
                             </span>
<!--                         <a data-toggle="dropdown" class="dropdown-toggle" href="#"> -->
<!--                             <span class="clear"> <span class="block m-t-xs"> <strong class="font-bold">David Williams</strong> -->
<!--                              </span> <span class="text-muted text-xs block">Project Director <b class="caret"></b></span> </span> </a> -->
<!--                         <ul class="dropdown-menu animated fadeInRight m-t-xs"> -->
<!--                             <li><a href="profile.html">Profile</a></li> -->
<!--                             <li><a href="contacts.html">Contacts</a></li> -->
<!--                             <li><a href="mailbox.html">Mailbox</a></li> -->
<!--                             <li class="divider"></li> -->
<!--                             <li><a href="login.html">Logout</a></li> -->
<!--                         </ul> -->
                    </div>
                    <div class="logo-element">
                        IN+
                    </div>
                </li>
               
                
               
<!--                 <li class="active" ng-repeat="item in detailsedt"> -->
<!--                     <a href="#"><i class="fa fa-sitemap"></i> <span class="nav-label">{{item.name}} </span><span class="fa arrow"></span></a> -->
<!--                     <ul class="nav nav-second-level collapse in"  style=""> -->
<!--                         <li class="active" ng-repeat="item2 in item.detail"> -->
<!--                             <a href="#">{{item2.name}}<span class="fa arrow"></span></a> -->
<!--                             <ul class="nav nav-third-level collapse in"  style=""> -->
<!--                                 <li ng-repeat="item3 in item2.detail"> -->
<!--                                     <a href="#">{{item3.name}}</a> -->
<!--                                 </li> -->
<!-- <!--                                 <li> --> 
<!-- <!--                                     <a href="#">Third Level Item</a> --> 
<!-- <!--                                 </li> --> 
<!-- <!--                                 <li> --> 
<!-- <!--                                     <a href="#">Third Level Item</a> --> 
<!-- <!--                                 </li> --> 

<!--                             </ul> -->
<!--                         </li> -->
<!-- <!--                         <li><a href="#">Second Level Item</a></li> --> 
<!-- <!--                         <li> --> 
<!-- <!--                             <a href="#">Second Level Item</a></li> --> 
<!-- <!--                         <li> --> 
<!-- <!--                             <a href="#">Second Level Item</a></li> --> 
<!--                     </ul> -->
<!--                 </li> -->

  <li id={{'project'+detailsedt[0].id}} >
  
                    <a href="#"> <span class="fa fa-folder-o"></span><span class="nav-label">{{detailsedt[0].name}} </span></a>
                    <ul  class="nav nav-second-level">
                        <li id={{item.idforli}} ng-click="colapsar(item.id); process_phase(item.idforli);" ng-repeat="item in detailsedt[0].detail">
                              <a href="#"><span class="fa fa-folder-o">{{item.name}}</span></a>
                            <ul id={{'ul'+item.id}}   class="nav nav-third-level">
                                <li id={{item2.idforli}} onclick="this.disabled=true;" ng-click="colapsar(item.id); process_activity(item2.id);"  ng-repeat="item2 in item.detail">
                                    <a style="margin-left: 20% !important;" href="#"><span  class="fa fa-folder-o">{{item2.name}}</span></a>
                               					 
                               					 
<!--                                					 <ul id={{'ull'+item.id}}   class="nav nav-third-level"> -->
<!-- 					                                <li id={{item2.idforli}} onclick="this.disabled=true;" ng-click="colapsar(item2.id)"  ng-repeat="item3 in item2.detail"> -->
<!-- 					                                    <a style="margin-left: 20% !important;" href="#"><span  class="fa fa-folder-o">{{item3.name}}</span></a> -->
					                               				
					
					                               
<!-- 					                                </li> -->
					
					
<!-- 					                            </ul> -->

                               
                                </li>


                            </ul>
                        </li>

                    </ul>
           
 </li>
</ul>

               
   
        </div>
    