/* global module */
/*
 * svgenie
 * https://github.com/Causata/svgenie
 *
 * Copyright (c) 2013 Causata Ltd
 * Licensed under the MIT license.
 */

module.exports = function(grunt) {
    "use strict";
    
    // Project configuration.
    grunt.initConfig({
        jshint: {
            all: ['**/*.js','!node_modules/**'],
            options: {
                jshintrc: '.jshintrc'
            }
        },

        // Unit tests.
        nodeunit: {
            tests: ['test/*_test.js']
        }

    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');

    // Whenever the "test" task is run, first clean the "tmp" dir, then run this
    // plugin's task(s), then test the result.
    grunt.registerTask('test', ['nodeunit']);

    // By default, lint and run all tests.
    grunt.registerTask('default', ['jshint', 'test']);

};
