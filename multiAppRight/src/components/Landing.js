import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
	"@global": {
		a: {
			textDecoration: "none",
		},
	},
	heroContent: {
		background: "#9dd4e2",
		color: "black",
		padding: theme.spacing(8, 0, 6),
	},
}));

export default function Album() {
	const classes = useStyles();

	return (
		<React.Fragment>
			<main>
				<div className={classes.heroContent}>
					<Container maxWidth="sm">
						<Typography
							component="h1"
							variant="h2"
							align="center"
							color="textPrimary"
							gutterBottom
						>
							Im made on React
						</Typography>
						<Typography
							variant="h6"
							align="center"
							color="textSecondary"
							paragraph
						>
							I could be where you place your page content
						</Typography>
					</Container>
				</div>
			</main>
		</React.Fragment>
	);
}
