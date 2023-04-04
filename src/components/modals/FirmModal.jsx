import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { modalStyle } from '../../styles/globalStyle';
import { TextField } from '@mui/material';
import { useState } from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function FirmModal({open,handleClose}) {
    const [info, setInfo] = useState({
        name:"",
        phone:"",
        address:"",
        image:"",
    })
 const handleChange=(e)=>{
    const { name, value } = e.target
    setInfo({ ...info, [name]: value })
 }

  return (
    <div>
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
             <TextField
               label="Firm Name"
               name="name"
               id="name"
               type="text"
               required
               variant="outlined"
               value={info?.name}
               onChange={handleChange}
            />  
             <TextField
               label="Phone"
               name="phone"
               id="phone"
               type="tel"
               required
               variant="outlined"
               value={info?.phone}
               onChange={handleChange}
            />  
             <TextField
               label="Address"
               name="address"
               id="address"
               type="text"
               required
               variant="outlined"
               value={info?.address}
               onChange={handleChange}
            />  
             <TextField
               label="Image"
               name="image"
               id="image"
               type="url"
               required
               variant="outlined"
               value={info?.image}
               onChange={handleChange}
            />  

               <Button type="submit" variant="contained">
              Submit Firm
            </Button>

             </Box>
        </Box>
      </Modal>
    </div>
  );
}