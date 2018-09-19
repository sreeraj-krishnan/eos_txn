Eos = require('eosjs')

config = {
  chainId: '5fff1dae8dc8e2fc4d5b23b2c7665c97f9e9d8edf2b6485a86ba311c25639191', // 32 byte (64 char) hex string
  keyProvider: ['5KihiDWi5XVyhmsBZrXae1A5hSkV6ZRLYPGbDszvcVManP5nTvL'], // WIF string or array of keys..
  httpEndpoint: 'http://api.kylin.eosbeijing.one:8880',
  expireInSeconds: 60,
  broadcast: true,
  verbose: true, // API activity
  sign: true
}

eos = Eos(config)

eos.transaction(
  {
    // ...headers,
    // context_free_actions: [],
    actions: [
      {
        account: 'eosio.token',
        name: 'transfer',
        authorization: [{
          actor: 'srekrishnane',
          permission: 'active'
        }],
        data: {
          from: 'srekrishnane',
          to: 'eosasia11111',
          quantity: '2.0000 EOS',
          memo: '2 eos to eosasisa11111 as requested by QX'
        }
      },
      {
	account : 'eosio',
    	name : 'delegatebw',
    	data : {
		from     		: 'srekrishnane',
        	receiver 		: 'eosasia11111',
        	stake_net_quantity	: '0.5000 EOS',
        	stake_cpu_quantity	: '1.1000 EOS',
        	transfer		: 0
	},
	authorization: [{ 
        	actor		: 'srekrishnane',
        	permission	: 'active'
        }]
      }
    ]
  }
)

