const nsq = require('nsqjs');
const producer = new nsq.Writer('172.19.0.1', 4150);

producer.connect();

producer.on('ready', () => {
  producer.deferPublish('sample_topic', ['This message gonna arrive 10 sec later.'], 10000, (err) => {
    if (err) { return console.error(err.message) }
    console.log('Message sent successfully');
    producer.close();
  });
});

producer.on('closed', () => {
  console.log('Writer closed');
});