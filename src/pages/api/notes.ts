import { fakeNotes, Note } from '@/data/fakeNote';
import { NextApiRequest, NextApiResponse } from 'next';


let notes: Note[] = [...fakeNotes];

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    res.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate');
    res.status(200).json(notes);
  } else if (req.method === 'POST') {
    const { title, content } = req.body;
    const newNote = {
      id: (notes.length + 1).toString(),
      title,
      content,
      lastModified: new Date().toISOString()
    };
    notes.push(newNote);
    res.status(201).json(newNote);
  } else if (req.method === 'PUT') {
    const { id, title, content } = req.body;
    const index = notes.findIndex(note => note.id === id);
    if (index !== -1) {
      notes[index] = { ...notes[index], title, content, lastModified: new Date().toISOString() };
      res.status(200).json(notes[index]);
    } else {
      res.status(404).json({ message: 'Note not found' });
    }
  } else if (req.method === 'DELETE') {
    const { id } = req.body;
    notes = notes.filter(note => note.id !== id);
    res.status(204).end();
  } else {
    res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};