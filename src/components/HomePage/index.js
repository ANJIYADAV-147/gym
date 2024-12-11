import React from 'react'
import Header from '../Header'
import Slider from 'react-slick';

// Import the Slick Carousel CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css'
import aboutImg from '../Images/about-img.jpeg'
import { MdOutlineFitnessCenter } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";
import { IoFitness } from "react-icons/io5";
import AOS from 'aos';
import 'aos/dist/aos.css';


const HomePage = () => {
    React.useEffect(() => {
        AOS.init();  // Initialize AOS
    }, []);

    const settings = {
        dots: true,          // Enable dots for navigation
        infinite: true,      // Infinite looping of slides
        speed: 500,          // Transition speed
        slidesToShow: 1,     // Number of slides to show at once
        slidesToScroll: 1,   // Number of slides to scroll at once
    };


    const renderTeamDesktopView = () => {
        return (
            <div className='render-team-desktop-view'>
                <div class="section-ourteam" id="ourteam">
                    <div class="container ourteam" data-aos="fade-down">
                        <h2 class="title ">Our Team</h2>
                        <div class="team-members ">
                            <div class="team-member" data-aos="fade-up" data-aos-duration="500">
                                <img src="https://images.pexels.com/photos/3490348/pexels-photo-3490348.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Logo" class="member-logo" />
                                <div class="team-memmber-info">
                                    <div class="member-name">Scott</div>
                                    <div class="member-desg">Weight Lifting Coach</div>
                                    <div class="member-desc">Specializes in sculpting strength and muscle with precision</div>
                                </div>
                            </div>
                            <div class="team-member" data-aos="fade-up" data-aos-duration="1000">
                                <img src="https://vfitclub.netlify.app/image/CharlieWatson.jpg" alt="Logo" class="nav-icon" />
                                <div class="team-memmber-info">
                                    <div class="member-name">Joe Stafford</div>
                                    <div class="member-desg">MMA Coach</div>
                                    <div class="member-desc">Hones combat skills and self-defense with expertise</div>
                                </div>
                            </div>
                            <div class="team-member" data-aos="fade-up" data-aos-duration="1500">
                                <img src="https://vfitclub.netlify.app/image/RachelDanielle.jpg" alt="Logo" class="nav-icon" />
                                <div class="team-memmber-info">
                                    <div class="member-name">Parker</div>
                                    <div class="member-desg">Yoga Instructor</div>
                                    <div class="member-desc">Guides you to inner peace and flexibility through mindful yoga practice</div>
                                </div>
                            </div>
                            <div class="team-member" data-aos="fade-up" data-aos-duration="2000">
                                <img src="https://imgcdn.stablediffusionweb.com/2024/5/26/7c87c14a-9112-4dfb-98e6-749143527fbe.jpg" alt="Logo" class="nav-icon" />
                                <div class="team-memmber-info">
                                    <div class="member-name">Roberts</div>
                                    <div class="member-desg">Personal Trainer</div>
                                    <div class="member-desc">Your path to achieving fitness goals, one personalized session at a time</div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const renderTeamMobileView = () => {
        return (
            <div className='render-team-mobile-view'>
                <div>
                    <h1 className='text-white text-3xl'>Our Team</h1>
                    <div className='slider-teams-container'>
                        <Slider {...settings}>
                            <div>
                                <img src="https://via.placeholder.com/800x400?text=Slide+1" alt="Slide 1" />
                            </div>
                            <div>
                                <img src="https://via.placeholder.com/800x400?text=Slide+2" alt="Slide 2" />
                            </div>
                            <div>
                                <img src="https://via.placeholder.com/800x400?text=Slide+3" alt="Slide 3" />
                            </div>
                            <div>
                                <img src="https://via.placeholder.com/800x400?text=Slide+4" alt="Slide 4" />
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        )
    }


    return (
        <div className='Home-container'>
            <Header />
            <div className='Home-page-container flex flex-col justify-center items-center'>
                <h1 className='home-heading text-6xl text-white text-center font-semibold '>Track Your Fitness Journey</h1>
                <p className='content text-white text-sm text-center md:w-1/3 mt-2'>
                    Discover the ultimate fitness experience with GymFluencer.<span className='remove-content'> Effortless tracking, personalized plans, and a supportive community. </span>
                    Stay motivated and achieve your fitness goals with GymFluencer.
                </p>
            </div>
            <div className='about-us-container'>
                <div data-aos="fade-right" data-aos-duration="500">
                    <img src={aboutImg} className='about-img ml-20 mr-20' alt='about-img' />
                </div>
                <div className='about-us-information w-1/3 mt-5 ' data-aos="fade-left" data-aos-duration="1500">
                    <h1 className='text-white mt-5 mb-5'>About Us</h1>
                    <h2 className='mobile-about-heading'>We Believe in “People Power”.Yours and Ours.</h2>
                    <h2 className='desktop-about-heading text-white font-semibold  text-4xl'>We Believe in <br />“People Power”.<br />Yours and Ours.</h2>
                    <p className='description text-white mt-5'>
                        If you are ready to transform your body, health, and athletic performance goals into a reality,
                        join our awesome community of fitness fans, athletes and professional fitness coaches and begin
                        your journey to a more fit you, today.
                    </p>
                    <div className='about-items flex flex-row mt-10'>
                        <MdOutlineFitnessCenter size={30} className='text-white' />
                        <p className='text-white ml-2 sm:text-sm text-lg'>A Customized Fitness Program.</p>
                    </div>
                    <div className='about-items flex flex-row mt-10'>
                        <RiTeamFill size={30} className='text-white' />
                        <p className='text-white ml-2 sm:text-sm text-lg'>Team Training Group Sessions.</p>
                    </div>
                    <div className='about-items flex flex-row mt-10'>
                        <IoFitness size={30} className='text-white' />
                        <p className='text-white sm:text-sm ml-2 text-lg'>Personal Training Anywhere.</p>
                    </div>
                </div>
            </div>

            <div className='mobile-desktop-team-container'>
                {renderTeamMobileView()}
                {renderTeamDesktopView()}
            </div>

        </div>
    )
}
export default HomePage