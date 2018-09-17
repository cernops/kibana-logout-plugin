export default function (kibana) {
  return new kibana.Plugin({
    require: ['elasticsearch'],

    uiExports: {
      // Register the app component of our plugin to uiExports
      app: {
        // The title of the app (will be shown to the user)
        title: 'Logout',
        // An description of the application.
        description: 'An awesome Kibana plugin',
        // The require reference to the JavaScript file for this app
        main: 'plugins/elasticsearch_logout/app',
        // The require reference to the icon of the app
        icon: 'plugins/elasticsearch_logout/icon.png'
      }
    },
  });
};
