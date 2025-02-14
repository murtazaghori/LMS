import React, { useEffect, useState } from 'react'
import { Button, Paper, TextField, Typography, FormControl, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import { useNavigate } from 'react-router-dom';
 
 

const TeacherRegistration = () => {

  const [firstname,setfirstname]=useState();
  const [lastname,setlastname]=useState();
  const [email,setemail]=useState();
const navigate =useNavigate()







 const addData = async () =>{
  let userObj ={
      firstname,
      lastname,
      email
  }
try {
 
 const response = await addDoc(collection(db, "TeacherUser"), userObj);
 console.log(response)
 navigate("/dashboard/teacherList")
 
  
} catch (error) {
  console.log(error)
  
}
}

  return (
    <div style={{marginTop:"60px",marginRight:"150px"}}>
          
          <Paper elevation={24} sx={{ width: "40vw", marginX: "auto", padding: 5 }}>
            <Typography variant="h5" sx={{ textAlign: "center" }}>
             TEACHER  Registration  
            </Typography>
            <br />
    
          
            <TextField
              label="First name"
              fullWidth
              onChange={(e)=> setfirstname(e.target.value)}
            />
            <br />
            <br />
    
       
            <TextField
              label="Last name"
              fullWidth
              onChange={(e)=> setlastname(e.target.value)}
              />
            <br />
            <br />
     
            <TextField
              label="Enter email"
              fullWidth
              onChange={(e)=> setemail(e.target.value)}
            />
            <br />
            <br />
    
          
            <TextField
              label="Phone number"
              type="number"   
              fullWidth
            />
            <br />
            <br />
    
   
            <FormControl component="fieldset">
              <Typography variant="body1">Gender</Typography>
              <RadioGroup row aria-label="gender" name="gender">
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="female" control={<Radio />} label="Female" />
              </RadioGroup>
            </FormControl>
            <br />
            <br />
     
            <Button
              color="success"
              fullWidth
              variant="contained"
              sx={{ marginBottom: 3 }}
              onClick={addData}
            >
            Submit
            </Button>
    
          </Paper>
         
          
        </div>
        
  )
}

export default TeacherRegistration