import React from 'react';
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



const App = () => {

//   const ColumnDefs = [
//     {headerName: "Make", field: "make", sortable: true, filter: true},
//     {headerName: "Model", field: "model",sortable: true, filter: true},
//     {headerName: "Price", field: "price",sortable: true, filter: true},
    
// ];
const [value, setValue] = React.useState('1');
const rowData1 = [
  {book: "Book1", author: "Author1", price: 350},
  {book: "Book2", author: "Author2", price: 535},
  {book: "Book3", author: "Author3", price: 750}
];
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
        <TabPanel value="1">
        <div className="ag-theme-material" style={{height: 400, width: 600}}>
           
           <AgGridReact rowData={rowData1}
             rowSelection="multiple"
             groupSelectsChildren={true}
             autoGroupColumnDef={{
                 headerName: "Book",
                 field: "book",
                 cellRenderer:'agGroupCellRenderer',
                 cellRendererParams: {
                                //  checkbox: true
                            }
                     
            }}>
        
        <AgGridColumn  field="author" sortable={ true } filter={ true } checkboxSelection={ true } rowGroup={ true }></AgGridColumn>
        <AgGridColumn  field="price" sortable={ true } filter={ true } checkboxSelection={ true } ></AgGridColumn>
        </AgGridReact>
       </div>
          </TabPanel>
        <TabPanel value="2"> <div className="ag-theme-balham-dark" style={{height: 400, width: 600}}>
           
           <AgGridReact rowData={rowData2}
             rowSelection="multiple"
             groupSelectsChildren={true}  resizable={true} 
             autoGroupColumnDef={{
                 headerName: "Model",
                 field: "model",
                 cellRenderer:'agGroupCellRenderer',
                 cellRendererParams: {
                                 checkbox: true
                            },
                           
            }}>

          <AgGridColumn  field="car" sortable={ true } filter={ true } resizable={true} checkboxSelection={ true } rowGroup={ true }></AgGridColumn>
          <AgGridColumn  field="price" sortable={ true } filter={ true } resizable={true}  checkboxSelection={ true } rowGroup={ true }></AgGridColumn>
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
// render(<App />, document.getElementById('root'));

export default App;
