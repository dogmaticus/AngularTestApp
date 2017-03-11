 'use strict';
 
 import {TeamMemberModel} from '../../common/features/team-member/teamMember.model';
 import {TeamMemberCollection} from '../../common/features/team-member/teamMember.collection';
 
 class HomeController {

    constructor($scope) {
        this.$scope = $scope;
        $scope.teams = [];
        var team = new TeamMemberCollection('DataArt1');
        var teamMember = new TeamMemberModel('John').addSkills(['JavaScript', 'AngularJS']);
        team.addMember(teamMember);

        $scope.teams.push(team);

        team = new TeamMemberCollection('Webpacj');
        teamMember = new TeamMemberModel('John').addSkills(['JavaScript', 'AngularJS']);
        team.addMember(teamMember);

        $scope.teams.push(team);

        team = new TeamMemberCollection('DreamTeam');
        teamMember = new TeamMemberModel('John').addSkills(['JavaScript', 'AngularJS']);
        team.addMember(teamMember);

        $scope.teams.push(team);

    }
}

HomeController.$inject = ['$scope'];

export default HomeController;
