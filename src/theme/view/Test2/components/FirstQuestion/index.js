import React,{Fragment} from "react";
import {Button, Grid} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers";

const schema = yup.object().shape({
  max_iterations: yup.number().required().min(1),
});

const FirstQuestion = props => {
  const {
    classes
  } = props;

  const { register, handleSubmit,errors } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = (data) => {
    for (let i=1; i<=data.max_iterations; i++)
    {
      if (i%15 === 0)
        console.log("fish bash\t");
      else if ((i%3) === 0)
        console.log("fish\t");
      else if ((i%5) === 0)
        console.log("bash\t");
      else // print the number
        console.log("%d\t", i);
    }
  }

  return (
    <Fragment>
      <div className={classes.marginBottom}>
        1. Buatlah fungsi dengan parameter berapa banyak angka yg akan ditampilkan secara looping, dimana jika angka tersebut habis dibagi 3 cetak "fish" jika habis dibagi 5 cetak "bash" dan jika habis dibagi 15 cetak "fish bash", cetak cukup salah satu dari kondisi tersebut, cetak menggunakan console log atau sejenisnya.
      </div>
      <div className={classes.marginBottom}>
        <Grid container justifyContent={"center"}>
          <Grid item>
            <form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                fullWidth
                size={"small"}
                type="number"
                label="Iterasi"
                variant="outlined"
                inputRef={register}
                error={errors.max_iterations && true}
                helperText={errors.max_iterations && errors.max_iterations.message}
                defaultValue={0}
                name={"max_iterations"}
                // onChange={handleChange}
              />
              <Button variant={"contained"} color={"secondary"} type={"submit"}>
                Submit
              </Button>
            </form>
          </Grid>
        </Grid>
      </div>
    </Fragment>
  );
};

export default FirstQuestion;