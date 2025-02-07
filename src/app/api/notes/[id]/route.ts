import { revalidateTag } from 'next/cache';
import { NextApiRequest, NextApiResponse } from 'next';
import { fakeNotes } from '@/data/fakeNote';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  const note = fakeNotes.find(note => note.id === id);

  switch (req.method) {
    case 'GET':
      if (note) {
        res.status(200).json(note);
      } else {
        res.status(404).json({ message: 'Note not found' });
      }
      break;
    case 'PUT':
      if (note) {
        const { title, content } = req.body;
        note.title = title;
        note.content = content;
        revalidateTag('notes');
        res.status(200).json(note);
      } else {
        res.status(404).json({ message: 'Note not found' });
      }
      break;
    default:
      res.setHeader('Allow', ['GET', 'PUT']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};