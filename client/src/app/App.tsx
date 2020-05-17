import React from 'react';
import './App.scss';
import {
  Button,
  InputAdornment, Paper,
  Table, TableBody, TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography
} from "@material-ui/core";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {searchTitle} from "../services/searchService";
import {SearchResponseModel} from "../model/SearchResponseModel";

function App() {
  const [query, setQuery] = React.useState('')
  const [table, setTable] = React.useState<SearchResponseModel[]>([])
  //TODO enter data into the table dynamically
  const handleSearch = async () => {
    let dataList: SearchResponseModel[] = await searchTitle(query)
    setTable(dataList)
  }

  React.useEffect(() => {
    console.log('table should change')
    console.log(table)
  }, [table])

  const getTable = () => {
    return (
      <TableContainer className={'table-container'} component={Paper}>
        <Table stickyHeader={true} aria-label="the table">
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell align="right">Thumbnail</TableCell>
              <TableCell align="right">Absolute Link&nbsp;(g)</TableCell>
              <TableCell align="right">Data&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {table.map((row: SearchResponseModel, key: number) => {
                if (key < 10) {
                  return (
                    <TableRow key={key}>
                      <TableCell component="th" scope="row">
                        {row.Title}
                      </TableCell>
                      <TableCell align="right">{row.Thumbnail}</TableCell>
                      <TableCell align="right">{row.absoluteLink}</TableCell>
                      <TableCell align="right">{row.data}</TableCell>
                    </TableRow>)
                }
              }
            )}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <Typography
          variant={'h3'}
        >
          Search Your <code>Vitamin</code>
        </Typography>
        <Typography
          variant={'subtitle1'}
        >
          <i>Top 20 rows</i>
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
            onChange={(event: any) => {
              setQuery(event.target.value)
              handleSearch()
            }}
          >
            <FontAwesomeIcon icon={faSearch}/>
            Query
          </TextField>
          {/*<Button*/}
          {/*  size={'large'}*/}
          {/*  variant={'contained'}*/}
          {/*  className={'margin'}*/}
          {/*  onClick={handleSearch}*/}
          {/*>*/}
          {/*  Search*/}
          {/*</Button>*/}
        </div>

      </header>
      <div>
        {getTable()}
      </div>
    </div>
  );
}

export default App;
