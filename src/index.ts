import './database';
import { app } from './app';

app.listen(app.get('port'), () => {
    console.log('Contact Book server running on port', app.get('port'));
});