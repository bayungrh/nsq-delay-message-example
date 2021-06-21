const nsq = require('nsqjs');

const reader = new nsq.Reader('sample_topic', 'test_channel', {
  lookupdHTTPAddresses: '172.19.0.1:4161'
});

reader.connect();

reader.on('ready', () => {
  console.log('started');
});

reader.on('message', (msg) => {
  console.log('Received messages [%s]: %s', msg.id, msg.body.toString());
  msg.finish();
});