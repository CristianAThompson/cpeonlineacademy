module.exports = function(grunt) {
grunt.initConfig({
  image_resize: {
    resize: {
      options: {
        height: 200,
        width: 200
      },
      src: './*.(jpg|JPG|png|PNG)',
      dest: './resized/200/',
    },
  }
});

grunt.loadNpmTasks('grunt-image-resize');
grunt.registerTask('default', ['image_resize']);
};