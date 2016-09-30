import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {NodeGraphModule} from './app/nodegraph.module';

platformBrowserDynamic().bootstrapModule(NodeGraphModule)
  .catch(err => console.error(err));
