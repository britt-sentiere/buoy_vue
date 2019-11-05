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
                            <p>Welcome to Buoy</p>
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
                        <a class="nav-brand" href="public"><img src="buoy.jpg" alt="Logo"></a>

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
                                    <li class="current_page_item">
                                      <router-link to="/">Home</router-link>
                                    </li>
                                    <li>
                                      <router-link to="/students">Student Show</router-link>
                                    </li>
                                    <li>
                                      <router-link to="/participation">Participation Show</router-link>
                                    </li>
                                    <li>
                                      <router-link to="/courses">Courses Index</router-link>
                                    </li>
                                   
                                  
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

    <!-- ===================== Welcome Area Start ===================== -->
    <section class="welcome_area clearfix" id="home">
        <div class="welcome_slides">
            <!-- Single Slide -->
            <div class="single_slide text-center" style="background-image: url(https://images.unsplash.com/photo-1553585986-d299fb228758?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60);">
                <div class="slide_text">
                    <div class="table">
                        <div class="table_cell">
                            <div class="container">
                                <div class="row">
                                    <div class="col-12">
                                        <h2 data-animation="fadeInUp" data-delay="200ms" data-duration="500ms">Taking the lead for education quality</h2>
                                        <p data-animation="fadeInUp" data-delay="500ms" data-duration="500ms">Education is the most powerful weapon which you can use to change the world.</p>
                                        <!-- <a href="#" class="btn welcome-btn" data-animation="fadeInUp" data-delay="800ms" data-duration="500ms">Start A Course <i class="fa fa-angle-right"></i></a> -->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- ===================== Welcome Area End ===================== -->


    <router-view/>

    <!-- ===================== Awesome Feature Area Start ===================== -->
    <section class="awesome_features_area clearfix">
        <!-- Single Feature Area Start -->
        <div class="single_feature">
            <div class="feature_img">
                <i class="icon-genius" aria-hidden="true"></i>
            </div>
            <div class="feature_text">
                <h5>Effective Courses</h5>
            </div>
        </div>
        <!-- Single Feature Area Start -->
        <div class="single_feature">
            <div class="feature_img">
                <i class="icon-profile-male" aria-hidden="true"></i>
            </div>
            <div class="feature_text">
                <h5>Best Teachers</h5>
            </div>
        </div>
        <!-- Single Feature Area Start -->
        <div class="single_feature">
            <div class="feature_img">
                <i class="icon-compass" aria-hidden="true"></i>
            </div>
            <div class="feature_text">
                <h5>Practical Classes</h5>
            </div>
        </div>
        <!-- Single Feature Area Start -->
        <div class="single_feature">
            <div class="feature_img">
                <i class="icon-gift" aria-hidden="true"></i>
            </div>
            <div class="feature_text">
                <h5>Organised Classroom</h5>
            </div>
        </div>
    </section>
    <!-- ===================== Awesome Feature Area End ===================== -->

    <!-- ===================== Download App Area Start ===================== -->
    <div class="download_app_area section_padding_100" style="background-image: url(https://images.unsplash.com/photo-1550868142-97bfb991bbd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=910&q=80);">
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
                                <h4>About EduCamp</h4>
                                <!-- Useful Links Title -->
                                <div class="underline"></div>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam nostrum, illum quod facilis minima natus adipisci, fugit provident! Totam ipsam, ullam aut. Autem, corporis, tenetur.</p>
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
                                <p>House - 87, Mirpur DOHS, Dhaka, Bangladesh</p>
                            </div>
                            <!-- single contact info start -->
                            <div class="footer_single_contact_info">
                                <i class="fa fa-phone" aria-hidden="true"></i>
                                <a href="tel:+8801791166123">+88 698 257 14520</a>
                                <a href="tel:+8801791166123">+88 698 257 14521</a>
                            </div>
                            <!-- single contact info start -->
                            <div class="footer_single_contact_info">
                                <i class="fa fa-envelope-o" aria-hidden="true"></i>
                                <a href="mailto:info@educamp.com">info@educamp.com</a>
                                <a href="mailto:care@educamp.com">care@educamp.com</a>
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
                                <a href="#"><i class="fa fa-angle-right" aria-hidden="true"></i> Career at EduCamp</a>
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

</style>
