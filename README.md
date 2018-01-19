# Esritest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.5.

This test project demonstrates the use of the esri loader, which is a major break in the normal work flow of a typical angular project.

This project demonstrates the use of a local arcgis api implementation.  This was built in esri, downloaded to be served on a node http-server on local machine

1.  Download SDK
2.  Unzip and install in local directory
3.  Use http-server (get it by npm i http-server -g) at https://www.npmjs.com/package/http-server
4.  Tweak the dojo/dojo.js and init.js to point to your base directory for the 3.x or 4.x directory
    Open C:\Inetpub\wwwroot\arcgis_js_api\library\4.6\dojo\dojo.js in a text editor and search for the text [HOSTNAME_AND_PATH_TO_JSAPI], and replace this text with  www.example.com/arcgis_js_api/library/4.6/.
    Open C:\Inetpub\wwwroot\arcgis_js_api\library\4.6\init.js in a text editor and search for the text [HOSTNAME_AND_PATH_TO_JSAPI], and replace this text with  www.example.com/arcgis_js_api/library/4.6/.
5.  go to .../arcgis_js_api/library and run http-server at command line, no options
6.  point to http://localhost:8080 or other port
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
