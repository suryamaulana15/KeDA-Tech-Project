import React,{Fragment} from "react";
import {Button, Grid} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers";

const schema = yup.object().shape({
  str: yup.string().required(),
});

const ThirdQuestion = props => {
  const {
    classes
  } = props;

  const { register, handleSubmit,errors } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = (data) => {
    let str = data.str;
    let j = str.length -1;
    for( let i = 0 ; i < j/2 ;i++)
    {
      let x = str[i] ;//forward character
      let y = str[j-i];//backward character
      if( x !== y)
      {
        // return false if string not match
        return console.log(false)
      }
    }
    /// return true if string is palindrome
    return console.log(true)
  }

  return (
    <Fragment>
      <div className={classes.marginBottom}>
        3. Buatlah fungsi dengan input string jika string tersebut dibalik dan tetap sama dengan string yang diinputkan maka return true jika tidak return false
      </div>
      <div className={classes.marginBottom}>
        <Grid container justifyContent={"center"}>
          <Grid item>
            <form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                fullWidth
                size={"small"}
                type="text"
                label="String"
                variant="outlined"
                inputRef={register}
                error={errors.str && true}
                helperText={errors.str && errors.str.message}
                // defaultValue={0}
                placeholder={'String'}
                name={"str"}
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

export default ThirdQuestion;