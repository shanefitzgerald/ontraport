
var myApp = angular.module('myApp', []);

myApp.controller('usersCtrl', function( $scope, $http ){
	$http.get('data/users.json').success(function(data) {
    $scope.users = data;
  	});


});

myApp.controller('postCtrl', function($scope, $http){
	$http.get('data/posts.json').success(function(data) {
		$scope.posts = data;
	});
});

myApp.controller('testCtrl', function($scope, $http){
	$http.get('data/users.json').success(function(data) {
    	$scope.users = data;

  	});
  	$http.get('data/posts.json').success(function(data) {
  		$scope.posts = data;

  	});
  	$scope.item = [
  		{name: 'shane'},
  		{lname: 'fitzgerald'}
  	]
})

// $(document).ready(function {
// 	$.ajax({
// 	  dataType: "json",
// 	  url: 'data/posts.json',
// 	  success: function(posts) {
	  	
// 	  	$.ajax({
// 	  		dataType: "json",
// 	  		url: 'data/users.json',
// 	  		success: function(users) {
// 	  			console.log(posts);
// 	  			console.log(users);
// 	  			for (var i = 0; i < post.length; i++) {
// 	  				$('#postp').append(posts[i].content);
// 	  				$('#commentp').append(posts[i].comments.content);
// 	  				for (var j = 0; j < users.length; j++) {
// 	  					if ((users[j] + 1) === posts.userId ) {
// 	  						$('#postheading').append(users[j].username);
// 	  						$('#commentheading').append(users[j].username);
// 	  						$('#postpic').attr('src', users[j].pic);
// 	  					};
// 	  				}
// 	  			}
// 	  		}
// 	  	})
// 	  }
// 	});
// });