(function(){
    "use strict";
    var module=angular.module("psMovies");

    module.component("movieDetails",{
        templateUrl:"/app/movie-details.component.html",

        $routeConfig:[
            {path:"/overview",component:"movieOverview",name:"Overview"},
            {path:"/cast",component:"movieCast",name:"Cast"},
            {path:"/director",component:"movieDirector",name:"Director"},
            
        ],




        controllerAs:"model",
        controller:function(){
            var model=this;
            model.$routerOnActivate=function(next){
                model.id=next.params.id;
            }
        }
    })
    module.component("movieOverview",{
        template:"from overview"
    });

    module.component("movieCast",{
        template:"from movieCast"
    });

    module.component("movieDirector",{
        template:"from movieDirector"
    });


}());