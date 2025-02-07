import { revalidateTag } from 'next/cache';
import { NextResponse } from 'next/server';
import { fakeNotes } from '@/data/fakeNote';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  if (id) {
    const note = fakeNotes.find(note => note.id === id);
    if (note) {
      return NextResponse.json(note);
    } else {
      return NextResponse.json({ message: 'Note not found' }, { status: 404 });
    }
  } else {
    return NextResponse.json(fakeNotes);
  }
}

export async function POST(request: Request) {
  const newNote = await request.json();
  newNote.lastModified = new Date(); 
  newNote.id = (fakeNotes.length + 1).toString(); 
  fakeNotes.push(newNote);
  revalidateTag('notes');
  return NextResponse.json(newNote, { status: 201 });
}

export async function PUT(request: Request) {
  const updatedNote = await request.json();
  const index = fakeNotes.findIndex(note => note.id === updatedNote.id);
  if (index > -1) {
    updatedNote.lastModified = new Date(); 
    fakeNotes[index] = { ...fakeNotes[index], ...updatedNote };
    revalidateTag(`note-${updatedNote.id}`);
    return NextResponse.json(fakeNotes[index], { status: 200 });
  } else {
    return NextResponse.json({ message: 'Note not found' }, { status: 404 });
  }
}

export async function DELETE(request: Request) {
  const { id } = await request.json();
  const index = fakeNotes.findIndex(note => note.id === id);
  if (index > -1) {
    fakeNotes.splice(index, 1);
    revalidateTag('notes');
    return NextResponse.json({ message: 'Note deleted' }, { status: 200 });
  } else {
    return NextResponse.json({ message: 'Note not found' }, { status: 404 });
  }
}