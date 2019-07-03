import express from 'express';
import bodyParser from 'body-parser';
import router from './routes/property';

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('UI'));
app.use('/api/v1', router);


app.all('*', (req, res) => {
  res.status(404).json({
    status: 404,
    error: 'Resource not found!. Please check the url then try again.',
  });
});


app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});

export default app;
