'use strict';

// dependencies
import angular from 'angular';

// controllers
import AccordionController from './accordion.controller';

// configurations
//import {routeConfig} from './home.routes.config';

// styles
//import './home.styles.scss';

export default angular
    .module('app.accordion', [])
    .controller('AccordionController', AccordionController);
 