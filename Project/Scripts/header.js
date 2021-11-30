class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <!--Header-->
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
                          <a class="dropdown-toggle" data-toggle="dropdown">
                            About Fairfield CARES <span class="caret"></span>
                          </a>
                          <ul class="dropdown-menu dropdown-menu-end text-center" aria-labelledby="navbarDropdown">
                            <li><a href="aboutUs.html">About Us</a></li>
                            <li><a href="#">Our Staff</a></li>
                            <li><a href="#">Our Mission</a></li>
                            <li><a href="#">History</a></li>
                          </ul>
                        </li>
            <!--What We Do Drop Down-->
                      <li class="nav-item dropdown mx-3 my-auto">
                          <a class="dropdown-toggle" data-toggle="dropdown"> 
                              What We Do <span class="caret"></span>
                          </a>
                          <ul class="dropdown-menu dropdown-menu-end text-center" aria-labelledby="navbarDropdown">
              <!--Underage Drinking-->
                                  <li class="dropdown-submenu">
                                      <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                                          Underage Drinking Prevention <span class="caret"></span>
                                      </a>
                                    <ul class="dropdown-menu dropdown-menu-end text-center" aria-labelledby="navbarDropdown">
                                          <li><a href="alcoholPrograms.html">Prevention Programs</a></li>
                                          <li><a href="alcoholInformation.html">Prevention Information</a></li>
                                      </ul>
                                  </li>
              <!--Marijuana Prevent-->
                                  <li class="dropdown-submenu">
                                      <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                                          Cannabis/Marijuana Prevention<span class="caret"></span></a>
                                    <ul class="dropdown-menu dropdown-menu-end text-center" aria-labelledby="navbarDropdown">
                                          <li><a href="marijuanaPrograms.html">Prevention Programs</a></li>
                                          <li><a href="marijuanaInformation.html">Prevention Information</a></li>
                                      </ul>
                                  </li>
              <!--Vaping Prevent-->
                                  <li class="dropdown-submenu">
                                      <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                                          Vaping/Nicotine Prevention<span class="caret"></span></a>
                                    <ul class="dropdown-menu dropdown-menu-end text-center" aria-labelledby="navbarDropdown">
                                          <li><a href="vapingPrograms.html">Prevention Programs</a></li>
                                          <li><a href="vapingInformation.html">Prevention Information</a></li>
                                      </ul>
                                  </li>
              <!--Opiods Prevent-->
                                  <li class="dropdown-submenu">
                                      <a class="dropdown-toggle" data-toggle="dropdown" href="#"> 
                                          Opioids Prevention<span class="caret"></span></a>
                                      <ul class="dropdown-menu dropdown-menu-end text-center" aria-labelledby="navbarDropdown">
                                          <li> <a href="opiodsPrograms.html">Prevention Programs</a></li>
                                          <li><a href="opiodsInformation.html">Prevention Information</a></li>
                                      </ul>
                                  </li>
              <!--Mental Health-->
                                  <li class="dropdown-submenu">
                                      <a class="dropdown-toggle" data-toggle="dropdown" href="#"> 
                                          Mental Health Wellness<span class="caret"></span></a>
                                        <ul class="dropdown-menu dropdown-menu-end text-center" aria-labelledby="navbarDropdown">
                                          <li><a href="wellnessPrograms.html">Wellness Programs</a></li>
                                          <li><a href="wellnessInformation.html">Wellness Information</a></li>
                                      </ul>
                                  </li>
                              </ul>
                      </li>
              <!--Colition Meetings Dropdown-->        
                      <li class="nav-item dropdown mx-3 my-auto">
                          <a class="dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
                              Coalition Meetings <span class="caret"></span>
                          </a> 
                          <ul class="dropdown-menu dropdown-menu-end text-center" aria-labelledby="navbarDropdown">
                              <li><a href="agendas.html">Agendas</a></li>
                              <li><a href="minutes.html">Minutes</a></li>
                          </ul>
                      </li>
              <!--Resources Drop Down-->    
                       <li class="nav-item dropdown mx-3 my-auto">
                          <a class="dropdown-toggle" data-toggle="dropdown">
                            Helpful Resources <span class="caret"></span>
                          </a>
                          <ul class="dropdown-menu dropdown-menu-end text-center" aria-labelledby="navbarDropdown">
                            <li><a href="#">Meeting Schedule</a></li>
                            <li><a href="#">Educational Videos</a></li>
                            <li><a href="#">Parent and Youth Survery Results</a></li>
                          </ul>
                       </li>
              <!--Contact-->
                      <li class="nav-item mx-3 my-auto"><a href="contact.html">Contact Us </a></li>
              <!--Google Translate element-->
                      <li class="nav-item mx-3 my-auto"><div id="google_translate_element"></div></li>
                  </ul>
                  </div>
              </div>
              </nav>
          </header>
        `;}
}

customElements.define('header-component', Header);