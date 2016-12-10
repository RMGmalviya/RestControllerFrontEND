app.factory('PersonService',function($http){
	var BASE_URL="http://localhost:8081/RestController";
	var personService=this;
	personService.fetchAllPersons=function(){
		console.log('entering fetchallpersons in service')
	
		return $http.get("http://localhost:8081/RestController/person")
		.then(function(response){
			
			console.log(response.data)
			console.log(response.status)
			return response.data
			
		},
		function(response){
			console.log(response.data)
			return response.data
		})
	};
	
	personService.savePerson=function(person){
		console.log('entering save person in service')
		 return $http.post(BASE_URL + "/person",person)
		.then(function(response){
			console.log(response.status)
			console.log(response.headers.location)
			return response.status
		},function(reponse){
			console.log(response.status)
			return response.status
		})
	}
	personService.deletePerson=function(id){
		console.log("entering delete person in service with id"+id);
		return $http.delete(BASE_URL+"/person/"+id)
		.then(function(response){
			console.log(response.status)
			return response.status;
		},function(response){
			console.log(response.status)
		});
	};
	personService.getPerson=function(id){
		return $http.get(BASE_URL+"/person/"+id)
	};
	personService.updatePerson=function(personId,person){
		console.log('update person in service')
		console.log('person id'+personId)
		return $http.put(BASE_URL+"/person/"+personId,person);
	}
	
	return personService;

})