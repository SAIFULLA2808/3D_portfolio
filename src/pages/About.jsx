import { VerticalTimeline, VerticalTimelineElement } from
'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CTA from '../components/CTA';


import { skills, experiences } from '../constants';


const About = () => {
  return (
    <section className="max-container">
    <h1 className="head-text">Hello, I'm <span className="blue-gradient_text font-semibold 
    drop-shadow">Saifulla  </span>
    </h1>
    <div className="mt-5 flex flex-col gap-3 text-slate-500">
      <p>
        Software Engineer based in INDIA, Specializing in technical education
        through hands-on learning and building applications..
      </p>
    </div>
    <div className="py-10 flex flex-col">
    <h3 className="subhead-text">My Skills</h3>
      
      <div className="mt-16 flex flex-wrap gap-12">
        {skills.map((skill) => (
          <div className="block-container w-20 h-20">
          <div className="btn-back rounded-xl"/>
          <div className="btn-front rounded-xl flex justify-center">
          <img
            src={skill.imageUrl}
            alt={skill.name}
            className="w-1/2 h-1/2 object-contain"
            />
          </div>
          </div>
        ))}
      </div>
    </div>

    <div className="py-16">
    <h3 className="subhead-text"> Work experience </h3>
    <div className="mt-5 flex flex-col gap-3 text-slate-500">
      <p> As iam fresher
During my internship at TAP ACADEMY, I gained hands-on experience in software development, working closely with a team of developers to build and optimize web applications. My responsibilities included writing clean, 
efficient code, debugging issues, and collaborating with cross-functional teams. 
I contributed to the development of [TUNEHUB] using technologies like [java,spring,hibernet,sql etc.], which helped improve 
 This internship provided me with practical exposure to version control (Git), agile methodologies, and best coding practices, all of which deepened my understanding of full-stack development.

  </p>
  </div>
     <div className="mt-12 flex">
        <VerticalTimeline>
          {experiences.map((experience) =>(
            <VerticalTimelineElement
            key={experience.company_name}
            date={experience.date}
            icon={<div className="flex justify-center items-center w-full h-full">
              <img 
                src={experience.icon}
                alt={experience.company_name}
                className="w-[60%] h-[60%] object-contain"
              />
            </div>}
            iconStyle={{ background: experience.iconBg}}
            contentStyle={{
              borderBottom: '8px',
              borderStyle: 'solid',
              borderBottomColor: experience.iconBg,
              boxShadow: 'none',
            }}
            
            >
              <div>
                <h3 className="text-black text-xl font-poppins
                font-semibold">
                  {experience.title}
                </h3>
                <p className="text-black-500 font-medium font-base"
                style={{margin:0}}>
                  {experience.company_name}
                </p>
              </div>
              <ul className="my-5 list-disc ml-5 space-y-2">
                {experience.points.map((point, index) =>(
                  <li key={`experience-point-${index}`}
                  className="text-black-500/50 font-normal pl-1 text-sm">
                    {point}
                  </li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
    </div>
  </div>
  <hr className="border-slate-200" />
   <CTA />
    </section>
  )
}

export default About;