angular.module("app").run(["$templateCache", function($templateCache) {

  $templateCache.put("flash.html",
    "<div class=\"row\">\r" +
    "\n" +
    "  <div class=\"large-6 large-offset-3 column\">\r" +
    "\n" +
    "    <div id=\"flash\" class=\"alert-box alert\" ng-show=\"flash\">\r" +
    "\n" +
    "      {{ flash }}\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div id=\"error\" class=\"alert-box alert\" ng-show=\"error\">\r" +
    "\n" +
    "      {{ error.message}}\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "</div>"
  );

  $templateCache.put("footer.html",
    "<footer class=\"page-footer orange\">\r" +
    "\n" +
    "\t<div class=\"container\">\r" +
    "\n" +
    "\t\t<div class=\"row\">\r" +
    "\n" +
    "\t\t\t<div class=\"col l6 s12\">\r" +
    "\n" +
    "\t\t\t\t<h5 class=\"white-text\">Company Bio</h5>\r" +
    "\n" +
    "\t\t\t\t<p class=\"grey-text text-lighten-4\">We are a team of college students working on this project like it's our full time job. Any amount would help support and continue development on this project and is greatly appreciated.</p>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "\t\t\t</div>\r" +
    "\n" +
    "\t\t\t<div class=\"col l3 s12\">\r" +
    "\n" +
    "\t\t\t\t<h5 class=\"white-text\">Settings</h5>\r" +
    "\n" +
    "\t\t\t\t<ul>\r" +
    "\n" +
    "\t\t\t\t\t<li><a class=\"white-text\" href=\"#!\">Link 1</a></li>\r" +
    "\n" +
    "\t\t\t\t\t<li><a class=\"white-text\" href=\"#!\">Link 2</a></li>\r" +
    "\n" +
    "\t\t\t\t\t<li><a class=\"white-text\" href=\"#!\">Link 3</a></li>\r" +
    "\n" +
    "\t\t\t\t\t<li><a class=\"white-text\" href=\"#!\">Link 4</a></li>\r" +
    "\n" +
    "\t\t\t\t</ul>\r" +
    "\n" +
    "\t\t\t</div>\r" +
    "\n" +
    "\t\t\t<div class=\"col l3 s12\">\r" +
    "\n" +
    "\t\t\t\t<h5 class=\"white-text\">Connect</h5>\r" +
    "\n" +
    "\t\t\t\t<ul>\r" +
    "\n" +
    "\t\t\t\t\t<li><a class=\"white-text\" href=\"#!\">Link 1</a></li>\r" +
    "\n" +
    "\t\t\t\t\t<li><a class=\"white-text\" href=\"#!\">Link 2</a></li>\r" +
    "\n" +
    "\t\t\t\t\t<li><a class=\"white-text\" href=\"#!\">Link 3</a></li>\r" +
    "\n" +
    "\t\t\t\t\t<li><a class=\"white-text\" href=\"#!\">Link 4</a></li>\r" +
    "\n" +
    "\t\t\t\t\t<li><a href=\"tel:+18005550199\">1-800-555-0199</a></li>\r" +
    "\n" +
    "\t\t\t\t</ul>\r" +
    "\n" +
    "\t\t\t</div>\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "\t<div class=\"footer-copyright\">\r" +
    "\n" +
    "\t\t<div class=\"container\">\r" +
    "\n" +
    "\t\tMade by <a class=\"orange-text text-lighten-3\" href=\"http://materializecss.com\">Materialize</a>\r" +
    "\n" +
    "\t\t</div>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "</footer>"
  );

  $templateCache.put("header.html",
    "<div class=\"navbar-fixed\"  ng-controller=\"HeaderController\">\r" +
    "\n" +
    "  <nav class=\"blue-grey darken-4\" role=\"navigation\">\r" +
    "\n" +
    "    <div class=\"nav-wrapper\">\r" +
    "\n" +
    "      <a ng-click=\"home()\" class=\"brand-logo center\">Luxore</a>\r" +
    "\n" +
    "\r" +
    "\n" +
    "      <login-toolbar class=\"right hide-on-med-and-down\"></login-toolbar>\r" +
    "\n" +
    "      <ul id=\"nav-mobile\" class=\"right hide-on-med-and-down\">\r" +
    "\n" +
    "        <li><a class=\"tooltipped\" data-tooltip=\"{{'Search'|translate}}\"><i class=\"material-icons\">search</i></a></li>\r" +
    "\n" +
    "        <li><a ng-click=\"profile()\"><i class=\"material-icons\">view_module</i></a></li>\r" +
    "\n" +
    "        <li><a ><i class=\"material-icons\">more_vert</i></a></li>\r" +
    "\n" +
    "        <li>\r" +
    "\n" +
    "          <a class=\"waves-effect waves-block waves-light notification-button\">\r" +
    "\n" +
    "            <i class=\"mdi-social-notifications\"><small class=\"notification-badge\">5</small></i>\r" +
    "\n" +
    "          </a>\r" +
    "\n" +
    "        </li>\r" +
    "\n" +
    "        <!-- Dropdown Trigger -->\r" +
    "\n" +
    "        <li>\r" +
    "\n" +
    "            <select class=\"icons\" ng-model=\"selectedLang\" ng-change=\"changeLang(selectedLang)\">\r" +
    "\n" +
    "              <option ng-repeat=\"option in languages\" value=\"{{option.id}}\" ng-selected=\"option.id==selectedLang\" \r" +
    "\n" +
    "                      class=\"left circle\" data-icon=\"img/flags/{{option.country}}.png\">\r" +
    "\n" +
    "                {{option.name}}\r" +
    "\n" +
    "              </option>\r" +
    "\n" +
    "            </select>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        </li>\r" +
    "\n" +
    "      </ul>\r" +
    "\n" +
    "\r" +
    "\n" +
    "      <ul id=\"nav-mobile\" class=\"side-nav\">\r" +
    "\n" +
    "        <!-- <li class=\"logo\"><a id=\"logo-container\" href=\"http://materializecss.com/\" class=\"brand-logo\">\r" +
    "\n" +
    "          <object id=\"front-page-logo\" type=\"image/svg+xml\" data=\"res/materialize.svg\">Your browser does not support SVG</object></a>\r" +
    "\n" +
    "        </li> -->\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <li class=\"bold\"><a href=\"about.html\" class=\"waves-effect waves-teal\">About</a></li>\r" +
    "\n" +
    "        <li class=\"bold\"><a href=\"getting-started.html\" class=\"waves-effect waves-teal\">Getting Started</a></li>\r" +
    "\n" +
    "        <li class=\"no-padding\">\r" +
    "\n" +
    "          <ul class=\"collapsible collapsible-accordion\">\r" +
    "\n" +
    "            <li class=\"bold\"><a class=\"collapsible-header  waves-effect waves-teal\">CSS</a>\r" +
    "\n" +
    "              <div style=\"\" class=\"collapsible-body\">\r" +
    "\n" +
    "                <ul>\r" +
    "\n" +
    "                  <li><a href=\"color.html\">Color</a></li>\r" +
    "\n" +
    "                  <li><a href=\"grid.html\">Grid</a></li>\r" +
    "\n" +
    "                  <li><a href=\"helpers.html\">Helpers</a></li>\r" +
    "\n" +
    "                  <li><a href=\"media-css.html\">Media</a></li>\r" +
    "\n" +
    "                  <li><a href=\"sass.html\">Sass</a></li>\r" +
    "\n" +
    "                  <li><a href=\"shadow.html\">Shadow</a></li>\r" +
    "\n" +
    "                  <li><a href=\"table.html\">Table</a></li>\r" +
    "\n" +
    "                  <li><a href=\"typography.html\">Typography</a></li>\r" +
    "\n" +
    "                </ul>\r" +
    "\n" +
    "              </div>\r" +
    "\n" +
    "            </li>\r" +
    "\n" +
    "          </ul>\r" +
    "\n" +
    "        </li>\r" +
    "\n" +
    "        <li><a href=\"sass.html\"><i class=\"material-icons\">search</i></a></li>\r" +
    "\n" +
    "        <li><a href=\"badges.html\"><i class=\"material-icons\">view_module</i></a></li>\r" +
    "\n" +
    "        <li><a href=\"collapsible.html\"><i class=\"material-icons\">refresh</i></a></li>\r" +
    "\n" +
    "        <li><a href=\"mobile.html\"><i class=\"material-icons\">more_vert</i></a></li>\r" +
    "\n" +
    "      </ul>\r" +
    "\n" +
    "      <a href=\"#\" data-activates=\"nav-mobile\" class=\"button-collapse\"><i class=\"material-icons\">menu</i></a>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "  </nav>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<!-- <div class=\"row\">\r" +
    "\n" +
    "   <ul class=\"nav pull-right\" ng-show=\"hasPendingRequests()\">\r" +
    "\n" +
    "    <li ng-class=\"{active:isNavbarActive('projectsinfo')}\"><a href=\"/projectsinfo\">Current Projects</a></li>\r" +
    "\n" +
    "    <li class=\"divider-vertical\"></li>\r" +
    "\n" +
    "    <li><a href=\"#\"><img src=\"/static/img/spinner.gif\"></a></li>\r" +
    "\n" +
    "  </ul>\r" +
    "\n" +
    "</div> -->\r" +
    "\n"
  );

  $templateCache.put("home.html",
    "<div class=\"row\">\r" +
    "\n" +
    "  <div class=\"col s12 m7\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "  <div>simple add form (modal maybe)</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <form autocomplete=\"off\" role=\"form\">\r" +
    "\n" +
    "      <div class=\"form-group\">\r" +
    "\n" +
    "        <fieldset>\r" +
    "\n" +
    "          <input type=\"search\" name=\"search\" id=\"search\" placeholder=\"{{'Search'|translate}}...\" ng-model=\"search\" class=\"form-control\" />\r" +
    "\n" +
    "        </fieldset>\r" +
    "\n" +
    "      </div>\r" +
    "\n" +
    "    </form>\r" +
    "\n" +
    "    <div class=\"alert alert-warning fade in\" ng-repeat=\"alert in alerts track by $index\">\r" +
    "\n" +
    "      <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\" ng-click=\"closeAlertMessage($index)\">×</button>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <div class=\"card\" ng-if=\"filteredData.length > 0\" ng-repeat=\"card in filteredData = (model | orderBy:predicate:reverse | filter:search)\" ng-init=\"phTags=parseJson(card.tags)\">\r" +
    "\n" +
    "      <div class=\"card-image\">\r" +
    "\n" +
    "        <div style=\"background-image: url('{{card.photo}}'); min-height: 450px; background-size: cover; background-position: center;\">\r" +
    "\n" +
    "        <span class=\"card-title\" style=\"margin-bottom: 260px;\"><a ng-click=\"viewLook(card)\">{{card.caption}}</a></span>\r" +
    "\n" +
    "      </div>\r" +
    "\n" +
    "      <div class=\"card-content\">\r" +
    "\n" +
    "        {{card.id}}\r" +
    "\n" +
    "        <div id=\"vit-tag-list\">\r" +
    "\n" +
    "          <ul class=\"hextag\" ng-repeat=\"tg in phTags\">\r" +
    "\n" +
    "            <li class=\"arrow-left\"></li>\r" +
    "\n" +
    "            <li class=\"tagtext\">{{tg}}</li>\r" +
    "\n" +
    "            <li class=\"arrow-right\"></li>\r" +
    "\n" +
    "          </ul>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "      </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "      <div class=\"card-action\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <div class=\"minilogo\"></div>\r" +
    "\n" +
    "        <div>\r" +
    "\n" +
    "          <strong>{{card.user}}</strong>\r" +
    "\n" +
    "          <span>{{card.when}}</span>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"mdl-layout-spacer\"></div>\r" +
    "\n" +
    "        \r" +
    "\n" +
    "        <table class=\"photo-options\">\r" +
    "\n" +
    "          <thead>\r" +
    "\n" +
    "            <tr>\r" +
    "\n" +
    "              <th class=\"likeIt\"><a href=\"\"><span class=\"material-icons\">favorite</span></a></th>\r" +
    "\n" +
    "              <th class=\"wishIt\"><a href=\"\"><span class=\"material-icons\">view_list</span></a></th>\r" +
    "\n" +
    "              <th class=\"talkIt\"><a href=\"\"><span class=\"material-icons\">comment</span></a></th>\r" +
    "\n" +
    "              <th class=\"shareIt\"><a href=\"\"><span class=\"material-icons\">share</span></a></th>\r" +
    "\n" +
    "            </tr>\r" +
    "\n" +
    "          </thead>\r" +
    "\n" +
    "          <tbody>\r" +
    "\n" +
    "            <tr>\r" +
    "\n" +
    "              <td class=\"likeIt\">{{model.likes}}</td>\r" +
    "\n" +
    "              <td class=\"wishIt\">2</td>\r" +
    "\n" +
    "              <td class=\"talkIt\">0</td>\r" +
    "\n" +
    "              <td class=\"shareIt\"></td>\r" +
    "\n" +
    "            </tr>\r" +
    "\n" +
    "          </tbody>\r" +
    "\n" +
    "        </table>\r" +
    "\n" +
    "\r" +
    "\n" +
    "      </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "      <div class=\"card-content\">\r" +
    "\n" +
    "        No commnets\r" +
    "\n" +
    "      </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <div class=\"card\" ng-if=\"filteredData.length == 0\">\r" +
    "\n" +
    "      void\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n"
  );

  $templateCache.put("login.html",
    "<div id=\"login\" class=\"row\">\r" +
    "\n" +
    "  <div class=\"large-6 large-offset-3\">\r" +
    "\n" +
    "    <form ng-submit=\"login()\">\r" +
    "\n" +
    "      <fieldset class=\"radius\">\r" +
    "\n" +
    "        <div class=\"row\">\r" +
    "\n" +
    "          <div class=\"large-6 columns\">\r" +
    "\n" +
    "            <input type=\"text\" name=\"username\" placeholder=\"username\" ng-model=\"credentials.username\" required/>\r" +
    "\n" +
    "          </div>\r" +
    "\n" +
    "            <div class=\"large-6 columns\">\r" +
    "\n" +
    "              <input type=\"password\" name=\"password\" placeholder=\"password\" ng-model=\"credentials.password\" required/>\r" +
    "\n" +
    "          </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <div class=\"row\">\r" +
    "\n" +
    "          <div class=\"large-12 columns\">\r" +
    "\n" +
    "            <button id=\"log-in\" type=\"submit\" class=\"button large expand radius\">Log In</button>\r" +
    "\n" +
    "          </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "      </fieldset>\r" +
    "\n" +
    "    </form>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );

  $templateCache.put("login/toolbar.html",
    "<ul>\n" +
    "  <li ng-show=\"isAuthenticated()\">\n" +
    "      <a href=\"#\">{{currentUser.firstName}} {{currentUser.lastName}}</a>\n" +
    "  </li>\n" +
    "  <li ng-show=\"isAuthenticated()\" class=\"logout\">\n" +
    "      <form class=\"navbar-form\">\n" +
    "          <button class=\"btn logout\" ng-click=\"logout()\">Log out</button>\n" +
    "      </form>\n" +
    "  </li>\n" +
    "  <li ng-hide=\"isAuthenticated()\" class=\"login\">\n" +
    "      <form class=\"navbar-form\">\n" +
    "          <button class=\"btn login\" ng-click=\"login()\">Log in</button>\n" +
    "      </form>\n" +
    "  </li>\n" +
    "</ul>"
  );

  $templateCache.put("look/form.html",
    "<div class=\"row\">\n" +
    "\t<form class=\"col s12\" id=\"post-form\" name=\"postForm\" enctype=\"multipart/form-data\">\n" +
    "\t\t<input type=\"hidden\" ng-model=\"model.id\" />\n" +
    "\t\t<div class=\"row\">\n" +
    "\t\t\t<div class=\"input-field col s6\">\n" +
    "\t\t\t\t<i class=\"material-icons prefix\">account_circle</i>\n" +
    "\t\t\t\t<input placeholder=\"{{Caption}}\" id=\"caption\" name=\"caption\" type=\"text\" class=\"validate\" ng-model=\"model.caption\" length=\"40\">\n" +
    "\t\t\t\t<label class=\"active\" for=\"caption\" data-error=\"wrong\" data-success=\"OK\">Caption</label>\n" +
    "\t\t\t</div>\n" +
    "\t\t</div>\n" +
    "\n" +
    "\t\t<div class=\"row\">\n" +
    "\t\t\t<div class=\"input-field col s6\">\n" +
    "\t\t\t\t<div ng-if=\"!editingFile\" class=\"dropzone dz-clickable\" dropzone=\"dropzoneConfig\" style=\"width:650px; height:650px;\">\n" +
    "\t\t\t\t\t<div class=\"dz-default dz-message\"><span>Drag and drop files here or click to upload</span></div>\n" +
    "\t\t\t\t</div>\n" +
    "\n" +
    "\t\t\t\t<div ng-if=\"editingFile\" id=\"dropzone\" class=\"dropzone\">\n" +
    "\t\t\t\t\t<canvas id=\"look-canvas\" width=\"650\" height=\"650\"></canvas>\n" +
    "\t\t\t\t\t<!--<img id=\"\" data-ng-src=\"{{ model.url }}\" height=\"{{ model.height }}\" width=\"{{ model.width }}\" >-->\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t</div>\n" +
    "\t\t\t<div class=\"input-field col s6\">\n" +
    "\t\t\t\t<div id=\"filterContainer\">\n" +
    "\t\t\t\t\t<div id=\"filters\">\n" +
    "\t\t\t\t\t\t<a id=\"clear-dropzone\" ng-click=\"clearFiles()\" class=\"waves-effect waves-light\">\n" +
    "\t\t\t\t\t\t  <figure>\n" +
    "\t\t\t\t\t\t    <img src=\"img/filters/cancel.png\" alt=\"StartOver\">\n" +
    "\t\t\t\t\t\t    <figcaption>\n" +
    "\t\t\t\t\t\t      \n" +
    "\t\t\t\t\t\t    </figcaption>\n" +
    "\t\t\t\t\t\t  </figure>\n" +
    "\t\t\t\t\t\t</a>\n" +
    "\n" +
    "\t\t\t\t\t\t<a ng-repeat=\"filter in photoFilters\" ng-click=\"lkCtrl.applyFilter(filter.name)\" class=\"waves-effect waves-light\">\n" +
    "\t\t\t\t\t\t  <figure>\n" +
    "\t\t\t\t\t\t    <img src=\"{{filter.image}}\" alt=\"{{filter.name}}\">\n" +
    "\t\t\t\t\t\t    <figcaption>\n" +
    "\t\t\t\t\t\t      {{filter.description}}\n" +
    "\t\t\t\t\t\t    </figcaption>\n" +
    "\t\t\t\t\t\t  </figure>\n" +
    "\t\t\t\t\t\t</a>\n" +
    "\t\t\t\t\t</div>\t\t\t\t\t\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t</div>\n" +
    "\t\t</div>\n" +
    "\t\t<div class=\"row\">\n" +
    "\t\t\t<div class=\"bin dropzone\" droppable drop=\"addTag\" bin=\"bin\" id=\"bin1\" style=\"width:100%; height:250px;\">\n" +
    "\t\t\t\t<div ng-if=\"look.tags.length == 0\" class=\"dz-message\">\n" +
    "\t\t\t\t\t<span>Drag and drop Tags here or type them bellow</span>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t\t<div id=\"vit-tag-list\">\n" +
    "\t\t\t\t\t<ul class=\"hextag\" ng-repeat=\"tg in look.tags\">\n" +
    "\t\t\t\t\t\t<li class=\"arrow-left\"></li>\n" +
    "\t\t\t\t\t\t<li class=\"tagtext\">{{tg}}</li>\n" +
    "\t\t\t\t\t\t<li class=\"arrow-right\"></li>\n" +
    "\t\t\t\t\t</ul>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t</div>\n" +
    "\t\t\t<!-- <div ng-controller=\"TagController as tgCtrl\">\n" +
    "\t\t\t\t<div class=\"input-field col s6\">\n" +
    "\t\t\t\t\t<tags-input ng-model=\"tgCtrl.selectedTags\" placeholder=\"Add a tag\" min-length=\"3\" min-tags=\"1\" add-from-autocomplete-only=\"true\" on-tag-added=\"lkCtrl.tagAdded($tag)\">\n" +
    "\t\t\t\t\t\t<auto-complete source=\"loadTags($query)\" template=\"autocomplete-template\"></auto-complete>\n" +
    "\t\t\t\t\t</tags-input>\n" +
    "\t\t\t\t\t<label class=\"active\" for=\"tagInput\" data-error=\"wrong\" data-success=\"right\">Tags</label>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t</div> -->\n" +
    "\t\t</div>\n" +
    "\n" +
    "\t\t<div class=\"row\">\n" +
    "\t\t\t<input id=\"formtags\" type=\"hidden\" ng-model=\"model.tags\" />\n" +
    "\t\t\t<button class=\"btn waves-effect waves-light\" type=\"submit\" name=\"action\" ng-disabled=\"postForm.$invalid && !postForm.formtags.$dirty\" ng-click=\"publish()\">Publish\n" +
    "\t\t\t\t<i class=\"material-icons right\">send</i>\n" +
    "\t\t\t</button>\n" +
    "\n" +
    "\t\t\t<button class=\"btn waves-effect waves-light\" type=\"submit\" name=\"action\" ng-disabled=\"postForm.$invalid\" ng-click=\"promote()\">Promote\n" +
    "\t\t\t\t<i class=\"material-icons right\">send</i>\n" +
    "\t\t\t</button>\n" +
    "\t\t</div>\n" +
    "\t</form>\n" +
    "</div>\n" +
    "\n" +
    "<script type=\"text/ng-template\" id=\"autocomplete-template\">\n" +
    "  <div class=\"autocomplete-template\">\n" +
    "    <div class=\"left-align\">\n" +
    "      <i class=\"material-icons prefix\">visibility</i>\n" +
    "    </div>\n" +
    "    <div class=\"right-panel\" style=\"padding: 5px 45px;\">\n" +
    "      <span ng-bind-html=\"$highlight($getDisplayText())\"></span>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</script>\n" +
    "\n" +
    "<!--\n" +
    "\t<i class=\"material-icons prefix\">label</i>\n" +
    "\tdisplay-property=\"name\"\n" +
    "\t\n" +
    "      <div class=\"tag-template\">\n" +
    "        <div>\n" +
    "          <img ng-src=\"{{data.flag}}\" ng-if=\"data.flag\"/>\n" +
    "        </div>\n" +
    "        <div>\n" +
    "          <span>{{$getDisplayText()}}</span>\n" +
    "          <a class=\"remove-button\" ng-click=\"$removeTag()\">&#10006;</a>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "\n" +
    "\n" +
    "<div ng-controller=\"TagController\">\n" +
    "<tags category=\"tags\"></tags>\n" +
    "</div>\n" +
    "-->"
  );

  $templateCache.put("look/view.html",
    "<div class=\"row\">\n" +
    "\t<div class=\"col s12 m7\">\n" +
    "\t\t<div class=\"card\" ng-init=\"phTags=parseJson(model.tags)\">\n" +
    "\t\t\t<div class=\"card-image\">\n" +
    "\t\t\t\t<img src=\"{{model.photo}}\">\n" +
    "\t\t\t\t<span class=\"card-title\"><a href=\"#/looks/edit/{{model.id}}\">{{model.caption}}</a></span>\n" +
    "\t\t\t</div>\n" +
    "\t\t\t<div class=\"card-content\">\n" +
    "\t\t\t\t<div id=\"vit-tag-list\">\n" +
    "\t\t\t\t\t<ul class=\"hextag\" ng-repeat=\"tg in phTags\">\n" +
    "\t\t\t\t\t\t<li class=\"arrow-left\"></li>\n" +
    "\t\t\t\t\t\t<li class=\"tagtext\">{{tg}}</li>\n" +
    "\t\t\t\t\t\t<li class=\"arrow-right\"></li>\n" +
    "\t\t\t\t\t</ul>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t</div>\n" +
    "\n" +
    "\t\t\t<div class=\"card-action\">\n" +
    "\n" +
    "\t\t\t\t<div class=\"minilogo\"></div>\n" +
    "\t\t\t\t<div>\n" +
    "\t\t\t\t\t<strong>{{model.user}}</strong>\n" +
    "\t\t\t\t\t<span>{{model.when}}</span>\n" +
    "\t\t\t\t</div>\n" +
    "\t\t\t\t<div class=\"mdl-layout-spacer\"></div>\n" +
    "\t\t\t\t\n" +
    "\t\t\t\t<table class=\"photo-options\">\n" +
    "\t\t\t\t\t<thead>\n" +
    "\t\t\t\t\t\t<tr>\n" +
    "\t\t\t\t\t\t\t<th class=\"likeIt\"><a href=\"\"><span class=\"material-icons\">favorite</span></a></th>\n" +
    "\t\t\t\t\t\t\t<th class=\"wishIt\"><a href=\"\"><span class=\"material-icons\">view_list</span></a></th>\n" +
    "\t\t\t\t\t\t\t<th class=\"talkIt\"><a href=\"\"><span class=\"material-icons\">comment</span></a></th>\n" +
    "\t\t\t\t\t\t\t<th class=\"shareIt\"><a href=\"\"><span class=\"material-icons\">share</span></a></th>\n" +
    "\t\t\t\t\t\t</tr>\n" +
    "\t\t\t\t\t</thead>\n" +
    "\t\t\t\t\t<tbody>\n" +
    "\t\t\t\t\t\t<tr>\n" +
    "\t\t\t\t\t\t\t<td class=\"likeIt\">{{model.likes}}</td>\n" +
    "\t\t\t\t\t\t\t<td class=\"wishIt\">2</td>\n" +
    "\t\t\t\t\t\t\t<td class=\"talkIt\">0</td>\n" +
    "\t\t\t\t\t\t\t<td class=\"shareIt\"></td>\n" +
    "\t\t\t\t\t\t</tr>\n" +
    "\t\t\t\t\t</tbody>\n" +
    "\t\t\t\t</table>\n" +
    "\n" +
    "\t\t\t</div>\n" +
    "\n" +
    "\t\t\t<div class=\"card-content\">\n" +
    "\t\t\t\tNo commnets\n" +
    "\t\t\t</div>\n" +
    "\n" +
    "\t\t</div>\n" +
    "\t</div>\n" +
    "</div>"
  );

  $templateCache.put("notifications.html",
    "<div ng-class=\"['alert', 'alert-'+notification.type]\" ng-repeat=\"notification in notifications\">\r" +
    "\n" +
    "    <button class=\"close\" ng-click=\"removeNotification(notification)\">x</button>\r" +
    "\n" +
    "    {{notification.message}}\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );

  $templateCache.put("profile/forgot_password.html",
    "<div class=\"container\">\r" +
    "\n" +
    "<div id=\"login-page\" class=\"row\">\r" +
    "\n" +
    "    <div class=\"col s12 z-depth-4 card-panel\">\r" +
    "\n" +
    "      <form class=\"login-form\">\r" +
    "\n" +
    "        <div class=\"row\">\r" +
    "\n" +
    "          <div class=\"input-field col s12 center\">\r" +
    "\n" +
    "            <h4>Forgot Password</h4>\r" +
    "\n" +
    "            <p class=\"center\">You can reset your password</p>\r" +
    "\n" +
    "          </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"row margin\">\r" +
    "\n" +
    "          <div class=\"input-field col s12\">\r" +
    "\n" +
    "            <i class=\"mdi-social-person-outline prefix\"></i>\r" +
    "\n" +
    "            <input id=\"username\" type=\"text\">\r" +
    "\n" +
    "            <label for=\"username\" class=\"center-align\">Username</label>\r" +
    "\n" +
    "          </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"row margin\">\r" +
    "\n" +
    "          <div class=\"input-field col s12\">\r" +
    "\n" +
    "            <i class=\"mdi-action-lock-outline prefix\"></i>\r" +
    "\n" +
    "            <input id=\"password\" type=\"password\">\r" +
    "\n" +
    "            <label for=\"password\">Password</label>\r" +
    "\n" +
    "          </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"row\">\r" +
    "\n" +
    "          <div class=\"input-field col s12\">\r" +
    "\n" +
    "            <a href=\"index.html\" class=\"btn waves-effect waves-light col s12\">Reset Password</a>\r" +
    "\n" +
    "          </div>\r" +
    "\n" +
    "          <div class=\"input-field col s12\">\r" +
    "\n" +
    "            <p class=\"margin sign-up\"><a href=\"page-login.html\">Login</a> <a href=\"page-register.html\" class=\"right\">Register</a></p>\r" +
    "\n" +
    "          </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "      </form>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "</div>"
  );

  $templateCache.put("profile/lock_screen.html",
    "<div class=\"container\">\r" +
    "\n" +
    "\t<div id=\"login-page\" class=\"row\">\r" +
    "\n" +
    "    <div class=\"col s12 z-depth-4 card-panel\">\r" +
    "\n" +
    "      <form class=\"login-form\">\r" +
    "\n" +
    "        <div class=\"row\">\r" +
    "\n" +
    "          <div class=\"input-field col s12 center\">\r" +
    "\n" +
    "            <img src=\"images/avatar.jpg\" alt=\"\" class=\"circle responsive-img valign profile-image-login\">\r" +
    "\n" +
    "            <h4 class=\"header\">John Doe</h4>            \r" +
    "\n" +
    "          </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"row margin\">\r" +
    "\n" +
    "          <div class=\"input-field col s12\">\r" +
    "\n" +
    "            <i class=\"mdi-action-lock-outline prefix\"></i>\r" +
    "\n" +
    "            <input id=\"password\" type=\"password\">\r" +
    "\n" +
    "            <label for=\"password\">Password</label>\r" +
    "\n" +
    "          </div>\r" +
    "\n" +
    "        </div>        \r" +
    "\n" +
    "        <div class=\"row\">\r" +
    "\n" +
    "          <div class=\"input-field col s12\">\r" +
    "\n" +
    "            <a href=\"index.html\" class=\"btn waves-effect waves-light col s12\">Login</a>\r" +
    "\n" +
    "          </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"row\">          \r" +
    "\n" +
    "          <div class=\"input-field col s6 m6 l6\">\r" +
    "\n" +
    "            <p class=\"margin medium-small\"><a href=\"page-register.html\">Register Now!</a></p>\r" +
    "\n" +
    "          </div>\r" +
    "\n" +
    "          <div class=\"input-field col s6 m6 l6\">\r" +
    "\n" +
    "              <p class=\"margin right-align medium-small\"><a href=\"page-forgot-password.html\">Forgot password ?</a></p>\r" +
    "\n" +
    "          </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "      </form>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "</div>"
  );

  $templateCache.put("profile/login.html",
    "<div class=\"container\">\r" +
    "\n" +
    "  <div class=\"row\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <div class=\"col s12 m8 l6 push-l3 push-m2 z-depth-4 card-panel\">\r" +
    "\n" +
    "      <ul class=\"tabs\" style=\"overflow: hidden;\">\r" +
    "\n" +
    "        <li class=\"tab col s3\"><a class=\"active\" href=\"#signin\">{{'SignIn'|translate}}</a></li>\r" +
    "\n" +
    "        <li class=\"tab col s3\"><a href=\"#signup\">{{'SignUp'|translate}}</a></li>\r" +
    "\n" +
    "        <li class=\"tab col s3\"><a href=\"#options\">{{'Options'|translate}}</a></li>\r" +
    "\n" +
    "      </ul>\r" +
    "\n" +
    "\r" +
    "\n" +
    "      <div class=\"divider\" style=\"margin-bottom: 16px;\"></div>\r" +
    "\n" +
    "      \r" +
    "\n" +
    "      <div class=\"row\">\r" +
    "\n" +
    "        <div id=\"signin\" class=\"col s12\">\r" +
    "\n" +
    "          <form ng-submit=\"login()\">\r" +
    "\n" +
    "            <div class=\"row\">\r" +
    "\n" +
    "              <div class=\"input-field col s12 center\">\r" +
    "\n" +
    "                <img src=\"images/login-logo.png\" alt=\"\" class=\"circle responsive-img valign profile-image-login\">\r" +
    "\n" +
    "                <p class=\"center login-form-text\">Luxore</p>\r" +
    "\n" +
    "              </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"row margin\">\r" +
    "\n" +
    "              <div class=\"input-field col s10 m10 l10 push-l1 push-m1 push-s1\">\r" +
    "\n" +
    "                <i class=\"mdi-social-person-outline prefix\"></i>\r" +
    "\n" +
    "                <input type=\"text\" name=\"username\" placeholder=\"{{'Username'|translate}}\" ng-model=\"credentials.username\" required/>\r" +
    "\n" +
    "                <label for=\"username\" class=\"center-align\">{{'Username'|translate}}</label>\r" +
    "\n" +
    "              </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"row margin\">\r" +
    "\n" +
    "              <div class=\"input-field col s10 m10 l10 push-l1 push-m1 push-s1\">\r" +
    "\n" +
    "                <i class=\"mdi-action-lock-outline prefix\"></i>\r" +
    "\n" +
    "                <input type=\"password\" name=\"password\" placeholder=\"{{'Password'|translate}}\" ng-model=\"credentials.password\" required/>\r" +
    "\n" +
    "                <label for=\"password\">{{'Password'|translate}}</label>\r" +
    "\n" +
    "              </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"row\">          \r" +
    "\n" +
    "              <div class=\"input-field col s10 m10 l10 push-l1 push-m1 push-s1 login-text\">\r" +
    "\n" +
    "                  <input type=\"checkbox\" id=\"remember-me\" ng-model=\"credentials.remember\"/>\r" +
    "\n" +
    "                  <label for=\"remember-me\">{{'Remember me'|translate}}</label>\r" +
    "\n" +
    "              </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"row\">\r" +
    "\n" +
    "              <div class=\"input-field col s10 m10 l6 push-l3 push-m1 push-s1\">\r" +
    "\n" +
    "                <button class=\"btn waves-effect waves-light col s12\" type=\"submit\" name=\"action\">{{'Sign in'|translate}}</button>\r" +
    "\n" +
    "              </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "          </form>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <div id=\"signup\" class=\"col s12\">\r" +
    "\n" +
    "          <form ng-submit=\"signup()\">\r" +
    "\n" +
    "            <div class=\"row\">\r" +
    "\n" +
    "              <div class=\"input-field col s12 center\">\r" +
    "\n" +
    "                <p class=\"center login-form-text\">Register</p>\r" +
    "\n" +
    "              </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"row margin\">\r" +
    "\n" +
    "              <div class=\"input-field col s12\">\r" +
    "\n" +
    "                <i class=\"mdi-social-person-outline prefix\"></i>\r" +
    "\n" +
    "                <input id=\"username\" type=\"text\">\r" +
    "\n" +
    "                <label for=\"username\" class=\"center-align\">Username</label>\r" +
    "\n" +
    "              </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"row margin\">\r" +
    "\n" +
    "              <div class=\"input-field col s12\">\r" +
    "\n" +
    "                <i class=\"mdi-communication-email prefix\"></i>\r" +
    "\n" +
    "                <input id=\"email\" type=\"email\">\r" +
    "\n" +
    "                <label for=\"email\" class=\"center-align\">Email</label>\r" +
    "\n" +
    "              </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"row margin\">\r" +
    "\n" +
    "              <div class=\"input-field col s12\">\r" +
    "\n" +
    "                <i class=\"mdi-action-lock-outline prefix\"></i>\r" +
    "\n" +
    "                <input id=\"password\" type=\"password\">\r" +
    "\n" +
    "                <label for=\"password\">Password</label>\r" +
    "\n" +
    "              </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"row margin\">\r" +
    "\n" +
    "              <div class=\"input-field col s12\">\r" +
    "\n" +
    "                <i class=\"mdi-action-lock-outline prefix\"></i>\r" +
    "\n" +
    "                <input id=\"password-again\" type=\"password\">\r" +
    "\n" +
    "                <label for=\"password-again\">Password again</label>\r" +
    "\n" +
    "              </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"row\">\r" +
    "\n" +
    "              <div class=\"input-field col s12\">\r" +
    "\n" +
    "                <button class=\"btn waves-effect waves-light col s12\" type=\"submit\" name=\"action\">Register Now</button>\r" +
    "\n" +
    "              </div>\r" +
    "\n" +
    "              <div class=\"input-field col s12\">\r" +
    "\n" +
    "                <p class=\"margin center medium-small sign-up\">Already have an account? <a href=\"page-login.html\">Login</a></p>\r" +
    "\n" +
    "              </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "          </form>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        \r" +
    "\n" +
    "        <div id=\"options\" class=\"col s12\">\r" +
    "\n" +
    "          <form ng-submit=\"forgot()\">\r" +
    "\n" +
    "            <div class=\"row\">\r" +
    "\n" +
    "              <div class=\"input-field col s12 center\">\r" +
    "\n" +
    "                <h4>Forgot Password</h4>\r" +
    "\n" +
    "                <p class=\"center\">You can reset your password</p>\r" +
    "\n" +
    "              </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"row margin\">\r" +
    "\n" +
    "              <div class=\"input-field col s12\">\r" +
    "\n" +
    "                <i class=\"mdi-social-person-outline prefix\"></i>\r" +
    "\n" +
    "                <input id=\"username\" type=\"text\">\r" +
    "\n" +
    "                <label for=\"username\" class=\"center-align\">Username</label>\r" +
    "\n" +
    "              </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"row margin\">\r" +
    "\n" +
    "              <div class=\"input-field col s12\">\r" +
    "\n" +
    "                <i class=\"mdi-action-lock-outline prefix\"></i>\r" +
    "\n" +
    "                <input id=\"password\" type=\"password\">\r" +
    "\n" +
    "                <label for=\"password\">Password</label>\r" +
    "\n" +
    "              </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"row\">\r" +
    "\n" +
    "              <div class=\"input-field col s12\">\r" +
    "\n" +
    "                <button class=\"btn waves-effect waves-light col s12\" type=\"submit\" name=\"action\">Reset Password</button>\r" +
    "\n" +
    "              </div>\r" +
    "\n" +
    "              <div class=\"input-field col s12\">\r" +
    "\n" +
    "                <p class=\"margin sign-up\"><a href=\"page-login.html\">Login</a> <a href=\"page-register.html\" class=\"right\">Register</a></p>\r" +
    "\n" +
    "              </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "          </form>\r" +
    "\n" +
    "          <a class=\"waves-effect waves-light btn\"><i class=\"material-icons left\">cloud</i>Facebook</a>\r" +
    "\n" +
    "          <a class=\"waves-effect waves-light btn\"><i class=\"material-icons left\">cloud</i>Twitter</a>\r" +
    "\n" +
    "          <a class=\"waves-effect waves-light btn\"><i class=\"material-icons left\">cloud</i>g+</a>\r" +
    "\n" +
    "          <a class=\"waves-effect waves-light btn\"><i class=\"material-icons left\">cloud</i>Instagram</a>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "      </div>\r" +
    "\n" +
    "      \r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "</div>"
  );

  $templateCache.put("profile/profile.html",
    "<div class=\"container\">\n" +
    "\t<div id=\"profile-page\" class=\"section\">\n" +
    "        <!-- profile-page-header -->\n" +
    "        <div id=\"profile-page-header\" class=\"card\">\n" +
    "            <div class=\"card-image waves-effect waves-block waves-light\">\n" +
    "                <img class=\"activator\" src=\"img/coffee.jpg\" alt=\"user background\">                    \n" +
    "            </div>\n" +
    "            <figure class=\"card-profile-image\">\n" +
    "                <img src=\"img/user.png\" alt=\"profile image\" class=\"circle z-depth-2 responsive-img activator\">\n" +
    "            </figure>\n" +
    "            <div class=\"card-content\">\n" +
    "              <div class=\"row\">                    \n" +
    "                <div class=\"col s3 offset-s2\">                        \n" +
    "                    <h4 class=\"card-title grey-text text-darken-4\">Roger Waters</h4>\n" +
    "                    <p class=\"medium-small grey-text\">Project Manager</p>                        \n" +
    "                </div>\n" +
    "                <div class=\"col s2 center-align\">\n" +
    "                    <h4 class=\"card-title grey-text text-darken-4\">10+</h4>\n" +
    "                    <p class=\"medium-small grey-text\">Work Experience</p>                        \n" +
    "                </div>\n" +
    "                <div class=\"col s2 center-align\">\n" +
    "                    <h4 class=\"card-title grey-text text-darken-4\">6</h4>\n" +
    "                    <p class=\"medium-small grey-text\">Completed Projects</p>                        \n" +
    "                </div>                    \n" +
    "                <div class=\"col s2 center-align\">\n" +
    "                    <h4 class=\"card-title grey-text text-darken-4\">$ 1,253,000</h4>\n" +
    "                    <p class=\"medium-small grey-text\">Busness Profit</p>                        \n" +
    "                </div>                    \n" +
    "                <div class=\"col s1 right-align\">\n" +
    "                  <a class=\"btn-floating activator waves-effect waves-light darken-2 right\">\n" +
    "                      <i class=\"mdi-action-perm-identity\"></i>\n" +
    "                  </a>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "            <div class=\"card-reveal\">\n" +
    "                <p>\n" +
    "                  <span class=\"card-title grey-text text-darken-4\">Roger Waters <i class=\"mdi-navigation-close right\"></i></span>\n" +
    "                  <span><i class=\"mdi-action-perm-identity cyan-text text-darken-2\"></i> Project Manager</span>\n" +
    "                </p>\n" +
    "\n" +
    "                <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>\n" +
    "                \n" +
    "                <p><i class=\"mdi-action-perm-phone-msg cyan-text text-darken-2\"></i> +1 (612) 222 8989</p>\n" +
    "                <p><i class=\"mdi-communication-email cyan-text text-darken-2\"></i> mail@domain.com</p>\n" +
    "                <p><i class=\"mdi-social-cake cyan-text text-darken-2\"></i> 18th June 1990</p>\n" +
    "                <p><i class=\"mdi-device-airplanemode-on cyan-text text-darken-2\"></i> BAR - AUS</p>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <!--/ profile-page-header -->\n" +
    "\n" +
    "        <!-- profile-page-content -->\n" +
    "        <div id=\"profile-page-content\" class=\"row\">\n" +
    "          <!-- profile-page-sidebar-->\n" +
    "          <div id=\"profile-page-sidebar\" class=\"col s12 m4\">\n" +
    "            <!-- Profile About  -->\n" +
    "            <div class=\"card light-blue\">\n" +
    "              <div class=\"card-content white-text\">\n" +
    "                <span class=\"card-title\">About Me!</span>\n" +
    "                <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>\n" +
    "              </div>                  \n" +
    "            </div>\n" +
    "            <!-- Profile About  -->\n" +
    "\n" +
    "            <!-- Profile About Details  -->\n" +
    "            <ul id=\"profile-page-about-details\" class=\"collection z-depth-1\">\n" +
    "              <li class=\"collection-item\">\n" +
    "                <div class=\"row\">\n" +
    "                  <div class=\"col s5 grey-text darken-1\"><i class=\"mdi-action-wallet-travel\"></i> Project</div>\n" +
    "                  <div class=\"col s7 grey-text text-darken-4 right-align\">ABC Name</div>\n" +
    "                </div>\n" +
    "              </li>\n" +
    "              <li class=\"collection-item\">\n" +
    "                <div class=\"row\">\n" +
    "                  <div class=\"col s5 grey-text darken-1\"><i class=\"mdi-social-poll\"></i> Skills</div>\n" +
    "                  <div class=\"col s7 grey-text text-darken-4 right-align\">HTML, CSS</div>\n" +
    "                </div>\n" +
    "              </li>\n" +
    "              <li class=\"collection-item\">\n" +
    "                <div class=\"row\">\n" +
    "                  <div class=\"col s5 grey-text darken-1\"><i class=\"mdi-social-domain\"></i> Lives in</div>\n" +
    "                  <div class=\"col s7 grey-text text-darken-4 right-align\">NY, USA</div>\n" +
    "                </div>\n" +
    "              </li>\n" +
    "              <li class=\"collection-item\">\n" +
    "                <div class=\"row\">\n" +
    "                  <div class=\"col s5 grey-text darken-1\"><i class=\"mdi-social-cake\"></i> Birth date</div>\n" +
    "                  <div class=\"col s7 grey-text text-darken-4 right-align\">18th June, 1991</div>\n" +
    "                </div>\n" +
    "              </li>\n" +
    "            </ul>\n" +
    "            <!--/ Profile About Details  -->\n" +
    "\n" +
    "            <!-- Profile About  -->\n" +
    "            <div class=\"card amber darken-2\">\n" +
    "              <div class=\"card-content white-text center-align\">\n" +
    "                <p class=\"card-title\"><i class=\"mdi-social-group-add\"></i> 3685</p>\n" +
    "                <p>Followers</p>\n" +
    "              </div>                  \n" +
    "            </div>\n" +
    "            <!-- Profile About  -->\n" +
    "\n" +
    "            <!-- Profile feed  -->\n" +
    "            <ul id=\"profile-page-about-feed\" class=\"collection z-depth-1\">\n" +
    "              <li class=\"collection-item avatar\">\n" +
    "                <img src=\"img/user.png\" alt=\"\" class=\"circle\">\n" +
    "                <span class=\"title\">Project Title</span>\n" +
    "                <p>Task assigned to new changes.\n" +
    "                  <br> <span class=\"ultra-small\">Second Line</span>\n" +
    "                </p>\n" +
    "                <a href=\"#!\" class=\"secondary-content\"><i class=\"mdi-action-grade\"></i></a>\n" +
    "              </li>\n" +
    "              <li class=\"collection-item avatar\">\n" +
    "                <i class=\"mdi-file-folder circle\"></i>\n" +
    "                <span class=\"title\">New Project</span>\n" +
    "                <p>First Line of Project Work \n" +
    "                  <br> <span class=\"ultra-small\">Second Line</span>\n" +
    "                </p>\n" +
    "                <a href=\"#!\" class=\"secondary-content\"><i class=\"mdi-social-domain\"></i></a>\n" +
    "              </li>\n" +
    "              <li class=\"collection-item avatar\">\n" +
    "                <i class=\"mdi-action-assessment circle green\"></i>\n" +
    "                <span class=\"title\">New Payment</span>\n" +
    "                <p>Last UK Project Payment\n" +
    "                  <br> <span class=\"ultra-small\">$ 3,684.00</span>\n" +
    "                </p>\n" +
    "                <a href=\"#!\" class=\"secondary-content\"><i class=\"mdi-editor-attach-money\"></i></a>\n" +
    "              </li>\n" +
    "              <li class=\"collection-item avatar\">\n" +
    "                <i class=\"mdi-av-play-arrow circle red\"></i>\n" +
    "                <span class=\"title\">Latest News</span>\n" +
    "                <p>company management news\n" +
    "                  <br> <span class=\"ultra-small\">Second Line</span>\n" +
    "                </p>\n" +
    "                <a href=\"#!\" class=\"secondary-content\"><i class=\"mdi-action-track-changes\"></i></a>\n" +
    "              </li>\n" +
    "            </ul>\n" +
    "            <!-- Profile feed  -->\n" +
    "\n" +
    "            <!-- task-card -->\n" +
    "            <ul id=\"task-card\" class=\"collection with-header\">\n" +
    "              <li class=\"collection-header cyan\">\n" +
    "                  <h4 class=\"task-card-title\">My Task</h4>\n" +
    "                  <p class=\"task-card-date\">March 26, 2015</p>\n" +
    "              </li>\n" +
    "              <li class=\"collection-item dismissable\">\n" +
    "                  <input type=\"checkbox\" id=\"task1\" />\n" +
    "                  <label for=\"task1\">Create Mobile App UI. <a href=\"#\" class=\"secondary-content\"><span class=\"ultra-small\">Today</span></a>\n" +
    "                  </label>\n" +
    "                  <span class=\"task-cat teal\">Mobile App</span>\n" +
    "              </li>\n" +
    "              <li class=\"collection-item dismissable\">\n" +
    "                  <input type=\"checkbox\" id=\"task2\" />\n" +
    "                  <label for=\"task2\">Check the new API standerds. <a href=\"#\" class=\"secondary-content\"><span class=\"ultra-small\">Monday</span></a>\n" +
    "                  </label>\n" +
    "                  <span class=\"task-cat purple\">Web API</span>\n" +
    "              </li>\n" +
    "              <li class=\"collection-item dismissable\">\n" +
    "                  <input type=\"checkbox\" id=\"task3\" checked=\"checked\" />\n" +
    "                  <label for=\"task3\">Check the new Mockup of ABC. <a href=\"#\" class=\"secondary-content\"><span class=\"ultra-small\">Wednesday</span></a>\n" +
    "                  </label>\n" +
    "                  <span class=\"task-cat pink\">Mockup</span>\n" +
    "              </li>\n" +
    "              <li class=\"collection-item dismissable\">\n" +
    "                  <input type=\"checkbox\" id=\"task4\" checked=\"checked\" disabled=\"disabled\" />\n" +
    "                  <label for=\"task4\">I did it !</label>\n" +
    "                  <span class=\"task-cat cyan\">Mobile App</span>\n" +
    "              </li>\n" +
    "            </ul>\n" +
    "            <!-- task-card -->\n" +
    "\n" +
    "            <!-- Profile Total sell -->\n" +
    "            <div class=\"card center-align\">\n" +
    "              <div class=\"card-content purple white-text\">\n" +
    "                  <p class=\"card-stats-title\"><i class=\"mdi-editor-attach-money\"></i>Your Profit</p>\n" +
    "                  <h4 class=\"card-stats-number\">$8990.63</h4>\n" +
    "                  <p class=\"card-stats-compare\"><i class=\"mdi-hardware-keyboard-arrow-up\"></i> 70% <span class=\"purple-text text-lighten-5\">last month</span>\n" +
    "                  </p>\n" +
    "              </div>\n" +
    "              <div class=\"card-action purple darken-2\">\n" +
    "                  <div id=\"sales-compositebar\"></div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <!-- flight-card -->\n" +
    "            <div id=\"flight-card\" class=\"card\">\n" +
    "                <div class=\"card-header amber darken-2\">\n" +
    "                    <div class=\"card-title\">\n" +
    "                        <h4 class=\"flight-card-title\">Your Next Flight</h4>\n" +
    "                        <p class=\"flight-card-date\">June 18, Thu 04:50</p>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"card-content-bg white-text\">\n" +
    "                    <div class=\"card-content\">\n" +
    "                        <div class=\"row flight-state-wrapper\">\n" +
    "                            <div class=\"col s5 m5 l5 center-align\">\n" +
    "                                <div class=\"flight-state\">\n" +
    "                                    <h4 class=\"margin\">LDN</h4>\n" +
    "                                    <p class=\"ultra-small\">London</p>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"col s2 m2 l2 center-align\">\n" +
    "                                <i class=\"mdi-device-airplanemode-on flight-icon\"></i>\n" +
    "                            </div>\n" +
    "                            <div class=\"col s5 m5 l5 center-align\">\n" +
    "                                <div class=\"flight-state\">\n" +
    "                                    <h4 class=\"margin\">SFO</h4>\n" +
    "                                    <p class=\"ultra-small\">San Francisco</p>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"row\">\n" +
    "                            <div class=\"col s6 m6 l6 center-align\">\n" +
    "                                <div class=\"flight-info\">\n" +
    "                                    <p class=\"small\"><span class=\"grey-text text-lighten-4\">Depart:</span> 04.50</p>\n" +
    "                                    <p class=\"small\"><span class=\"grey-text text-lighten-4\">Flight:</span> IB 5786</p>\n" +
    "                                    <p class=\"small\"><span class=\"grey-text text-lighten-4\">Terminal:</span> B</p>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"col s6 m6 l6 center-align flight-state-two\">\n" +
    "                                <div class=\"flight-info\">\n" +
    "                                    <p class=\"small\"><span class=\"grey-text text-lighten-4\">Arrive:</span> 08.50</p>\n" +
    "                                    <p class=\"small\"><span class=\"grey-text text-lighten-4\">Flight:</span> IB 5786</p>\n" +
    "                                    <p class=\"small\"><span class=\"grey-text text-lighten-4\">Terminal:</span> C</p>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <!-- flight-card -->\n" +
    "\n" +
    "            <!-- Map Card -->\n" +
    "            <div class=\"map-card\">\n" +
    "                <div class=\"card\">\n" +
    "                    <div class=\"card-image waves-effect waves-block waves-light\">\n" +
    "                        <div id=\"map-canvas\" data-lat=\"40.747688\" data-lng=\"-74.004142\"></div>\n" +
    "                    </div>\n" +
    "                    <div class=\"card-content\">                    \n" +
    "                        <a class=\"btn-floating activator btn-move-up waves-effect waves-light darken-2 right\">\n" +
    "                            <i class=\"mdi-maps-pin-drop\"></i>\n" +
    "                        </a>\n" +
    "                        <h4 class=\"card-title grey-text text-darken-4\"><a href=\"#\" class=\"grey-text text-darken-4\">Company Name LLC</a>\n" +
    "                        </h4>\n" +
    "                        <p class=\"blog-post-content\">Some more information about this company.</p>\n" +
    "                    </div>\n" +
    "                    <div class=\"card-reveal\">\n" +
    "                        <span class=\"card-title grey-text text-darken-4\">Company Name LLC <i class=\"mdi-navigation-close right\"></i></span>                   \n" +
    "                        <p>Here is some more information about this company. As a creative studio we believe no client is too big nor too small to work with us to obtain good advantage.By combining the creativity of artists with the precision of engineers we develop custom solutions that achieve results.Some more information about this company.</p>\n" +
    "                        <p><i class=\"mdi-action-perm-identity cyan-text text-darken-2\"></i> Manager Name</p>\n" +
    "                        <p><i class=\"mdi-communication-business cyan-text text-darken-2\"></i> 125, ABC Street, New Yourk, USA</p>\n" +
    "                        <p><i class=\"mdi-action-perm-phone-msg cyan-text text-darken-2\"></i> +1 (612) 222 8989</p>\n" +
    "                        <p><i class=\"mdi-communication-email cyan-text text-darken-2\"></i> support@geekslabs.com</p>                    \n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <!-- Map Card -->\n" +
    "\n" +
    "          </div>\n" +
    "          <!-- profile-page-sidebar-->\n" +
    "\n" +
    "          <!-- profile-page-wall -->\n" +
    "          <div id=\"profile-page-wall\" class=\"col s12 m8\">\n" +
    "            <!-- profile-page-wall-share -->\n" +
    "            <div id=\"profile-page-wall-share\" class=\"row\">\n" +
    "              <div class=\"col s12\">\n" +
    "                <ul class=\"tabs tab-profile z-depth-1 light-blue\">\n" +
    "                  <li class=\"tab col s3\"><a class=\"white-text waves-effect waves-light active\" href=\"#UpdateStatus\"><i class=\"mdi-editor-border-color\"></i> Update Status</a>\n" +
    "                  </li>\n" +
    "                  <li class=\"tab col s3\"><a class=\"white-text waves-effect waves-light\" href=\"#AddPhotos\"><i class=\"mdi-image-camera-alt\"></i> Add Photos</a>\n" +
    "                  </li>\n" +
    "                  <li class=\"tab col s3\"><a class=\"white-text waves-effect waves-light\" href=\"#CreateAlbum\"><i class=\"mdi-image-photo-album\"></i> Create Album</a>\n" +
    "                  </li>                      \n" +
    "                </ul>\n" +
    "                <!-- UpdateStatus-->\n" +
    "                <div id=\"UpdateStatus\" class=\"tab-content col s12  grey lighten-4\">\n" +
    "                  <div class=\"row\">\n" +
    "                    <div class=\"col s2\">\n" +
    "                      <img src=\"img/user.png\" alt=\"\" class=\"circle responsive-img valign profile-image-post\">\n" +
    "                    </div>\n" +
    "                    <div class=\"input-field col s10\">\n" +
    "                      <textarea id=\"textarea\" row=\"2\" class=\"materialize-textarea\"></textarea>\n" +
    "                      <label for=\"textarea\" class=\"\">What's on your mind?</label>\n" +
    "                    </div>\n" +
    "                  </div>\n" +
    "                  <div class=\"row\">\n" +
    "                    <div class=\"col s12 m6 share-icons\">\n" +
    "                      <a href=\"#\"><i class=\"mdi-image-camera-alt\"></i></a>\n" +
    "                      <a href=\"#\"><i class=\"mdi-action-account-circle\"></i></a>\n" +
    "                      <a href=\"#\"><i class=\"mdi-hardware-keyboard-alt\"></i></a>\n" +
    "                      <a href=\"#\"><i class=\"mdi-communication-location-on\"></i></a>\n" +
    "                    </div>\n" +
    "                    <div class=\"col s12 m6 right-align\">\n" +
    "                       <!-- Dropdown Trigger -->\n" +
    "                        <a class='dropdown-button btn' href='#' data-activates='profliePost'><i class=\"mdi-action-language\"></i> Public</a>\n" +
    "\n" +
    "                        <!-- Dropdown Structure -->\n" +
    "                        <ul id='profliePost' class='dropdown-content'>\n" +
    "                          <li><a href=\"#!\"><i class=\"mdi-action-language\"></i> Public</a></li>\n" +
    "                          <li><a href=\"#!\"><i class=\"mdi-action-face-unlock\"></i> Friends</a></li>                              \n" +
    "                          <li><a href=\"#!\"><i class=\"mdi-action-lock-outline\"></i> Only Me</a></li>\n" +
    "                        </ul>\n" +
    "\n" +
    "                        <a class=\"waves-effect waves-light btn\"><i class=\"mdi-maps-rate-review left\"></i>Post</a>\n" +
    "                    </div>\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "                <!-- AddPhotos -->\n" +
    "                <div id=\"AddPhotos\" class=\"tab-content col s12  grey lighten-4\">\n" +
    "                  <div class=\"row\">\n" +
    "                    <div class=\"col s2\">\n" +
    "                      <img src=\"img/user.png\" alt=\"\" class=\"circle responsive-img valign profile-image-post\">\n" +
    "                    </div>\n" +
    "                    <div class=\"input-field col s10\">\n" +
    "                      <textarea id=\"textarea\" row=\"2\" class=\"materialize-textarea\"></textarea>\n" +
    "                      <label for=\"textarea\" class=\"\">Share your favorites photos!</label>\n" +
    "                    </div>\n" +
    "                  </div>\n" +
    "                  <div class=\"row\">\n" +
    "                    <div class=\"col s12 m6 share-icons\">\n" +
    "                      <a href=\"#\"><i class=\"mdi-image-camera-alt\"></i></a>\n" +
    "                      <a href=\"#\"><i class=\"mdi-action-account-circle\"></i></a>\n" +
    "                      <a href=\"#\"><i class=\"mdi-hardware-keyboard-alt\"></i></a>\n" +
    "                      <a href=\"#\"><i class=\"mdi-communication-location-on\"></i></a>\n" +
    "                    </div>\n" +
    "                    <div class=\"col s12 m6 right-align\">\n" +
    "                       <!-- Dropdown Trigger -->\n" +
    "                        <a class='dropdown-button btn' href='#' data-activates='profliePost2'><i class=\"mdi-action-language\"></i> Public</a>\n" +
    "\n" +
    "                        <!-- Dropdown Structure -->\n" +
    "                        <ul id='profliePost2' class='dropdown-content'>\n" +
    "                          <li><a href=\"#!\"><i class=\"mdi-action-language\"></i> Public</a></li>\n" +
    "                          <li><a href=\"#!\"><i class=\"mdi-action-face-unlock\"></i> Friends</a></li>                              \n" +
    "                          <li><a href=\"#!\"><i class=\"mdi-action-lock-outline\"></i> Only Me</a></li>\n" +
    "                        </ul>\n" +
    "\n" +
    "                        <a class=\"waves-effect waves-light btn\"><i class=\"mdi-maps-rate-review left\"></i>Post</a>\n" +
    "                    </div>\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "                <!-- CreateAlbum -->\n" +
    "                <div id=\"CreateAlbum\" class=\"tab-content col s12  grey lighten-4\">\n" +
    "                  <div class=\"row\">\n" +
    "                    <div class=\"col s2\">\n" +
    "                      <img src=\"img/user.png\" alt=\"\" class=\"circle responsive-img valign profile-image-post\">\n" +
    "                    </div>\n" +
    "                    <div class=\"input-field col s10\">\n" +
    "                      <textarea id=\"textarea\" row=\"2\" class=\"materialize-textarea\"></textarea>\n" +
    "                      <label for=\"textarea\" class=\"\">Create awesome album.</label>\n" +
    "                    </div>\n" +
    "                  </div>\n" +
    "                  <div class=\"row\">\n" +
    "                    <div class=\"col s12 m6 share-icons\">\n" +
    "                      <a href=\"#\"><i class=\"mdi-image-camera-alt\"></i></a>\n" +
    "                      <a href=\"#\"><i class=\"mdi-action-account-circle\"></i></a>\n" +
    "                      <a href=\"#\"><i class=\"mdi-hardware-keyboard-alt\"></i></a>\n" +
    "                      <a href=\"#\"><i class=\"mdi-communication-location-on\"></i></a>\n" +
    "                    </div>\n" +
    "                    <div class=\"col s12 m6 right-align\">\n" +
    "                       <!-- Dropdown Trigger -->\n" +
    "                        <a class='dropdown-button btn' href='#' data-activates='profliePost3'><i class=\"mdi-action-language\"></i> Public</a>\n" +
    "\n" +
    "                        <!-- Dropdown Structure -->\n" +
    "                        <ul id='profliePost3' class='dropdown-content'>\n" +
    "                          <li><a href=\"#!\"><i class=\"mdi-action-language\"></i> Public</a></li>\n" +
    "                          <li><a href=\"#!\"><i class=\"mdi-action-face-unlock\"></i> Friends</a></li>                              \n" +
    "                          <li><a href=\"#!\"><i class=\"mdi-action-lock-outline\"></i> Only Me</a></li>\n" +
    "                        </ul>\n" +
    "\n" +
    "                        <a class=\"waves-effect waves-light btn\"><i class=\"mdi-maps-rate-review left\"></i>Post</a>\n" +
    "                    </div>\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "            <!--/ profile-page-wall-share -->\n" +
    "\n" +
    "            <!-- profile-page-wall-posts -->\n" +
    "            <div id=\"profile-page-wall-posts\"class=\"row\">\n" +
    "              <div class=\"col s12\">\n" +
    "                  <!-- medium -->\n" +
    "                  <div id=\"profile-page-wall-post\" class=\"card\">\n" +
    "                    <div class=\"card-profile-title\">\n" +
    "                      <div class=\"row\">\n" +
    "                        <div class=\"col s1\">\n" +
    "                          <img src=\"img/user.png\" alt=\"\" class=\"circle responsive-img valign profile-post-uer-image\">                        \n" +
    "                        </div>\n" +
    "                        <div class=\"col s10\">\n" +
    "                          <p class=\"grey-text text-darken-4 margin\">John Doe</p>\n" +
    "                          <span class=\"grey-text text-darken-1 ultra-small\">Shared publicly  -  26 Jun 2015</span>\n" +
    "                        </div>\n" +
    "                        <div class=\"col s1 right-align\">\n" +
    "                          <i class=\"mdi-navigation-expand-more\"></i>\n" +
    "                        </div>\n" +
    "                      </div>\n" +
    "                      <div class=\"row\">\n" +
    "                        <div class=\"col s12\">\n" +
    "                          <p>I am a very simple wall post. I am good at containing <a href=\"#\">#small</a> bits of <a href=\"#\">#information</a>.  I require little more information to use effectively.</p>\n" +
    "                        </div>\n" +
    "                      </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"card-image profile-medium\">                          \n" +
    "                      <img src=\"http://i.imgur.com/wzHBJhv.jpg\" alt=\"sample\" class=\"responsive-img profile-post-image profile-medium\">                        \n" +
    "                      <span class=\"card-title\">Card Title</span>\n" +
    "                    </div>\n" +
    "                    <div class=\"card-content\">\n" +
    "                      <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>\n" +
    "                    </div>\n" +
    "                    <div class=\"card-action row\">\n" +
    "                      <div class=\"col s4 card-action-share\">\n" +
    "                        <a href=\"#\">Like</a>                          \n" +
    "                        <a href=\"#\">Share</a>\n" +
    "                      </div>\n" +
    "                      \n" +
    "                      <div class=\"input-field col s8 margin\">\n" +
    "                        <input id=\"profile-comments\" type=\"text\" class=\"validate margin\">\n" +
    "                        <label for=\"profile-comments\" class=\"\">Comments</label>\n" +
    "                      </div>                        \n" +
    "                    </div>                        \n" +
    "                  </div>\n" +
    "\n" +
    "                  <!-- medium video -->\n" +
    "                  <div id=\"profile-page-wall-post\" class=\"card\">\n" +
    "                    <div class=\"card-profile-title\">\n" +
    "                      <div class=\"row\">\n" +
    "                        <div class=\"col s1\">\n" +
    "                          <img src=\"img/user.png\" alt=\"\" class=\"circle responsive-img valign profile-post-uer-image\">                        \n" +
    "                        </div>\n" +
    "                        <div class=\"col s10\">\n" +
    "                          <p class=\"grey-text text-darken-4 margin\">John Doe</p>\n" +
    "                          <span class=\"grey-text text-darken-1 ultra-small\">Shared publicly  -  26 Jun 2015</span>\n" +
    "                        </div>\n" +
    "                        <div class=\"col s1 right-align\">\n" +
    "                          <i class=\"mdi-navigation-expand-more\"></i>\n" +
    "                        </div>\n" +
    "                      </div>\n" +
    "                      <div class=\"row\">\n" +
    "                        <div class=\"col s12\">\n" +
    "                          <p>I am a very simple wall post. I am good at containing <a href=\"#\">#small</a> bits of <a href=\"#\">#information</a>.  I require little more information to use effectively.</p>\n" +
    "                        </div>\n" +
    "                      </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"card-image profile-medium\">\n" +
    "                      <div class=\"video-container no-controls\">\n" +
    "                        <iframe width=\"640\" height=\"360\" src=\"https://www.youtube.com/embed/10r9ozshGVE\" frameborder=\"0\" allowfullscreen></iframe>\n" +
    "                      </div>                          \n" +
    "                      <span class=\"card-title\">Card Title</span>\n" +
    "                    </div>\n" +
    "                    <div class=\"card-content\">\n" +
    "                      <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>\n" +
    "                    </div>\n" +
    "                    <div class=\"card-action row\">\n" +
    "                      <div class=\"col s4 card-action-share\">\n" +
    "                        <a href=\"#\">Like</a>                          \n" +
    "                        <a href=\"#\">Share</a>\n" +
    "                      </div>\n" +
    "                      \n" +
    "                      <div class=\"input-field col s8 margin\">\n" +
    "                        <input id=\"profile-comments\" type=\"text\" class=\"validate margin\">\n" +
    "                        <label for=\"profile-comments\" class=\"\">Comments</label>\n" +
    "                      </div>                        \n" +
    "                    </div>                        \n" +
    "                  </div>                      \n" +
    "\n" +
    "                  <!-- small -->\n" +
    "                  <div id=\"profile-page-wall-post\" class=\"card\">\n" +
    "                    <div class=\"card-profile-title\">\n" +
    "                      <div class=\"row\">\n" +
    "                        <div class=\"col s1\">\n" +
    "                          <img src=\"img/user.png\" alt=\"\" class=\"circle responsive-img valign profile-post-uer-image\">                        \n" +
    "                        </div>\n" +
    "                        <div class=\"col s10\">\n" +
    "                          <p class=\"grey-text text-darken-4 margin\">John Doe</p>\n" +
    "                          <span class=\"grey-text text-darken-1 ultra-small\">Shared publicly  -  26 Jun 2015</span>\n" +
    "                        </div>\n" +
    "                        <div class=\"col s1 right-align\">\n" +
    "                          <i class=\"mdi-navigation-expand-more\"></i>\n" +
    "                        </div>\n" +
    "                      </div>\n" +
    "                      <div class=\"row\">\n" +
    "                        <div class=\"col s12\">\n" +
    "                          <p>I am a very simple wall post. I am good at containing <a href=\"#\">#small</a> bits of <a href=\"#\">#information</a>.  I require little more information to use effectively.</p>\n" +
    "                        </div>\n" +
    "                      </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"card-image profile-small\">\n" +
    "                      <img src=\"http://i.imgur.com/wzHBJhv.jpg\" alt=\"sample\" class=\"responsive-img profile-post-image\">                        \n" +
    "                      <span class=\"card-title\">Card Title</span>\n" +
    "                    </div>\n" +
    "                    <div class=\"card-content\">\n" +
    "                      <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>\n" +
    "                    </div>\n" +
    "                    <div class=\"card-action row\">\n" +
    "                      <div class=\"col s4 card-action-share\">\n" +
    "                        <a href=\"#\">Like</a>                          \n" +
    "                        <a href=\"#\">Share</a>\n" +
    "                      </div>\n" +
    "                      \n" +
    "                      <div class=\"input-field col s8 margin\">\n" +
    "                        <input id=\"profile-comments\" type=\"text\" class=\"validate\">\n" +
    "                        <label for=\"profile-comments\" class=\"\">Comments</label>\n" +
    "                      </div>                        \n" +
    "                    </div>                        \n" +
    "                  </div>\n" +
    "\n" +
    "                  <!-- small -->\n" +
    "                  <div id=\"profile-page-wall-post\" class=\"card\">\n" +
    "                    <div class=\"card-profile-title\">\n" +
    "                      <div class=\"row\">\n" +
    "                        <div class=\"col s1\">\n" +
    "                          <img src=\"img/user.png\" alt=\"\" class=\"circle responsive-img valign profile-post-uer-image\">                        \n" +
    "                        </div>\n" +
    "                        <div class=\"col s10\">\n" +
    "                          <p class=\"grey-text text-darken-4 margin\">John Doe</p>\n" +
    "                          <span class=\"grey-text text-darken-1 ultra-small\">Shared publicly  -  26 Jun 2015</span>\n" +
    "                        </div>\n" +
    "                        <div class=\"col s1 right-align\">\n" +
    "                          <i class=\"mdi-navigation-expand-more\"></i>\n" +
    "                        </div>\n" +
    "                      </div>\n" +
    "                      <div class=\"row\">\n" +
    "                        <div class=\"col s12\">\n" +
    "                          <p>I am a very simple wall post. I am good at containing <a href=\"#\">#small</a> bits of <a href=\"#\">#information</a>.  I require little more information to use effectively.</p>\n" +
    "                        </div>\n" +
    "                      </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"card-image profile-large\">\n" +
    "                      <img src=\"http://i.imgur.com/wzHBJhv.jpg\" alt=\"sample\" class=\"responsive-img profile-post-image\">                        \n" +
    "                      <span class=\"card-title\">Card Title</span>\n" +
    "                    </div>\n" +
    "                    <div class=\"card-content\">\n" +
    "                      <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>\n" +
    "                    </div>\n" +
    "                    <div class=\"card-action row\">\n" +
    "                      <div class=\"col s4 card-action-share\">\n" +
    "                        <a href=\"#\">Like</a>                          \n" +
    "                        <a href=\"#\">Share</a>\n" +
    "                      </div>\n" +
    "                      \n" +
    "                      <div class=\"input-field col s8 margin\">\n" +
    "                        <input id=\"profile-comments\" type=\"text\" class=\"validate\">\n" +
    "                        <label for=\"profile-comments\" class=\"\">Comments</label>\n" +
    "                      </div>                        \n" +
    "                    </div>                        \n" +
    "                  </div>\n" +
    "              </div>                  \n" +
    "            </div>\n" +
    "            <!--/ profile-page-wall-posts -->\n" +
    "\n" +
    "          </div>\n" +
    "          <!--/ profile-page-wall -->\n" +
    "\n" +
    "        </div>\n" +
    "      </div>\n" +
    "</div>\n" +
    "\n" +
    "<script type=\"text/javascript\">\n" +
    "\t$(document).ready(function(){\n" +
    "\t\t$('ul.tabs').tabs();\n" +
    "\n" +
    "\t\t$('.dropdown-button').dropdown({\n" +
    "\t\t  inDuration: 300,\n" +
    "\t\t  outDuration: 225,\n" +
    "\t\t  constrain_width: false, // Does not change width of dropdown to that of the activator\n" +
    "\t\t  hover: true, // Activate on hover\n" +
    "\t\t  gutter: 0, // Spacing from edge\n" +
    "\t\t  belowOrigin: false, // Displays dropdown below the button\n" +
    "\t\t  alignment: 'left' // Displays dropdown with edge aligned to the left of button\n" +
    "\t\t}\n" +
    "\t\t);\n" +
    "\n" +
    "\t});\n" +
    "</script>\n" +
    "\n" +
    "<!-- <div class=\"row blue-grey\" style=\"margin-top: -20px;\">\n" +
    "\t<div class=\"profile-header parallax-zoom-blur\">\n" +
    "\t\t<img src=\"https://unsplash.it/1800/1200?image=883\">\n" +
    "\t</div>\n" +
    "\n" +
    "\t<div class=\"col s12\">\n" +
    "\t\t<div class=\"container valign-wrapper\">\n" +
    "\t\t\t<img src=\"img/user.png\" class=\"valign circle\" style=\"padding: 35px 0; margin: auto;\">\n" +
    "\t\t</div>\n" +
    "\t</div>\n" +
    "\n" +
    "\t<div class=\"card deep-purple lighten-5\">\t\n" +
    "      <div class=\"card-content green-text\">\n" +
    "        <p>SUCCESS : The page has been added.</p>\n" +
    "      </div>\n" +
    "      <button type=\"button\" class=\"close green-text\" data-dismiss=\"alert\" aria-label=\"Close\">\n" +
    "        <span aria-hidden=\"true\">×</span>\n" +
    "      </button>\n" +
    "\t</div>\n" +
    "</div> -->\n"
  );

  $templateCache.put("profile/signup.html",
    "<div class=\"container\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "<div id=\"login-page\" class=\"row\">\r" +
    "\n" +
    "    <div class=\"col s12 z-depth-4 card-panel\">\r" +
    "\n" +
    "      <form class=\"login-form\">\r" +
    "\n" +
    "        <div class=\"row\">\r" +
    "\n" +
    "          <div class=\"input-field col s12 center\">\r" +
    "\n" +
    "            <h4>Register</h4>\r" +
    "\n" +
    "            <p class=\"center\">Join to our community now !</p>\r" +
    "\n" +
    "          </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"row margin\">\r" +
    "\n" +
    "          <div class=\"input-field col s12\">\r" +
    "\n" +
    "            <i class=\"mdi-social-person-outline prefix\"></i>\r" +
    "\n" +
    "            <input id=\"username\" type=\"text\">\r" +
    "\n" +
    "            <label for=\"username\" class=\"center-align\">Username</label>\r" +
    "\n" +
    "          </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"row margin\">\r" +
    "\n" +
    "          <div class=\"input-field col s12\">\r" +
    "\n" +
    "            <i class=\"mdi-communication-email prefix\"></i>\r" +
    "\n" +
    "            <input id=\"email\" type=\"email\">\r" +
    "\n" +
    "            <label for=\"email\" class=\"center-align\">Email</label>\r" +
    "\n" +
    "          </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"row margin\">\r" +
    "\n" +
    "          <div class=\"input-field col s12\">\r" +
    "\n" +
    "            <i class=\"mdi-action-lock-outline prefix\"></i>\r" +
    "\n" +
    "            <input id=\"password\" type=\"password\">\r" +
    "\n" +
    "            <label for=\"password\">Password</label>\r" +
    "\n" +
    "          </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"row margin\">\r" +
    "\n" +
    "          <div class=\"input-field col s12\">\r" +
    "\n" +
    "            <i class=\"mdi-action-lock-outline prefix\"></i>\r" +
    "\n" +
    "            <input id=\"password-again\" type=\"password\">\r" +
    "\n" +
    "            <label for=\"password-again\">Password again</label>\r" +
    "\n" +
    "          </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"row\">\r" +
    "\n" +
    "          <div class=\"input-field col s12\">\r" +
    "\n" +
    "            <a href=\"index.html\" class=\"btn waves-effect waves-light col s12\">Register Now</a>\r" +
    "\n" +
    "          </div>\r" +
    "\n" +
    "          <div class=\"input-field col s12\">\r" +
    "\n" +
    "            <p class=\"margin center medium-small sign-up\">Already have an account? <a href=\"page-login.html\">Login</a></p>\r" +
    "\n" +
    "          </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "      </form>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "  </div>"
  );

  $templateCache.put("tag/tags-list.html",
    "<div class=\"row\">\r" +
    "\n" +
    "    <div class=\"input-field col s6\">\r" +
    "\n" +
    "        <tags-input ng-model=\"selectedTags\" placeholder=\"Add a tag\" min-length=\"3\" min-tags=\"1\" add-from-autocomplete-only=\"true\" on-tag-added=\"tagAdded($tag)\">\r" +
    "\n" +
    "            <auto-complete source=\"loadTags($query)\" template=\"autocomplete-template\"></auto-complete>\r" +
    "\n" +
    "        </tags-input>\r" +
    "\n" +
    "        <label class=\"active\" for=\"tagInput\" data-error=\"wrong\" data-success=\"right\">Tags</label>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<div>\r" +
    "\n" +
    "    <p>Query</p>\r" +
    "\n" +
    "    <span>{{testQuery}}</span>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<div>\r" +
    "\n" +
    "    <p>Selected</p>\r" +
    "\n" +
    "    <span>{{selectedTags}}</span>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<div>\r" +
    "\n" +
    "    <p>Raw</p>\r" +
    "\n" +
    "    <span>{{rawtags}}</span>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<script type=\"text/ng-template\" id=\"autocomplete-template\">\r" +
    "\n" +
    "  <div class=\"autocomplete-template\">\r" +
    "\n" +
    "    <div class=\"left-align\">\r" +
    "\n" +
    "      <i class=\"material-icons prefix\">visibility</i>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"right-panel\" style=\"padding: 5px 45px;\">\r" +
    "\n" +
    "      <span ng-bind-html=\"$highlight($getDisplayText())\"></span>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "</script>\r" +
    "\n"
  );

}]);
