export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('excel', {
      url: '/',
      templateUrl: 'app/components/tools/tools.html',
      controller: 'ToolsController',
      controllerAs: 'controller'
    });

  $urlRouterProvider.otherwise('/');
}
