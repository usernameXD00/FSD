import { useEffect, useState } from "react";
import './styles.css';

export default function ImageSlider({ json }) {

    const [images, setImages] = useState([]);
    const [currentSlide, setcurrentSlide] = useState(0);
    const [errorMsg, setErrorMsg] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setcurrentSlide((prevSlide) => (prevSlide + 1) % (images.length));
        }, 2000);
        return () => clearInterval(intervalId);
    }, [currentSlide]);

    async function fetchImages(getData) {
        try {
            setLoading(true)

            if (getData) {
                setLoading(false)
                setImages([...getData]);
                setcurrentSlide(images.length - 1);
            }
        } catch (e) {
            setLoading(false)
            setErrorMsg(e.message)
        }
    }

    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        if (json !== null)
            fetchImages(json);

    }, [json]);

    // console.log(images);

    if (loading) {
        return <div>Loading!!! Please Wait...</div>
    }

    if (errorMsg) {
        return <div>Error Occurred!!! {errorMsg}</div>
    }

    return  <div className="container h-[90%] !w-[45%] lg:!w-[20%] flex-1 transition-all duration-100 active:scale-125 focus:scale-125 hover:scale-125">
                {images && images.length ? images.map((imageItem, index) => {
                    return <img
                        key={index}
                        alt={imageItem}
                        src={imageItem}
                        className={currentSlide === index ? "current-image" : "current-image hide-current-image "}
                    />
                }) : null}
                
            </div>
} 