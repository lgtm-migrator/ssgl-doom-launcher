app.run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('app/templates/AboutDialog.html',
    "<md-dialog style=\"width:70%\"><md-toolbar><div class=\"md-toolbar-tools\"><h2>About Super Shotgun Launcher</h2></div></md-toolbar><md-dialog-content style=\"padding:25px\"><div layout=\"row\"><div flex=\"55\"><b>Version:</b> {{version}}<br><br><strong>Used Technologies:</strong><br>Angular Material, NWJS, underscore<br><br><strong>Big thanks to:</strong><br><span class=\"browserlink\" ng-click=\"openURL('https://github.com/Serasar')\"><i class=\"mdi mdi-github-circle\"></i> Serasar</span> & <span class=\"browserlink\" ng-click=\"openURL('https://github.com/axed')\"><i class=\"mdi mdi-github-circle\"></i> axed</span> for Linux/Beta testing.<br><span class=\"browserlink\" ng-click=\"openURL('https://github.com/scar45')\"><i class=\"mdi mdi-github-circle\"></i> Scar45</span> for Doom64EX Integrations<br><div style=\"margin-top: 65px\"><span>2015 FreaKzero, Licensed under MIT License.</span></div></div><div flex=\"45\" class=\"customAboutContainer\"><div style=\"text-align:center\"><br><img src=\"app/assets/freakzero.jpg\"><br><br></div><div style=\"font-size: 14px\"><span class=\"browserlink\"><i class=\"mdi mdi-web\"></i> &nbsp;&nbsp;<a target=\"_blank\" ng-click=\"openURL('http://www.freakzero.com')\">http://www.freakzero.com</a></span><br><span class=\"browserlink\"><i class=\"mdi mdi-google-plus\"></i> &nbsp;&nbsp;<a target=\"_blank\" ng-click=\"openURL('https://plus.google.com/+FreaKzero/')\">https://plus.google.com/+FreaKzero/</a></span><br><span class=\"browserlink\"><i class=\"mdi mdi-twitter\"></i> &nbsp;&nbsp;<a target=\"_blank\" ng-click=\"openURL('https://twitter.com/freakzerodotcom')\">https://twitter.com/freakzerodotcom</a></span><br><span class=\"browserlink\"><i class=\"mdi mdi-github-circle\"></i> &nbsp;&nbsp;<a target=\"_blank\" ng-click=\"openURL('https://github.com/FreaKzero')\">https://github.com/FreaKzero</a></span></div></div></div></md-dialog-content><div class=\"md-actions\" layout=\"row\"><md-button class=\"md-accent\" ng-click=\"yup()\">Yup</md-button></div></md-dialog>"
  );


  $templateCache.put('app/templates/AddListPrompt.html',
    "<md-dialog style=\"width:50%\"><form name=\"namelistform\" style=\"overflow:hidden\" ng-submit=\"submitForm(namelistform.$valid)\" novalidate><md-toolbar><div class=\"md-toolbar-tools\"><h2>{{title}}</h2><span flex></span></div></md-toolbar><md-dialog-content style=\"padding:25px\"><div><md-input-container><label>Name of your List</label><input ng-model=\"listname\" required ng-pattern=\"/^[a-zA-Z0-9_-]*$/\" ng-change=\"checkdoubles()\" id=\"inputListname\"></md-input-container><div ng-if=\"cantSave.length > 0\" style=\"color:rgb(244,67,54)\"><span>File \"{{listname}}.json\" already exists, please choose another name</span></div><div ng-if=\"overwrite.length > 0\" style=\"color:rgb(244,67,54)\"><span>File \"{{listname}}.json\" already exists, you are about to overwrite the list.</span></div></div></md-dialog-content><div class=\"md-actions\" layout=\"row\"><span flex></span><md-button type=\"button\" ng-click=\"cancel()\">Cancel</md-button><button type=\"submit\" class=\"md-button md-accent\" ng-disabled=\"namelistform.$invalid || cantSave.length > 0\">Save</button></div></form></md-dialog>"
  );


  $templateCache.put('app/templates/GameSelection.html',
    "<md-bottom-sheet class=\"md-grid\" style=\"background-color: #424242; border-color: #424242\"><md-tabs md-dynamic-height md-no-pagination><md-tab label=\"GZDOOM\" md-on-select=\"engine='gzdoom'\" ng-disabled=\"!config.active.gzdoom\"></md-tab><md-tab label=\"ZANDRONUM\" md-on-select=\"engine='zandronum'\" ng-disabled=\"!config.active.zandronum\"></md-tab><md-tab label=\"ZDOOM\" md-on-select=\"engine='zdoom'\" ng-disabled=\"!config.active.zdoom\"></md-tab><md-tab label=\"SKULLTAG\" md-on-select=\"engine='skulltag'\" ng-disabled=\"!config.active.skulltag\"></md-tab><md-tab label=\"DOOM64\" md-on-select=\"engine='doom64ex'\" ng-disabled=\"!config.active.doom64ex\"></md-tab></md-tabs><div style=\"position: absolute; bottom: 70px; right: 10px; z-index: 999; font-size: 14px\"><md-checkbox ng-model=\"useoblige\" aria-label=\"Oblige\" ng-disabled=\"!config.active.oblige\"><p style=\"margin-left: 5px\">Build and Play (Oblige)</p></md-checkbox></div><br><md-content><md-list><md-list-item ng-repeat=\"iwad in iwads\"><div class=\"gameholder md-grid-item-content\" ng-click=\"startGame($index, engine)\"><div class=\"tint\"><i class=\"mdi mdi-play\"></i></div><img data-ng-src=\"{{iwad.cover}}\"></div><div class=\"md-grid-text gameholder-txt\">{{iwad.name}}</div></md-list-item></md-list><br></md-content></md-bottom-sheet>"
  );


  $templateCache.put('app/templates/MainMods.html',
    "<script type=\"text/javascript\">var fixHeight = function() {\r" +
    "\n" +
    "    var mainHeight = $(\"body\").height();\r" +
    "\n" +
    "    var ToolbarHeight = $(\"md-toolbar.layout-row\").height();\r" +
    "\n" +
    "    var subToolbarHeight = $(\"md-toolbar.md-hue-2\").height();\r" +
    "\n" +
    "    $('.slimScrollDiv, .slimScrollDiv > md-content').css('height', mainHeight - (ToolbarHeight + subToolbarHeight));\r" +
    "\n" +
    "    console.log(\"Fixed height to: \", mainHeight);\r" +
    "\n" +
    "}\r" +
    "\n" +
    "\r" +
    "\n" +
    "var setupScrollies = function() {\r" +
    "\n" +
    "    $('.slimscroll-mods').slimScroll({\r" +
    "\n" +
    "        position: 'right',\r" +
    "\n" +
    "        height: 'auto',\r" +
    "\n" +
    "        railVisible: true,\r" +
    "\n" +
    "        alwaysVisible: true,\r" +
    "\n" +
    "        color: '#78909c',\r" +
    "\n" +
    "        wheelStep: 7\r" +
    "\n" +
    "    });\r" +
    "\n" +
    "}\r" +
    "\n" +
    "\r" +
    "\n" +
    "$(document).ready(function(){\r" +
    "\n" +
    "    $.when(setupScrollies()).then(fixHeight);\r" +
    "\n" +
    "});\r" +
    "\n" +
    "\r" +
    "\n" +
    "$(window).on('resize', function(){\r" +
    "\n" +
    "    $.when(setupScrollies()).then(fixHeight);\r" +
    "\n" +
    "});</script><div layout=\"row\" ng-controller=\"modController\"><div flex><md-toolbar class=\"md-hue-2\"><div class=\"md-toolbar-tools\"><i class=\"mdi mdi-magnify filtericon\"></i><md-input-container style=\"width: 100%;font-size: 14px\"><label class=\"filterlabel\" style=\"color: white;font-weight: normal;opacity:0\">Filter</label><input ng-model=\"searchterm\"></md-input-container></div></md-toolbar><md-content layout-padding class=\"slimscroll-mods\"><md-list><md-list-item class=\"md-2-line repeat-animation init-animation\" ng-repeat=\"mod in filtered = (mods | filter:searchterm) track by mod.path\" ng-click=\"selectWad(mod)\"><div class=\"md-list-item-text\"><h3>{{ mod.name }}</h3><p>{{ mod.dir }}</p></div><i class=\"mdi mdi-checkbox-marked-circle-outline custom-check\" style=\"font-size: 25px;color: #ff5722\" ng-show=\"mod.checked\"></i></md-list-item></md-list><div ng-hide=\"filtered.length > 0\" style=\"text-align:center\"><img src=\"app/assets/nof.png\"><p>Sorry, No Mods Found</p></div></md-content></div><div flex><md-toolbar class=\"md-hue-2 menu-animation\" ng-show=\"selected.list.length > 0 || usedList\"><div class=\"md-toolbar-tools\"><p>{{selected.name}}</p><span flex></span><md-button ng-show=\"selected.list.length > 0\" class=\"md-accent\" ng-click=\"saveSelected($event)\"><i class=\"mdi mdi-content-save\"></i> Save</md-button><div ng-show=\"selected.list.length > 0 || usedList !== 'Untitled'\"><md-button class=\"md-accent\" ng-click=\"newSelected()\"><i class=\"mdi mdi-playlist-plus\"></i> New</md-button></div></div></md-toolbar><md-content layout-padding class=\"slimscroll-mods\"><md-list><md-list-item class=\"md-2-line repeat-animation\" ng-repeat=\"mod in selected.list track by mod.path\"><div class=\"md-list-item-text\"><h3>{{ mod.name }}</h3><p>{{ mod.dir }}</p></div><div class=\"md-secondary\"><p ng-click=\"moveUp($index)\"><i class=\"mdi mdi-chevron-up btn-sort\"></i></p><p ng-click=\"moveDown($index)\"><i class=\"mdi mdi-chevron-down btn-sort\"></i></p></div></md-list-item></md-list></md-content></div></div><md-button aria-label=\"play\" class=\"md-fab special-fab\" style=\"position: absolute; right: 25px; bottom: 15px; z-index:3\" ng-click=\"showGameSelection()\" ng-show=\"config.active.gzdoom || config.active.zandronum || config.active.zdoom || config.active.doom64ex\"><i class=\"mdi mdi-play\"></i></md-button>"
  );


  $templateCache.put('app/templates/ObligeLoading.html',
    "<md-dialog><md-toolbar><div class=\"md-toolbar-tools\"><h2>Oblige is building - Please wait</h2><span flex></span></div></md-toolbar><md-dialog-content style=\"padding: 25px\"><div style=\"color: white; font-weight: bold;text-align:center\"><p>Oblige is building in the background, the Game will automatically start</p><br><div layout=\"row\" layout-sm=\"column\" layout-align=\"space-around\"><md-progress-circular class=\"md-accent\" md-mode=\"indeterminate\"></md-progress-circular></div></div></md-dialog-content></md-dialog>"
  );


  $templateCache.put('app/templates/PanicDialog.html',
    "<md-dialog style=\"width:100%;max-width:750px;max-height:450px\"><md-toolbar><div class=\"md-toolbar-tools\" style=\"background-color: #ff5722\"><h2>Panic - {{title}}</h2><span flex></span></div></md-toolbar><md-dialog-content><div style=\"color: white; padding: 15px\"><p>{{message}}</p><textarea style=\"width: 100%; height: 250px; background-color:black;color: white;font-family: monospace;font-size: 14px\">{{log}}</textarea><br></div></md-dialog-content><div class=\"md-actions\" layout=\"row\"><span flex></span><md-button ng-click=\"savelog()\">Save log</md-button><md-button ng-click=\"cancel()\">OK</md-button></div></md-dialog>"
  );


  $templateCache.put('app/templates/SelectConfig.html',
    "<md-dialog style=\"width:65%\"><md-toolbar><div class=\"md-toolbar-tools\"><h2>Select Oblige Config</h2><span flex></span></div></md-toolbar><input class=\"fileDialog\" type=\"file\" style=\"display:none\" nwsaveas=\"{{wadpath}}\"><md-tabs md-selected=\"selectedTab\" md-dynamic-height><md-tab label=\"Build\"><br><md-dialog-content><div layout=\"row\"><div flex=\"5\"></div><div flex=\"90\"><div style=\"font-size: 12px\"><p>Selected Engine: {{engine}}<br>Selected iWad: {{iwad}}<br><span ng-show=\"lastBuilt\">Last Mapbuild: {{lastBuilt | date:'medium'}}</span></p></div><md-input-container><label>Select Oblige Mapbuild Config</label><md-select ng-model=\"selectedconfig\"><md-option ng-repeat=\"conf in mapconfigs track by $index\" value=\"{{conf.path}}\">{{conf.name}}</md-option></md-select></md-input-container><md-input-container ng-show=\"savegames.length > 0\"><md-checkbox ng-model=\"deletesavegames\" aria-label=\"Delete Savegames\"><p style=\"color:white\">Delete Savegames</p></md-checkbox></md-input-container></div><div flex=\"5\"></div></div></md-dialog-content></md-tab><md-tab label=\"Continue\" ng-disabled=\"!lastBuilt\"><br><md-dialog-content><div layout=\"row\"><div flex=\"5\"></div><div flex=\"90\"><div style=\"font-size: 12px\"><p>Selected Engine: {{engine}}<br>Selected iWad: {{iwad}}<br><span ng-show=\"lastBuilt\">Last Mapbuild: {{lastBuilt | date:'medium'}}</span></p></div><md-input-container ng-show=\"savegames.length > 0\"><label>Select Savegame</label><md-select ng-model=\"selectedsave\"><md-option value=\"false\">Dont load Savegame</md-option><md-option ng-repeat=\"save in savegames track by $index\" value=\"{{save.path}}\">{{save.date |date:'dd/MM HH:mm'}} - {{save.name}}</md-option></md-select></md-input-container></div><div flex=\"5\"></div></div></md-dialog-content></md-tab></md-tabs><div class=\"md-actions\"><md-button ng-click=\"cancel()\">Cancel</md-button><span flex></span><md-button ng-show=\"selectedTab === 1\" ng-click=\"openSaveDir()\">Open Savefolder</md-button><md-button ng-show=\"selectedTab === 0\" ng-click=\"openOblige()\">Open Oblige</md-button><md-button id=\"keep\" ng-show=\"lastBuilt\">Save current Map</md-button><md-button ng-show=\"selectedTab === 1\" class=\"md-accent\" ng-click=\"continue()\">Continue Last Map</md-button><md-button ng-show=\"selectedTab === 0\" class=\"md-accent\" ng-click=\"start()\">Build & Start</md-button></div></md-dialog>"
  );


  $templateCache.put('app/templates/Settings.html',
    "<md-dialog style=\"width:100%;max-width:950px;max-height:620px\"><form style=\"overflow:hidden\"><md-toolbar><div class=\"md-toolbar-tools\"><h2>Settings</h2><span flex></span></div></md-toolbar><md-dialog-content style=\"padding:25px\"><div><div layout=\"row\"><div flex><md-checkbox ng-model=\"config.active.gzdoom\" aria-label=\"GZDoom\"><p style=\"color:white\">GZDoom</p></md-checkbox></div><div flex><md-checkbox ng-model=\"config.active.zandronum\" aria-label=\"Zandronum\"><p style=\"color:white\">Zandronum</p></md-checkbox></div><div flex><md-checkbox ng-model=\"config.active.zdoom\" aria-label=\"Oblige\"><p style=\"color:white\">zDoom</p></md-checkbox></div><div flex><md-checkbox ng-model=\"config.active.skulltag\" aria-label=\"Skulltag\"><p style=\"color:white\">Skulltag</p></md-checkbox></div><div flex><md-checkbox ng-model=\"config.active.oblige\" aria-label=\"Oblige\"><p style=\"color:white\">Oblige</p></md-checkbox></div><div flex><md-checkbox ng-model=\"config.active.doom64ex\" aria-label=\"Doom64EX\"><p style=\"color:white\">Doom64EX</p></md-checkbox></div></div><div layout=\"row\"><div flex><md-input-container><label>Select list for Startup</label><md-select ng-model=\"config.initList\" placeholder=\"Select List\" ng-disabled=\"modlist.length === 0\"><md-option value=\"false\">Deactivate</md-option><md-option ng-repeat=\"list in modlist\" value=\"{{list}}\">{{list.name}}</md-option></md-select></md-input-container></div></div><fieldset><legend>WAD/iWAD Paths</legend><dir-choose label=\"WAD Path:\" ng-model=\"config.wadpath\"></dir-choose><dir-choose label=\"iWAD Path:\" ng-model=\"config.iwadpath\"></dir-choose></fieldset><fieldset ng-show=\"config.active.zandronum === true || config.active.skulltag === true\"><legend>Tools</legend><file-choose label=\"Online Client (DOOMSEEKER):\" ng-model=\"config.online.client\"></file-choose></fieldset><fieldset ng-show=\"config.active.gzdoom\"><legend>gzDoom</legend><div><file-choose label=\"gzDoom Path:\" ng-model=\"config.engines.gzdoom\"></file-choose><dir-choose label=\"gzDoom Savegames:\" ng-model=\"config.savepaths.gzdoom\"></dir-choose></div></fieldset><fieldset ng-show=\"config.active.zdoom\"><legend>zDoom</legend><div><file-choose label=\"zDoom Path:\" ng-model=\"config.engines.zdoom\"></file-choose><dir-choose label=\"zDoom Savegames:\" ng-model=\"config.savepaths.zdoom\"></dir-choose></div></fieldset><fieldset ng-show=\"config.active.zandronum\"><legend>Zandronum</legend><div><file-choose label=\"Zandronum Path:\" ng-model=\"config.engines.zandronum\"></file-choose><dir-choose label=\"Zandronum Savegames:\" ng-model=\"config.savepaths.zandronum\"></dir-choose></div></fieldset><fieldset ng-show=\"config.active.skulltag\"><legend>Skulltag</legend><div><file-choose label=\"Skulltag Path:\" ng-model=\"config.engines.skulltag\"></file-choose><dir-choose label=\"Skulltag Savegames:\" ng-model=\"config.savepaths.skulltag\"></dir-choose></div></fieldset><fieldset ng-show=\"config.active.doom64ex\"><legend>Doom 64EX</legend><div><file-choose label=\"Doom64EX Path:\" ng-model=\"config.engines.doom64ex\"></file-choose><file-choose label=\"Doom64EX SoundFont File:\" ng-model=\"config.misc.doom64exsound\"></file-choose><dir-choose label=\"Doom64EX Savegames:\" ng-model=\"config.savepaths.doom64ex\"></dir-choose></div></fieldset><fieldset ng-show=\"config.active.oblige\"><legend>Oblige</legend><div><file-choose label=\"Oblige Path:\" ng-model=\"config.oblige.binary\"></file-choose><dir-choose label=\"Oblige MapConfig Path:\" ng-model=\"config.oblige.configs\"></dir-choose><file-choose label=\"Oblige Random Map Path:\" ng-model=\"config.oblige.mappath\"></file-choose></div></fieldset></div></md-dialog-content><div class=\"md-actions\" layout=\"row\"><span flex></span><md-button ng-click=\"cancel()\">Cancel</md-button><md-button class=\"md-accent\" ng-click=\"save()\" style=\"margin-right:20px\">Save</md-button></div></form></md-dialog>"
  );


  $templateCache.put('app/templates/Update.html',
    "<md-dialog style=\"width:80%\"><form style=\"overflow:hidden\"><md-toolbar><div class=\"md-toolbar-tools\"><h2>New Update Available!</h2><span flex></span></div></md-toolbar><md-dialog-content style=\"padding:25px\"><div><strong>Version {{downloadversion}}</strong> is available for Download here:<br><br><div style=\"text-align:center\"><md-button ng-show=\"showDeny\" class=\"md-raised\" style=\"background-color: #505050\"><i class=\"mdi mdi-bell-off\"></i> &nbsp;&nbsp;<a target=\"_blank\" ng-click=\"dontShow()\">Dont show again</a></md-button><md-button class=\"md-raised md-accent\"><i class=\"mdi mdi-briefcase-download\"></i> &nbsp;&nbsp;<a target=\"_blank\" ng-click=\"download()\">Download</a></md-button></div></div></md-dialog-content><div class=\"md-actions\" layout=\"row\"><span flex></span><md-button ng-click=\"close()\">Close</md-button></div></form></md-dialog>"
  );


  $templateCache.put('app/templates/noUpdateAvailable.html',
    "<md-dialog style=\"width:50%\"><form style=\"overflow:hidden\"><md-toolbar><div class=\"md-toolbar-tools\"><h2>No Update Available</h2><span flex></span></div></md-toolbar><md-dialog-content style=\"padding:25px\"><div><div style=\"text-align:center\"><p>Your Version is up to date!</p></div></div></md-dialog-content><div class=\"md-actions\" layout=\"row\"><span flex></span><md-button ng-click=\"close()\">Close</md-button></div></form></md-dialog>"
  );
}]);