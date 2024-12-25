import React, { useState } from 'react';
import { TextField, Box, Button, Grid } from '@mui/material';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement search functionality
    console.log('Searching for:', searchTerm);
  };

  return (
    <Box component="form" onSubmit={handleSearch} sx={{ mt: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={8}>
          <TextField
            fullWidth
            label="Search for pediatric providers"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Button 
            fullWidth 
            variant="contained" 
            type="submit"
            sx={{ height: '56px' }}
          >
            Search
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SearchBar;