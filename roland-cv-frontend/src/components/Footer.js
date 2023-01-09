import mail from '../images/mail.svg'
import phone from '../images/phone.svg'
import loc from '../images/location-marker.svg'
import { FooterItem } from './FooterItem'


export const Footer = ({
    email,
    address,
    phoneNumber }
    ) => {
    function prepMail(email){
        document.location = "mailto:" + email;
    }

    return (
        <> 
            <div className="flex bg-grey">                
                <div className="flex m-32 mt-14 w-full text-whit justify-center" id="idx-6"> 
                    <div className="cursor-pointer">
                        <FooterItem image={mail}  desc={email} onClick={() => prepMail({email})}/>
                    </div>
                    <FooterItem image={phone} desc={phoneNumber}/>
                    <a className="contents" href={`https://www.google.be/maps/place/${address}`} target="_blank" rel="noreferrer"><FooterItem image={loc} desc={address}></FooterItem></a>
                </div>
            </div>  
        </> 
    )


}