var app = angular.module('caffeinehit.controllers', []);

app.controller("YelpController", function ($scope, YelpService) {
	$scope.yelp = YelpService;
    
    
    
    //Refresh Page
    $scope.doRefresh= function(){
        
        if(!$scope.yelp.isLoading){
            $scope.yelp.refresh().then(function(){
                $scope.$broadcast('scroll.refreshComplete');
            });
        }
    };
    
    
    
    //Scroll Infinite
    $scope.loadMore = function(){
        
        console.log("loadMore");
        if(!$scope.yelp.isLoading && $scope.yelp.hasMore){
            $scope.yelp.next().then(function(){
                $scope.$broadcast('scroll.infiniteScrollComplete');
            });
        }
    };
    
    
    $scope.getDirections=function(cafe){
        
      console.log("Getting Directions for car") ; 
        var destination=[
        cafe.location.coordinate.latitude, 
        cafe.location.coordinate.longitude];
        
        var source = [ 
            $scope.yelp.lat,
            $scope.yelp.lon
        ];
        
        launchnavigator.navigate(destination,source);
        
        
        
    };
    
    
    
    
    $scope.openMap=function(){
      console.log("Opening cafe in maps app");    
        
    };
    

        
    
    
    
    
});
