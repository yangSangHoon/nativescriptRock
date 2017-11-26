import buttonModule = require("ui/button");
import {Observable} from 'data/observable';
import RockUser from './RockUser';
import {setSelected} from './RockModel';

import { EventData } from 'data/observable';
import { Page } from 'ui/page';
import { RockModel } from './RockModel';

// Event handler for Page "navigatingTo" event attached in main-page.xml
export function navigatingTo(args: EventData) {
    let page = <Page>args.object;
 
    page.bindingContext = new RockModel(page);
}

