import { HeaderNav } from "./HeaderNav";
import { HeaderName } from "./HeaderName";
import { scrollHandler } from '../utils/ScrollHandler'

export const Header = () => {
    return (
        <> 
            <div className="flex bg-grey text-whit w-full min-w-min">

                <HeaderName fullName="Roland Bura"/>

                <div className="flex mx-6"> 
                    <HeaderNav color="#62B6CB" desc="About me" onClick = {() => scrollHandler("idx-1")}/>
                    <HeaderNav color="#FFAD69" desc="Experience" onClick = {() => scrollHandler("idx-2")} />
                    <HeaderNav color="#8F3985" desc="Formation"onClick = {() => scrollHandler("idx-3")} />
                    <HeaderNav color="#FF6A6A" desc="Skill set"onClick = {() => scrollHandler("idx-4")}/>
                    <HeaderNav color="#734222" desc="Languages"onClick = {() => scrollHandler("idx-5")}/>
                </div>
            </div>
        </> 
    );
}