<template>
  <div id="app">
 


    <!-- Header Area Start -->
    <header class="header_area">
        <!-- Top Header Area Start -->
        <div class="top_header_area">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-md">
                        <!--  Top Quote Area Start -->
                        <div class="top_quote">
                            <p>Buoy</p>
                        </div>
                    </div>
                    <div class="col-md">
                        <div class="login_language_area d-flex align-items-center float-right">
                            <!-- Language Area Start -->
                            <div class="language_area">
                                <div class="dropdown">
                                    <button aria-expanded="false" aria-haspopup="true" data-toggle="dropdown" id="lag" type="button" class="btn btn-default dropdown-toggle"><i class="fa fa-lock" aria-hidden="true"></i> Signup / Login</button>
                                    <ul aria-labelledby="lag" class="dropdown-menu">
                                        <li>
                                          <router-link to="/signup">Signup</router-link>
                                        </li>
                                        <li>
                                          <router-link to="/login">Login</router-link>
                                        </li>
                                        <li>
                                          <router-link to="/logout">Logout</router-link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Main Header Area Start -->
        <div class="main_header_area animated">
            <div class="classy-nav-container breakpoint-off">
                <div class="container">
                    <!-- Classy Menu -->
                    <nav class="classy-navbar justify-content-between" id="educampNav">

                        <!-- Logo -->
                        <router-link class="nav-brand" to="/"><img src="/buoy.png" alt="Logo"></router-link>

                        <!-- Navbar Toggler -->
                        <div class="classy-navbar-toggler">
                            <span class="navbarToggler"><span></span><span></span><span></span></span>
                        </div>

                        <!-- Menu -->
                        <div class="classy-menu">

                            <!-- close btn -->
                            <div class="classycloseIcon">
                                <div class="cross-wrap"><span class="top"></span><span class="bottom"></span></div>
                            </div>

                            <!-- Nav Start -->

                            
                            <div class="classynav">
                                <ul>
                                    <!-- <li class="current_page_item">
                                      <router-link to="/">Home</router-link>
                                    </li> -->

                                    <!-- v-if for type -->
                                  <!--   <li>
                                      <router-link to="/students">Student Show</router-link>
                                    </li>
                                    <li>
                                      <router-link to="/participation">Participation Show</router-link>
                                    </li>
                                    <li>
                                      <router-link to="/courses">Courses Index</router-link>
                                    </li> -->
                                   
                                  
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </header>
    <!--  ===================== Header Area End ===================== -->


    <router-view/>



    <!-- ===================== Download App Area Start ===================== -->
    <div class="download_app_area section_padding_100" style="background-image: url(https://images.unsplash.com/photo-1473367961721-680e99e8e882?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2022&q=80);">
        <div class="container">
            <div class="row">
                <div class="col-12 col-md-7 ml-md-auto">
                    <div class="download_app_content">
                        <h2>Access your courses anytime anywhere.</h2>
                        <a href="#"><img src="img/core-img/playstore.png" alt=""></a>
                        <a href="#"><img src="img/core-img/appstore.png" alt=""></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- ===================== Download App Area End ===================== -->

    <!-- ===================== Footer Area Start ===================== -->
    <footer class="footer_area">
        <div class="container">
            <div class="section_padding_100_70">
                <div class="row">
                    <!-- Footer About Area Start -->
                    <div class="col-12 col-md-6 col-lg">
                        <div class="footer_about_us footer-single-part">
                            <div class="title">
                                <h4>About Buoy</h4>
                                <!-- Useful Links Title -->
                                <div class="underline"></div>
                            </div>
                            <p>bu·oy </p> 
                      
                            <p>  an anchored float serving as a navigation mark </p>
                     
                            <div class="footer_social_links">
                                <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                                <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                                <a href="#"><i class="fa fa-skype" aria-hidden="true"></i></a>
                                <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                                <a href="#"><i class="fa fa-youtube" aria-hidden="true"></i></a>
                            </div>
                        </div>
                    </div>
                    <!-- Footer About Area End -->

                    <!-- Contact info Area Start -->
                    <div class="col-12 col-md-6 col-lg">
                        <div class="footer_contact_info footer-single-part">
                            <div class="title">
                                <h4>get in touch</h4>
                                <!-- Useful Links Title -->
                                <div class="underline"></div>
                            </div>
                            <!-- single contact info start -->
                            <div class="footer_single_contact_info">
                                <i class="fa fa-thumb-tack" aria-hidden="true"></i>
                                <p>215 W Ohio St Suite 300 Chicago, IL 60654</p>
                            </div>
                            <!-- single contact info start -->
                            <div class="footer_single_contact_info">
                                <i class="fa fa-phone" aria-hidden="true"></i>
                                <a href="tel:+8801791166123">773 202 5862</a>
                                <!-- <a href="tel:+8801791166123">+88 698 257 14521</a> -->
                            </div>
                            <!-- single contact info start -->
                            <div class="footer_single_contact_info">
                                <i class="fa fa-envelope-o" aria-hidden="true"></i>
                                <a href="mailto:info@buoy.com">info@buoy.com</a>
                                <a href="mailto:care@buoy.com">care@buoy.com</a>
                            </div>
                        </div>
                    </div>
                    <!-- Contact info Area End -->

                    <!-- Useful Links Area Start -->
                    <div class="col-12 col-md-6 col-lg">
                        <div class="important_links footer-single-part">
                            <div class="title">
                                <h4>useful links</h4>
                                <div class="underline"></div>
                            </div>
                            <!-- Links Start -->
                            <div class="links">
                                <a href="#"><i class="fa fa-angle-right" aria-hidden="true"></i> All Our Courses</a>
                                <a href="#"><i class="fa fa-angle-right" aria-hidden="true"></i> Event Calendar</a>
                                <a href="#"><i class="fa fa-angle-right" aria-hidden="true"></i> Customer Support</a>
                                <a href="#"><i class="fa fa-angle-right" aria-hidden="true"></i> Career at Buoy</a>
                                <a href="#"><i class="fa fa-angle-right" aria-hidden="true"></i> Terms &amp; Conditions</a>
                                <a href="#"><i class="fa fa-angle-right" aria-hidden="true"></i> Community Forums</a>
                            </div>
                        </div>
                    </div>

                    <!-- Useful Links Area Start -->
                    <div class="col-12 col-md-6 col-lg">
                        <div class="important_links footer-single-part">
                            <div class="title">
                                <h4>Subscribe Newsletter</h4>
                                <div class="underline"></div>
                            </div>
                            <div class="newsletter_from">
                                <form action="#">
                                    <div class="form-group">
                                        <input type="email" class="form-control" id="email" placeholder="Enter Your E-mail" required>
                                    </div>
                                    <button type="submit" class="btn blog-btn w-100">Submit <i class="fa fa-paper-plane"></i></button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <!-- Bottom Footer Area Start -->
        <div class="footer_bottom_area">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div class="footer_bottom">
                            <p>Made with <i class="fa fa-heart" aria-hidden="true"></i> by <a href="#">Designing World</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    <!-- ===================== Footer Area End ===================== -->

  </div>
</template>

<style>


.download_app_area {

  padding-right: 1260px;
}





</style>

<script>
export default {
  data: function() {
    return {
      userType: ""
    };
  },
  created: function() {
    var typeOfUser = localStorage.getItem("userType");
    if (typeOfUser) {
      this.userType = typeOfUser;
    }
  }
}

  
</script>
