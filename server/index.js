const express = require('express');
const admin = require('firebase-admin');
const app = express();
require('dotenv').config();

admin.initializeApp({
  credential: admin.credential.cert('./firebase-adminsdk.json'),
  projectId: process.env.FIREBASE_PROJECT_ID,
});

app.use(express.json());
app.get('/', (req, res) => res.send('CollegeApp Backend Running'));

app.listen(3000, () => console.log('Server running on port 3000'));