import uiRoutes from 'ui/routes';

import 'ui/autoload/styles';
import overviewTemplate from './templates/index.html';

uiRoutes.enable();

uiRoutes
.when('/', {
  template: overviewTemplate,
  controller: 'elasticsearchLogoutController',
  controllerAs: 'ctrl'
});

