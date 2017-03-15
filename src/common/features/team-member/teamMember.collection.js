'use strict';

import {TeamMemberModel} from './teamMember.model';

export class TeamMemberCollection {
    constructor(collectionName) {
        this.collectionName = collectionName;
        this.isTeamSelected = false;
        this.isLoaded = 'noooo';
        this.members = [];
    }

    /**
     * Add member from team
     * @param {TeamMemberModel} member
     * @returns {TeamMemberCollection}
     */
    addMember(member) {
        if (member instanceof TeamMemberModel) {
            this.members.push(member);
        }
        
        return this;
    }

    /**
     * Delete member from team
     * @param {TeamMemberModel} member
     * @returns {TeamMemberCollection}
     */
    deleteMember(team) {
        if (team instanceof TeamMemberModel) {
            this.members.remove(team);
        }
        return this;
    }
}
