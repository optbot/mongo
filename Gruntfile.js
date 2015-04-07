module.exports = function(grunt) {
    /**
     * shelljs : http://documentup.com/arturadib/shelljs
     * mongoDB : http://docs.mongodb.org/manual/tutorial/install-mongodb-on-ubuntu/
     */
    var shell = require('shelljs');
    
    grunt.registerTask('stopdb', 'Stop the current db gracefully', function() {
        var cmds = ['service mongod stop']

        cmds.forEach(function(cmd, i, arr) {
            shell.exec(cmd);
        });
        
    });

    grunt.registerTask('restartdb', 'Restart mongoDB', function() {
        var cmds = ['service mongod start']

        cmds.forEach(function(cmd, i, arr) {
            shell.exec(cmd);
        });
        
    });

    grunt.registerTask('default', function() {
        var cmds = [
                'mkdir -p /mnt/disk1/var/lib/mongodb',
                'chown mongodb:mongodb /mnt/disk1/var/lib/mongodb',
                'ln -s /mnt/disk1/var/lib/mongodb /var/lib',
                'mkdir -p /mnt/disk1/var/log/mongodb',
                'chown mongodb:mongodb /mnt/disk1/var/log/mongodb',
                'ln -s /mnt/disk1/var/log/mongodb /var/log',
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
