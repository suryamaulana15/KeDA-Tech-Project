import React, {Fragment} from "react";
import {Test1, Test2} from "./view";
import theme from "./theme";
import {MuiPickersUtilsProvider} from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import {ThemeProvider} from "@material-ui/styles";
import {Grid} from "@material-ui/core";


function App() {

  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <div>
            <Grid container justifyContent={"center"}>
              <h2>
                Test 1
              </h2>
            </Grid>>
            <Test1/>
          </div>

          <hr/>
          <div>
            <Grid container justifyContent={"center"}>
              <h2>
                Test 2
              </h2>
              <Test2/>
            </Grid>
          </div>
        </MuiPickersUtilsProvider>
      </ThemeProvider>
    </Fragment>
  );
}

export default App;
