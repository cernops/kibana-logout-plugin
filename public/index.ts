import './index.scss';

import { KibanaLogoutPluginPlugin } from './plugin';

// This exports static code and TypeScript types,
// as well as, Kibana Platform `plugin()` initializer.
export function plugin() {
  return new KibanaLogoutPluginPlugin();
}
export { KibanaLogoutPluginPluginSetup, KibanaLogoutPluginPluginStart } from './types';
