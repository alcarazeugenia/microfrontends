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
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(8, 0, 6),
	},
	heroButtons: {
		marginTop: theme.spacing(4),
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
							Home Page made on React
						</Typography>
						<Typography
							variant="h5"
							align="center"
							color="textSecondary"
							paragraph
						>
							My Root project is "Marketing"
						</Typography>
						<div className={classes.heroButtons}>
							<Grid container spacing={2} justify="center">
								<Grid item>
									<Link to="/second">
										<Button
											variant="contained"
											color="primary"
										>
											Go to 2nd page
										</Button>
									</Link>
								</Grid>
							</Grid>
						</div>
					</Container>
				</div>
			</main>
		</React.Fragment>
	);
}
