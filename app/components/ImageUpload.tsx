import { useState } from 'react';

function ImageUpload() {
    const [file, setFile] = useState<File | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setFile(event.target.files[0]);
        }
    };

    const handleImageUpload = async () => {
        if (!file) return;

        const formData = new FormData();
        formData.append('file', file);

        const response = await fetch('/api/upload', {
            method: 'POST',
            body: formData,
        });

        const data = await response.json();
        console.log('Uploaded image URL:', data.url);
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleImageUpload}>Upload Image</button>
        </div>
    );
}

export default ImageUpload;
