import styles from "./FormComponent.module.css";
import TextField from "@mui/material/TextField/TextField";
import { Box } from "@mui/material";
import { ErrorMessage } from "@hookform/error-message";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  example: string;
  exampleRequired: string;
};

export const FormComponent = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div className={styles.main__container}>
        <h1 className={styles.title}>Dados Pessoais</h1>
        <form className={styles.form__main} onSubmit={handleSubmit(onSubmit)}>
          <TextField
            id="outlined-basic"
            label="Nome"
            variant="outlined"
            required
            type="text"
            className={styles.text__field}
            defaultValue=""
            {...register("example")}
          />
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            required
            type="email"
            className={styles.text__field}
          />
          <TextField
            id="outlined-basic"
            label="Telefone"
            variant="outlined"
            required
            type="tel"
            className={styles.text__field}
          />
          <TextField
            id="outlined-basic"
            label="CPF"
            variant="outlined"
            required
            type="text"
            className={styles.text__field}
          />
          {errors.exampleRequired && <span>Esse campo é necessario</span>}
        </form>
      </div>
    </Box>
  );
};
