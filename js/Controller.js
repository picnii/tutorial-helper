function HomeCtrl($scope, $rootScope, $location)
{
	console.log('hello');
}


function LessonCtrl($scope, $rootScope, $location, $routeParams, Lesson)
{
	$scope.lesson = Lesson.get({name:$routeParams.code},function(data){

		for(var i = 0 ;i < data.chapters.length ;i++)
		{
			data.chapters[i].videoId = data.chapters[i].code + "-video";
			data.chapters[i].seek = function(bookmark)
			{
				
				var vid = angular.element('#'+this.videoId)[0];
				vid.currentTime = bookmark.time;
				vid.play();
			}
		}
		
		
	});

	
}

function ChapterCtrl($scope, $rootScope, $location, $routeParams, Lesson)
{
	

}