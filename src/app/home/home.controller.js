 'use strict';

 import {TeamMemberModel} from '../../common/features/team-member/teamMember.model';
 import {TeamMemberCollection} from '../../common/features/team-member/teamMember.collection';

 class HomeController {

     constructor($scope, AccordionController) {
        this.$scope = $scope;

        //accordion default settings
        $scope.newTeamName = '';
        $scope.oneAtATime = true;
        //
        $scope.isLoaded = "Nooooo";
        $scope.teams = [];

        var team = new TeamMemberCollection('DataArt1');
        
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
    }
}

 HomeController.$inject = ['$scope'];

export default HomeController;
