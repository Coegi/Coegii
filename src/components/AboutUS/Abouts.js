import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import img from '../../images/1.jpg'


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',

    },
    details: {
        display: 'flex',
        flexDirection: 'Row',
    },
    content: {

    },
    cover: {
        width: 200,
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },

}));

export default function Abouts() {
    const classes = useStyles();
    const theme = useTheme();

    return (

        <Card className={classes.root}>
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5">
                        Live From Space
          </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        Mac Miller
          </Typography>
                    <CardMedia
                        className={classes.cover}
                        image={img}
                        title="Live from space album cover"
                    />

                </CardContent>
                <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5">
                        Live From Space
          </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        Mac Miller
          </Typography>

                </CardContent>

            </div>
            <CardMedia
                className={classes.cover}
                image={img}
                title="Live from space album cover"
            />
        </Card>

    );
}
