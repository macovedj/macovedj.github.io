// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"threeRelativity/js/threeImplementation.js":[function(require,module,exports) {
// let moment = require('moment');
// let momentDurationFormatSetup = require("moment-duration-format");
// let lastTime = performance.now();
// let relativisticPhotonTime = 0;
// let time = 0;
// let travellerSpeed = 0;
// let gamma = 1;
// let playing = false;
// let pauseTime = 5;
// let movingLightSecondLines = [];
// let movingSpritesA = [];
// let movingSpritesB = [];
// let resumeTime;
// let sliderNode = document.querySelector('#speedSlider');          
// let movingPhotonTimeNode = document.querySelector('#movingPhotonTime');          
// let stationaryTimeNode = document.querySelector('#stationaryTime');          
// let resetButtonNode = document.querySelector('#resetButton');          
// let startButtonNode = document.querySelector('#startButton');          
// let recenterXButtonNode = document.querySelector('#recenterXButton');          
// let recenterYButtonNode = document.querySelector('#recenterYButton');          
// let labelValue = document.querySelector('#labelValue');
// let gammaLabel = document.querySelector('#gammaLabel');          
// let pauseInput = document.querySelector('#pauseTime');
// startButtonNode.addEventListener("click", startHandler);
// resetButtonNode.addEventListener("click", resetHandler);
// pauseInput.addEventListener("input", pauseInputHandler);
// recenterXButtonNode.addEventListener("click", recenterXHandler);
// recenterYButtonNode.addEventListener("click", recenterYHandler);
// function resetHandler() {
// 	sliderNode.value = 0;
// 	gamma = 1;
// 	relativisticPhotonTime = 0;
// 	time = 0;
// 	travellerSpeed = 0;
// 	movingPhotonTimeNode.innerHTML = "00:00:00";
// 	stationaryTimeNode.innerHTML = "00:00:00";
// 	labelValue.innerHTML = "0";
// 	gammaLabel.innerHTML = "1";
// 	movingLineA.position.x = 0;
// 	photonA.position.x = 0;
// 	movingSpritesA.forEach(sprite => scene.remove(sprite));
// 	movingSpritesB.forEach(sprite => scene.remove(sprite));
// 	movingLightSecondLines.forEach(line => scene.remove(line));
// 	movingLightSecondLines = [];
// 	movingSpritesA = [];
// 	movingSpritesB = [];
// 	pauseTime = pauseInput.value;
// 	for (var i = 0; i <= 200; i++) {
// 		createMovingLightSecondA(i, gamma);
// 	}
// 	movingLightSecondLines.forEach(line => scene.add(line))
// 	movingSpritesA.forEach(sprite => scene.add(sprite))
// 	movingSpritesB.forEach(sprite => scene.add(sprite))
// 	sliderNode.disabled = false;
// 	playing = false;
// }
// function startHandler() {
// 	lastTime = performance.now();
// 	if (resumeTime) {
// 		time = resumeTime;
// 	}
// 	playing = true;
// 	sliderNode.disabled = true;
// }
// function pauseInputHandler() {
// 	pauseTime = pauseInput.value;
// }
// // Handle Scroll Logic
// function onMouseWheel(event) {
// 	event.preventDefault();
// 	camera.position.x += event.deltaX * 0.005;
// 	camera.position.y += event.deltaY * 0.005;
// 	// prevent scrolling beyond a min/max value
// 	camera.position.clampScalar(-1000, 1000);
// }
// function recenterXHandler() {
// 	camera.position.x = 0;
// }
// function recenterYHandler() {
// 	camera.position.y = 0;
// }
// function createStationaryLightSecondA(i) {
// 	var lightSecondMark = new THREE.Geometry();
// 	lightSecondMark.vertices.push(new THREE.Vector3( i * 1.5, .9, 0));
// 	lightSecondMark.vertices.push(new THREE.Vector3( i * 1.5, 1.1, 0));
// 	var lightSecondLine = new THREE.LineSegments( lightSecondMark, linesMaterial );
// 	let canvas = document.createElement('canvas');
// 	canvas.width = 256;
// 	canvas.height = 256;
// 	var ctx = canvas.getContext("2d");
// 	ctx.font = "22pt Arial";
// 	ctx.fillStyle = "#9f8ec2";
// 	ctx.textAlign = "center";
// 	ctx.fillText(i, 128, 44);
// 	var tex = new THREE.Texture(canvas);
// 	tex.needsUpdate = true;
// 	var spriteMat = new THREE.SpriteMaterial({
// 		map: tex
// 	});
// 	var sprite = new THREE.Sprite(spriteMat);
// 	sprite.position.x = i * 1.5;
// 	sprite.position.y = 0.4;
// 	scene.add(lightSecondLine);
// 	scene.add(sprite);
// }
// function createStationaryLightSecondB(i) {
// 	var lightSecondMark = new THREE.Geometry();
// 	lightSecondMark.vertices.push(new THREE.Vector3(i * 1.5, -.6, 0));
// 	lightSecondMark.vertices.push(new THREE.Vector3(i * 1.5, -.4, 0));
// 	var lightSecondLine = new THREE.LineSegments(lightSecondMark, movingLinesMaterial);
// 	let canvas = document.createElement('canvas');
// 	canvas.width = 256;
// 	canvas.height = 256;
// 	var ctx = canvas.getContext("2d");
// 	ctx.font = "22pt Arial";
// 	ctx.fillStyle = "#5f9ea0";
// 	ctx.textAlign = "center";
// 	ctx.fillText(i, 128, 44);
// 	var tex = new THREE.Texture(canvas);
// 	tex.needsUpdate = true;
// 	var spriteMat = new THREE.SpriteMaterial({
// 		map: tex
// 	});
// 	var sprite = new THREE.Sprite(spriteMat);
// 	sprite.position.x = i * 1.5;
// 	sprite.position.y = -1.1;
// 	scene.add(lightSecondLine);
// 	scene.add(sprite);
// }
// function createMovingLightSecondA(i, gamma) {
// 	var movingLightSecondMark = new THREE.Geometry();
// 	movingLightSecondMark.vertices.push(new THREE.Vector3( i * 1.5 / gamma, 1.4, 0));
// 	movingLightSecondMark.vertices.push(new THREE.Vector3( i * 1.5 / gamma, 1.6, 0));
// 	var movingLightSecondLine = new THREE.LineSegments( movingLightSecondMark, movingLinesMaterial );
// 	movingLightSecondLines.push(movingLightSecondLine);
// 	let canvas = document.createElement('canvas');
// 	canvas.width = 256;
// 	canvas.height = 256;
// 	var ctx = canvas.getContext("2d");
// 	ctx.font = "22pt Arial";
// 	ctx.fillStyle = "#5f9ea0";
// 	ctx.textAlign = "center";
// 	ctx.fillText(i, 128, 44);
// 	var tex = new THREE.Texture(canvas);
// 	tex.needsUpdate = true;
// 	var spriteMat = new THREE.SpriteMaterial({
// 		map: tex
// 	});
// 	var sprite = new THREE.Sprite(spriteMat);
// 	sprite.position.x = i * 1.5 / gamma;
// 	sprite.position.y = .9;
// 	movingSpritesA.push(sprite);
// }
// function createMovingLightSecondB(i, gamma) {
// 	var movingLightSecondMark = new THREE.Geometry();
// 	movingLightSecondMark.vertices.push(new THREE.Vector3(i * 1.5 / gamma, -1.1, 0));
// 	movingLightSecondMark.vertices.push(new THREE.Vector3(i * 1.5 / gamma, -.9, 0));
// 	var movingLightSecondLine = new THREE.LineSegments(movingLightSecondMark, linesMaterial);
// 	movingLightSecondLines.push(movingLightSecondLine);
// 	let canvas = document.createElement('canvas');
// 	canvas.width = 256;
// 	canvas.height = 256;
// 	var ctx = canvas.getContext("2d");
// 	ctx.font = "22pt Arial";
// 	ctx.fillStyle = "#9f8ec2";
// 	ctx.textAlign = "center";
// 	ctx.fillText(i, 128, 44);
// 	var tex = new THREE.Texture(canvas);
// 	tex.needsUpdate = true;
// 	var spriteMat = new THREE.SpriteMaterial({
// 		map: tex
// 	});
// 	var sprite = new THREE.Sprite(spriteMat);
// 	sprite.position.x = i * 1.5 / gamma;
// 	sprite.position.y = -1.6;
// 	movingSpritesB.push(sprite);
// }
// // Establish the scene
// var scene = new THREE.Scene();
// var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// var renderer = new THREE.WebGLRenderer();
// renderer.setClearColor(0x333333);
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);
// window.addEventListener('wheel', onMouseWheel, false);
// window.addEventListener('resize', function () {
// 	var width = window.innerWidth;
// 	var height = window.innerHeight;
// 	renderer.setSize(width, height);
// 	camera.aspect = width / height;
// 	camera.updateProjectionMatrix();
// });
// function computeGamma() { return 1/ Math.sqrt(1 - Math.pow(travellerSpeed, 2)); }
// const renderTimers= (time, relativisticPhotonTime) => {
// 	movingPhotonTimeNode.innerText = moment.duration(relativisticPhotonTime).format('mm:ss:SS', { trim: false });
// 	stationaryTimeNode.innerText = moment.duration(time).format('mm:ss:SS', { trim: false });
// }
// sliderNode.addEventListener("input", ev => {
// 	travellerSpeed = ev.target.value;
// 	labelValue.innerHTML = sliderNode.value;
// 	gamma = computeGamma();
// 	gammaLabel.innerHTML = gamma;
// 	movingLightSecondLines.forEach(line => line.scale.set(1 / gamma, 1, 1)) 
// 	movingSpritesA.forEach((sprite, i) => sprite.position.x = movingSpritesA[0].position.x + i * 1.5 / gamma);
// 	movingSpritesB.forEach((sprite, i) => sprite.position.x = movingSpritesB[0].position.x + i * 1.5 / gamma);
// })
// // Create each measurement line and photon
// var stationaryGeometryA = new THREE.Geometry();
// var movingGeometryA = new THREE.Geometry();
// var photonGeometryA = new THREE.PlaneGeometry(.05,.05,.05);
// var stationaryGeometryB = new THREE.Geometry();
// var movingGeometryB = new THREE.Geometry();
// var photonGeometryB = new THREE.PlaneGeometry(.05, .05, .05);
// stationaryGeometryA.vertices.push(new THREE.Vector3( -1000, 1, 0) );
// stationaryGeometryA.vertices.push(new THREE.Vector3( 1000, 1, 0) );
// movingGeometryA.vertices.push(new THREE.Vector3( -1000, 1.5, 0) );
// movingGeometryA.vertices.push(new THREE.Vector3( 1000, 1.5, 0) );
// stationaryGeometryB.vertices.push(new THREE.Vector3(-1000, -1, 0));
// stationaryGeometryB.vertices.push(new THREE.Vector3(1000, -1, 0));
// movingGeometryB.vertices.push(new THREE.Vector3(-1000, -.5, 0));
// movingGeometryB.vertices.push(new THREE.Vector3(1000, -.5, 0));
// const linesMaterial = new THREE.LineBasicMaterial( { color: 0x9f8ec2 } );
// const movingLinesMaterial = new THREE.LineBasicMaterial( { color: 0x5f9ea0 } );
// // Create tick marks on each line
// for ( var i = 0; i <= 200; i++ ) {
// 	createStationaryLightSecondA(i);
// 	createMovingLightSecondA(i, gamma);
// 	createStationaryLightSecondB(i);
// 	createMovingLightSecondB(i, gamma);
// }
// movingLightSecondLines.forEach(mark => scene.add(mark));
// movingSpritesA.forEach(sprite => scene.add(sprite));
// movingSpritesB.forEach(sprite => scene.add(sprite));
// // create materials for various geometries
// var stationaryMaterial = new THREE.LineBasicMaterial( { color: 0x9f8ec2 } );
// var movingMaterial = new THREE.LineBasicMaterial( { color: 0x5f9ea0 } );
// const photonMaterial = new THREE.MeshBasicMaterial( { color: 0xffe623, side: THREE.DoubleSide } );
// var stationaryLineA = new THREE.Line( stationaryGeometryA, stationaryMaterial );
// var movingLineA = new THREE.Line( movingGeometryA, movingMaterial );
// var photonA = new THREE.Mesh( photonGeometryA, photonMaterial );
// photonA.position.y = 2;
// var stationaryLineB = new THREE.Line(stationaryGeometryB, stationaryMaterial);
// var movingLineB = new THREE.Line(movingGeometryB, movingMaterial);
// var photonB = new THREE.Mesh(photonGeometryB, photonMaterial);
// photonB.position.y = 0;
// camera.position.z = 3;
// scene.add(stationaryLineA);
// scene.add(movingLineA);
// scene.add(photonA);
// scene.add(stationaryLineB);
// scene.add(movingLineB);
// scene.add(photonB);
// // update logic
// var update = function() {
// 	//stop after pause time
// 	if (time > pauseTime * 1000) {
// 		playing = false
// 	}
// 	//update positions and times if not paused
// 	if (playing) {
// 		const now = performance.now();
// 		const sinceLast = now - lastTime;
// 		time += sinceLast;
// 		relativisticPhotonTime = gamma * (time * ( 1 - travellerSpeed));
// 		renderTimers( time, relativisticPhotonTime );
// 		lastTime = now;
// 		movingLightSecondLines.forEach(line =>  line.position.x += travellerSpeed * sinceLast * .0015);
// 		movingSpritesA.forEach(sprite =>  sprite.position.x += travellerSpeed * sinceLast * .0015);
// 		photonA.position.x += 1.5 * sinceLast / 1000
// 	}
// }	
// // draw Scene
// var render = function() {
//     renderer.render(scene, camera);
// };
// // run game loop (update, render, repeate)
// var GameLoop = function() {
//   update();
//   render();
//   requestAnimationFrame( GameLoop );
// };
// GameLoop();
},{}],"../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "62357" + '/');

  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","threeRelativity/js/threeImplementation.js"], null)
//# sourceMappingURL=/threeImplementation.d406136c.map