import { useEffect, useState } from 'react';
import Layout from './layout';
import axios from 'axios';
import { AppBar, Box } from '@mui/material';
import ExgangeFrom from './components/exgange-from';
function App() {
  const [data, setData] = useState({USD:1, EGP:30.85, EUR:.94});
  const [error, setError] = useState('');
  // useEffect(() => {
  //   axios
  //     .get("https://v6.exchangerate-api.com/v6/de5f47dea7694759e26f1c00/latest/USD")
  //     .then((res) => setData(res.data))
  //     .catch(err => {
  //      setError(err.message);
  // });
  // }, []);
  // console.log(data.conversion_rates);
  return (
    <div className="App">
      <Layout  />
      <AppBar position="static">
      </AppBar>
      <Box
      style={{
        // width:'100vw'
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
      }}>
        <ExgangeFrom data={data} />
      </Box>
    </div>
  );
}

export default App;
