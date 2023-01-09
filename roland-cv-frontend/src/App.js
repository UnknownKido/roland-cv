import { Arrow } from "./components/Arrow";
import { DescriptionBox } from "./components/DescriptionBox";
import { ExperienceBox } from "./components/ExperienceBox";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";


//const ABOUT_ME = "Je suis un développeur de 26 ans qui est à la recherche d’un emplois. De nature calme et curieuse je m'entends facilement avec les gens. D'un autre coté j'ai tendance à manquer de constance dans le travail avec des jours très productives et d'autres moins point sur lequel je suis entrain de travailler. Désireux d'en apprendre plus je suis à la recherche d'un emplois en tant que full stack développeur de préférence (je reste ouvert à toute proposition) suite aux 3 années passé à travailler en tant que dev pour un partenaire Odoo.";
const ABOUT_ME_ENG = "I'm a 26 year old developer who is looking currently for a job. I'm calm and curious by nature thus I tend to get along easily with people. On the other hand I tend to be inconsistent in my work with some days very productive and others less so partly due to the fact that, at my first job after school, I started working on a project by myself. Eager to learn more I am looking for a job as a full stack developer preferably (I remain open to any proposal) following 3 years working as a developer for an Odoo partner."

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
        </div>
        <div className="mt-12">
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
            job_title="Université Libre de Bruxelles — Bachelor of Computer Science and Bachelor of Economics (no follow-up)"
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
