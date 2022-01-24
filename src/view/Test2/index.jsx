import React,{Fragment} from "react";
import style from './style';
import {Grid} from "@material-ui/core";
import {FirstQuestion} from "./components";
import ThirdQuestion from "./components/ThirdQuestion";
import SecondQuestion from "./components/SecondQuetion";

const Test2 = props => {
  const classes = style();
  return (
    <Fragment>
      <div className={classes.root}>
        <Grid container spacing={2}>
          <Grid item xl={2} md={2} sm={2} xs={2}/>
          <Grid item xl={8} md={8} sm={8} xs={8}>
            {/*soal 1*/}
            <div>
              <FirstQuestion classes={classes}/>
            </div>
            <div>
              <SecondQuestion classes={classes}/>
            </div>
            <div>
              <ThirdQuestion classes={classes}/>
            </div>
          </Grid>
        </Grid>
      </div>

    </Fragment>
  );
};

export default Test2;