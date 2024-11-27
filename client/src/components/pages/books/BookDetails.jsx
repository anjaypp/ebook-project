import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Chip,
  Grid,
  Paper,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableRow
} from '@/components/ui';
import { ShoppingCart, Bookmark, Download } from 'lucide-react';

const EbookDetailsPage = () => {
  const bookDetails = {
    title: "101 Creative Writing Exercises (Adventures in Writing)",
    price: "$3.99 USD",
    formats: ["epub", "mobi", "pdf", "rtf", "pdb", "txt"],
    isbn: "9781452443447",
    language: "English",
    words: "47,516",
    boxSet: "No",
    publishedOn: "Feb 16, 2012",
    categories: ["Nonfiction", "Reference", "Writing Skills"],
    tags: ["writing", "exercises and drills", "creative writing", "writing techniques", "writing guidance", "creative writing techniques", "creative nonfiction writing"]
  };

  return (
    <Box className="max-w-6xl mx-auto p-6">
      <Grid container spacing={4}>
        {/* Left Column - Book Cover and Buttons */}
        <Grid item xs={12} md={4}>
          <Card className="mb-4">
            <img
              src="/api/placeholder/300/400"
              alt="Book Cover"
              className="w-full h-auto"
            />
            <CardContent>
              <Box className="space-y-4">
                <Button 
                  variant="contained" 
                  className="w-full bg-yellow-500 hover:bg-yellow-600"
                  startIcon={<ShoppingCart />}
                >
                  Buy Now
                </Button>
                <Button 
                  variant="outlined" 
                  className="w-full"
                  startIcon={<Bookmark />}
                >
                  Add to Wishlist
                </Button>
                <Typography variant="body2" className="text-center">
                  Available ebook formats:
                </Typography>
                <Box className="flex flex-wrap gap-2 justify-center">
                  {bookDetails.formats.map((format) => (
                    <Chip 
                      key={format} 
                      label={format.toUpperCase()}
                      size="small"
                      className="bg-blue-100"
                    />
                  ))}
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Right Column - Book Details */}
        <Grid item xs={12} md={8}>
          <Paper className="p-6">
            <Typography variant="h4" className="mb-2">
              {bookDetails.title}
            </Typography>
            <Typography variant="h5" color="primary" className="mb-4">
              {bookDetails.price}
            </Typography>
            
            <Typography variant="body1" className="mb-6">
              101 Creative Writing Exercises takes you on an adventure through the world of creative writing. 
              Packed with fun and practical tools, techniques, and writing ideas, this book will motivate and inspire you.
            </Typography>

            <Divider className="my-4" />

            <Table>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">ISBN-13:</TableCell>
                  <TableCell>{bookDetails.isbn}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Language:</TableCell>
                  <TableCell>{bookDetails.language}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Words:</TableCell>
                  <TableCell>{bookDetails.words}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Published On:</TableCell>
                  <TableCell>{bookDetails.publishedOn}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Box Set:</TableCell>
                  <TableCell>{bookDetails.boxSet}</TableCell>
                </TableRow>
              </TableBody>
            </Table>

            <Box className="mt-6">
              <Typography variant="h6" className="mb-2">Categories:</Typography>
              <Box className="flex flex-wrap gap-2 mb-4">
                {bookDetails.categories.map((category) => (
                  <Chip 
                    key={category}
                    label={category}
                    className="bg-gray-100"
                  />
                ))}
              </Box>

              <Typography variant="h6" className="mb-2">Tags:</Typography>
              <Box className="flex flex-wrap gap-2">
                {bookDetails.tags.map((tag) => (
                  <Chip 
                    key={tag}
                    label={tag}
                    variant="outlined"
                    size="small"
                  />
                ))}
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default EbookDetailsPage;