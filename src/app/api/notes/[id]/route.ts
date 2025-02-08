import { revalidateTag } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';
import { fakeNotes } from '@/data/fakeNote';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  const note = fakeNotes.find(note => note.id === id);

  if (note) {
    return NextResponse.json(note, { status: 200 });
  } else {
    return NextResponse.json({ message: 'Note not found' }, { status: 404 });
  }
}

export async function PUT(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  const note = fakeNotes.find(note => note.id === id);

  if (note) {
    const { title, content } = await request.json();
    note.title = title;
    note.content = content;
    note.lastModified = (new Date()).toISOString();
    revalidateTag('notes');
    return NextResponse.json(note, { status: 200 });
  } else {
    return NextResponse.json({ message: 'Note not found' }, { status: 404 });
  }
}