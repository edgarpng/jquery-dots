/**
 * Animates an element's content using dots to show the user a task is in progress.
 * 
 *   Example: A submit button
 *    <input type="submit" id="my-submit" value="Save" />
 *   
 *   On a submit callback:
 *    $('#my-submit').startDots({text: 'Saving', interval: 1000});
 *   Will animate the text 'Saving...' adding a dot each second.
 *   
 *   When the long task has finished, stop the animation using this code:
 *     $('#my-submit').stopDots({text: 'Saved!'});
 */
(function($){
	$.fn.stopDots = function(options){
		var opts = $.extend({}, options);
		
		return $(this).each(function(){
			var $this = $(this);
			var data = $this.data('dots') || {};
			$this.val(opts.text || data.value || $this.val());
			window.clearInterval(data.interval);
		});
	};
	
	$.fn.startDots = function(options){
		var defaults = {interval: 300};
		var opts = $.extend(defaults, options);
		
		return $(this).each(function(){
			var $this = $(this).stopDots();
			var data = {};
			data.value = $this.val();
			
			if(opts.text){
				$this.val(opts.text);
			}			
			data.interval = window.setInterval(function() {
				var value = $this.val();
				var dotsMatch = value.match(/\.+/);
				if(dotsMatch && dotsMatch[0].length > 3){
					$this.val(value.replace(/\.+/,""));
				}
				else{
					$this.val(value+".");
				}
			}, opts.interval);
		
			$this.data('dots', data);
		});
	};
}(jQuery));