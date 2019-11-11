<template>
  <div class="home">
    <!-- ===================== Welcome Area Start ===================== -->
    <section class="welcome_area clearfix" id="home">
        <div class="welcome_slides">
            <!-- Single Slide -->
            <div class="single_slide text-center" style="background-image: url(https://images.unsplash.com/photo-1519452575417-564c1401ecc0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80);">
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

    <!-- ===================== Blog Area Start ===================== -->
    <section class="blog_area section_padding_100_70">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <!-- Section Heading Area Start -->
                    <div class="section_heading">
                        <h2>Latest Articles</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis amet mollitia voluptatibus dolor officiis ad.</p>
                    </div>
                </div>
            </div>
            <div class="row">

                <!-- single latest news area start -->
                <div class="col-lg-4 col-12 col-md-6">
                    <div class="single_latest_news_area">
                        <!-- single latest news thumb -->
                        <div class="single_latest_news_img_area">
                            <img src="img/news-img/blog.jpg" alt="">
                            <!-- single latest news published date -->
                            <div class="published_date">
                                <p class="date">01</p>
                                <p class="month">Aug</p>
                            </div>
                        </div>
                        <div class="single_latest_news_text_area">
                            <!-- single latest news title -->
                            <div class="news_title">
                                <a href="#">Improve Your Computer Skills, Sign Up For Free Online Courses</a>
                            </div>
                            <!-- single latest news excerp -->
                            <div class="news_content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui ducimus consectetur assumenda, ullam dolor provident?</p>
                                <a href="#" class="btn blog-btn">Read More <i class="fa fa-angle-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- single latest news area start -->
                <div class="col-lg-4 col-12 col-md-6">
                    <div class="single_latest_news_area">
                        <!-- single latest news thumb -->
                        <div class="single_latest_news_img_area">
                            <img src="img/news-img/blog-2.jpg" alt="">
                            <!-- single latest news published date -->
                            <div class="published_date">
                                <p class="date">22</p>
                                <p class="month">Dec</p>
                            </div>
                        </div>
                        <div class="single_latest_news_text_area">
                            <!-- single latest news title -->
                            <div class="news_title">
                                <a href="#">Education is not preparation for life; education is life itself</a>
                            </div>
                            <!-- single latest news excerp -->
                            <div class="news_content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui ducimus consectetur assumenda, ullam dolor provident?</p>
                                <a href="#" class="btn blog-btn">Read More <i class="fa fa-angle-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- single latest news area start -->
                <div class="col-lg-4 col-12 col-md-6">
                    <div class="single_latest_news_area">
                        <!-- single latest news thumb -->
                        <div class="single_latest_news_img_area">
                            <img src="img/news-img/blog-3.jpg" alt="">
                            <!-- single latest news published date -->
                            <div class="published_date">
                                <p class="date">13</p>
                                <p class="month">Feb</p>
                            </div>
                        </div>
                        <div class="single_latest_news_text_area">
                            <!-- single latest news title -->
                            <div class="news_title">
                                <a href="#">Education is the key to unlock the golden door of freedom</a>
                            </div>
                            <!-- single latest news excerp -->
                            <div class="news_content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui ducimus consectetur assumenda, ullam dolor provident?</p>
                                <a href="#" class="btn blog-btn">Read More <i class="fa fa-angle-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
    <!-- ===================== Blog Area End ===================== -->




    
    <!-- <h1>{{ message }}</h1> -->


  </div>
</template>

<style>
</style>

<script>


export default {
  data: function() {
    return {
      // message: "Welcome to Buoy!"
    };
  },
  created: function() {
    // axios.get("/api/help_requests").then(response => {
    //    this.help_requests = response.data;
    //  });
     
  },
  methods: {}
};
</script>