import React, { useState } from 'react';
import { useInput } from 'react-admin';

const ImageUploadInput = ({ source } : {source : any}) => {
  const {
    id,
    field,
    fieldState,
  } = useInput({ source });
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(field.value);

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    setFile(file);

    if (file) {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', 'ohgycnx5');

      try {
        const response = await fetch(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/upload`, {
          method: 'POST',
          body: formData,
        });
        console.log(response);
        
        const data = await response.json();
        const imageUrl = data.secure_url;
        field.onChange(imageUrl);
        setPreview(imageUrl);
      } catch (error) {
        console.error('Error uploading the image', error);
      }
    }
  };

  return (
    <div>
      <input type="file" onChange={handleChange} />
      {preview && <img src={preview} alt="Preview" style={{ maxHeight: 100 }} />}
      {fieldState.isTouched && fieldState.error && <span>{fieldState.error.message}</span>}
    </div>
  );
};

export default ImageUploadInput;