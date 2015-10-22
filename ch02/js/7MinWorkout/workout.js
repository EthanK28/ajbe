function Excercise(args) {
    this.name = args.name;
    this.title = args.title;
    this.description = args.description;
    this.image = args.image;
    this.related = {};
    this.related.videos = args.videos;
    this.nameSound = args.nameSound;
    this.procedure = args.procedure;
};

function WorkoutPlan(args) {
    this.exercises = [];
    this.name = arg.name;
    this.title = args.title;
    this.restBetweenExercise = args.restBetweenExercise;
};


angular.module('7minWorkout').controller('WorkoutController',
    ['$scope',function($scope){
        var restExcercise;
        var workoutPlan;
        var init = function() {
            startWorkout()
        };

        var startWorkout = function() {
            workoutPlan = createWorkout();
            restExcercise = {
                details: new Excercise({
                    name: "rest",
                    title: " relax!",
                    description: " Relat a bit!",
                    image: "img/rest.png",
                }),
                duration: workoutPlan.restBetweenExercise;
            };
            startExercise(workoutPlan.exercises.shift());
        };

        var createWorkout  = function() {
            var workout = new workoutPlan({
                name: "7minWorkout",
                title: "7 Minute Workout",
                restBetweenExercise: 10
            });

            workout.exercises.push({
                details: new Excercise({
                    name: "jumpingJacks",
                    title: "Jumping Jacks",
                    description: "Jumping Jacks",
                    image: "img/jumpingJacks.png",
                    videos: [],
                    variations: [],
                    procedure: ""
                }),
                duration: 30
            });
            return workout;
        }

        var startExercise = function(excercisePlan) {
            
        }

        init();

    }]);
