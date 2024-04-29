'use client'
import React, { useState, ChangeEvent } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

const FileUploadModal: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState<File | null>(null);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (file) {
      // Aquí puedes manejar la carga del archivo
      console.log('Archivo cargado:', file);
    }
    handleClose();
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Abrir Modal
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-lg">
          <h2 id="modal-title" className="mb-4">Cargar Archivo</h2>
          <TextField
            type="file"
            onChange={handleFileChange}
            variant="outlined"
            fullWidth
            margin="normal"
            className="mb-4"
          />
          <Button variant="contained" color="primary" onClick={handleUpload} className="mr-4">
            Subir
          </Button>
          <Button variant="contained" color="error" onClick={handleClose}>
            Cancelar
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default FileUploadModal;
