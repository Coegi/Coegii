import React, { useState } from 'react'
import useStyles from './style'
import { TextField, Button, Typography, Paper, Collapse } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { createPost } from '../../actions/posts'
import { Alert, Container } from 'react-bootstrap';
import MenuItem from '@material-ui/core/MenuItem';
import { TableContainer } from '@material-ui/core'
import Honda from '../../images/Honda_Logo.svg';
import swal from 'sweetalert';


const Form = () => {
    const [phone, setPhone] = React.useState();
    const [Bike, setBike] = React.useState();

    const [errors, setErrors] = React.useState();
    const [postData, setPostData] = useState({
        phone: '', Bike: ''
    });

    const currencies = [
        {
            value: 'Bajaj',
            label: 'Bajaj',



        },
        {
            value: 'Hero',
            label: 'Hero',
        },
        {
            value: 'Honda',
            label: 'Honda',

        },
        {
            value: 'Mahindra',
            label: 'Mahindra',
        },
        {
            value: 'Suzuki',
            label: 'Suzuki',
        },

        {
            value: 'TVS',
            label: 'TVS',
        },
        {
            value: 'Yamaha',
            label: 'Yamaha',
        },
        {
            value: 'Aprilia',
            label: 'Aprilia',
        },
        {
            value: 'VESPA',
            label: 'VESPA',
        },
        {
            value: 'Royal Enfield',
            label: 'Royal Enfield',
        },
        {
            value: 'YEZDI',
            label: 'YEZDI',
        },
        {
            value: 'BMW',
            label: 'BMW',
        },
        {
            value: 'DSK Banelli ',
            label: 'DSK Banelli ',
        },
        {
            value: 'DUCATI',
            label: 'DUCATI',
        },
        {
            value: 'EIDER ',
            label: 'EIDER ',
        },
        {
            value: 'HARLEY DEVIDSON ',
            label: 'HARLEY DEVIDSON',
        },
        {
            value: 'HOLLISTER ',
            label: 'HOLLISTER ',
        },
        {
            value: 'HYOSUNG',
            label: 'HYOSUNG',
        },
        {
            value: 'HUSQVARNA',
            label: 'HUSQVARNA',
        }

    ];


    const classes = useStyles();
    const dispatch = useDispatch();


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { target: { value } } = event;
        setErrors({ phone: '' })
        setErrors({ Bike: '' })

        setPhone(value);
        setBike(value);

        let reg = new RegExp(/^\d*$/).test(value)

        if (!reg) {
            setErrors({ phone: 'Please enter only 10 number' })
        }

        else {
            return setPostData;
        }


    };
    const handleSubmit = (e) => {


        e.preventDefault();
        dispatch(createPost(postData));
        clear();




    }
    const clear = () => {

        if (postData.Mobile === '') {
            setErrors({ phone: 'Please enter mobile number' });

        }


        if (!postData.Mobile) {
            return;
        }

        else {
            setPhone(0);
            setPostData({ Mobile: '' });
        }

    }


    return (

        <Paper className={classes.paper} style={{ backgroundColor: 'yellow', height: '500px' }}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">Enter your Details </Typography>
                <br></br>
                <Typography variant="h6"> to get Servicing details</Typography>
                <TextField name="phone"
                    variant="outlined"
                    label="Mobile"
                    fullWidth
                    value={postData.Mobile}
                    inputProps={{ maxLength: 255 }}
                    //onChange={(e) => setPostData({ ...postData, Mobile: e.target.value })}
                    onChange={(e) => handleChange(e) ? setPostData({ ...postData, Mobile: e.target.value }) : false}
                    //onChange={(e) => { this.handleChange(e); this.handleSubmit(e):false }}
                    //onChange={handleChange}
                    required
                    error={Boolean(errors?.phone)}
                    helperText={(errors?.phone)}

                />

                <TextField
                    name="Bike"
                    select
                    label="Bike"
                    helperText="Please select your Bike"
                    variant="outlined"
                    fullWidth
                    required
                    error={Boolean(errors?.Bike)}
                    helperText={(errors?.Bike)}
                    value={postData.Bike}
                    onChange={(e) => setPostData({ ...postData, Bike: e.target.value })}>
                    {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value} images={option.images}>
                            {option.label}
                        </MenuItem>
                    ))}





                </TextField>
                {/* <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.Bike} onChange={(e) => setPostData({ ...postData, Bike: e.target.value })} /> */}
                <Button className={classes.buttonSubmit}
                    variant="contained"
                    color="primary"
                    size="large"
                    type="submit"
                    fullWidth
                >submit</Button>
                {/* <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button> */}

            </form>

        </Paper>


    );
}


export default Form;