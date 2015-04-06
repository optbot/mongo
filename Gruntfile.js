module.exports = function(grunt) {
    /**
     * shelljs : http://documentup.com/arturadib/shelljs
     * mongoDB : http://docs.mongodb.org/manual/tutorial/install-mongodb-on-ubuntu/
     */
    grunt.registerTask('default', function() {
        var shell = require('shelljs'),
            cmds = [
                'apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10',
                'echo "deb http://repo.mongodb.org/apt/ubuntu "$(lsb_release -sc)"/mongodb-org/3.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.0.list',
                'apt-get update',
                'apt-get install -y mongodb-org=3.0.1'
            ];
        
        cmds.forEach(function(cmd, i, arr) {
            shell.exec(cmd);
        });
    });
};
