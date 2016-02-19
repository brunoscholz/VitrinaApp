var app = angular.module('VitrinaApp');
//, Show
app.service('TAG', ['$http', 'API',
  function ($http, API) {
    
    var tags = {};

    //save method create a new tag if not already exists
    //else update the existing object
    this.save = function (t) {
      if (t.id == null) {
        //if this is new, add it in tags array
        t.id = uid++;
        tags.push(t);
      } else {
        //for existing tag, find it using id
        //and update it.
        for (i in tags) {
          if (tags[i].id == t.id) {
            tags[i] = t;
          }
        }
      }
    }

    //simply search tags list for given id
    //and returns the tag object if found
    this.get = function (id) {
      for (i in tags) {
        if (tags[i].id == id) {
          return tags[i];
        }
      }
    }

    //iterate through tags list and delete 
    //tag if found
    this.delete = function (id) {
      for (i in tags) {
        if (tags[i].id == id) {
          tags.splice(i, 1);
        }
      }
    }
 
    //simply returns the tags list
    this.list = function (callback) {
      return API.getTags().success(function(termData) {
        tags = termData;
        var ret = {id: 0, name:"Tags", children:[]};
        var firstNodes = Enumerable.From(termData)
            .Where(function (x) { return x.parent == 0 })
            .OrderByDescending(function (x) { return x.termId })
            //.Select(function (x) { return x.user.screen_name + ':' + x.text })
            .ToArray();

        console.log(firstNodes);
        add(ret, firstNodes);
        console.log(ret);

        callback(ret);
      });
    }

    function add(ret, nodes) {
      for(var n in nodes) {
        // find all children
        //console.log(tags.length);
        var allNodes = Enumerable.From(tags)
            .Where(function (x) { return x.parent == nodes[n].termid })
            .OrderBy(function (x) { return x.termId })
            //.Select(function (x) { return x.user.screen_name + ':' + x.text })
            .ToArray();

        var newNode = {name: nodes[n].name, children: []}
        add(newNode, allNodes);
        ret.children.push(newNode);
      }
    }
}]);

app.controller('TagController', ['$scope', 'TAG',
  function ($scope, TAG) {
  
  $scope.tags = {};
  TAG.list(function(data){
    $scope.tags = data;
  });

  //add
  //delete
  //edit
}]);

app.directive("tags", function($compile) {
    return {
      compile: compile,
      restrict: "E",
      scope: {family: '='},
      template: 
          '<p><b>{{ family.name }}</b></p>'+
          '<ul>' + 
              '<li ng-repeat="child in family.children">' + 
                  '<tags family="child"></tags>' +
              '</li>' +
          '</ul>',
    };
    function compile(tElement, tAttr) {
      var contents = tElement.contents().remove();
      var compiledContents;
      return function(scope, iElement, iAttr) {
        if(!compiledContents) {
          compiledContents = $compile(contents);
        }
        compiledContents(scope, function(clone, scope) {
          iElement.append(clone); 
        });
      };
    }
});