'use strict';

import angular from 'angular';

import {TeamModel} from './team.model';
import {TeamCollection} from './team.collection';
// services
import {TeamService} from './team.service';

angular.module('app.common.features.team', [
    ])
    .factory('TeamModel', TeamModel)
    .factory('TeamCollection', TeamCollection)
    .service('TeamService', TeamService);
