import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import NoteForm from '../../components/NoteForm';
import { Container, AppBar, Toolbar, Typography } from '@mui/material';
import { Note } from '@/data/fakeNote';

const NotePage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [note, setNote] = useState<Note | null>(null);

  useEffect(() => {
    if (id) {
      fetch(`/api/notes`)
        .then(response => response.json())
        .then(data => {
          const foundNote = data.find((note: Note) => note.id === id);
          setNote(foundNote);
        });
    }
  }, [id]);

  const updateNote = async (title: string, content: string) => {
    const response = await fetch('/api/notes', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id, title, content })
    });

    if (response.ok) {
      router.push('/');
    }
  };

  if (!note) return <div>Loading...</div>;

  return (
    <Container>
      <AppBar position="static">
        <Toolbar>
          <Typography component="h1" variant="h6">Edit Note</Typography>
        </Toolbar>
      </AppBar>
      <NoteForm initialTitle={note.title} initialContent={note.content} onSubmit={updateNote} />
    </Container>
  );
};

export default NotePage;