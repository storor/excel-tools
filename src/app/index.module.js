/* global moment:false, XLSX:false*/
import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { ToolsController } from './components/tools/tools.controller';
import { ExcelService } from './shared/excel/excel.service';

angular.module('saveUp', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ui.router', 'ngFileUpload'])
  .constant('moment', moment)
  .constant('xlsx', XLSX)
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .controller('ToolsController', ToolsController)
  .service('excelService', ExcelService);
