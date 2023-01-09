

export const FooterItem = ({image, desc, onClick, link}) => {
    return (
        <div className="mt-16 h-auto mx-4 flex w-1/4 text-light text-center justify-center" onClick={onClick}> 
            
            { image? 
            <img className="m-2 h-6 w-6 invert" src={image} alt=""/>
            : ""
            }
            <div className={desc==="About me" ? "": "my-2" }>{desc}</div>       
        </div>
    )
}