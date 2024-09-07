'use client'
import React, { useState } from 'react';

const InitCredentialStore: React.FC = () => {
  const [privateKey, setPrivateKey] = useState('');
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setResult(null);
    setError(null);

    try {
      const response = await fetch('/api/init_cred', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({documentHash:"fakedocumenthash" }),
      });

      const data = await response.json();

      if (response.ok) {
        setResult(`Credential store initialized. Transaction hash: ${data.transactionHash}`);
      } else {
        setError(data.error || 'An error occurred');
      }
    } catch (err) {
      setError('Failed to connect to the server');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
      <h2 className="text-2xl font-bold mb-4">Initialize Credential Store</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="privateKey" className="block text-gray-700 text-sm font-bold mb-2">
            Private Key
          </label>
          {/* <input
            type="text"
            id="privateKey"
            value={privateKey}
            onChange={(e) => setPrivateKey(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          /> */}
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          {isLoading ? 'Initializing...' : 'Initialize'}
        </button>
      </form>
      {result && <p className="mt-4 text-green-600">{result}</p>}
      {error && <p className="mt-4 text-red-600">{error}</p>}
    </div>
  );
};

export default InitCredentialStore;
