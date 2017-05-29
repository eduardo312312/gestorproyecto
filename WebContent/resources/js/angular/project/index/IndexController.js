
app.controller('IndexController', function ($scope) {

	
	
	$scope.saveproject=function()	
	{
		var projectid=1;//por ahora, luego sera para crear varios proyectos
		
		var task_send = {
				id : taskid,
				name : $scope.task.name,
				description: $scope.task.description,
				comment:$scope.task.comment ,
				state : {id:stateid},
				startdate : systemdate ,
				enddate: systemdate,
				createdate: systemdate ,
				estimatehour:$scope.task.estimatehour,
				realhour : $scope.task.realhour,
				businessubjectByBusinesssubjectcreatorid:{
					id:businesssubjectcreatorid
				},
				businessubjectByBusinesssubjectresponsableid : {
					id : businesssubjectresponsableid
				},
				businessubjectByBusinesssubjectmodifierid:
				{
					id:businesssubjectmodifierid
				},
				changedate : systemdate,
				shortname : $scope.task.shortname,
				updateat : systemdate,
				activity : {
					id : $scope.task.activityid
				},
				realamount : $scope.task.realamount,
				estimateamount : $scope.task.estimateamount

			}

			var params_task = {
				task : task_send
			};
		TaskService.save_task(
				params_task).success(
					function(data) {
						if(data)
						$scope.list();

					});
		
		
	}
	


});


		