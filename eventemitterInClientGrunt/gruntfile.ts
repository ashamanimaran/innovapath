module.exports = function (grunt:IGrunt) {
   grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-express-server');

    grunt.initConfig({
        uglify: {
            dist: {
                src: ["myemitter.js", "app.js"],
                dest: "allfiles-min.js"
            }
        },
        browserify: {
            main: {
                src: 'allfiles-min.js',
                dest: 'bundle.js'
            }            
        },
        watch: {
                files: ["myemitter.js", "app.js"],
                tasks: ['uglify:dist', 'browserify:main']
            },
            express: {
            dev: {
                options: {
                    script: 'server.js',
                }
            }
            }
 });
grunt.registerTask('default', '', function() {
    var taskList = [
        'express',
        'watch'
    ];
    grunt.task.run(taskList);
});
};