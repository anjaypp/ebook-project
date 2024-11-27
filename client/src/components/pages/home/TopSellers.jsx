import React from 'react';
import { Box, Card, CardMedia, CardContent, Typography, Button, Select, MenuItem } from '@mui/material';
import { styled } from '@mui/material/styles';
import styles from './styles/TopSellers.module.css';

// Styled Button
const AddToCartButton = styled(Button)({
  backgroundColor: '#FFD700', // Yellow color
  color: '#000',
  '&:hover': {
    backgroundColor: '#FFC107',
  },
});

// Scrollable container styling
const ScrollableContainer = styled(Box)({
  display: 'flex',
  overflowX: 'auto',
  gap: '20px',
  paddingBottom: '10px',
  '&::-webkit-scrollbar': {
    height: '8px',
  },
  '&::-webkit-scrollbar-thumb': {
    background: '#cccccc',
    borderRadius: '4px',
  },
  '&::-webkit-scrollbar-thumb:hover': {
    background: '#999999',
  },
});

export default function TopSellers() {
  // Example data
  const books = [
    {
      title: 'How to Grow Your Online Store',
      description: 'Learn the best strategies to grow your online store in today’s competitive market.',
      price: '19.99',
      oldPrice: '29.99',
      image: '/path/to/image1.jpg',
    },
    {
      title: 'Top 10 Fiction Books This Year',
      description: 'A curated list of the best fiction books that are trending this year.',
      price: '14.99',
      oldPrice: '24.99',
      image: '/path/to/image2.jpg',
    },
    {
      title: 'Mastering SEO in 2024',
      description: 'Tips and tricks to boost your SEO and rank higher on search engines.',
      price: '29.99',
      oldPrice: '39.99',
      image: '/path/to/image3.jpg',
    },
    {
      title: 'Advanced React Patterns',
      description: 'Take your React skills to the next level with advanced design patterns.',
      price: '25.99',
      oldPrice: '35.99',
      image: '/path/to/image4.jpg',
    },
    {
      title: 'The Art of JavaScript',
      description: 'A deep dive into JavaScript best practices and performance optimization.',
      price: '22.99',
      oldPrice: '32.99',
      image: '/path/to/image5.jpg',
    },
  ];

  return (
    <Box className={styles.container}>
      <Typography variant="h4" gutterBottom>
        Top Sellers
      </Typography>

      <Select defaultValue="" displayEmpty sx={{ marginBottom: '20px', width: '200px' }}>
        <MenuItem value="">
          <em>Choose a genre</em>
        </MenuItem>
        <MenuItem value="fiction">Fiction</MenuItem>
        <MenuItem value="non-fiction">Non-Fiction</MenuItem>
        <MenuItem value="self-help">Self-Help</MenuItem>
      </Select>

      <ScrollableContainer>
        {books.map((book, index) => (
          <Card key={index} sx={{ minWidth: '250px', maxWidth: '250px', flexShrink: 0 }}>
            <CardMedia
              component="img"
              height="150"
              image={book.image}
              alt={book.title}
            />
            <CardContent>
              <Typography variant="h6" gutterBottom>
                {book.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {book.description}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                <Typography variant="body1" sx={{ fontWeight: 'bold', marginRight: '10px' }}>
                  ${book.price}
                </Typography>
                <Typography variant="body2" sx={{ textDecoration: 'line-through', color: 'gray' }}>
                  ${book.oldPrice}
                </Typography>
              </Box>
              <AddToCartButton variant="contained" sx={{ marginTop: '15px' }} fullWidth>
                Add to Cart
              </AddToCartButton>
            </CardContent>
          </Card>
        ))}
      </ScrollableContainer>
    </Box>
  );
}
