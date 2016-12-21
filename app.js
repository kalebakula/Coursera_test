(function()
{
    'use strict'

    angular.module('myApp',[])

    .controller('myController',myController);

    function myController($scope)
    {
        $scope.foodItems="";
        $scope.message="";
        $scope.checkForItems=function()
        {
            var items=[];
            items=$scope.foodItems.split(',').filter(function(el) {return el.length != 0});
           
            var empties = items.filter(function(el) {return el ==" "}).length
            if(empties)
            $scope.message="Please fill empty food item name";
            else{
            console.log('items:'+items.length);
            if(items.length >3)
                $scope.message="Too much!"; 
            else if( items.length==0)
            $scope.message="Please enter data first";
            else
                $scope.message="Enjoy!";
            }
              
              

        }

    }

})();