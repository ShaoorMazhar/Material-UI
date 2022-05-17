import * as React from 'react';
import theme from "../theme";
import Button from '@mui/material/Button';
import { ThemeProvider } from "@mui/material/styles";
function Btn() {
  return( 
      <ThemeProvider theme={theme}>
  <Button variant="contained" color='secondary'>
  Success
</Button>
</ThemeProvider>)
}
export default Btn;