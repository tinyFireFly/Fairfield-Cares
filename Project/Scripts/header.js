class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <!--Header-->
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
      <header>   
          <!--Navigation-->
              <nav class="navbar navbar-expand-lg navbar-light">
              <div class="container-fluid">
           <!--Logo-->        
                  <a class="navbar-brand" href="#"><h1></h1></a>
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarContent">
                  <ul class="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
                      <li class="nav-item mx-3 my-auto"><a href="index.html">Home</a></li>
                <!--About Drop Down-->
                      <li class="nav-item dropdown mx-3 my-auto">
                          <a class="dropdown-toggle" data-toggle="dropdown" href="aboutUs.html">
                            About Fairfield CARES <span class="caret"></span>
                          </a>
                          <ul class="dropdown-menu dropdown-menu-end text-center" aria-labelledby="navbarDropdown">
                            <li><a href="#">Our Staff</a></li>
                            <li><a href="mission.html">Our Mission</a></li>
                            <li><a href="history.html">History</a></li>
                            <li><a href="meetings.html">Meeting Schedule</a></li>
                          </ul>
                        </li>
            <!--What We Do Drop Down-->
                      <li class="nav-item dropdown mx-3 my-auto">
                          <a class="dropdown-toggle" data-toggle="dropdown" href ="#"> 
                              What We Do <span class="caret"></span>
                          </a>
                          <ul class="dropdown-menu dropdown-menu-end text-center" aria-labelledby="navbarDropdown">
              <!--Underage Drinking-->
                                  <li>
                                  <div class="btn-group dropend">
                                    <a type="button" class="btn dropdown-toggle dropend" data-bs-toggle="dropdown" aria-expanded="false">
                                        Underage Drinking Prevention <span class="caret"></span>
                                      </a>
                                    <ul class="dropdown-submenu dropdown-menu-end text-center" aria-labelledby="navbarDropdown">
                                        <div class = "dropdown-menu">
                                          <li><a href="alcoholPrograms.html">Prevention Programs</a></li>
                                          <li><a href="alcoholInformation.html">Prevention Information</a></li>
                                        </div>
                                      </ul>
                                    </div>
                                  </li>
              <!--Marijuana Prevent-->
                                  <li >
                                  <div class="btn-group dropend">
                                  <a type="button" class="btn dropdown-toggle dropend" data-bs-toggle="dropdown" aria-expanded="false">
                                       Cannabis/Marijuana Prevention<span class="caret"></span></a>
                                    <ul class="dropdown-submenu dropdown-menu-end text-center" aria-labelledby="navbarDropdown">
                                        <div class = "dropdown-menu">
                                          <li><a href="marijuanaPrograms.html">Prevention Programs</a></li>
                                          <li><a href="marijuanaInformation.html">Prevention Information</a></li>
                                          </div>
                                      </ul>
                                      <div>
                                  </li>
              <!--Vaping Prevent-->
                                  <li >
                                  <div class="btn-group dropend">
                                  <a type="button" class="btn dropdown-toggle dropend" data-bs-toggle="dropdown" aria-expanded="false">
                                      Vaping/Nicotine Prevention<span class="caret"></span></a>
                                    <ul class="dropdown-submenu dropdown-menu-end text-center" aria-labelledby="navbarDropdown">
                                        <div class = "dropdown-menu">      
                                            <li><a href="vapingPrograms.html">Prevention Programs</a></li>
                                          <li><a href="vapingInformation.html">Prevention Information</a></li>
                                        </div>
                                    </ul>
                                    </div>
                                  </li>
              <!--Opiods Prevent-->
                                  <li>
                                  <div class="btn-group dropend">
                                  <a type="button" class="btn dropdown-toggle dropend" data-bs-toggle="dropdown" aria-expanded="false">
                                      Opioids Prevention<span class="caret"></span></a>
                                      <ul class="dropdown-submenu dropdown-menu-end text-center" aria-labelledby="navbarDropdown">
                                      <div class = "dropdown-menu">    
                                            <li> <a href="opiodsPrograms.html">Prevention Programs</a></li>
                                            <li><a href="opiodsInformation.html">Prevention Information</a></li>
                                        </div>
                                      </ul>
                                      </div>
                                  </li>
              <!--Mental Health-->
                                  <li>
                                  <div class="btn-group dropend">
                                  <a type="button" class="btn dropdown-toggle dropend" data-bs-toggle="dropdown" aria-expanded="false">
                                      Mental Health Wellness<span class="caret"></span></a>
                                        <ul class="dropdown-submenu dropdown-menu-end text-center" aria-labelledby="navbarDropdown">
                                        <div class = "dropdown-menu">  
                                            <li><a href="wellnessPrograms.html">Wellness Programs</a></li>
                                          <li><a href="wellnessInformation.html">Wellness Information</a></li>
                                        </div>
                                      </ul>
                                      </div>
                                  </li>
                <!--Survey Results-->
                                <li>
                                    <a href="parentAndYouthSurvey.html">Parent and Youth Survery Results</a>
                                </li>
                            </ul>
                      </li>
              <!--Colition Meetings Dropdown-->        
                      <li class="nav-item dropdown mx-3 my-auto">
                          <a class="dropdown-toggle" href="coalitionMeetings.html" id="navbarDropdown" role="button" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
                              Coalition Meetings <span class="caret"></span>
                          </a>
                          <ul class="dropdown-menu dropdown-menu-end text-center" aria-labelledby="navbarDropdown">
                              <li><a href="agendas.html">Agendas</a></li>
                              <li><a href="minutes.html">Minutes</a></li>
                          </ul>
                      </li>
              <!--Contact-->
                      <li class="nav-item mx-3 my-auto"><a href="contact.html">Contact Us </a></li>
              <!--Google Translate element-->
                      <li class="nav-item mx-3 my-auto"><div id="google_translate_element"></div></li>
                <!--Social Media-->
                        <!-- Facebook -->
                        <div class = "facebook">
                            <li class="nav-item mx-3 my-auto">
                                <a href="https://www.facebook.com/FairfieldCARES/" class="fa fa-facebook"></a>   
                        </li>
                        </div>
                        
                        <!-- Instagram -->
                        <div class = "instagram">
                        <li class="nav-item mx-3 my-auto">
                                <a href="https://www.instagram.com/fairfield_cares/" class="fa fa-instagram"></a>
                        </li></div>

                                     
                        <!-- Twitter -->
                        <div class = "twitter">
                            <li class="nav-item mx-3 my-auto">
                                <a href="https://twitter.com/FairfieldCARES" class="fa fa-twitter"></a>
                            </li>
                        </div>
                  </ul>
                  </div>
              </div>
              </nav>
          </header>
        `;}
}

customElements.define('header-component', Header);