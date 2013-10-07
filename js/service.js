angular.module('dataServices', ['ngResource']).
    factory('Lesson', function($resource){
  return $resource('data/:name.json', {}, {
    query: {method:'GET', params:{name:'lessons'} ,isArray:true},
    get: {method:'GET', params:{name:'lessons'} }
  });
}).factory('Config', function($resource){
  return $resource('data/config.json', {}, {
    get: {method:'GET' }
  });
})