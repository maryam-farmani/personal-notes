import { signIn } from 'next-auth/react';
import { Button, TextField, Container, Box, Typography } from '@mui/material';

const SignIn: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const username = formData.get('username') as string;
    const password = formData.get('password') as string;
    signIn('credentials', { username, password });
  };

  return (
    <Container>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Sign In
        </Typography>
        <TextField label="Username" name="username" fullWidth margin="normal" />
        <TextField label="Password" name="password" type="password" fullWidth margin="normal" />
        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
          Sign In
        </Button>
      </Box>
    </Container>
  );
};

export default SignIn;