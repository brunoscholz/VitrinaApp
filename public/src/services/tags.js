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
        //var terms = data;
        return API.getTagCategories().success(function(taxData) {
          // mount the tree
          var ret = {id: 0, name:"Tags", children:[]};

          // for each taxonomy find terms and add bellow it
          for(var tx in taxData) {
            var newNode = {name: taxData[tx].category, children: []}
            for(var tm in termData) {
              if(termData[tm].termCategoryId == taxData[tx].termCategoryId) {
                //console.log(terms[tm].name);
                newNode.children.push({name:termData[tm].name, children: []});
              }
            }

            ret.children.push(newNode);
          }

          // for each category
            // verify parent
            //  if null insert
            //  else check if parent exists insert
            //    else insert into check later?

          for(var tm in termData) {
            add(tm, null);
          }

            var newNode = {id: termData[tx].termId, category: termCategoryId, name: taxData[tx].category, children: []};
            var nodes = Enumerable.From(termData)
                .Where("$.termCategoryId = " + taxData[tx].termCategoryId)
                //.OrderBy("$.user.screen_name")
                //.Select("$.user.screen_name + ':' + $.text")
                .ToArray();

              // if not the category itself
              if(nodes[tm].termId != taxData[tx].termId) {

              }

              var newNode = {id: termData[tx].termId, category: termCategoryId, name: taxData[tx].category, children: []};
              var newNode = {id: taxData[tx].termCategoryId, name: taxData[tx].category, children: []};

              if(terms[tm].termCategoryId == taxData[tx].termCategoryId) {

                newNode.children.push({id: terms[tm].termId, name:terms[tm].name, children: []});
              }

              ret.children.push(newNode);
            }
          }


          callback(ret);
        });
      });
    }

    //add node to parent
    function add (nodes, parentId) {
      var ret = [];
      for(var n in nodes) {
        if(nodes[n].parent == parentId) {
          ret[nodes[n].termId] = n;
          nodes.splice(n, 1);
        }
      }

      for(var child in ret) {
        ret[child].children = [];
        return add(nodes, ret.termId);
      }

      return ret;
    }

var ret = {id: 0, name:"Tags", children:[]};
ret.children.push(newNode);

$categories = get_terms('my_taxonomy_name', array('hide_empty' => false));
$categoryHierarchy = array();
sort_terms_hierarchicaly($categories, $categoryHierarchy);
var_dump($categoryHierarchy);

{
  "termid": 1,
  "termCategoryId": 1,
  "name": "Body",
  "slug": "body"
},
{
  "termid": 2,
  "termCategoryId": 1,
  "name": "Head",
  "slug": "head"
},

{
  "termCategoryId": 1,
  "termId": 1,
  "category": "Body",
  "description": "",
  "parent": null
},

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