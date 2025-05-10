import React, { useState, useRef } from "react";
import Text from "../components/text";
import { useSearchParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import * as htmlToImage from 'html-to-image';

const EditPage = () => {
    const [params] = useSearchParams();
    const [count, setCount] = useState(0)

    const memeRef = useRef();

    const addText = () => {
        setCount(count + 1);
    }

    const handleExport = () => {
        if (memeRef.current) {
            htmlToImage.toPng(memeRef.current)
                .then((dataUrl) => {
                    const link = document.createElement('a');
                    link.download = 'meme.png';
                    link.href = dataUrl;
                    link.click();
                })
                .catch((error) => {
                    console.error('Error generating image:', error);
                });
        }
    }

    return (
        <div>
            <div ref={memeRef} className="meme mt-5 mb-5" style={{width : "600px",border : "1px solid"}}>
                <img src={params.get("url")} width="300px" />
                {
                    Array(count).fill(0).map((_, index) => (<Text key={index} />))
                }
            </div>

            <Button onClick={addText}>Add Text</Button>
            <Button variant="success" onClick={handleExport}>Save</Button>
        </div>
    )
}

export default EditPage;