import React from 'react';

import {AgGridColumn, AgGridReact} from 'ag-grid-react';
import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

function ColorTabs() {
  
//   const [value, setValue] = React.useState('one');

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <Box sx={{ width: '100%' }}>
//       <Tabs
//         value={value}
//         onChange={handleChange}
//         textColor="secondary"
//         indicatorColor="secondary"
//         aria-label="secondary tabs example"
//       >
//         <Tab value="one" label="Item One" />
//         <Tab value="two" label="Item Two" />
//         <Tab value="three" label="Item Three" />
//       </Tabs>
//     </Box>
//   );
// }
//   const ColumnDefs = [
//     {headerName: "Make", field: "make", sortable: true, filter: true},
//     {headerName: "Model", field: "model",sortable: true, filter: true},
//     {headerName: "Price", field: "price",sortable: true, filter: true},
    
// ];
const rowData = [
  {make: "Toyota", model: "Celica", price: 35000},
  {make: "Ford", model: "Mondeo", price: 32000},
  {make: "Porsche", model: "Boxter", price: 72000}
];

return (
  <div className="ag-theme-alpine" style={{height: 400, width: 600}}>
      
      <AgGridReact rowData={rowData}
        rowSelection="multiple"
        groupSelectsChildren={true}
        autoGroupColumnDef={{
            headerName: "Model",
            field: "model",
            cellRenderer:'agGroupCellRenderer',
            cellRendererParams: {
                            checkbox: true
                       }
                
       }}>
              
            
             <AgGridColumn  field="make" sortable={ true } filter={ true } checkboxSelection={ true } rowGroup={ true }></AgGridColumn>
             <AgGridColumn  field="price" sortable={ true } filter={ true } checkboxSelection={ true } rowGroup={ true }></AgGridColumn>
             </AgGridReact>
  </div>
);
};

export default ColorTabs