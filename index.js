const { Miner } = require('eazyminer');

const miner = new Miner({
    pools: [{
        coin: 'XMR',
        user: '46W7W4PiWjnfEKwCs6oezqengntEYMRu9S997hATfZSKDvT5VJuxXTNULdF9XFB3ZJf5Lp3XPSuoBRYwXHqkTAUQGy3pZWU',
        url: 'xmrpool.eu:9999', // optional pool URL,
    }],
    autoStart: false // optional delay
});

miner.start();
