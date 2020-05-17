import React from 'react';
import './App.scss';
import {
  FormControl,
  InputAdornment, InputLabel,
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography
} from "@material-ui/core";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {search} from "../services/searchService";
import {SearchResponseModel} from "../model/SearchResponseModel";
import {SearchURLTypes} from "../types/SearchURLTypes";

function App() {
  const [queryType, setQueryType] = React.useState<SearchURLTypes>(SearchURLTypes.TITLE)
  const [query, setQuery] = React.useState('')
  const [table, setTable] = React.useState<SearchResponseModel[]>([])

  const handleSearch = async () => {
    let dataList: SearchResponseModel[] = await search(query, queryType)
    setTable(dataList)
  }

  React.useEffect(() => {
    handleSearch()
  }, [queryType])

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
          <FormControl className={'select-query'}>
            <InputLabel shrink id="select-label">
              Search Attribute
            </InputLabel>
            <Select
              value={queryType}
              variant={"outlined"}
              labelId={'select-label'}
              id={'select-label'}
              defaultValue={SearchURLTypes.TITLE}
              onChange={(event) => {
                setQueryType(event.target.value as SearchURLTypes)
              }}
              displayEmpty
            >
              <MenuItem value={SearchURLTypes.TITLE}>Title</MenuItem>
              <MenuItem value={SearchURLTypes.INGREDIENT}>Ingredient</MenuItem>
            </Select>
          </FormControl>
          <TextField
            variant={'outlined'}
            color={'primary'}
            className={'search-input'}
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
