import environment from './environment';
import {initialState} from './state';

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .feature('resources');

  console.log(initialState);

  aurelia.use.plugin('aurelia-store', {initialState});

  if (environment.debug) {
    aurelia.use.developmentLogging();
  }

  if (environment.testing) {
    aurelia.use.plugin('aurelia-testing');
  }

  aurelia.start().then(() => aurelia.setRoot());
}
