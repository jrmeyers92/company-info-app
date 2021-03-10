import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
	title: {
		flexGrow: 1,
	},
}));

function Header() {
	const classes = useStyles();
	return (
		<div>
			<AppBar className={classes.appBar}>
				<Toolbar>
					<Typography variant='h6' className={classes.title}>
						Work Right
					</Typography>
					<Button variant='outlined' color='inherit'>
						Contribute!
					</Button>
				</Toolbar>
			</AppBar>
			<Toolbar />
		</div>
	);
}

export default Header;
