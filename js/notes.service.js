App.factory('Notes',function(){
    var notes={};
    notes.query = function(){
      return [{name:"CSS",id:"css",notes: [{
    title:'Bootstrap',
    intro:'Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web. ',
    tags:['css','JavaScript','Responsive'],
    website:'http://getbootstrap.com/',
    github:'https://github.com/twbs/bootstrap',
    cdn:['https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css','https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap-theme.min.css','https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js'],
    bower:'bower install bootstrap',
    npm:'npm install bootstrap'
  },
  {
    title:'Foundation',
    intro:'The most advanced responsive front-end framework in the world. Quickly create prototypes and production code for sites and apps that work on any kind of device.',
    tags:['css','JavaScript','Responsive'],
    website:'http://foundation.zurb.com/',
    github:'https://github.com/zurb/foundation',
    cdn:['https://cdnjs.cloudflare.com/ajax/libs/foundation/5.5.2/css/foundation.css','https://cdnjs.cloudflare.com/ajax/libs/foundation/5.5.2/css/foundation.min.css',
    'https://cdnjs.cloudflare.com/ajax/libs/foundation/5.5.2/js/foundation.js','https://cdnjs.cloudflare.com/ajax/libs/foundation/5.5.2/js/foundation.min.js'],
    bower:'bower install foundation',
    npm:'npm install foundation-sites'
  },
  {
    title:'Less',
    intro:'Less is a CSS pre-processor, meaning that it extends the CSS language, adding features that allow variables, mixins, functions and many other techniques that allow you to make CSS that is more maintainable, themable and extendable.',
    tags:['css','pre-processor'],
    website:'http://lesscss.org/',
    github:'https://github.com/less/less.js',
    cdn:['https://cdnjs.cloudflare.com/ajax/libs/less.js/2.5.3/less.js','https://cdnjs.cloudflare.com/ajax/libs/less.js/2.5.3/less.min.js'],
    bower:'bower install less',
    npm:'npm install -g less'
  },
  {
    title:'Sass',
    intro:'Sass is an extension of CSS, adding nested rules, variables, mixins, selector inheritance, and more. It\'s translated to well-formatted, standard CSS using the command line tool or a web-framework plugin.',
    tags:['css','pre-processor'],
    website:'http://sass-lang.com/',
    github:'https://github.com/sass/sass'
  },
  {
    title:'Compass',
    intro:'Compass is a Stylesheet Authoring Environment that makes your website design simpler to implement and easier to maintain',
    tags:['css','environment'],
    website:'http://compass-style.org',
    github:'https://github.com/Compass/compass'
  },
  { 
    title:'Semantic UI',
    intro:'Semantic is a development framework that helps create beautiful, responsive layouts using human-friendly HTML. It have concise HTML, intuitive JavaScript and also simplified debugging process',
    tags:['css','JavaScript','Responsive'],
    website:'http://semantic-ui.com/',
    github:'https://github.com/Semantic-Org/Semantic-UI',
    cdn:['https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/1.11.8/semantic.min.css','https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/1.11.8/semantic.min.js'],
    bower:'bower install semantic-ui',
    npm:'npm install semantic-ui'
  },
  {
    title:'Animate.css',
    intro:'Animate.css is a bunch of cool, fun, and cross-browser animations for you to use in your projects. Great for emphasis, home pages, sliders, and general just-add-water-awesomeness.',
    tags:['css','animation','transitions'],
    website:'https://daneden.github.io/animate.css/',
    github:'https://github.com/daneden/animate.css'
  },
  {
    title:'Effeckt.css',
    intro:'Effeckt.css is a performant transitions and animations library. The best opportunities to getting jank-free transitions on phones/tablets are CSS transition and keyframe animation based, especially tapping into hardware-accelerated transforms and opacity changes.',
    tags:['css','animation','transitions'],
    website:'http://h5bp.github.io/Effeckt.css/',
    github:'https://github.com/h5bp/Effeckt.css'
  },
  {
    title:'Hover.css',
    intro:'Hover.css is a collection of CSS3 powered hover effects to be applied to links, buttons, logos, SVG, featured images and so on. Easily apply to your own elements, modify or just use for inspiration. Available in CSS, Sass, and LESS.',
    tags:['css','animation','transition'],
    website:'http://ianlunn.github.io/Hover/',
    github:'https://github.com/IanLunn/Hover',
    bower:'bower install Hover',
    npm:'npm install --save hover.css'
  },
  {
    title:'Normalize.css',
    intro:'Normalize.css makes browsers render all elements more consistently and in line with modern standards. It precisely targets only the styles that need normalizing.',
    tags:['css','normalizing element'],
    website:'https://necolas.github.io/normalize.css/',
    github:'https://github.com/necolas/normalize.css',
    cdn:['https://cdnjs.cloudflare.com/ajax/libs/normalize/3.0.3/normalize.css','https://cdnjs.cloudflare.com/ajax/libs/normalize/3.0.3/normalize.min.css'],
    bower:'bower install normalize.css',
    npm:'npm install normalize.css',
    component:'component install necolas/normalize.css'
  },
  {
    title:'Font-Awesome',
    intro:'Font Awesome is a full suite of 585 pictographic icons for easy scalable vector graphics on websites, created and maintained by Dave Gandy.',
    tags:['css','font','icon'],
    website:'https://fortawesome.github.io/Font-Awesome/',
    github:'https://github.com/FortAwesome/Font-Awesome',
    component:'component install FortAwesome/Font-Awesome'
  },
  {
    title:'Google Font',
    intro:'The Google Fonts API helps you add fonts to any web page. Benefits of the Google Fonts API include: A choice of high quality open source fonts; Works in most browsers; Extremely easy to use..',
    tags:['css','font'],
    website:'https://www.google.com/fonts',
    github:'https://github.com/google/fonts'
  }]}
  ,
  {name:"JavaScript",id:"js",notes:[
  {
    title:'Jquery',
    intro:'jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers.',
    tags:['JavaScript','DOM','event handling'],
    website:'https://jquery.com/',
    github:'https://github.com/jquery/jquery',
    cdn:['https://code.jquery.com/jquery-1.11.3.min.js','https://code.jquery.com/jquery-migrate-1.2.1.min.js'],
    bower:'bower install jquery',
  },
  {
    title:'impress.js',
    intro:'It\'s a presentation framework based on the power of CSS3 transforms and transitions in modern browsers and inspired by the idea behind prezi.com.',
    tags:['css','presentation'],
    website:'http://impress.github.io/impress.js/#/bored',
    github:'https://github.com/impress/impress.js?utm_source=twitterfeed&utm_medium=twitter',
    cdn:['https://netdna.impressjscdn.com/impressjs/0.5.3/js/impress.js']
  },
  {
    title:'Require.js',
    intro:'RequireJS is a JavaScript file and module loader. It is optimized for in-browser use, but it can be used in other JavaScript environments, like Rhino and Node.',
    tags:['JavaScript','module'],
    website:'http://requirejs.org/',
    github:'https://github.com/jrburke/requirejs',
    cdn:['https://cdnjs.cloudflare.com/ajax/libs/require.js/2.1.8/require.js','https://cdnjs.cloudflare.com/ajax/libs/require.js/2.1.8/require.min.js'],
    npm:'npm install requirejs'
  },
  {
    title:'METEOR',
    intro:'Meteor is a complete open source platform for building web and mobile apps in pure JavaScript. Meteor helps provide delightful user experience and fast & fun development',
    tags:['JavaScript','UI','Mobile'],
    website:'https://www.meteor.com/',
    github:'https://github.com/meteor/meteor/'
  },
  {
    title:'Handlebars.js',
    intro:'Handlebars provides the power necessary to let you build semantic templates effectively with no frustration.'+
          'Handlebars is largely compatible with Mustache templates. In most cases it is possible to swap out Mustache with Handlebars and continue using your current templates. ',
    tags:['JavaScript','semantic','templates'],
    website:'http://handlebarsjs.com/',
    github:'https://github.com/wycats/handlebars.js#differences-between-handlebarsjs-and-mustache',
    cdn:['https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.3/handlebars.js','https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.3/handlebars.min.js'],
    bower:'bower install --save handlebars',
    npm:'npm install --save handlebars'
  },
  {
    title:'Underscore.js',
    intro:'Underscore is a JavaScript library that provides a whole mess of useful functional programming helpers without extending any built-in objects.',
    tags:['JavaScript','functions'],
    website:'http://underscorejs.org/',
    github:'https://github.com/jashkenas/underscore',
    cdn:['https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore.js','https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min.js','https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min.map'],
    bower:'bower install underscore',
    npm:'npm install underscore',
    component:'component install jashkenas/underscore'
  },
  {
    title:'lodash.js',
    intro:'A JavaScript utility library delivering consistency, modularity, performance, & extras.',
    tags:['JavaScript','functions'],
    website:'https://lodash.com/',
    githusb:'https://github.com/lodash/lodash/',
    cdn:['https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.10.1/lodash.js','https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.10.1/lodash.min.js'],
    bower:'bower install lodash',
    component:'component install lodash'
  }

  ]},
  {
    name:'MV* Frameworks',id:'framework',notes:[
   {
     title:'AngularJS',
     intro:'AngularJS lets you write client-side web applications as if you had a smarter browser. It lets you use good old HTML (or HAML, Jade and friends!) as your template language and lets you extend HTML’s syntax to express your application’s components clearly and succinctly.',
     tags:['MVC','Directive','Data Binding'],
     website:'https://angularjs.org/',
     github:'https://github.com/angular/angular.js',
     cdn:['https://ajax.googleapis.com/ajax/libs/angularjs/1.4.6/angular.js','https://ajax.googleapis.com/ajax/libs/angularjs/1.4.6/angular.min.js'],
     bower:'bower install angular#1.4.6',
     npm:'npm install angular@1.4.6'
   },
   {
    title:'EmberJS',
    intro:'Ember.js is a JavaScript framework that does all of the heavy lifting that you\'d normally have to do by hand.',
    tags:['MVC','Route','template'],
    website:'http://emberjs.com/',
    github:'https://github.com/emberjs/ember.js',
    cdn:['http://builds.emberjs.com/release/ember.js','http://builds.emberjs.com/release/ember.min.js','http://builds.emberjs.com/release/ember.prod.js','http://builds.emberjs.com/release/ember-template-compiler.js','http://builds.emberjs.com/release/ember.debug.js'],
    bower:'bower install ember --save',    
    npm:'npm install -g ember-cli'
   },
   {
    title:'Backbone.js',
    intro:'Backbone.js gives structure to web applications by providing models with key-value binding and custom events, collections with a rich API of enumerable functions, views with declarative event handling, and connects it all to your existing API over a RESTful JSON interface.',
    tags:['MVC','Event','Model','Collection'],
    website:'http://backbonejs.org/',
    github:'https://github.com/jashkenas/backbone',
    cdn:['https://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.0.0/backbone-min.js','https://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.0.0/backbone-min.map','https://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.0.0/backbone.js'],
    npm:'npm install backbone'
   },
    {
      title:'KnoutoutJS',
      intro:'Knockout is a JavaScript MVVM (a modern variant of MVC) library that makes it easier to create rich, desktop-like user interfaces with JavaScript and HTML. ',
      tags:['MVVM','UI','Data Binding'],
      website:'http://knockoutjs.com/',
      github:'https://github.com/knockout/knockout',
      cdn:['https://cdnjs.cloudflare.com/ajax/libs/knockout/3.3.0/knockout-min.js','http://ajax.aspnetcdn.com/ajax/knockout/knockout-3.1.0.js'],
      bower:'bower install knockout'
    },
      {
    title:'React.js',
    intro:'React is a JavaScript library for creating user interfaces by Facebook and Instagram. Many people choose to think of React as the V in MVC.'+
'React was built to help building large applications with data that changes over time.',
    tags:['JavaScript','UI','DOM','DataFlow'],
    website:'https://facebook.github.io/react/',
    github:'https://github.com/facebook/react',
    cdn:['https://fb.me/react-0.13.3.js','https://fb.me/JSXTransformer-0.13.3.js'],
    bower:'bower install --save react'
  }]},
   {name:'Development Aid',id:'dev',notes:[
   {
    title:'npm',
    intro:'npm is the package manager for javascript.',
    tags:['Node.js','Package manager'],
    website:'https://www.npmjs.com/',
    github:'https://github.com/npm/npm'
   },
   {
    title:'Bower',
    intro:'A package manager for the web. Bower works by fetching and installing packages from all over, taking care of hunting, finding, downloading, and saving the stuff you’re looking for.',
    tags:['Package manager'],
    website:'http://bower.io/',
    github:'https://github.com/bower/bower',
    npm:'npm install -g bower'
   },
   {
    title:'Grunt',
    intro:'Grunt is a Javascript task runner helps you performing repetitive tasks like minification, compilation, unit testing, linting, etc, make your job becomes easier',
    tags:['Build tool','task runner'],
    website:'http://gruntjs.com/',
    github:'https://github.com/gruntjs/',
    npm:'npm install grunt'
   },
   {
    title:'Yeoman',
    intro:'The Yeoman workflow is comprised of three core tools for improving your productivity and satisfaction when building a web app. These tools are: yo - the scaffolding tool from Yeoman; A package manager, such as bower or npm; '+
'A build tool, such as Grunt or Gulp.',
    tags:['Scaffolding','Generator'],
    website:'http://yeoman.io/',
    github:'https://github.com/yeoman/yeoman',
    npm:'npm install -g yo'
   },
  {
    title:'Html5-boilerplate',
    intro:'The web’s most popular front-end template: HTML5 Boilerplate helps you build fast, robust, and adaptable web apps or sites. Kick-start your project with the combined knowledge and effort of 100s of developers, all in one little package.',
    tags:['template'],
    website:'https://html5boilerplate.com/',
    github:'https://github.com/h5bp/html5-boilerplate'
  },
  {
    title:'Jasmine',
    intro:'Jasmine is a Behavior Driven Development testing framework for JavaScript. It does not rely on browsers, DOM, or any JavaScript framework. Thus it\'s suited for websites, Node.js projects, or anywhere that JavaScript can run.',
    tags:['test','Behavior-driven'],
    website:'http://jasmine.github.io/2.0/introduction.html',
    github:'https://github.com/jasmine/jasmine',
    cdn:['https://cdnjs.cloudflare.com/ajax/libs/jasmine/2.3.4/boot.min.js','https://cdnjs.cloudflare.com/ajax/libs/jasmine/2.3.4/jasmine-html.min.js','https://cdnjs.cloudflare.com/ajax/libs/jasmine/2.3.4/jasmine.min.css','https://cdnjs.cloudflare.com/ajax/libs/jasmine/2.3.4/jasmine.min.js'],
    npm:'npm install -g jasmine'
  },
  {
    title:'Karma',
    intro:'A simple tool that allows you to execute JavaScript code in multiple real browsers. The main purpose of Karma is to make your test-driven development easy, fast, and fun.',
    tags:['unit test','test-driven'],
    website:'http://karma-runner.github.io/0.13/index.html',
    github:'https://github.com/karma-runner/karma',
    npm:'npm install karma --save-dev'
  },
  {
    title:'QUnit',
    intro:'QUnit is a powerful, easy-to-use JavaScript unit testing framework. It\'s used by the jQuery, jQuery UI and jQuery Mobile projects and is capable of testing any generic JavaScript code, including itself!',
    tags:['unit test','test-driven'],
    website:'http://qunitjs.com/',
    github:'https://github.com/jquery/qunit',
    cdn:["http://code.jquery.com/qunit/qunit-1.20.0.js","http://code.jquery.com/qunit/qunit-1.20.0.css"],
    npm:"npm install --save-dev qunitjs",
    bower:'bower install --save-dev qunit'
  },
  {
    title:'Protractor',
    intro:'Protractor is an end-to-end test framework for AngularJS applications. Protractor runs tests against your application running in a real browser, interacting with it as a user would.',
    tags:['end-to-end test'],
    website:'https://angular.github.io/protractor/#/',
    github:'https://github.com/angular/protractor',
    npm:'npm install -g protractor'
  }
   ]},
   {
    name:"Node.js",id:"node", notes:[
     {
    title:'Node.js',
    intro:'Node.js® is a JavaScript runtime built on Chrome\'s V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. Node.js\' package ecosystem, npm, is the largest ecosystem of open source libraries in the world.',
    tags:['JavaScript','Server','Asynchronous'],
    website:'https://nodejs.org/en/',
    github:'https://github.com/nodejs/node'
  },
    {
    title:'Express.js',
    intro:'Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.',
    tags:['JavaScript','Node.js','Route'],
    website:'http://expressjs.com/',
    github:'https://github.com/strongloop/express',
    npm:'npm install express --save'
  },
  {
    title:'Request',
    intro:'Request is designed to be the simplest way possible to make http calls. It supports HTTPS and follows redirects by default.',
    tags:['Node.js','http calls'],
    website:'https://github.com/request/request',
    github:'https://github.com/request/request',
    npm:'npm install request'
  },
  {
    title:'Socket.io',
    intro:'Socketio is a Realtime application framework based on Node.JS server. Socketio featuring the fastest and most reliable real-time engine',
    tags:['Node.js','real-time'],
    website:'http://socket.io/',
    github:'https://github.com/socketio/socket.io/'
  }
    
    ]
   },
   {
    name:"Databases",id:"db",notes:[
   {
    title:"Redis",
    intro:'Redis is an in-memory database that persists on disk. The data model is key-value, but many different kind of values are supported: Strings, Lists, Sets, Sorted Sets, Hashes, HyperLogLogs, Bitmaps.',
    tags:['NoSQL'],
    website:"http://redis.io/",
    github:"https://github.com/antirez/redis",
  },
  {
    title:"Rethinkdb",
    intro:'RethinkDB is the first open-source scalable database built for realtime applications. It exposes a new database access model -- instead of polling for changes, the developer can tell the database to continuously push updated query results to applications in realtime. ',
    tags:['NoSQL'],
    website:'http://rethinkdb.com/',
    github:'https://github.com/rethinkdb/rethinkdb'
  },
  {
    title:"MongoDB",
    intro:'MongoDB is an open-source, document database designed for ease of development and scaling.',
    tags:['NoSQL'],
    website:'https://www.mongodb.org/',
    github:'https://github.com/mongodb/mongo'
  }
    ]

   }
  ];
};
   return notes;
});