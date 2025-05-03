import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Redirect = () => {
    const navigate = useNavigate();
    const { sosmed } = useParams();
    useEffect(() => {
        switch(sosmed){
            case 'youtube':
                window.location.href = 'https://www.youtube.com/@DrelezTM';
            break;
            case 'instagram':
                window.location.href = 'https://www.instagram.com/ziids';
            break;
            case 'github':
                window.location.href = 'https://github.com/DrelezTM';
            break;
            case 'email':
                window.location.href = 'mailto:ziids1933@gmail.com';
            break;
            case 'discord':
                window.location.href = 'https://dsc.gg/DrelezTM';
            break;
            default:
                navigate('/');
        }
    });
}

export default Redirect;