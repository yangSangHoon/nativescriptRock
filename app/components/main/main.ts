
import { EventData } from 'data/observable';
import { Page } from 'ui/page';
import {MainModel} from "./MainModel";

export function navigatingTo2(args: EventData) {
    let page = <Page>args.object;  
    console.log(11);
    page.bindingContext = new MainModel(page);
}