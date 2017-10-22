module.exports = function(grunt) {

    grunt.initConfig({
        responsive_images: {
            options: {
                // task specific options
                engine: 'im',   // ImageMagick engine
                sizes: [{
                    width: 320,
                    quality: 35
                },{
                    width: 640,
                    quality: 50
                },{
                    width: 1024,
                    quality: 80
                }]
            },
            target1: {
                files: [{
                    // target1 specific files
                    expand: true,
                    cwd: 'images/src/',
                    src: ['*.{jpg,gif,png}'],
                    dest: 'images/responsive/'
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-responsive-images');

    grunt.registerTask('default', ['responsive_images']);

};
