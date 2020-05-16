import React from 'react';
import './App.scss';
import {Button, InputAdornment, TextField, Typography} from "@material-ui/core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearch} from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Typography variant={'h3'}>
          Search Your <code>Vitamin</code>
        </Typography>
        <div className="input-container">
          <TextField
            variant={'outlined'}
            color={'primary'}
            className={'search-input margin'}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FontAwesomeIcon icon={faSearch} size={'1x'}/>
                </InputAdornment>
              ),
            }}
          >
            <FontAwesomeIcon icon={faSearch}/>
            Query
          </TextField>
          <Button
            size={'large'}
            variant={'contained'}
            className={'margin'}
          >
            Search
          </Button>
        </div>
      </header>
    </div>
  );
}

export default App;
