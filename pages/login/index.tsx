import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  TextField, Typography,
} from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
      },
      maxHeight: {
        height: '100vh',
      },
      submit: {
        margin: theme.spacing(3, 0, 2),
      },
      card: {
        width: '30%'
      },
    }),
);

export default function Login() {
  const classes = useStyles();
  return (
      <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          className={classes.maxHeight}
      >
        <Card
            className={classes.card}
        >
          <CardContent>
            <Typography
                component="h1"
                variant="h5"
                align="center"
            >
              Login
            </Typography>
            <form className={classes.form} noValidate autoComplete="off">
              <div>
                <TextField
                    required
                    fullWidth
                    autoFocus
                    id="outlined-id"
                    margin="normal"
                    placeholder="username"
                    label="Username"
                    variant="outlined"
                />
                <TextField
                    required
                    fullWidth
                    id="outlined-password"
                    margin="normal"
                    type="password"
                    placeholder="password"
                    label="Password"
                    variant="outlined"
                />
              </div>
            </form>

          </CardContent>
          <CardActions>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
            >
              LogIn
            </Button>
          </CardActions>
        </Card>
      </Grid>
  );
}