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
    addMember(member) {
        if (member instanceof TeamModel) {
            this.models.push(member);
        }
        
        return this;
    }
}