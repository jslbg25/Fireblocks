
const fs = require('fs');
const path = require('path');
const { CustodialWalletService, SignatureRequest, FireblocksConfig, AWSKMSConfig } = require('@hashgraph/hedera-custodians-integration');

const privateKey = fs.readFileSync(path.join("../..", 'editor_sandbox_lbg_user_secret.key'), 'utf8');


const config = new FireblocksConfig(
  "68f17824-2bc4-4803-b573-8d36a562f72a",
  privateKey,
  "https://sandbox-api.fireblocks.io/v1",
  "1",
  "HBAR_TEST"
);

const service = new CustodialWalletService(config);

const transactionBytes = new Uint8Array([1, 2, 3]); 
const request = new SignatureRequest(transactionBytes);

async function signTransaction() {
  const signature = await service.signTransaction(request);
  console.log(signature);
}

signTransaction();