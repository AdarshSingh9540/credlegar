import { AptosAccount } from 'aptos';

export const createAptosAccount = async (userId) => {
  // Create a new Aptos blockchain account
  const aptosAccount = new AptosAccount();
  
  // You can store this aptosAccount information (e.g., in a database)
  console.log('New Aptos account address:', aptosAccount.address());

  return aptosAccount;
};
