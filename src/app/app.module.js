'use strict';

// dependencies
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import uiBootstrap from 'angular-ui-bootstrap';
//import accordion from 'angular-ui-bootstrap/src/accordion';

// configurations
import {routesConfig} from './app.routes.config';

// modules
import '../common/common.module';
import './home/home.module';
import './about/about.module';
import './accordion/accordion.module';

// styles
import './app.styles.scss';

angular
  .module('app', [
    uiRouter,
    uiBootstrap,
    //accordion,
    'app.common',
    'app.home',
    'app.about',
    'app.accordion'
  ])
  .config(routesConfig);
