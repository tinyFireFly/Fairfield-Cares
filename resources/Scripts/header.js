class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <header>  
        <!--Navigation-->
            <nav class="navbar navbar-expand-lg navbar-light">
              <div class="container-fluid">
              <div class = "logo">
                <img src="resources/images/logo.png">
              </div>
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
  
                          <li><a href="mission.html">Our Mission</a></li>
                          <li><a href="history.html">History</a></li>
                          <li><a href="currentWork.html">Current Work</a></li>
                          <li><a href="meetings.html">Meeting Schedule</a></li>
                        </ul>
                      </li>
          <!--What We Do Drop Down-->
                    <li class="nav-item dropdown mx-3 my-auto">
                        <a class="dropdown-toggle" id="navbarDropdown" role="button" data-bs-display="static" aria-expanded="false" >What We Do <span class="caret"></span>
                        </a>
                        <ul class="dropdown-menu dropdown-menu-end text-start" aria-labelledby="navbarDropdown">
                                <li>
                                <div class="btn-group dropend">
                                  <a type="button" class="btn dropdown-toggle" href="underageDrinkingPrevention.html">Underage Drinking Prevention<span class="caret"></span></a>
                                    <ul class="dropdown-submenu" aria-labelledby="navbarDropdown">
                                      <div class = "dropdown-menu">
                                        <li><a href="alcoholPreventionPrograms.html">Prevention Programs</a></li>
                                        <li><a href="alcoholPreventionInformation.html">Prevention Information</a></li>
                                      </div>
                                    </ul>
                                  </div>
                                </li>
            <!--Marijuana Prevent-->
                                <li >
                                <div class="btn-group dropend">
                                  <a type="button" class="btn dropdown-toggle dropend"  aria-expanded="false" href="CannabisPrevention.html">Cannabis Prevention<span class="caret"></span></a>
                                      <ul class="dropdown-submenu dropdown-menu-end text-center" aria-labelledby="navbarDropdown">
                                          <div class = "dropdown-menu">
                                          <li><a href="cannabisPreventionPrograms.html">Prevention Programs</a></li>
                                          <li><a href="cannabisPreventionInformation.html">Prevention Information</a></li>
                                          </div>
                                      </ul>
                                  <div>
                                </li>
            <!--Vaping Prevent-->
                                <li >
                                  <div class="btn-group dropend">
                                      <a type="button" class="btn dropdown-toggle dropend"  aria-expanded="false">Vaping/Nicotine Prevention<span class="caret"></span></a>
                                      <ul class="dropdown-submenu dropdown-menu-end text-center" aria-labelledby="navbarDropdown">
                                          <div class = "dropdown-menu">      
                                              <li><a href="vapingPreventionPrograms.html">Prevention Programs</a></li>
                                              <li><a href="vapingPreventionInformation.html">Prevention Information</a></li>
                                          </div>
                                      </ul>
                                  </div>
                                </li>
            <!--Opiods Prevent-->
                                <li>
                                  <div class="btn-group dropend">
                                      <a style="padding-right: 70px;" type="button" class="btn dropdown-toggle dropend" aria-expanded="false" href="opioidPrevention.html">Opioids Prevention<span class="caret"></span></a>
                                      <ul class="dropdown-submenu dropdown-menu-end text-center" aria-labelledby="navbarDropdown">
                                          <div class = "dropdown-menu">    
                                              <li> <a href="opioidPreventionProgram.html">Prevention Programs</a></li>
                                              <li><a href="opioidPreventionInfo.html">Prevention Information</a></li>
                                          </div>
                                      </ul>
                                  </div>
                                </li>
            <!--Mental Health-->
                                <li>
                                  <div class="btn-group dropend">
                                  <a style="padding-right: 40px;" type="button" class="btn dropdown-toggle dropend" aria-expanded="false">Mental Health Wellness<span class="caret"></span></a>
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
                                  <div class="btn-group dropend">
                                      <a href="parentAndYouthSurvey.html">Parent and Youth Survey Results</a>
                                  </div>
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
                      
                          <li class="nav-item mx-3 my-auto">
                              <a href="https://www.facebook.com/FairfieldCARES/" class="fa fa-facebook"></a>   
                      </li>
                      
                      
                      <!-- Instagram -->
                      
                      <li class="nav-item mx-3 my-auto">
                              <a href="https://www.instagram.com/fairfield_cares/" class="fa fa-instagram"></a>
                      </li>

                                   
                      <!-- Twitter -->
                      
                          <li class="nav-item mx-3 my-auto">
                              <a href="https://twitter.com/FairfieldCARES" class="fa fa-twitter"></a>
                          </li>  
                </ul>
                </div>
            </div>
            </nav>
      </header>
        `;}
}

customElements.define('header-component', Header);