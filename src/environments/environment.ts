// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
      apiKey: 'AIzaSyBm7KBzmZ_1lYNKSf0uEGD1WXyLhhKGVHw',
      authDomain: 'prz-test.firebaseapp.com',
      databaseURL: 'https://prz-test.firebaseio.com',
      projectId: 'prz-test',
      storageBucket: 'prz-test.appspot.com',
      messagingSenderId: '1000711935459'
  }
};
