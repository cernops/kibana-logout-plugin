import { NavigationPublicPluginStart } from '../../../src/plugins/navigation/public';

export interface KibanaLogoutPluginPluginSetup {
  getGreeting: () => string;
}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface KibanaLogoutPluginPluginStart {}

export interface AppPluginStartDependencies {
  navigation: NavigationPublicPluginStart;
}
