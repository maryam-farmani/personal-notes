"use client";

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Button, TextField, List, ListItem, ListItemText, Box, Container, Typography, IconButton } from '@mui/material';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Head from 'next/head';
import DeleteConfirmationDialog from '@/client-components/DeleteConfirmationDialog';
import { Note } from '@/data/fakeNote';

const Home: React.FC = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [notes, setNotes] = useState<Note[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [open, setOpen] = useState(false);
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);
  const [expandedNoteId, setExpandedNoteId] = useState<string | null>(null);

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/signin');
    }
    fetch('/api/notes')
      .then(response => response.json())
      .then(data => setNotes(data));
  }, [status, router]);

  const truncateContent = (content: string, limit: number) => {
    const words = content.split(' ');
    if (words.length > limit) {
      return words.slice(0, limit).join(' ') + '...';
    }
    return content;
  };

  const formattedDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
  };

  const handleDelete = (note: Note) => {
    setSelectedNote(note);
    setOpen(true);
  };

  const confirmDelete = () => {
    if (selectedNote) {
      fetch(`/api/notes`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: selectedNote.id }),
      })
        .then(response => {
          if (response.ok) {
            setNotes(notes.filter(note => note.id !== selectedNote.id));
            setSelectedNote(null);
            setOpen(false);
          }
        });
    }
  };

  const toggleExpand = (noteId: string) => {
    setExpandedNoteId(expandedNoteId === noteId ? null : noteId);
  };

  const filteredNotes = notes.filter(note => note.title.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <Container>
      <Head>
        <title>Manage Your Personal Notes with Ease - Personal Notes</title>
        <meta name="description" content="Manage your personal notes with ease. Create, edit, and delete notes effortlessly with Personal Notes."></meta>
        <meta name="author" content="Maryam Farmani"></meta>
        <meta property="og:title" content="Personal Notes" />
        <meta property="og:description" content="Manage your personal notes with ease. Create, edit, and delete notes effortlessly with Personal Notes." />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:url" content="http://localhost:3000" />
        <link rel="icon" href="/logo.png" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Personal Notes",
            "url": "http://localhost:3000",
            "description": "Manage your personal notes with ease. Create, edit, and delete notes effortlessly with Personal Notes.",
            "author": {
              "@type": "Person",
              "name": "Maryam Farmani"
            }
          })}
        </script>
      </Head>
      <Box sx={{ mt: 3 }}>
        <Typography variant="h5" component="h1" sx={{ mb: 2 }}>
          Welcome to Personal Notes
        </Typography>
        <TextField
          label="Search notes..."
          fullWidth
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          margin="normal"
        />
        <List>
          {filteredNotes.map(note => {
            const contentWords = note.content.split(' ');
            const isExpandable = contentWords.length > 10;

            return (
              <ListItem key={note.id}>
                <ListItemText
                  primary={note.title}
                  secondary={
                    <>
                      {expandedNoteId === note.id ? note.content : truncateContent(note.content, 10)}
                      {isExpandable && (
                        <Button size="small" color="primary" onClick={() => toggleExpand(note.id)}>
                          {expandedNoteId === note.id ? 'Show Less' : 'Show More'}
                        </Button>
                      )}
                      <br />
                      <Typography variant="caption" color="textSecondary">
                        Last modified: {formattedDate(note.lastModified)}
                      </Typography>
                    </>
                  }
                />
                <IconButton component={Link} href={`/notes/${note.id}/edit`} aria-label="edit">
                  <EditIcon />
                </IconButton>
                <IconButton onClick={() => handleDelete(note)} aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              </ListItem>
            );
          })}
        </List>
      </Box>
      <DeleteConfirmationDialog
        open={open}
        onClose={() => setOpen(false)}
        onConfirm={confirmDelete}
      />
    </Container>
  );
};

export default Home;