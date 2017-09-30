(function($) {
    $.fn.countdown = function(options, callback) {
        thisEL = $(this);
        var setting = {
            'date': null,
            'time': null,
        };
        if(options) {
            $.extend(setting, options);
        }
        function countdown_proc() {
            var eventDate = Date.parse(setting["date"])/1000;
            var currentDate = Math.floor($.now()/1000);
            if (eventDate <= currentDate) {
                callback.call(this);
                clearInterval(interval);
            }
            if (setting['time'] == 0) {
                clearInterval(interval);
                location.href="index_1.html";
            }
            var seconds = eventDate-currentDate;
            var days = Math.floor(seconds/(60*60*24));
            seconds -= days * 60 * 60 *24;
            var hours = Math.floor(seconds/3600);
            seconds -= hours * 60 * 60;
            var minutes = Math.floor(seconds/60);
            seconds -= minutes * 60;
            $(document).find("#turn").text(setting['time']);
            thisEL.find(".days").text(days);
            thisEL.find(".hours").text(hours);
            thisEL.find(".minutes").text(minutes);
            thisEL.find(".seconds").text(seconds);
            setting['time'] --;
        }
        countdown_proc();
        interval = setInterval(countdown_proc, 1000);
    }

})(jQuery);