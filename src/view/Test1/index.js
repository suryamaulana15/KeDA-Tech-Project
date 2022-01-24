import React, {Fragment, useState} from "react";
import {Button, FormHelperText, Grid, Radio} from "@material-ui/core";
import {DatePicker} from "@material-ui/pickers";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import {CalendarToday} from "@material-ui/icons";
import moment from "moment";
import style from './style';
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import TextField from "@material-ui/core/TextField";

import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers';

const schema = yup.object().shape({
  name: yup.string().required(),
  radio_flexible: yup.string().required().nullable()
});

const Test1 = props => {
  const classes = style();

  const [firstRadioState,setFirstRadioState] = useState({
    name: 'Radio A'
  });

  const handleChangeFirstRadio = (event) => {
    const target = event.target.name
    event.persist()
    if (event.target.type === 'checkbox') {
      setFirstRadioState((firstRadioState) => ({
        ...firstRadioState,
        [target]: event.target.checked
      }))
    } else {
      setFirstRadioState((firstRadioState) => ({
        ...firstRadioState,
        [target]: event.target.value
      }))
    }
  }

  const [formState, setFormState] = useState({
    dateValue: new Date(),
    textField: 'Texfield Flexible',
    textFieldSecond: 'Texfield Flexible Second',
    dateValueSecond: new Date(),
  });

  const [selectedDate, setSelectedDate] = useState(new Date());
  const handleDateChange = date => {
    // console.log(date);
    setSelectedDate(date);
    setFormState(formState => ({
      ...formState,
      dateValue: date
    }));
  };

  const dateValue = moment(formState.dateValue).format('DD/MM/YYYY');

  //dateSecond
  const [selectedDateSecond, setSelectedDateSecond] = useState(new Date());
  const handleDateChangeSecond = date => {
    setSelectedDateSecond(date);
    setFormState(formState => ({
      ...formState,
      dateValueSecond: date
    }));
  };

  const dateValueSecond = moment(formState.dateValueSecond).format('DD/MM/YYYY');

  const [value, setValue] = React.useState(formState.textField);

  const handleRadioChange = (event) => {
    setValue(event.target.value);
  };

  const handleChange = (event) => {
    const target = event.target.name
    event.persist()
    // setValue(null);
    if (event.target.type === 'checkbox') {
      setFormState((formState) => ({
        ...formState,
        [target]: event.target.checked
      }))
    } else {
      setFormState((formState) => ({
        ...formState,
        [target]: event.target.value
      }))
    }
  }

  const { register, handleSubmit,errors } = useForm({
    resolver: yupResolver(schema)
  })


  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <Fragment>
      <div className={classes.root}>
        <Grid container justifyContent={"center"}>
          <Grid item>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className={classes.marginBottom}>
                1. Take a prop that can display Labels
              </div>
              <div className={classes.marginBottom}>
                {/*<FormControl component={"fieldset"} fullWidth>*/}
                  <FormControl component="fieldset" error={errors.name && true}>
                    <FormLabel component="legend">Name</FormLabel>
                    <RadioGroup
                      row
                      aria-label="name"
                      name="name"
                      value={firstRadioState.name}
                      onChange={handleChangeFirstRadio}
                    >
                      <FormControlLabel inputRef={register} value="Radio A" control={<Radio color="secondary" />} label="Radio A" />
                      <FormControlLabel inputRef={register} value="Radio B" control={<Radio color="secondary" />} label="Radio B" />
                      <FormControlLabel inputRef={register} value="Radio C" control={<Radio color="secondary" />} label="Radio C" />
                    </RadioGroup>
                    <FormHelperText>
                      {errors.name && errors.name.message}
                    </FormHelperText>
                  </FormControl>
              </div>

              <div className={classes.marginBottom}>
                2. Can take in subcomponents so that each radio button is flexible in showing itssub-components.
              </div>
              <div className={classes.marginBottom}>
                <FormControl component={"fieldset"} fullWidth error={errors.radio_flexible && true}>
                  <FormGroup row>
                    <FormLabel>
                      a. Text-Field Components:
                    </FormLabel>
                    <br/>
                    <Grid container alignItems={"center"}>
                      <Grid item>
                        <Radio
                          checked={value === formState.textField}
                          onChange={handleRadioChange}
                          value={formState.textField}
                          name="radio_flexible"
                          inputRef={register}
                          inputProps={{ 'aria-label': formState.textField }}
                        />
                      </Grid>
                      <Grid item>
                        <TextField
                          fullWidth
                          label="TextField"
                          type="text"
                          variant="outlined"
                          defaultValue={formState.textField}
                          name={"textField"}
                          onChange={handleChange}
                        />
                      </Grid>
                    </Grid>

                    {/*{dateValue}*/}
                  </FormGroup>
                  {/*<br/>*/}
                  <FormGroup row>
                    <FormLabel>
                      b. Date-Field Components:
                    </FormLabel>
                    <br/>
                    <Grid container alignItems={"center"}>
                      <Grid item>
                        <Radio
                          checked={value === dateValue}
                          onChange={handleRadioChange}
                          value={dateValue}
                          name="radio_flexible"
                          inputRef={register}
                          inputProps={{ 'aria-label': dateValue }}
                        />
                      </Grid>
                      <Grid item>
                        <DatePicker
                          fullWidth
                          format="DD/MM/yyyy"
                          label="Date-field"
                          value={selectedDate}
                          onChange={handleDateChange}
                          inputVariant={"outlined"}
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                <IconButton>
                                  {/* eslint-disable-next-line react/jsx-no-undef */}
                                  <CalendarToday />
                                </IconButton>
                              </InputAdornment>
                            ),
                          }}
                        />
                      </Grid>
                    </Grid>
                  </FormGroup>

                  <FormGroup row>
                      <FormLabel>
                        C. Other subComponents
                      </FormLabel>
                      <br/>
                      <Grid container>
                        <Grid item>
                          <Radio
                            checked={value === `${formState.textFieldSecond} & ${dateValueSecond}`}
                            onChange={handleRadioChange}
                            value={`${formState.textFieldSecond} & ${dateValueSecond}`}
                            name="radio_flexible"
                            inputRef={register}
                            inputProps={{ 'aria-label': `${formState.textFieldSecond} & ${dateValueSecond}` }}
                          />
                        </Grid>
                        <Grid item>
                          <TextField
                            fullWidth
                            label="TextFieldSecond"
                            type="text"
                            variant="outlined"
                            defaultValue={formState.textFieldSecond}
                            name={"textFieldSecond"}
                            onChange={handleChange}
                          />
                          <br/>
                          <br/>
                          <DatePicker
                            fullWidth
                            format="DD/MM/yyyy"
                            label="Date-field-Second"
                            value={selectedDateSecond}
                            onChange={handleDateChangeSecond}
                            inputVariant={"outlined"}
                            InputProps={{
                              endAdornment: (
                                <InputAdornment position="end">
                                  <IconButton>
                                    {/* eslint-disable-next-line react/jsx-no-undef */}
                                    <CalendarToday />
                                  </IconButton>
                                </InputAdornment>
                              ),
                            }}
                          />
                        </Grid>
                      </Grid>
                    {/*{dateValue}*/}
                  </FormGroup>
                  <FormHelperText>
                    {errors.radio_flexible && errors.radio_flexible.message}
                  </FormHelperText>
                </FormControl>
                <Button variant={"contained"} type={"submit"} color={"secondary"} disabled={value === null && true}>
                  Submit
                </Button>
              </div>
            </form>
          </Grid>
        </Grid>
      </div>
    </Fragment>
  );
};

export default Test1;