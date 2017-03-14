 'use strict';

 import {TeamMemberModel} from '../../common/features/team-member/teamMember.model';
 import {TeamMemberCollection} from '../../common/features/team-member/teamMember.collection';

 class HomeController {

    constructor($scope) {
        this.$scope = $scope;

        //accordion default settings
        $scope.newTeamName = '';
        $scope.oneAtATime = true;
        //

        $scope.teams = [];

        var team = new TeamMemberCollection('DataArt1');
        team.isSelected = true;
        var teamMember = new TeamMemberModel('John').addSkills(['JavaScript', 'AngularJS']);
        team.addMember(teamMember);
        $scope.teams.push(team);

        team = new TeamMemberCollection('Webpacj');
        teamMember = new TeamMemberModel('John').addSkills(['JavaScript', 'AngularJS']);
        team.addMember(teamMember);
        teamMember = new TeamMemberModel('John2').addSkills(['JavaScript2', 'Angular222JS']);
        team.addMember(teamMember);
        $scope.teams.push(team);

        team = new TeamMemberCollection('DreamTeam');
        teamMember = new TeamMemberModel('John').addSkills(['JavaScript', 'AngularJS']);
        team.addMember(teamMember);
        $scope.teams.push(team);
       
        $scope.addTeam = function(teamName) {
            var newTeam = new TeamMemberCollection(teamName);
            $scope.teams.push(newTeam);
        }
        //$scope.selectedTeam = $scope.teams[0];
        $scope.selectedTeam = function() {
            $scope.teams.map(value => { if (value.isSelected == true) return value });
        }
    }
}

HomeController.$inject = ['$scope'];

export default HomeController;
