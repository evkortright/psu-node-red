Chat app...

<script type="text/javascript">

    var wsUri = "ws://{{req.headers.host}}/ws/socket";

    var ws = new WebSocket(wsUri);

    ws.onopen = function(ev) {
	    alert('[Connected]');
    };

    ws.onclose = function(ev) {
	    alert('[Disconnected]');
    }

    ws.onmessage = function(ev) {
	    alert('[received: ' + ev.data + ']');
    }

</script>
