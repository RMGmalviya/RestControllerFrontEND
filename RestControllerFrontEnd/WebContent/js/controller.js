app.controller('PersonController',function($scope,PersonService){
	console.log('entering the controller')
	$scope.persons;
	$scope.person={personId:'',name:'',email:'',phoneno:'',dob:''}
	//this function will not be called by any HTML page
	function fetchAllPersons(){
		console.log('entering fetchall persons in controller')
		PersonService.fetchAllPersons().then(
				function(d){
					$scope.persons=d;
				},
				function(error){
					console.log(error);
				}
		)
	}

	fetchAllPersons();
	$scope.save=function(){
		console.log('entering the function save in person controller')
		PersonService.savePerson($scope.person).then(
		function(d){
			console.log(d.status)
			fetchAllPersons();
			$location.path('/listOfPersons');
		}	,
		function(d){
			console.log(d.status)
			$scope.status="Unable to insert person details";
		}
		);
	}

	$scope.deletePerson=function(id){
		console.log("entering delete in controller with id"+id)
		PersonService.deletePerson(id)
		.then(
				function(d){
			console.log('deleted successfully')
			console.log(d)
			fetchAllPersons();
			$location.path('/listOfPersons')
		},function(){
			console.log("unable to delete the record")
		})
	}
	
})