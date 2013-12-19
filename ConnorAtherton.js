Meteor.startup(function() {
  //
});
 
// Use mainPanel because most routes will use it...
Router.configure({
  layoutTemplate: 'layout',
  yieldTemplates: {
    header: {to: 'header'}
  },
  before: function() {
      var user = Meteor.user();
      if (! user) {
          this.render('pageNotLoggedIn');
          return this.stop();
      }
  }
});
 
Router.map(function () {
 
  this.route('home', {
    path: '/',
    template: 'pageLoggedIn',
    yieldTemplates: {
      header: {to: 'header'},
      sidePanel: {to: 'sidePanel'},
      mainPanel: {to: 'mainPanel'}
    }
    // before: function () {
    //   if (Meteor.user()) {
    //     this.redirect('showDashboard');
    //     this.stop();
    //   }
    // }
  });
 
  this.route('showDashboard', {
    path: '/dashboard',
    // before: function () {
    //   if (!Meteor.user()) {
    //     this.redirect('home');
    //     this.stop();
    //   }
    // }
  });
 
  this.route('showPies', {
    path: '/pies'
  });
 
  this.route('showForce', {
    path: '/force'
  });
 
  this.route('showScatter', {
    path: '/scatter'
  });
 
});
