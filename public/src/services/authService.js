angular.module('VitrinaApp').service('authService', ['$location', 'idFactory', '$http', 'userService', function ($location, idFactory, $http, userService) {
	this.setLogged = function (secret, remember) {
		$http.post('/api/dapps/' + idFactory + '/api/openAccount', {
			secret: secret
		}).then(function (resp) {
			if (resp.data.success) {
				var user = resp.data.response.account;
				user.secret = remember ? secret: null;
				userService.setUser(user);

				this.isLogged = true;
				$location.path( "/tokens" );
			}
		}.bind(this));
	}

	this.setUnlogged = function () {
		userService.clearUser();
		this.isLogged = false;
		$location.path( "/login" );
	}
}]);
