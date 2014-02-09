(function($){
	$.fn.autoLineHeight = function(){
		var elem = this;
		var w = elem.width();
		var h = elem.height();
		var fs = Number(elem.css('font-size').replace('px',''));
		var lh = elem.css('line-height');
		var ls = elem.css('letter-spacing');
		var t = elem.text();
		var l = t.length;

/*
		var reg = /[a-zA-Z0-9!-\/:-@¥[-`{-~\s]/;

		var numOfEn = 0;
		
		while(t.match(reg)){
			numOfEn++;
			t = t.substr(t.match(reg)['index'] + 1);
		} 
		
		
		var numOfEm = l - numOfEn;
		console.log(numOfEn, numOfEm);

		l = numOfEn / 1.2 + numOfEm;
*/		

		while(check()){
			fs--;
		}

		function check () {
			var w_max = w/fs;
			var h_max = h/fs;
			if (l <= w_max) {
				lh = h + 'px';
				return false;
			}
			else if(l/w_max <= h_max){
				lh = h_max/Math.ceil(l/w_max);
				return false;
			}
			else{
				return true;
			}
			
		}


		
		elem.css({
			'font-size': fs + 'px',
			'letter-spacing': ls,
			'line-height': lh
		});

		//console.log(w/fs - l);

		return elem;
	}

})(jQuery);
