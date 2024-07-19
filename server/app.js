const express = require('express');
const morgan=require('morgan')
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const { authMiddleware } = require('./middleware/authMiddleware');
const { errorMiddleware } = require('./middleware/errorMiddleware');
const customerRoutes = require('./routes/customerRoutes');
const orderRoutes = require('./routes/orderRoutes');
const bookRoutes = require('./routes/bookRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const sequelize = require('./config/database');
const mongoose = require('./config/mongoose');
const swaggerOptions = require('./config/swagger');


dotenv.config();


const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev')); 


const specs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));


app.use('/customers', authMiddleware, customerRoutes);
app.use('/orders', authMiddleware, orderRoutes);
app.use('/books', authMiddleware, bookRoutes);
app.use('/reviews', authMiddleware, reviewRoutes);


app.use(errorMiddleware);


sequelize.sync().then(() => {
  console.log('SQL Database connected and synced');
}).catch(err => {
  console.error('Unable to connect to SQL database:', err);
});


mongoose.connection.on('connected', () => {
  console.log('MongoDB connected');
});
mongoose.connection.on('error', (err) => {
  console.error('Unable to connect to MongoDB:', err);
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
