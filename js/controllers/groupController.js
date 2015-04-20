var myApp = angular.module('appRelatedEditor');
myApp.controller('groupController', function($scope) {
 
  $scope.group = {
          
        name: 'Перевязочные материалы',
        id:   258,
        type: 'Сопутсвующие',
        isTransit: 'true',
        lastUpdate: '2015-08-02 21:22:14'
        }
    
   $scope.content =     [
                 {name: 'Цитрамон',
                 type: "Product",
                 id: 25},
                 {name: 'Farmacitrons',
                 type: "ClassGroup",
                 id: 252},
                 {name: 'Lekarstva',
                 type: "Group",
                 id: 6532}
                 ];        
}
);