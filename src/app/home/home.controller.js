 'use strict';

 import {TeamMemberModel} from '../../common/features/team-member/teamMember.model';
 import {TeamMemberCollection} from '../../common/features/team-member/teamMember.collection';

 class HomeController {

    constructor($scope) {
        this.$scope = $scope;
        $scope.teamMember = new TeamMemberModel('John').addSkills(['JavaScript', 'AngularJS']);

        //accordion default settings
        $scope.oneAtATime = true;
        $scope.status = {
                 isFirstOpen: true,
                 isFirstDisabled: false
             };
        //

        $scope.teams =[];

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
        

        $scope.addItem = function() {
            var newItemNo = $scope.items.length + 1;
            $scope.items.push('Item ' + newItemNo);
        };

        // $scope.groups = [
        //     {
        //         title: 'Dynamic Group Header - 1',
        //         content: 'Dynamic Group Body - 1'
        //     },
        //     {
        //         title: 'Dynamic Group Header - 2',
        //         content: 'Dynamic Group Body - 2'
        //     }
        // ];
        //
        // $scope.items = ['Item 1', 'Item 2', 'Item 3'];
        //
         //$scope.addItem = function() {
         //    var newItemNo = $scope.items.length + 1;
         //    $scope.items.push('Item ' + newItemNo);
         //};
        //
        // $scope.status = {
        //     isFirstOpen: true,
        //     isFirstDisabled: false
        // };

    }
}

HomeController.$inject = ['$scope'];

export default HomeController;
