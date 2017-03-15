'use strict';

// dependencies
import angular from 'angular';

// controllers
import HomeController from './home.controller';
//import AccordionController from './accordion.controller';

// configurations
import {routeConfig} from './home.routes.config';

// styles
import './home.styles.scss';

export default angular
  .module('app.home', [])
  .controller('HomeController', HomeController)
  //.controller('AccordionController', AccordionController)
  .config(routeConfig);
 