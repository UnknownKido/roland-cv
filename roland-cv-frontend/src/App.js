import { Arrow } from "./components/Arrow";
import { DescriptionBox } from "./components/DescriptionBox";
import { ExperienceBox } from "./components/ExperienceBox";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";


//const ABOUT_ME = "Je m'appelle Bura Roland j'ai 27 ans je suis un informaticien a la recherche d'un emplois. Après avoir travaillé dans le domaine de l'informatique durant environ 3 ans en tant que développeur Odoo je cherche à me diversifier et souhaite travailler en tant que développeur web (je reste ouvert à toute autre proposition). Véritable couteau suisse, je m'adapte rapidement aux nouveaux environnements et aucune tache ne me fait peur.";
const ABOUT_ME_ENG = "My name is Bura Roland I am 27 years old and I am a computer scientist looking for a job. After working in the field of computer science for about 3 years as an Odoo developer I am looking to diversify and work as a web developer (I remain open to any other proposal). I am a real Swiss Army knife, I can adapt quickly to new environments and no task scares me.";

function App() {
  return(
    <>
      <div className="text-xl">
        <Header> </Header>
      </div>
  
      <div className="sch grid min-w-min w-full" id="idx-1">
        <div className="mx-72 m-12">
          <div className="w-1/2 flex-col">
            <div className="absolute bg-maxblue h-2 w-44 -z-10 mt-5 ml-8 opacity-50"></div>
            <div className="absolute bg-maxblue h-2 w-48 -z-10 mt-7 ml-8 opacity-70"></div>
            <h1 className="font-bold text-4xl m-8"> About me</h1>
          </div>
          <DescriptionBox text={ABOUT_ME_ENG}></DescriptionBox>
          <Arrow dark={false} index="idx-2" color="#62B6CB"/>
        </div>
        
        
      </div>

      <div className="sch grid min-w-min w-full bg-grey text-whit" id="idx-2">
        <div className="mx-72 my-12">
          <div className="flex-col">
            <div className="absolute bg-rajah h-2 w-52  mt-7 ml-8 opacity-90"></div>
            <h1 className="font-bold text-4xl m-8 z-0 relative"> Experience</h1>
          </div>
          <ExperienceBox
            job_title="Developer at Niboo Solutions"
            start_d="Septembre 2019"
            end_d="July 2022"
            job_description="Access work around the Odoo Point of Sale module and the integration of hardware such as: payment terminal, scale, printer..."
            skills="Languages used by order of importance: JavaScript, Python, XML, Bash."
          />
          <Arrow dark={true} index="idx-3" color="#FFAD69"/>
        </div>
      </div>

      <div className="sch grid min-w-min w-full" id="idx-3">
        <div className="mx-72 m-12">
          <div className="w-1/2 flex-col">
            <div className="absolute bg-violet h-2 w-48 -z-10 mt-5 ml-8 opacity-50"></div>
            <div className="absolute bg-violet h-2 w-52 -z-10 mt-7 ml-8 opacity-70"></div>
            <h1 className="font-bold text-4xl m-8"> Formation </h1>
          </div>
          <ExperienceBox
            job_title="Institut Paul Lambin — Bachelor's degree in Business Informatics"
            start_d="September 2015"
            end_d="September 2019"
          />
          <ExperienceBox
            job_title="Université Libre de Bruxelles — Bachelor of Architecture and Bachelor of Economics (no follow-up)"
            start_d="September 2014"
            end_d="June 2015"
          />
          <Arrow dark={false} index="idx-4" color="#8F3985"/>
        </div>
      </div>

      <div className="sch grid min-w-min w-full bg-grey text-whit" id="idx-4">
        <div className="mx-72 m-12">  
            <div className="flex-col">
              <div className="absolute bg-oruby3 h-2 w-52 mt-7 ml-8 opacity-90"/>
              <h1 className="font-bold text-4xl m-8 z-0 relative"> Skill Set</h1>
            </div>
            <div className="flex">
              <div className="w-1/3">
                <ExperienceBox
                  job_title="&#183; HTML / CSS"
                />
                <ExperienceBox
                  job_title="&#183; PHP"
                />
                <ExperienceBox
                  job_title="&#183; SQL"
                />
                <ExperienceBox
                  job_title="&#183; JAVA"
                />
                <ExperienceBox
                  job_title="&#183; BASH"
                />
                <ExperienceBox
                  job_title="&#183; C"
                />
              </div>
              <div className="w-1/3">   
                <ExperienceBox
                  job_title="&#183; XML"
                />
                <ExperienceBox
                  job_title="&#183; .NET"
                />
                <ExperienceBox
                  job_title="&#183; NodeJs"
                />
                <ExperienceBox
                  job_title="&#183; Python"
                />
                <ExperienceBox
                  job_title="&#183; Unity"
                />
                <ExperienceBox
                  job_title="&#183; UML"
                />
                <ExperienceBox
                  job_title="&#183; ReactJs"
                />
              </div>
              <div className="w-1/3"> 
                <ExperienceBox
                  job_title="&#183; AngularJs"
                />
                <ExperienceBox
                  job_title="&#183; NodeJs"
                />
                <ExperienceBox
                  job_title="&#183; XPath"
                />
                <ExperienceBox
                  job_title="&#183; Android (Java under Android Studio)"
                />
                <ExperienceBox
                  job_title="&#183; JavaScript"
                />
                <ExperienceBox
                  job_title="&#183; MongoDB"
                />
              </div>
            </div>
          <Arrow dark={true} index="idx-5" color="#FF6A6A"/>
        </div>  
      </div>
      
      <div className="sch grid min-w-min w-full" id="idx-5">
        <div className="mx-72 m-12">
          <div className="w-1/2 flex-col">
            <div className="absolute bg-brown7 h-2 w-48 -z-10 mt-5 ml-8 opacity-50"></div>
            <div className="absolute bg-brown7 h-2 w-52 -z-10 mt-7 ml-8 opacity-70"></div>
            <h1 className="font-bold text-4xl m-8"> Languages </h1>
          </div>
          <ExperienceBox
            job_title=" -- French -- "
            job_description="Native language"
          />
          <ExperienceBox
            job_title=" -- Romanian -- "
            job_description="Native language"
          />
          <ExperienceBox
            job_title=" -- English -- "
            job_description="Basics and technical english"
          />
          <Arrow dark={false} index="idx-6" color="#FF6A6A"/>
        </div>      
      </div>
      
      <Footer email="roland.business@outlook.com" phoneNumber="+324 86 87 97 44" address="Affligem, Belgium"/>
    </>
  )
}

export default App;
