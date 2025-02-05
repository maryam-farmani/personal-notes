import React from 'react';
import { useRouter } from 'next/router';
import NoteForm from '../components/NoteForm';
import { Container, Typography } from '@mui/material';

const NewNote: React.FC = () => {
  const router = useRouter();

  const createNote = async (title: string, content: string) => {
    const response = await fetch('/api/notes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title, content })
    });

    if (response.ok) {
      router.push('/');
    }
  };

  return (
    <Container>
      <Typography component="h1" variant="h5" sx={{my:2}}>New Note</Typography>
      <NoteForm onSubmit={createNote} />
    </Container>
  );
};

export default NewNote;