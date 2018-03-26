if (window.pageId === 'shadow-dom.html') {


    var shadow = document.querySelector("#stopwatch").createShadowRoot();
    var template = document.querySelector('#stopwatch-template');
    var clone = document.importNode(template.content, true);
    shadow.appendChild(clone);

    var time = {
        minutes: 0,
        seconds: 0,
        milliseconds: 0
    };

    var intervalId;

    var start = shadow.querySelector('#start');
    var stop = shadow.querySelector('#stop');
    var reset = shadow.querySelector('#reset');
    var timeSection = shadow.querySelector("#time");
    bindEvents();
    render();

    function bindEvents() {
        start.addEventListener('click', () => onStartClick());
        stop.addEventListener('click', () => onStopClick());
        reset.addEventListener('click', () => onResetClick());
    }

    function onStartClick() {
        var delay = 10;
        intervalId = setInterval(() => {
            time.milliseconds += delay;
            if (time.milliseconds >= 1000) {
                time.seconds += 1;
                time.milliseconds = 0;
            }
            if (time.seconds === 60) {
                time.minutes += 1;
                time.seconds = 0;
            }
            render();
        }, delay);
    }

    function onStopClick() {
        doStop();
    }

    function onResetClick() {
        doReset();
    }

    function doStop() {
        clearInterval(intervalId);
    }

    function doReset() {
        doStop();
        time.minutes = time.seconds = time.milliseconds = 0;
        render();
    }

    function render() {
        let milliseconds = ('000' + time.milliseconds).slice(-3);
        let seconds = ('00' + time.seconds).slice(-2);
        let minutes = time.minutes;
        timeSection.innerText = minutes + ':' + seconds + ':' + milliseconds;
    }
}
