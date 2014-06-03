/*
'use strict';

angular.module('mean.posts', []);
//https://gibbon.co/huigvanderwaal/mean-stack/an-introduction-to-the-mean-stack?playlist=8be13a6b-9828-4195-b02e-75e2a848f5f9

*/

'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Posts = new Module('posts');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Posts.register(function(app, auth, database) {

    //We enable routing. By default the Package Object is passed to the routes
    Posts.routes(app, auth, database);

    //We are adding a link to the main menu for all authenticated users
    Posts.menus.add({
        'roles': ['authenticated'],
        'title': 'Posts',
        'link': 'all articles'
    });
    Posts.menus.add({
        'roles': ['authenticated'],
        'title': 'Create New Posts',
        'link': 'create article'
    });

    /*
     //Uncomment to use. Requires meanio@0.3.7 or above
     // Save settings with callback
     // Use this for saving data from administration pages
     Articles.settings({'someSetting':'some value'},function (err, settings) {
     //you now have the settings object
     });

     // Another save settings example this time with no callback
     // This writes over the last settings.
     Articles.settings({'anotherSettings':'some value'});

     // Get settings. Retrieves latest saved settigns
     Articles.settings(function (err, settings) {
     //you now have the settings object
     });
     */
    //Posts.aggregateAsset('css', 'articles.css');

    return Posts;
});
