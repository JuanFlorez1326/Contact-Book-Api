import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import authRoutes  from './routes/auth.routes';
import passport from 'passport';
import passportMiddleware from './middlewares/passport';
import privateRoutes from './routes/private.routes';


// Initializations
export const app = express();

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(authRoutes);
app.use(passport.initialize());
passport.use(passportMiddleware);
app.use(privateRoutes);

// Routes
app.get ('/', (req, res) => {
    res.send('The API is at http://localhost:' + app.get('port'));
});