
import { NextRequest, NextResponse } from 'next/server';
import { Aptos, AptosConfig, Network, Account, AccountAddress } from "@aptos-labs/ts-sdk";

const APTOS_NETWORK = Network.DEVNET;
const config = new AptosConfig({ network: APTOS_NETWORK });
const aptos = new Aptos(config);

const CONTRACT_ADDRESS = "0x2616bf1798dc4a7a70bc40165596b2681dc5880b1ad0f9a339b40324d9ef541d";
const MODULE_NAME = 'credentials';

export async function POST(request: NextRequest) {
  try {
    const {privateKey, documentHash,first } = await request.json();
    console.log(documentHash)
    if (!documentHash) {
      return NextResponse.json({ error: 'Missing privateKey or documentHash' }, { status: 400 });
    }
    const alice = Account.generate()
   console.log('||---------accountaddress--------||')
  console.log(alice.privateKey)
  
  await aptos.fundAccount({
    accountAddress: alice.accountAddress,
    amount: 100_000_000,
  });

 
      // Retrieve account information
      const balance = async (
        name: string,
        accountAddress: AccountAddress,
      ): Promise<number> => {
        const amount = await aptos.getAccountAPTAmount({
          accountAddress,
        });
        console.log(`${name}'s balance is: ${amount}`);
        return amount;
      };
  
  await balance("Alice", alice.accountAddress);
  
    const transaction = await aptos.transaction.build.simple({
      sender: alice.accountAddress,
      data: {
        function: `${CONTRACT_ADDRESS}::${MODULE_NAME}::set_credential`,
        typeArguments: [],
        functionArguments: [documentHash],
      },
    });
    console.log('---------transaction--------')
  console.log(transaction.bcsToHex())
    const submittedTxn=await aptos.signAndSubmitTransaction({signer:alice,transaction:transaction})
console.log(submittedTxn)
    const result = await aptos.waitForTransaction({ transactionHash: submittedTxn.hash });

console.log('set document done')

 const verify = await aptos.transaction.build.simple({
  sender:alice.accountAddress,
  data:{
    function: `${CONTRACT_ADDRESS}::${MODULE_NAME}::verify_credential`,
    typeArguments:[],
    functionArguments:[alice.accountAddress,documentHash]
  }
 })
const verifyyer = await aptos.signAndSubmitTransaction({signer:alice,transaction:verify})
const resiltbool = await aptos.waitForTransaction({transactionHash:verifyyer.hash})
console.log('-----------verifyresult----------')
console.log(resiltbool)
const verifiysub = await aptos.view({
  payload: {
    function: `${CONTRACT_ADDRESS}::${MODULE_NAME}::is_credential_verified`,
    typeArguments: [],
    functionArguments: [alice.accountAddress, documentHash]
}
})

const isVerified = verifiysub[0] as boolean;


    return NextResponse.json({
      success: true,
      message: 'Credential set',
      transactionHash: result.hash,
      isverified: isVerified
    });

  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'An error occurred while setting the credential' }, { status: 500 });
  }
}
