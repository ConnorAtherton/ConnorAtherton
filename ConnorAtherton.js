Meteor.startup(function() {
  //
});
 
// Use mainPanel because most routes will use it...
Router.configure({
  layoutTemplate: 'layout',
  yieldTemplates: {
    header: {to: 'header'}
  },
  template: 'pageLoggedIn',
  before: function() {
      var user = Meteor.user();
      if (! user) {
          this.render('header', {to: 'header'});
          this.render('pageNotLoggedIn');
          return this.stop();
      }
  }
});
 
Router.map(function () {

  this.route('home', {
    path: '/',
    yieldTemplates: {
      header: {to: 'header'},
      sidePanel: {to: 'sidePanel'},
      mainPanel: {to: 'mainPanel'}
    }
  });
 
  this.route('showDashboard', {
    path: '/dashboard',
    yieldTemplates: {
      header: {to: 'header'},
      mainPanel: {to: 'mainPanel'},
      showDashboard: {to: 'main'}
    }
  });
 
  this.route('showPies', {
    path: '/pies',
    yieldTemplates: {
      header: {to: 'header'},
      mainPanel: {to: 'mainPanel'},
      showPies: {to: 'main'}
    }
  });
 
  this.route('showForce', {
    path: '/force',
    yieldTemplates: {
      header: {to: 'header'},
      mainPanel: {to: 'mainPanel'},
      showForce: {to: 'main'}
    }
  });
 
  this.route('showScatter', {
    path: '/scatter',
    yieldTemplates: {
      header: {to: 'header'},
      mainPanel: {to: 'mainPanel'},
      showScatter: {to: 'main'}
    }
  });
 
});
