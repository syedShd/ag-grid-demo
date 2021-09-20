import React , { useState } from 'react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import Box from '@mui/material/Box';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import {AgGridColumn, AgGridReact} from 'ag-grid-react';
import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import 'ag-grid-community/dist/styles/ag-theme-balham-dark.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import Switch from '@mui/material/Switch';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { styled, alpha } from '@mui/material/styles';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import SortOutlinedIcon from '@mui/icons-material/SortOutlined';

// Styling Menu 
const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 12,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

const GridPlay = () => {
  const [value, setValue] = React.useState('1');
  const [gridApi, setGridApi] = useState(null);
  const [gridColumnApi, setGridColumnApi] = useState(null);
  const [rowData1, setRowData] = useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [col1, setCol1] = React.useState(false);
  const [col2, setCol2] = React.useState(false);
  const [col3, setCol3] = React.useState(false);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

// Data for Grid 1
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


    // Data for Grid 2
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

    // Data for Grid 3
    const rowData3 = [
      {cat: "Cat-1", skill: "Angular", experience: "3 years"},
      {cat: "Cat-2 ", skill: "React", experience: "2 years"},
      {cat: "Cat-3", skill: "Java", experience: "5 years"}
    ];
      const handleChange = (event, newValue) => {
        setValue(newValue);
      };
   
    const onPageSizeChanged = (newPageSize) => {
    var value = document.getElementById('page-size').value;
    gridApi.paginationSetPageSize(Number(value));
  };
 
  
     // Hide Athlete column
     const swtCol1 = (event) => {
      setCol1(event.target.checked);
      onCbAthlete(event);
    };

      function onCbAthlete(event) 
      {
        // we only need to update one grid, as the other is a slave
      
        gridColumnApi.setColumnVisible('athlete', !(event.target.checked));
       }

     // Hide Age column 
     const swtCol2 = (event) => {
      setCol2(event.target.checked);
      onCbCountry(event);
    };
      function onCbCountry(event) 
      {
        gridColumnApi.setColumnVisible('country', !(event.target.checked));
      }

      // Hide Country column 
      const swtCol3 = (event) => {
        setCol3(event.target.checked);
        onCbAge(event);
      };
      function onCbAge(event)
      {
        gridColumnApi.setColumnVisible('age', !(event.target.checked));
      }
  
      // Switch
      const label = { inputProps: { 'aria-label': 'Switch demo' } };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList 
                  onChange={handleChange}  
                  textColor="secondary"
                  indicatorColor="secondary">
                <Tab label="Class One" value="1" />
                <Tab label="Class Two" value="2" />
                <Tab label="Class Three" value="3" />
              </TabList>
            </Box>
       
        {/* Tab 1 */}
        <TabPanel value="1">
       <div style={{ margin: '0.45rem' }}>
                  <label style={{ margin: '0.45rem' }}>
                        <Button
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            variant="outlined" 
                            size="small"
                            
                            disableElevation
                          
                          
                            style={{ fontSize: 14,  borderColor: '#454545',  color: '#454545', maxHeight: '25px', minWidth: '111px', minHeight: '25px', textTransform: 'none'}}
                            startIcon={<FilterAltOutlinedIcon />}
                          >
                            Filters
                      </Button>     
                </label>
                <label style={{ margin: '0.45rem' }}>
                      <Button
                          aria-haspopup="true"
                          aria-expanded={open ? 'true' : undefined}
                          variant="outlined" 
                          size="small"
                          
                          disableElevation
                          onClick={handleClick}
                        
                          style={{ fontSize: 14,  borderColor: '#454545', color: '#454545', maxHeight: '25px', minWidth: '111px', minHeight: '25px', textTransform: 'none'}}
                          startIcon={<VisibilityOffOutlinedIcon />}
                        >
                          Hide fields       
                      </Button>
                      </label>
                      <label style={{ margin: '0.45rem' }}>
                          <Button
                              aria-haspopup="true"
                              aria-expanded={open ? 'true' : undefined}
                              variant="outlined" 
                              size="small"
                              
                              disableElevation
                            
                            
                              style={{ fontSize: 14,  color: '#454545', borderColor: '#454545', maxHeight: '25px', minWidth: '111px', minHeight: '25px', textTransform: 'none'}}
                              startIcon={<SortOutlinedIcon />}
                            >
                              Sort
                           </Button>     
                      </label>
                     <StyledMenu
                                id="demo-customized-menu"
                                MenuListProps={{
                                  'aria-labelledby': 'demo-customized-button',
                                }}
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                              >
                                <MenuItem disableRipple>
                                Athlete <Switch {...label}  color="secondary"   checked={col1}
                                 onChange={swtCol1}/>
                                </MenuItem>
                              
                                <MenuItem disableRipple>
                                Country <Switch {...label} color="secondary"  checked={col2} onChange={swtCol2} /* onChange={(event2) => onCbCountry(event2)}  *//>
                                </MenuItem>

                                <MenuItem disableRipple>
                                Age <Switch {...label} color="secondary"  checked={col3} onChange={swtCol3} /* onChange={(event3) => onCbAge(event3)} */ />
                                </MenuItem>
                      </StyledMenu>
                     
               <div >
          </div>
      </div>
     <div className="ag-theme-alpine" style={{height: 400, width: 600}}>
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
                           
                          }}
                            rowSelection="multiple" 
                            groupSelectsChildren={true}
                            enableRangeSelection={true}
                            pagination={true}
                            paginationPageSize={30}
                            >
                      
                    <AgGridColumn
                      headerName="Athlete"
                      field="athlete"
                      width={150}
                      suppressSizeToFit={true}
                      headerCheckboxSelection={true}
                      checkboxSelection={true}
                      resizable={true} 
                      filter="agTextColumnFilter" 
                      suppressMenu={true}
                    />
                    <AgGridColumn
                      headerName="Age"
                      field="age"
                      width={90}
                      resizable={true} 
                      suppressMenu={true}
                      filter="agNumberColumnFilter" 
                    />
                    <AgGridColumn
                      headerName="Country"
                      field="country"
                      width={120}
                      resizable={true} 
                      suppressMenu={true}
                      filter="agTextColumnFilter" 
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
