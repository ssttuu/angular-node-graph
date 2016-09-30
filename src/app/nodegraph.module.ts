import {NgModule, Renderer, RootRenderer} from "@angular/core";
import {NodeGraphComponent} from "./nodegraph";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {NodeGraphRenderer, NodeGraphRootRenderer} from "./nodegraph.renderer";

@NgModule({
    declarations: [
        NodeGraphComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
    ],
    providers: [
        {provide: RootRenderer, useClass: NodeGraphRootRenderer},
        {provide: Renderer, useClass: NodeGraphRenderer}
    ],
    bootstrap: [
        NodeGraphComponent
    ]
})
export class NodeGraphModule {

}
