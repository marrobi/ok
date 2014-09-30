var app = angular.module('dashboard', ['ngResource', 'ui.router', 'angular-loading-bar', 'ui.bootstrap', 'angularMoment']);

app.directive('assignmentModule', function() {
        return {
            restrict: 'E',
            templateUrl: '/static/partials/dashboard/assignment.moduledash.html',
        };
    });

app.directive('assignmentList', function() {
        return {
            restrict: 'E',
            templateUrl: '/static/partials/common/assignment.list.html',
        };
    });

app.directive('submissionModule', function() {
        return {
            restrict: 'E',
            templateUrl: '/static/partials/dashboard/submission.module.html',
        };
    });

app.directive('submissionList', function() {
        return {
            restrict: 'E',
            templateUrl: '/static/partials/dashboard/submission.list.html',
        };
    });

app.config(['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");

    var dashboard = {
      name: 'dashboard',
      url: '/',
      templateUrl: '/static/partials/dashboard/dashboard.html',
    }

    var submissions = {
      name: 'submission',
      abstract: true,
      url: '/submission',
      templateUrl: '/static/partials/common/submission.base.html',
    }

    var submissionList = {
      name: 'submission.list',
      url: '/',
      templateUrl: '/static/partials/common/submission.list.html',
      controller: "SubmissionListCtrl"
    }

    var submissionDetail = {
      name: 'submission.detail',
      url: '/:submissionId',
      templateUrl: '/static/partials/common/submission.detail.html',
      controller: "SubmissionDetailCtrl"
    }

    var submissionDiff = {
      name: 'submission.diff',
      url: '/:submissionId/diff',
      templateUrl: '/static/partials/common/submission.diff.html',
      controller: "SubmissionDiffCtrl"
    }

    var assignments = {
      name: 'assignment',
      abstract: true,
      url: '/assignment',
      templateUrl: '/static/partials/common/assignment.base.html',
    }

    var assignmentList = {
      name: 'assignment.list',
      url: '/',
      templateUrl: '/static/partials/common/assignment.list.html',
      controller: "AssignmentListCtrl"
    }

    var assignmentDetail = {
      name: 'assignment.detail',
      url: '/:assignmentId',
      templateUrl: '/static/partials/common/assignment.detail.html',
      controller: "AssignmentDetailCtrl"
    }

    var courses = {
      name: 'course',
      abstract: true,
      url: '/course',
      templateUrl: '/static/partials/common/course.base.html',
    }

    var courseList = {
      name: 'course.list',
      url: '/',
      templateUrl: '/static/partials/common/course.list.html',
      controller: "CourseListCtrl"
    }

    var courseDetail = {
      name: 'course.detail',
      url: '/:courseId',
      templateUrl: '/static/partials/common/course.detail.html',
      controller: "CourseDetailCtrl"
    }

    var courseNew = {
      name: 'course.new',
      url: '/new',
      templateUrl: '/static/partials/common/course.new.html',
      controller: "CourseNewCtrl"
    }

    var versions = {
      name: 'version',
      abstract: true,
      url: '/version',
      templateUrl: '/static/partials/common/version.base.html',
    }

    var versionList = {
      name: 'version.list',
      url: '/',
      templateUrl: '/static/partials/common/version.list.html',
      controller: "VersionListCtrl"
    }

    var versionDetail = {
      name: 'version.detail',
      url: '/:versionId',
      templateUrl: '/static/partials/common/version.detail.html',
      controller: "VersionDetailCtrl"
    }

    var versionUpdate = {
      name: 'version.update',
      url: '/:versionId/new',
      templateUrl: '/static/partials/common/version.new.html',
      controller: "VersionNewCtrl"
    }

    var versionNew = {
      name: 'version.new',
      url: '/new',
      templateUrl: '/static/partials/common/version.new.html',
      controller: "VersionNewCtrl"
    }

    $stateProvider.
      state(dashboard).
      state(submissions).
      state(submissionList).
      state(submissionDetail).
      state(submissionDiff).
      state(assignments).
      state(assignmentList).
      state(assignmentDetail).
      state(courses).
      state(courseList).
      state(courseNew).
      state(versions).
      state(versionList).
      state(versionDetail).
      state(versionUpdate).
      state(versionNew)
      ;
  }]);