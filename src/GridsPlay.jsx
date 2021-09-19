import React , { useState } from 'react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import Box from '@mui/material/Box';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import {AgGridColumn, AgGridReact} from 'ag-grid-react';
import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine-dark.css';
import 'ag-grid-community/dist/styles/ag-theme-balham-dark.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';



const GridPlay = () => {
  const [value, setValue] = React.useState('1');
  const [gridApi, setGridApi] = useState(null);
  const [gridColumnApi, setGridColumnApi] = useState(null);
  const [rowData1, setRowData] = useState(null);
  
  const onGridReady = (params) => {
    setGridApi(params.api);
    setGridColumnApi(params.columnApi);

    const updateData = (data) => {
      setRowData(data);
    };

    fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
      .then((resp) => resp.json())
      .then((data) => updateData(data));
  };
// const rowData1 = [
//   {book: "Book1", author: "Author1", price: 350},
//   {book: "Book2", author: "Author2", price: 535},
//   {book: "Book3", author: "Author3", price: 750}
// ];
const rowData2= [
  {car: "Maruti", model: "Alto", price: 20000},
  {car: "Mercedes-Benz", model: "Class-G", price: 88000},
  {car: "Suzuki", model: "Baleno", price: 42000},
  {car: "Jaguar", model: "XE", price: 98000},
  {car: "Hyundai ", model: "i20", price: 38000},
  {car: "Tata", model: "Nexon", price: 51000},
  {car: "Jaguar", model: "XF", price: 95000},
  {car: "Hyundai ", model: "i10", price: 33000},
  {car: "Tata", model: "Taigo", price: 43000}
];
const rowData3 = [
  {cat: "Cat-1", skill: "Angular", experience: "3 years"},
  {cat: "Cat-2 ", skill: "React", experience: "2 years"},
  {cat: "Cat-3", skill: "Java", experience: "5 years"}
];
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [topGrid, setTopGrid] = useState(null);

  const onPageSizeChanged = (newPageSize) => {
    var value = document.getElementById('page-size').value;
    gridApi.paginationSetPageSize(Number(value));
  };
  var gridOptions = {
    defaultColDef: {
      sortable: true,
      resizable: true,
      width: 150,
      enableValue: true,
    },
    debug: true,
    
  };
  
  function onCbAthlete(event) {
    // we only need to update one grid, as the other is a slave
    gridColumnApi.setColumnVisible('athlete', event.target.checked);
    gridColumnApi.setColumnVisible('age', event.target.checked);
}

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange}  
        textColor="secondary"
        indicatorColor="secondary">
            <Tab label="Class One" value="1" />
            <Tab label="Class Two" value="2" />
            <Tab label="Class Three" value="3" />
          </TabList>
        </Box>
        {/* Tab 1 */}
        <TabPanel value="1">
               <div className="header">
                <label>
                    <input
                        type="checkbox"
                        defaultChecked={true}
                        onChange={(event) => onCbAthlete(event)}/>Hide Columns
                </label>
                </div>
        <div className="ag-theme-balham-dark" style={{height: 400, width: 600}}>
           
           <AgGridReact 
            floatingFiltersHeight={50}
            onGridReady={onGridReady}
            rowData={rowData1}
            suppressRowClickSelection={true}
            defaultColDef={{
            flex: 1,
            minWidth: 150,
            filter: true,
            sortable: true,
            floatingFilter: true,
          }}
            rowSelection="multiple" 
            groupSelectsChildren={true}
            enableRangeSelection={true}
            pagination={true}
            paginationPageSize={30}
            >
         {/* <AgGridColumn   headerCheckboxSelection={true}
            checkboxSelection={true} field="book" suppressMenu={true}  ></AgGridColumn>
         <AgGridColumn  field="author" suppressMenu={true}  ></AgGridColumn>
        <AgGridColumn  field="price" suppressMenu={true} ></AgGridColumn> */}

            <AgGridColumn
              headerName="Athlete"
              field="athlete"
              width={150}
              suppressSizeToFit={true}
              headerCheckboxSelection={true}
              checkboxSelection={true}
              resizable={true} 
            />
            <AgGridColumn
              headerName="Age"
              field="age"
              width={90}
              minwidth={75}
              maxWidth={100}
              resizable={true} 
              
            />
            <AgGridColumn
              headerName="Country"
              field="country"
              width={120}
              resizable={true} 
            />
         </AgGridReact>
       </div>
       <div className="example-header">
          Page Size:
          <select onChange={() => onPageSizeChanged()} id="page-size">
            <option value="30" selected={true}>
              30
            </option>
            <option value="100">100</option>
            <option value="500">500</option>
            <option value="1000">1000</option>
          </select>
        </div>
          </TabPanel>
        <TabPanel value="2"> <div className="ag-theme-balham-dark" style={{height: 400, width: 600}}>
           
           <AgGridReact rowData={rowData2}
                  rowSelection="multiple"
                  groupSelectsChildren={true}  
                  autoGroupColumnDef={{
                  headerName: "Model",
                  field: "model",
                  cellRenderer:'agGroupCellRenderer',
                  cellRendererParams: 
                 {
                    checkbox: true
                 },
                           
            }}>

          <AgGridColumn  field="car" sortable={ true } filter={ true } resizable={true} checkboxSelection={ true } rowGroup={ true }></AgGridColumn>
          <AgGridColumn  field="price" sortable={ true } filter={ true } resizable={true} checkboxSelection={ true } rowGroup={ true }></AgGridColumn>
          </AgGridReact>
       </div>
       </TabPanel>
        <TabPanel value="3"> <div className="ag-theme-balham" style={{height: 400, width: 600}}>
           
           <AgGridReact rowData={rowData3}
             rowSelection="multiple"
             groupSelectsChildren={true}
             
             autoGroupColumnDef={{
                 headerName: "Skill",
                 field: "skill",
                 cellRenderer:'agGroupCellRenderer',
                 cellRendererParams: {
                                 checkbox: true
                            }
                     
            }}>  
        <AgGridColumn  field="cat" sortable={ true } filter={ true } resizable={true} checkboxSelection={ true } rowGroup={ true }></AgGridColumn>
        <AgGridColumn  field="experience" sortable={ true } filter={ true } resizable={true} checkboxSelection={ true } rowGroup={ true }></AgGridColumn>
        </AgGridReact>
       </div>
       </TabPanel>
      </TabContext>
    </Box>
  );
}

export default GridPlay;
