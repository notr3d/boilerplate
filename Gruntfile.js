'use strict';
 
module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');    
    grunt.initConfig({
        less: {
            development: {
                options: {
                    paths: ["less/"],
                },
                files: {
                    "css/style.css": "less/style.less"
                }
            },
        },
        watch: {
            files: "less/*.less",
            tasks: ["less"]
        },
    });
     grunt.registerTask('default', ['less:less']);
     grunt.registerTask('default', ['watch']);
};