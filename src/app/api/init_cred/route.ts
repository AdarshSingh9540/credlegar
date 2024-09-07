// app/api/set-credential/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { Aptos, AptosConfig, Network, Account } from "@aptos-labs/ts-sdk";

const APTOS_NETWORK = Network.DEVNET;
const config = new AptosConfig({ network: APTOS_NETWORK });
const aptos = new Aptos(config);

const CONTRACT_ADDRESS = "0x2616bf1798dc4a7a70bc40165596b2681dc5880b1ad0f9a339b40324d9ef541d";
const MODULE_NAME = 'credentials';

export async function POST(request: NextRequest) {
  try {
    const { privateKey, documentHash } = await request.json();
    console.log(privateKey)
    console.log(documentHash)
    if (!privateKey || !documentHash) {
      return NextResponse.json({ error: 'Missing privateKey or documentHash' }, { status: 400 });
    }

    const account = Account.fromPrivateKey(privateKey);

    // Get the public key (useful for debugging or future use)
    const publicKey = account.publicKey
    console.log('Public Key:', publicKey);

    const transaction = await aptos.transaction.build.simple({
      sender: account.accountAddress,
      data: {
        function: `${CONTRACT_ADDRESS}::${MODULE_NAME}::set_credential`,
        typeArguments: [],
        functionArguments: [documentHash],
      },
    });
    console.log('---------transaction--------')
  console.log(transaction)
    const submittedTxn=await aptos.signAndSubmitTransaction({signer:account,transaction:transaction})

    const result = await aptos.waitForTransaction({ transactionHash: submittedTxn.hash });

    return NextResponse.json({
      success: true,
      message: 'Credential set',
      transactionHash: result.hash,
    });

  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'An error occurred while setting the credential' }, { status: 500 });
  }
}
