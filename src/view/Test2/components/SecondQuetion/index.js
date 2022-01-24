import React, {Fragment, useState} from "react";
import {Button, Grid} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers";

const schema = yup.object().shape({
  value: yup.number().required(),
});

const SecondQuestion = props => {
  const {
    classes
  } = props;

  const { register, handleSubmit,errors } = useForm({
    resolver: yupResolver(schema)
  });

  const [arrayData, setArrayData] = useState([]);

  const onSubmit = (data) => {
    let array = arrayData;
    array.push(data.value);
    setArrayData(array);
    console.log(data);
  };

  const merge = (left, right) => {
    let arr = []
    while (left.length && right.length) {
      if (left[0] < right[0]) {
        arr.push(left.shift())
      } else {
        arr.push(right.shift())
      }
    }

    return [ ...arr, ...left, ...right ]
  }

  const mergeSort = (array) => {
    const half = array.length / 2

    if(array.length < 2){
      return array
    }

    const left = array.splice(0, half)
    return merge(mergeSort(left),mergeSort(array))
  }

  const sortArray = (array) => {
    setArrayData(mergeSort(array));
  }

  let arrayView = '';
  if(arrayData.length > 0){

    arrayView = (
      <Fragment>
        <Grid container justifyContent={"center"} alignItems={"center"} spacing={2}>
          <Grid item>
            {arrayData.map(data => (
              <Fragment>
                {data},
              </Fragment>
            ))}
          </Grid>
          <Grid item>
            <Button variant={"contained"} color={"primary"} size={"small"} onClick={() => sortArray(arrayData)}>
              Sort
            </Button>
          </Grid>
        </Grid>
      </Fragment>
    )
  }

  return (
    <Fragment>
      <div className={classes.marginBottom}>
        2. Buatlah fungsi dengan input array integer untuk mengurutkan angka dari kecil kebesar dan besar kekecil dengan manual tanpa fungsi bawaan javascript,
      </div>
      <div className={classes.marginBottom}>
        <Grid container justifyContent={"center"}>
          <Grid item>
            <form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                fullWidth
                size={"small"}
                type="text"
                label="Value"
                variant="outlined"
                inputRef={register}
                error={errors.value && true}
                helperText={errors.value && errors.value.message}
                // defaultValue={0}
                placeholder={0}
                name={"value"}
                // onChange={handleChange}
              />
              <Button variant={"contained"} color={"secondary"} type={"submit"}>
                Submit
              </Button>
            </form>
          </Grid>
        </Grid>
      </div>
      <div className={classes.marginBottom}>
        {arrayView}
      </div>
    </Fragment>
  );
};

export default SecondQuestion;