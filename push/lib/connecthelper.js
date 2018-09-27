/*jshint loopfunc: true */
var connecthelper = {};

(function() {
	connecthelper = {
		url: '', // "http://" + connecthelper.host + ":" + connecthelper.port;
		host: '172.30.1.4',
		port: '8888',
		socket: null,
		options: {},
		pincode: '',
		status: 'disconnect',
		isCausedServerSide: true,
		contentUrl: '',
		contentObject: {},
		// popup: {
		// 	parentElement: null,
		// 	prevContext: null,
		// 	prevFocus: null,
		// 	isOpenned: false,
		// 	init: function() {
		// 		connecthelper.popup.parentElement = document.getElementById('pushPopup');
		// 	},
		// 	create: function() {
		// 		connecthelper.popup.clear();
		// 		var bodyElement = util.createElement('div', {className: 'push-popup-body text-left', id: 'pushBody',tabIndex: '-1'}, connecthelper.msg.ASK_REMOTE_URL);
		// 		var playButton = util.createElement('div', {className: 'btn btn-default nav-item push-popup-button', id: 'pushPlayButton'}, connecthelper.msg.OK);
		// 		var cancelButton = util.createElement('div', {className: 'btn btn-default nav-item push-popup-button', id: 'pushCancelButton'}, connecthelper.msg.CANCEL);
		// 		connecthelper.popup.parentElement.appendChild(bodyElement);
		// 		connecthelper.popup.parentElement.appendChild(playButton);
		// 		connecthelper.popup.parentElement.appendChild(cancelButton);

		// 		keynav.addListener(connecthelper.popup.parentElement, 'keydown', connecthelper.popup.keyDownHandler);
		// 		connecthelper.popup.bindClickHandler();
		// 	},
		// 	clear: function() {
		// 		connecthelper.popup.parentElement.innerHTML = '';
		// 	},
		// 	updateMessage: function(msg) {
		// 		if(connecthelper.popup.parentElement === null) {
		// 			return;
		// 		}

		// 		if(msg !== null && (typeof msg === 'string')) {
		// 			document.getElementById('pushBody').innerHTML = msg;
		// 		}
		// 	},
		// 	show: function() {
		// 		if(connecthelper.popup.parentElement === null) {
		// 			connecthelper.popup.init();
		// 			connecthelper.popup.create();
		// 		}

		// 		if(connecthelper.popup.isOpenned === true) {
		// 			connecthelper.popup.hide();
		// 		}

		// 		util.removeClass(connecthelper.popup.parentElement, 'hide');
		// 		util.addClass(connecthelper.popup.parentElement, 'show');

		// 		keynav.setLayerElement(connecthelper.popup.parentElement);
		// 		connecthelper.popup.setFocusElement(connecthelper.popup.parentElement);
		// 		keynav.reload();

		// 		var okButton = document.getElementById('pushPlayButton');
		// 		connecthelper.popup.setFocusElement(okButton);
		// 		connecthelper.popup.isOpenned = true;
		// 	},
		// 	hide: function() {
		// 		if(connecthelper.popup.parentElement === null) {
		// 			return;
		// 		}

		// 		switch (curDisplaySceneId) {
		// 			case 'main':
		// 				console.log('scene main');
		// 				scene.show('main');
		// 				break;
		// 			case 'avplaycontentsearch':
		// 				console.log('scene avplaycontentsearch');
		// 				scene.show('avplaycontentsearch');
		// 				break;
		// 			case 'avplaycontentplay':
		// 				console.log('scene avplaycontentplay');
		// 				if(connecthelper.contentUrl != '' && typeof connecthelper.contentUrl == 'string') {
		// 					// if(connecthelper.popup.prevContext != null){
		// 					// 	keynav.setLayerElement(connecthelper.popup.prevContext);
		// 					// 	keynav.focusElement(connecthelper.popup.prevFocus);
		// 					// }
		// 					//
		// 					webapis.avplay.stop();
		// 					playbackhelper.close();

		// 					// call media play function with data.msg
		// 					if(connecthelper.contentObject != null) {
		// 						// scene.hide('avplaycontentplay');
		// 						scene.show('avplaycontentplay', connecthelper.contentObject);
		// 					}
		// 				}
		// 				break;
		// 			default:
		// 		}

		// 		util.removeClass(connecthelper.popup.parentElement, 'show');
		// 		util.addClass(connecthelper.popup.parentElement, 'hide');

		// 		connecthelper.popup.parentElement.blur();
		// 		connecthelper.popup.isOpenned = false;

		// 		connecthelper.prevFocus = null;
		// 		connecthelper.prevContext = null;
		// 	},
		// 	getCurrentContext: function() {
		// 		return document.getElementById(curDisplaySceneId + 'Scene');
		// 	},
		// 	setFocusElement: function(element) {
		//         if(!element) {
		//             return;
		//         }
		//         element.focus();
		//         keynav.focusElement(element);
		//     },
		// 	keyDownHandler: function(event, fromElement, toElement) {
		// 		connecthelper.sendLog('connecthelper::::keyDownHandler ' + event.keyCode, false);
		// 		var keyName = keyCodeMap[event.keyCode];
		// 		switch (keyName) {
		// 		case 'UP':
		// 		case 'DOWN':
		// 			event.preventDefault();
		// 			break;
		// 		case 'RETURN':
		// 			connecthelper.popup.hide();
		// 			break;
		// 		}
		// 	},
		// 	clickHandler: function(event) {
		// 		connecthelper.sendLog('push Popup clickHandler.....' + event.target.id, false);
		// 		var targetId = event.target.id;

		// 		if(targetId === 'pushPlayButton') {
		// 			connecthelper.sendLog('connecthelper::::pushPlayButton', false);
		// 			if(connecthelper.contentUrl !== '' && (typeof connecthelper.contentUrl === 'string')) {
		// 				connecthelper.popup.hide();

		// 				webapis.avplay.stop();
		// 				playbackhelper.close();

		// 				// call media play function with data.msg
		// 				var object = {
		// 					"id" : "By Stream Test Tool",
		// 					"url" : connecthelper.contentUrl,
		// 					"playInfo" : {
		// 						"name" : "remoteContentURL",
		// 						"url" : connecthelper.contentUrl,
		// 						"streamingtype" : "HTTP",
		// 						"publish" : true,
		// 						"description" : "This is Sample",
		// 						"zap" : true,
		// 						"owner" : "hyojins.kim",
		// 						"extserver" : true,
		// 						"id" : "By Stream Test Tool"
		// 					}
		// 			    };
		// 				scene.show('avplaycontentplay', object);
		// 			}
		// 			else {
		// 				console.error('Getting the ContentUrl is failed.');
		// 				connecthelper.popup.hide();
		// 			}
		// 		}
		// 		else if(targetId === 'pushCancelButton'){
		// 			connecthelper.sendLog('connecthelper::::pushCancelButton', false);
		// 			connecthelper.popup.hide();
		// 		}
		// 	},
		// 	bindClickHandler: function() {
		// 		var keynavElems = connecthelper.popup.parentElement.getElementsByClassName('nav-item');
		// 		for(var i = 0; i < keynavElems.length; i++) {
		// 			if(keynavElems[i].click) {
		// 				keynavElems[i].addEventListener('click', connecthelper.popup.clickHandler);
		// 			}
		// 		}
		// 	}
		// },
		msg: {
			SUCCESS: 'success',
			FAIL: 'fail',
			OK: 'ok',
			CONNECT: 'connect',
			DISCONNECT: 'disconnect',
			CANCEL: 'cancel',
			ASK_REMOTE_URL: 'Url has been delivered from http://168.219.241.233:8888<br> Do you want to playback it right away?'
		},
		init: function() {
			connecthelper.sendLog('connecthelper::::init', false);

			connecthelper.contentUrl = '';
			connecthelper.contentObject = {};

			// connecthelper.popup.init();
			// connecthelper.popup.create();
		},
		showConnectIcon: function() {
			if ((connecthelper.socket != null) && (connecthelper.status == connecthelper.msg.CONNECT)) {
				console.log('connected');
			}
		},
		hideConnectIcon: function() {
			console.log('disconnected');
		},
		connect: function() {
			connecthelper.sendLog('connecthelper::::connect', false);

			connecthelper.url = "https://" + connecthelper.host + ":" + connecthelper.port;
			connecthelper.options = {
				reconnection: false,
				reconnectionAttempts: 2,
				reconnectionDelay: 1000,
				reconnectionDelayMax: 5000,
				timeout: 5000,
				autoConnect: false
			};

			connecthelper.socket = io(connecthelper.url, connecthelper.options);

			connecthelper.socket.once('connect', function() {
				connecthelper.sendLog('socket once::::connect', false);

				connecthelper.socket.emit('channelCreate', {});
				connecthelper.socket.listeners('mediaDataDelivery');
			});

			connecthelper.socket.once('connect_error', function() {
				connecthelper.sendLog('socket once::::connect_error', false);

				if (connecthelper.socket != null) {
					// cause by connection error for instance timeout or unreachable
					var isCausedServerSide = true;
					connecthelper.disconnect(isCausedServerSide);
				}
			});

			connecthelper.socket.once('connect_timeout', function() {
				connecthelper.sendLog('socket once::::connect_timeout', false);
			});

			connecthelper.socket.once('disconnect', function() {
				connecthelper.sendLog('socket once::::disconnect', false);

				if (connecthelper.socket != null) // cause by server side
				{
					var isByServerSide = true;
					connecthelper.disconnect(isByServerSide)
				}
			});

			connecthelper.socket.once('reconnect', function() {
				connecthelper.sendLog('socket once::::reconnect', false);
			});

			connecthelper.socket.on('response', function(chunk) {
				connecthelper.sendLog('socket on::::response', false);
				var data = JSON.parse(chunk).rsp;

				switch(data.command) {
					case 'CHANNEL_CREATE' :
						// pincode == data.msg
						connecthelper.sendLog('connecthelper:::: CHANNEL_CREATE ' + data.msg, false);
						if(data.state === connecthelper.msg.SUCCESS && typeof data.msg === 'string') {
							connecthelper.sendLog('CHANNEL_CREATE ' + connecthelper.msg.SUCCESS, false);
							connecthelper.pincode = data.msg;
						}
						else {
							connecthelper.sendLog('CHANNEL_CREATE ' + connecthelper.msg.FAIL, false);
						}
						break;
					case 'CHANNEL_JOIN' :
						if(data.state === connecthelper.msg.SUCCESS) {
							connecthelper.sendLog('CHANNEL_JOIN ' + connecthelper.msg.SUCCESS, false);
							connecthelper.status = connecthelper.msg.CONNECT;
							connecthelper.showConnectIcon();
						}
						else {
							connecthelper.sendLog('CHANNEL_JOIN ' + connecthelper.msg.FAIL, false);
							connecthelper.status = connecthelper.msg.DISCONNECT;
							connecthelper.hideConnectIcon();
						}
						break;
					case 'CHANNEL_EXIT_ALL' :
						if(data.state === connecthelper.msg.SUCCESS) {
							connecthelper.sendLog('CHANNEL_EXIT_ALL ' + connecthelper.msg.SUCCESS, false);
							connecthelper.status = connecthelper.msg.DISCONNECT;
							connecthelper.hideConnectIcon();
						}
						break;
				}
			});

			connecthelper.socket.on('mediaDataDelivery', function(chunk) {
				connecthelper.sendLog('connecthelper::::mediaDataDelivery', false);
				if(curDisplaySceneId === 'main' || curDisplaySceneId === 'avplaycontentplay' || curDisplaySceneId === 'avplaycontentsearch') {
					var data = JSON.parse(chunk).mediadata;
					// url == data.msg
					connecthelper.sendLog('socket on::::mediaDataDelivery : ' + data.url, false);
					if(data.url != '' && typeof data.url === 'string') {
						var message = connecthelper.msg.ASK_REMOTE_URL + '<br><br>' + data.url;
						connecthelper.contentUrl = data.url;
						document.getElementById('text').innerHTML = data.url;
					}
				}
				else {
					console.error('connecthelper::::mediaDataDelivery It is not valid scene to show push popup. This response would be ignored.');
				}
			});

			connecthelper.socket.open();
		},
		disconnect: function(isCausedServerSide) {
			connecthelper.sendLog('connecthelper::::disconnect', false);

			if(!isCausedServerSide && isCausedServerSide === null) {
				isCausedServerSide = false;
			}

			if(isCausedServerSide === false && connecthelper.socket === null) {
				connecthelper.sendLog('connecthelper.socket is not exist. It is already disconnected.', false);
				connecthelper.status = connecthelper.msg.DISCONNECT;
				connecthelper.hideConnectIcon();
				return;
			}

			connecthelper.init();
			connecthelper.socket.close();
			connecthelper.socket = null;
			connecthelper.options = {};
			connecthelper.url = '';
			connecthelper.status = connecthelper.msg.DISCONNECT;
			connecthelper.sendLog('server is disconnected', false);
			connecthelper.hideConnectIcon();
		},
		makeMsg: function(type, param) {
			var data = {};

			switch (type) {
				case 'response':
					data.rsp = param;
					break;
				case 'mediaDataDelivery':
					data.mediadata = param;
					break;
				case 'logDelivery':
					data.log = param;
					break;
			}

			return JSON.stringify(data);
		},
		sendLog: function(msg, isActive) {
			if(isActive == undefined) {
				isActive = true;
			}
			if(!isActive) {
				console.log(msg);
				return;
			}
			if ((connecthelper.socket != null) && (connecthelper.status == connecthelper.msg.CONNECT)) {
				var data = connecthelper.makeMsg('logDelivery', {
					log: msg
				});
				connecthelper.socket.emit('logDelivery', data);
			}
		}
	}
})();
