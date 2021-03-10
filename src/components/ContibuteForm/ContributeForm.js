import { Container, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: "1rem",
	},
	header: {
		padding: "2rem",
	},
}));

const ContributeForm = () => {
	const classes = useStyles();
	return (
		<Container>
			<Paper elevation={3} className={classes.paper}>
				<Typography variant='h5' align='center' className={classes.header}>
					Add a Job!
				</Typography>
			</Paper>
		</Container>
	);
};

export default ContributeForm;
