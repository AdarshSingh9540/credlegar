// src/pages/api/user.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const session = await getKindeServerSession(req);
    const user = await session.getUser();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching user data' });
  }
}
