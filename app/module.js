(function(){
    "use strict";
   var module=angular.module("psMovies",["ngComponentRouter"]);
    
    module.value("$routerRootComponent","movieApp");

    // function ConfigConfig($routeProvider){
    //     $routeProvider.html5Mode(true)
    //     $routeProvider.hashPrefix('!');
    // }
    module.component("appAbout",{
        template:"hello"
    })
}());