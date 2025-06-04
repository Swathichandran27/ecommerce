
import React, { useState, useEffect } from 'react';
import {
    Dialog,
    TextField,
    Button,
    RadioGroup,
    FormControlLabel,
    Radio,
    Typography,
    Box,
} from '@mui/material';

const ProfileDetailsDialog = ({ open, onClose }) => {
    const [profileData, setProfileData] = useState({
        mobileNumber: '',
        fullName: 'Sheema',
        email: '',
        gender: '',
        birthday: '',
        alternateMobile: '',
        address: '',
        age: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfileData({ ...profileData, [name]: value });

        if (name === 'birthday') {
            calculateAge(value);
        }
    };

    const calculateAge = (birthday) => {
        const birthDate = new Date(birthday);
        const today = new Date();
        const age = today.getFullYear() - birthDate.getFullYear();

        if (birthDate.getMonth() > today.getMonth() || 
           (birthDate.getMonth() === today.getMonth() && birthDate.getDate() > today.getDate())) {
            setProfileData((prev) => ({ ...prev, age: age - 1 }));
        } else {
            setProfileData((prev) => ({ ...prev, age }));
        }
    };

    const validateFields = () => {
        const newErrors = {};
        const { mobileNumber, fullName, email, birthday, alternateMobile, age } = profileData;

        if (!mobileNumber) newErrors.mobileNumber = 'Please fill in this field';
        if (!fullName) {
            newErrors.fullName = 'Please fill in this field';
        } else {
            const capitalLetters = fullName.match(/[A-Z]/g);
            const specialChars = /[^a-zA-Z\s]/.test(fullName);

            if (!/^[A-Z]/.test(fullName)) {
                newErrors.fullName = 'First letter must be capital';
            } else if (specialChars) {
                newErrors.fullName = 'Name must not contain special characters';
            } else if (!capitalLetters || capitalLetters.length > 3) {
                newErrors.fullName = 'Name can have a maximum of 3 capital letters';
            }
        }
        if (!/^\d{10}$/.test(mobileNumber) || mobileNumber.startsWith('0')) {
            newErrors.mobileNumber = 'Mobile number must be 10 digits and not start with 0';
        }
        if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Invalid email address';
        if (!birthday) {
            newErrors.birthday = 'Please fill in this field';
        } else {
            const selectedBirthday = new Date(birthday);
            const today = new Date();
            today.setHours(0, 0, 0, 0); // Reset time for comparison
            if (selectedBirthday > today) {
                newErrors.birthday = 'Birthday must not be in the future';
            }
        }

        // Validate age based on the calculated value
        if (age < 18 || age > 150) {
            newErrors.age = 'Age must be between 18 and 150';
        }

        if (alternateMobile === mobileNumber) {
            newErrors.alternateMobile = 'Alternate mobile number must be different';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSave = () => {
        if (validateFields()) {
            // Save the profile data
            console.log('Profile data saved:', profileData);
            onClose();
        }
    };

    useEffect(() => {
        if (profileData.birthday) {
            calculateAge(profileData.birthday);
        }
    }, [profileData.birthday]);

    return (
        <Dialog open={open} onClose={onClose}>
            <Box sx={styles.dialogContainer}>
                <Typography variant="h5" sx={styles.title}>Edit Profile Details</Typography>

                <TextField
                    label="Mobile Number"
                    value={profileData.mobileNumber}
                    name="mobileNumber"
                    fullWidth
                    margin="normal"
                    onChange={handleChange}
                    sx={styles.textField}
                    error={Boolean(errors.mobileNumber)}
                    helperText={errors.mobileNumber}
                />
                <TextField
                    label="Full Name"
                    value={profileData.fullName}
                    name="fullName"
                    fullWidth
                    margin="normal"
                    onChange={handleChange}
                    sx={styles.textField}
                    error={Boolean(errors.fullName)}
                    helperText={errors.fullName}
                />
                <TextField
                    label="Email"
                    value={profileData.email}
                    name="email"
                    fullWidth
                    margin="normal"
                    onChange={handleChange}
                    sx={styles.textField}
                    error={Boolean(errors.email)}
                    helperText={errors.email}
                />

                <Typography variant="subtitle1" sx={styles.subTitle}>Gender</Typography>
                <RadioGroup
                    row
                    name="gender"
                    value={profileData.gender}
                    onChange={handleChange}
                    sx={styles.radioGroup}
                >
                    <FormControlLabel value="Male" control={<Radio />} label="Male" />
                    <FormControlLabel value="Female" control={<Radio />} label="Female" />
                </RadioGroup>

                <TextField
                    label="Birthday"
                    type="date"
                    value={profileData.birthday}
                    name="birthday"
                    fullWidth
                    margin="normal"
                    onChange={handleChange}
                    sx={styles.textField}
                    error={Boolean(errors.birthday)}
                    helperText={errors.birthday}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />

                <TextField
                    label="Age"
                    value={profileData.age}
                    name="age"
                    fullWidth
                    margin="normal"
                    onChange={handleChange}
                    sx={styles.textField}
                    error={Boolean(errors.age)}
                    helperText={errors.age}
                    InputProps={{
                        readOnly: true,
                    }}
                />

                <TextField
                    label="Alternate Mobile Number"
                    value={profileData.alternateMobile}
                    name="alternateMobile"
                    fullWidth
                    margin="normal"
                    onChange={handleChange}
                    sx={styles.textField}
                    error={Boolean(errors.alternateMobile)}
                    helperText={errors.alternateMobile}
                />
                <TextField
                    label="Address"
                    value={profileData.address}
                    name="address"
                    fullWidth
                    margin="normal"
                    onChange={handleChange}
                    sx={styles.textField}
                />

                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={handleSave}
                    sx={styles.button}
                >
                    Save Details
                </Button>
            </Box>
        </Dialog>
    );
};

// Custom styles using Material-UI's sx prop
const styles = {
    dialogContainer: {
        padding: '30px',
        width: '450px',
        backgroundColor: '#f7f9fc',
        borderRadius: '8px',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
    },
    title: {
        textAlign: 'center',
        fontWeight: 600,
        marginBottom: '20px',
        color: '#333',
    },
    subTitle: {
        fontWeight: 500,
        color: '#666',
        marginTop: '10px',
    },
    textField: {
        backgroundColor: '#fff',
        borderRadius: '5px',
    },
    radioGroup: {
        marginBottom: '20px',
        justifyContent: 'center',
    },
    button: {
        marginTop: '30px',
        backgroundColor: '#00796b',
        padding: '10px 0',
        '&:hover': {
            backgroundColor: '#004d40',
        },
    },
};

export default ProfileDetailsDialog;




