import { PreloadingStrategy, Route } from "@angular/router";
import { Observable,of } from "rxjs";

export class CustomPreloadStrategy implements PreloadingStrategy{
     preload(route: Route, fn: () => Observable<any>): Observable<any> {
        if (route.data['preload']) {
            return fn();
        }
        else{
            return of();
        }
    }

}