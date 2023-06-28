import React, { useEffect, useState } from 'react'
import img from "../Images/home.svg"
import stop from "../Images/finalScroll.png"
import sagar from "../Images/sagar.png"
import sagarcv from '../Images/Sagar -CV.pdf'
export const Home = () => {

  const [topbutton, settopbutton] = useState(false);
  const [skills] = useState([
    "html5", "css3",
    "bootstrap", "Telwind Css", "JavaScript",
    "JQuery", "ReactJs",
    "NodeJs", "ExpressJs",
    "C#", "MVC",
    "MY-SQl", "MSSQL", "Photoshop"
  ]);

  const [projects] = useState({
    projecdetails1:[{
    projectNO: "1",
    project_scren: sagar,
    project_Name: "Build a Inventory Management System Web Application",
    project_Desc: "This Project is about the Inverntory Management System. While developing I have  created attractive and user friendly User Interface.Also created mutiple Rest APIs which will help to run this project on any platform ,Logical creation of tables in database keeping in consideration data integrity ensure that data is complete and correct.so one who will use this Application can rely without any worries because this app will give you desired output related to Inventory Management."
  }],
  use_skills1: ["html5", "css3",
                    "bootstrap",
                    "ReactJs",
                   "NodeJs", "ExpressJs",
                   "MY-SQl","Git"]
  })
  const [projects2] = useState({
    projecdetails2:[{
    projectNO: "2",
    project_scren: img,
    project_Name: "Build a Transport Management System Web Application",
    project_Desc: "This Project is about the Transport Management System. While developing I have  created attractive and user friendly User Interface.Also created mutiple Rest APIs which will help to run this project on any platform ,Logical creation of tables in database keeping in consideration data integrity ensure that data is complete and correct.so one who will use this Application can rely without any worries because this app will give you desired output related to Transport Management."
  }],
  use_skills2: ["html5", "css3",
                    "Material UI",
                    "ReactJs",
                   "NodeJs", "ExpressJs",
                   "MY-SQl"]
  })


  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        settopbutton(true);
      }
      else {
        settopbutton(false);
      }
    })
  }, [])

  const scrollUp = () => {
    window.scrollTo({
      top: 0, behavior: "smooth"
    })
  }

  return (
    <>
      {
        topbutton && (<button onClick={() => scrollUp()}>
          <img src={stop} className='fadeinout' alt="" style={{
            bottom: "100px",
            position: "fixed",
            right: "10px",
            height: "50px",
            width: "50px",
            fontSize: "50px",
            zIndex: "2",
            border: "1px solid",
            borderRadius: "50px"
          }} /></button>)
      }
      <div className='container-fluid'>
      <div className='row'>

      <nav className="navbar navbar-expand-sm fixed-top  bg-light" style={{ minWidth: "auto" }}>
        <a className="navbar-brand p-0" href="#sectionHome">Sagar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#colapsid">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="colapsid" >
          <ul className="navbar-nav  ms-auto ">
            <li className=' nav-item '><a href='#sectionHome' className='nav-link'>Home</a></li>
            <li className=" nav-item "><a href='#sectionAbout' className='nav-link'>About</a></li>
            <li className=' nav-item'><a href='#sectionProject' className='nav-link'>Projects</a></li>
            <li className=' nav-item'><a href='#sectionContactUs' className='nav-link'>Contact</a></li>
          </ul>
        </div>
      </nav>

      </div> 
   </div>


      <div className='sections'>
        {/* *************************Home Section******************** */}
        <div className='row'>
          <div id="sectionHome" className='sechome'>
            <div className='container-fluid'>
              <div className='row rp-y'>

                <div className=' col-sm-12 col-md-6'>
                  <div className='homeh1'>
                    <h1 className='fs-1 text-white'>HEY, I'AM SAGAR MASAL</h1>
                    <h5><b className='text-break'>
                      Web Developer
                      {/* hey! My name is Sagar Masal ,I am an Web developer.
                     I have worked in CiitInstitute.Pvt.ltd for more than 6-7 month. During this,
                    i had compleated many MERN Stack projects.
                    Projects in which i use the technologies like Reactjs,MVC,C#,Html5,CSS3,JavaScript,JQuery,bootstrap,MS-SQL,MY-Sql,Express.Js,Node.JS etc. */}
                    </b></h5>

                    <a href={sagarcv} className='btn btn-radius btndownload' download>
                      <i class="fa fa-download" download>
                        &nbsp;&nbsp;&nbsp;Download cv</i>
                    </a>
                  </div>
                </div>

                <div className='col-sm-12 col-md-6 imgdv mx-auto' style={{ width: "320px", marginTop: "25px" }} >
                  <div className="ui-card">
                    <img src={sagar} className='img-fluid rounded-pill  img' alt='' />
                    <div className="imgdesc">
                      <p>
Sagar
                      </p>
                    </div>
                  </div>

                </div>

              </div>

            </div>
          </div>
        </div>
        {/* ******************* About section************************ */}
        <div className='row'>
          <div id="sectionAbout" className='secabout'>
            <div className='container-fluid'>
              <div className='col-md-12 mx-auto '>
                <div className='row mb-5' style={{ marginTop: "100px" }}>
                  <div className='col-12 fs-1 text-white txtabout '>
                    <h1> About Me</h1>

                  </div>
                </div>


              </div>
              <div className='row'>
                <div className='col-sm-12 col-md-6'>
                  {/* <h1 className='col-sm-4  col-md-12 mx-auto' style={{ color: "white" }}><span>Hey!&nbsp;</span>I Am Sagar</h1> */}
                  <div className='row'>
                    <div className='fs-5' style={{ color: "#333131" }}>
                      My name is <b> Sagar</b> and I'm a <b>Web Developer</b> &nbsp;And
                      I'm currently  working as a intern  in <b>CIIT Training Institute Pvt.ltd</b> at India, Pune

                      <h5> When I'm not on the computer, I enjoy, swimming, Travelling.</h5>
                    </div>

                    <div className=' col-sm-4  col-md-12 mx-auto'>
                      <h1>Portfolio Links</h1>
                      <div className='' style={{ color: "#FFB6B6", fontSize: "50px" }}>
                        <a href='https://github.com/sagarmasal2018/SUI'>
                          <i className="fa fa-github-square  socialLinks m-2" ></i></a>
                        <a href='https://www.facebook.com/SaiVishv99/'>
                          <i className="fa fa-facebook-square socialLinks m-2"></i></a>
                        <a href='https://www.linkedin.com/in/sagar-masal-9b16b9160'>
                          <i className="fa fa-linkedin-square socialLinks m-2"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-sm-6 col-md-6 mx-auto'>
                  <div className='row'>
                    {/* <div className='col-sm-4'></div> */}
                    {/* <div className='col-sm-8 col-md-6 mt-sm-5 p-0'> */}
                    {/* <img src={img} className='img-fluid p-0' alt='' /> */}
                    {/* </div> */}

                    <div className="skills">
                      <div className=' text-center text-white fs-2 '><b className='txtskill'>My Skills</b></div>
                      <div className="col-md-12 ss">
                        {
                          skills && skills.map((d, k) => (
                            <div key={k} class="badge text-dark m-2 p-3">{d.toUpperCase()}</div>

                          ))
                        }


                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ******************* Project  section************************ */}
        <div className='row'>
          <div id="sectionProject" className='secproject'>

            <div className='container-fluid'>
              <div className='row rp-y'>

              <div className="col-md-6 mt-5 mx-auto">
                  <div className='projectdetails' >
                    {
                      projects.projecdetails1.map((d, k) => (
                        <>
                          <div className='projectheading' key={k}>
                            <h2>Project No:-{d.projectNO}</h2>
                          </div>
                          <div className='row' key={k+2}>
                            <div className=' col-sm-6 col-md-4'>
                              <img src={d.project_scren} className='img-fluid' alt='project' />
                            </div>
                            <div className=' col-sm-6 col-md-8  '>

                              <h3>{d.project_Name}</h3>
                              <p> {d.project_Desc} </p>
                              <div className="ss">
                              {
                               projects.use_skills1.map((d,k)=>(

                               <div key={k} class="badge text-dark m-2 p-3">{d.toUpperCase()}</div>
                               ))
                              }
                              </div>

                            </div>
                          </div>

                        </>
                      ))
                    }

                  </div >

                </div>

                <div className="col-md-6 mt-5 mx-auto">
                  <div className='projectdetails' >
                    {
                      projects2.projecdetails2.map((d, k) => (
                        <>
                          <div className='projectheading' key={k}>
                            <h2>Project No:-{d.projectNO}</h2>
                          </div>
                          <div className='row' key={k+1}>
                            <div className=' col-sm-6 col-md-4'>
                              <img src={d.project_scren} className='img-fluid' alt='project' />
                            </div>
                            <div className=' col-sm-6 col-md-8  '>

                              <h3>{d.project_Name}</h3>
                              <p> {d.project_Desc} </p>
                              <div className="ss">
                              {
                               projects2.use_skills2.map((d,k)=>(

                               <div key={k} class="badge text-dark m-2 p-3">{d.toUpperCase()}</div>
                               ))
                              }
                              </div>

                            </div>
                          </div>

                        </>
                      ))
                    }

                  </div >

                </div>

              </div>
            </div>
          </div>
        </div>



        {/* ************************ Contact Us******************************** */}

        <div className='row'>
          <div id="sectionContactUs" className='seccontact'>

            <div className='container-fluid'>
              <div className='row rp-y'>

             <div>
              <p> <h3>Address:Pune &nbsp;&nbsp;&nbsp;&nbsp;  Mobile No:- 7387523318&nbsp;&nbsp;&nbsp;&nbsp;
             
              Email:-sagarmasal2018@gmail.com
              </h3>
              </p>
             </div>

              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}
