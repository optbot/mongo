mongo
===
Install and run MongoDB.

Usage
---
### Basic
1.  Install `mongo` dependencies:
    
        $ npm install

2.  Build `mongo`:

        $ sudo grunt

### Uninstall
WARNING: Uninstalling this service will delete all mongoDB data on
the current server. Back up any important data to a different
server *before* uninstalling the service!!!!

    $ sudo grunt remove
        
### Other
-   Stop the mongoDB process:
        
        $ sudo grunt stopdb

-   Restart mongoDB:
   
        $ sudo grunt restartdb
