class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <header>
        <!--Logo-->
            <h1></h1>
        <!--Navigation-->
            <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
            <ul class="nav navbar-nav navbar-right">
                <li><a href="index.html">Home</a></li>
                <li><a href="aboutUs.html">About Us</a></li>
        <!--What We Do Drop Down-->
                <li class="dropdown">
                    <a class="dropdown-toggle" data-toggle="dropdown"> 
                        What We Do <span class="caret"></span>
                    </a>
                        <ul class="dropdown-menu">
        <!--Underage Drinking-->
                            <li class="dropdown-submenu">
                                <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                                    Underage Drinking Prevention <span class="caret"></span>
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a href="alcohol.html">Prevention Programs</a></li>
                                    <li><a href="#">Prevention Information</a></li>
                                </ul>
                            </li>
        <!--Marijuana Prevent-->
                            <li class="dropdown-submenu">
                                <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                                    Cannabis/Marijuana Prevention<span class="caret"></span></a>
                                <ul class="dropdown-menu">
                                    <li><a href="#">Prevention Programs</a></li>
                                    <li><a href="#">Prevention Information</a></li>
                                </ul>
                            </li>
        <!--Vaping Prevent-->
                            <li class="dropdown-submenu">
                                <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                                    Vaping/Nicotine Prevention<span class="caret"></span></a>
                                <ul class="dropdown-menu">
                                    <li><a href="#">Prevention Programs</a></li>
                                    <li><a href="#">Prevention Information</a></li>
                                </ul>
                            </li>
        <!--Opiods Prevent-->
                            <li class="dropdown-submenu">
                                <a class="dropdown-toggle" data-toggle="dropdown" href="#"> 
                                    Opioids Prevention<span class="caret"></span></a>
                                <ul class="dropdown-menu">
                                    <li> <a href="#">Prevention Programs</a></li>
                                    <li><a href="#">Prevention Information</a></li>
                                </ul>
                            </li>
        <!--Mental Health-->
                            <li class="dropdown-submenu">
                                <a class="dropdown-toggle" data-toggle="dropdown" href="#"> 
                                    Mental Health Wellness<span class="caret"></span></a>
                                <ul class="dropdown-menu">
                                    <li><a href="#">Wellness Programs</a></li>
                                    <li><a href="#">Wellness Information</a></li>
                                </ul>
                            </li>
                        </ul>
                </li>
        <!--Colition Meetings Dropdown-->        
                <li class="dropdown">
                    <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                        Coalition Meetings <span class="caret"></span>
                    </a> 
                    <ul class="dropdown-menu">
                       <li><a href="#">Agendas</a></li>
                        <li><a href="#">Minutes</a></li>
                    </ul>
                </li>
        <!--Resources-->    
                <li><a href="resources.html">Resources </a></li>
        <!--Donation *link to come-->
                <li><a href="donation.html">Donation </a></li>
        <!--Contact-->
                <li><a href="contact.html">Contact Us </a></li>
        <!--Google Translate element-->
                <li><div id="google_translate_element"></div></li>
            </ul>
            </div>
            </nav>
        </header>
        `;}
}

customElements.define('header-component', Header);