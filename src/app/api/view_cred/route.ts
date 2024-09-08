import { NextResponse, NextRequest } from "next/server";
import {
  Aptos,
  AptosConfig,
  Network,
  Account,
  AccountAddress,
} from "@aptos-labs/ts-sdk";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import prisma from "@/app/db";
const APTOS_NETWORK = Network.DEVNET;
const config = new AptosConfig({ network: APTOS_NETWORK });
const aptos = new Aptos(config);

const CONTRACT_ADDRESS =
  "0x2616bf1798dc4a7a70bc40165596b2681dc5880b1ad0f9a339b40324d9ef541d";
const MODULE_NAME = "credentials";

export async function POST(request:NextRequest){

    try{
        const { accountString, documentHash } = await request.json();
        const account = JSON.parse(accountString);
        const verifiysub = await aptos.view({
            payload: {
              function: `${CONTRACT_ADDRESS}::${MODULE_NAME}::is_credential_verified`,
              typeArguments: [],
              functionArguments: [account.accountAddress, documentHash]
          }
          })
          
          const isVerified = verifiysub[0] as boolean;
          return NextResponse.json({
            success: true,
            message: 'Credentials extracted',
            isverified: isVerified
          });
      
    }catch{
        
    }
}