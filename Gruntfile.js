module.exports = function(grunt) {
    grunt.initConfig({
        exec: {
            echo_hello: 'echo "hello"'
        }
    });

    grunt.loadNpmTasks('grunt-exec');

    grunt.registerTask('default', ['exec']);
};
