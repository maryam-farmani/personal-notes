"use client";

import { useSession } from 'next-auth/react';
import { useRouter, useParams } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import NoteForm from '@/client-components/NoteForm';

const EditNote: React.FC = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const { id } = useParams();
  const [note, setNote] = useState({ title: '', content: '' });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/signin');
    } else if (id) {
      fetch(`/api/notes?id=${id}`)
        .then(response => response.json())
        .then(data => {
          setNote({
            title: data.title,
            content: data.content
          });
          setIsLoading(false);
        })
        .catch(error => {
          console.error('Error fetching note:', error);
          setIsLoading(false);
        });
    }
  }, [id, status, router]);

  const updateNote = async (title: string, content: string) => {
    const response = await fetch(`/api/notes`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id, title, content })
    });

    if (response.ok) {
      router.push('/');
    } else {
      console.error('Error updating note');
    }
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <Container>
      <Typography component="h1" variant="h6" sx={{ my: 2 }}>Edit Note</Typography>
      <NoteForm initialTitle={note.title} initialContent={note.content} onSubmit={updateNote} />
    </Container>
  );
};

export default EditNote;