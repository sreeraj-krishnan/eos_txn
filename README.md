# eos_txn

Testted the below change on Ubuntu 18.04

Prerequisites
Install npm, nodejs, jq
sudo apt-get install npm
sudo apt-get install jq  # for json parsing to display output

Steps followed:
1.	Installed Scatter for windows, generated eos account and tokens from tools.cryptokylin.io and public/private key pair. Played around with it to do some transactions and staking. 
2.	Installed eosjs library from https://github.com/eosio/eosjs#offline-or-cold-storage-transaction
3.	Solution -> Clone https://github.com/sreeraj-krishnan/eos_txn.git
4.	If required edit send_transaction.js with a working full node for httpEndpoint from (https://github.com/cryptokylin/CryptoKylin-Testnet#http-api-list refer HTTP API LIST)
5.	Also chainId in the config is set from RPC command output of get_info run on a full node.
	curl http://api.kylin.eosbeijing.one:8880/v1/chain/get_info | jq

6.	Private key for now is set on keyProvider, however this can be changed if required and there is a need to read from cold storage using binaryen package
7.	cd eos_txn; npm install ; ./run.sh ; cat outputfile
	


Output of curl http://api.kylin.eosbeijing.one:8880/v1/chain/get_info | jq

{
  "server_version": "0f6695cb",
  "chain_id": "5fff1dae8dc8e2fc4d5b23b2c7665c97f9e9d8edf2b6485a86ba311c25639191",
  "head_block_num": 11154302,
  "last_irreversible_block_num": 11153972,
  "last_irreversible_block_id": "00aa3234ac2fb12437069304d1c05e3c9599325631a0514a90c8f89684740300",
  "head_block_id": "00aa337ec48eaae6749aac53a6fbbfb64a9748878a66840aca519ea328cc91a3",
  "head_block_time": "2018-09-19T17:17:08.500",
  "head_block_producer": "eossv12eossv",
  "virtual_block_cpu_limit": 200000000,
  "virtual_block_net_limit": 1048576000,
  "block_cpu_limit": 199900,
  "block_net_limit": 1048576,
  "server_version_string": "v1.3.0-dirty"
}

EOS account:
https://tools.cryptokylin.io/#/tx/srekrishnane


Already done sample transactions:

https://tools.cryptokylin.io/#/tx/8d5e14563e096e3f3f901523e481f201a1bc0af4e2e4d61037d6dd03c5597f80
https://tools.cryptokylin.io/#/tx/158b4ca0faf341eb53e3d409ed105d12f412a01e4c6bd2e7dfdad163787e4800
https://tools.cryptokylin.io/#/tx/d89c3bd28d1aee019c764df91ca1efb6a059734cbdd62a386fe073796623da77
https://tools.cryptokylin.io/#/tx/26c085a35fc29c4526204d025139d7aa4afc0800f7527de64fde307561cd63f2
https://tools.cryptokylin.io/#/tx/82ca8c332a276b6705cd97ec610fd51bf35fc02174a3c981e3c47aa218d07412
https://tools.cryptokylin.io/#/tx/424738aa110c2f08c900676d01464b74d90da64508a684355ebd84689bd94da6

 

