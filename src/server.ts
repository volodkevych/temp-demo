import express from 'express';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 8080;

// Serve static files from the dist/public directory
app.use(express.static(path.join(__dirname, 'public')));

// Handle all routes by serving the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
