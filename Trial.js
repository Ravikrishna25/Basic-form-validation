import { useState } from 'react';
import PasswordStrengthMeter from './components/PasswordStrengthMeter';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card ,Typography} from '@mui/material';
import App from "./App"
import "./Trial.css"
function Trial() {
  const [ password, setPassword ] = useState('');

  return (
    <div className="container">
        <Card className="card" elevation="21">

      <div className="col-md-6 mx-auto text-right">
        <div className="form-group mb-1">
            <App />
        {/* <input
            type="text"
            className="form-control shadow-none"
            placeholder="Username"
            onChange={e => setPassword(e.target.value)}
          />
          <br></br>
        <input
            type="email"
            className="form-control shadow-none"
            placeholder="Email"
            
          />
          <br></br> */}
          <Typography>
            Enter the Password
          </Typography>
          <br />
          <input
            type="password"
            className="form-control shadow-none"
            placeholder="Password"
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        
        <PasswordStrengthMeter password={password} />
        <br/>
      </div>
        </Card>
    </div>
  );
}

export default Trial;