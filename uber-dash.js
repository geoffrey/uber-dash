var pcap         = require('pcap');
var tcp_tracker  = new pcap.TCPTracker();
var pcap_session = pcap.createSession('en0');

var DASHBUTTON_MAC_ADDR = 'a0:02:dc:b1:3d:b2';
var last_call = null;

function call_uber() {
  console.log('CALLING UBER!!!');
}

function d2h(d) {
  var h = d.toString(16);
  if (h.length < 2) {
    h = '0' + h;
  }
  return h;
}

function dadd2hadd(dadd) {
  return dadd.map(d2h).join(':');
}

pcap_session.on('packet', function (raw_packet) {
  var packet = pcap.decode.packet(raw_packet);
  var dadd = packet.payload.shost.addr;

  if (dadd2hadd(dadd) == DASHBUTTON_MAC_ADDR) {
    call_uber();
  }
});
