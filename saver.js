//source  : https://readdragonballsuper.online/wp-content/plugins/wp-kads/app/assets/js/saver.js
var checkStatus;
		var element = new Image();
		// var element = document.createElement('any');
		element.__defineGetter__('id', function() {
			checkStatus = 'on';
		});	
		setInterval(function() {
			checkStatus = 'off';
			console.log(element);
			console.log(checkStatus);
			if(checkStatus == 'on'){
				window.location.replace('https://www.google.com/?gws_rd=ssl');
			}
		}, 1000)		
		if(window.devtools.isOpen){
			window.location.replace('https://www.google.com/?gws_rd=ssl');

		}
		window.addEventListener('devtoolschange', event => {
			if(event.detail.isOpen){
				window.location.replace('https://www.google.com/?gws_rd=ssl');
			}
		});
