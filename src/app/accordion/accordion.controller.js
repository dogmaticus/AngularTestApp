'use strict';

class AccordionController {
	constructor($scope) {
		this.$scope = $scope;
        
		$scope.$watch('team.isTeamSelected', function (newvalue, oldvalue, scope) {
			debugger;
			if (newvalue) {
				$scope.isLoaded = newvalue;
				$scope.selectedTeam = scope.team;
		    }
		    
		});
    }
}

AccordionController.$inject = ['$scope'];

export default AccordionController;