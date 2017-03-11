'use strict';

import {TeamModel} from './team.model';

export class TeamCollection {
    constructor(collectionName) {
        this.collectionName = collectionName;
        this.models = [];
    }

    /**
     * Add member
     * @param {TeamModel} member
     * @returns {TeamCollection}
     */
    addTeam(team) {
        if (team instanceof TeamModel) {
            this.models.push(team);
        }

        return this;
    }
}
