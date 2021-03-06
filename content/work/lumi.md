---
title: "Lumi Mirror"
type: "Interaction"
description: "A gesture controlled smart mirror."
date: "2016-03-01"
thumbnail: "ases-home-tile.jpg"
---

<div class="container">
	<div class="row container-vertical-margin">
		<div class="col-lg-5 col-md-12" data-aos="fade-right" data-aos-anchor-placement="top-bottom" data-aos-once="true" data-aos-duration="600">
			<h3 class="primary-text-color no-margin-bottom">
				Senior Capstone
			</h3>
			<h3 class="secondary-text-color header-margin-bottom">
				10 Weeks to Build a Real World Software Project
			</h3>
		</div>
		<div class="offset-lg-1 col-lg-6 col-md-12" data-aos="fade-left" data-aos-anchor-placement="top-bottom" data-aos-once="true" data-aos-duration="600">
			<p>
				As part of the Stanford computer science major, all seniors have to spend 10 weeks building a significantly sized software project for their senior capstone. We would be evaluated on our ability to work cohesively as a team (peer reviews), individual code contributions (github review), and the project’s level of execution and completion (project fair).
			</p>
			<p>
				Our team of 4 built the software and assembled the hardware behind Lumi, a gesture-controlled smart mirror that plays music, takes photos, and displays glanceable information like the time, the weather, and your twitter feed.
			</p>
		</div>
	</div>
</div>

<div class="container-vertical-padding viewport-width no-horizontal-margins case-overview-container">
	<div class="container">
		<div class="row">
			<div class="col-lg-4 col-md-12 justify-content-center-md text-align-center-md" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-once="true" data-aos-duration="600">
				<div>
					<p class="no-margin-bottom">Project</p>
					<p class="secondary-text-color">IoT, Interaction, Web Development</p>
				</div>
			</div>
			<div class="col-lg-4 col-md-12 justify-content-flex-center-lg justify-content-center-md text-align-center-md" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-once="true" data-aos-delay="100" data-aos-duration="600">
				<div>
					<p class="no-margin-bottom">Role</p>
					<p class="secondary-text-color">UI/UX Design, Visual Design, Front End Development</p>
				</div>
			</div>
			<div class="col-lg-4 col-md-12 justify-content-flex-end-lg justify-content-center-md text-align-center-md" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-once="true" data-aos-delay="300" data-aos-duration="800">
				<div>
					<p class="no-margin-bottom">Timeline</p>
					<p class="secondary-text-color">March &ndash; June 2016</p>
				</div>
			</div>
		</div>
	</div>
</div>

<div class="container">
	<div class="row container-vertical-margin">
		<div class="col-lg-5 col-md-12" data-aos="fade-right" data-aos-anchor-placement="top-bottom" data-aos-once="true" data-aos-duration="600">
			<h3 class="primary-text-color no-margin-bottom">
				User Pain Points
			</h2>
			<h3 class="secondary-text-color header-margin-bottom">
				What Problems Might a Smart Mirror Solve?
			</h3>
		</div>
		<div class="offset-lg-1 col-lg-6 col-md-12" data-aos="fade-left" data-aos-anchor-placement="top-bottom" data-aos-once="true" data-aos-duration="600">
			<p>
				We began by taking note of our daily rituals to identify potential pain points. Our most frequent interactions with mirrors were during our morning routines of getting dressed and brushing our teeth. During these moments, we’d often be fiddling with our phones, switching between a handful of apps to check the weather, our day’s schedule, and our social media feeds. Our screens would inevitably get covered in a mixture of water and toothpaste as we brushed our teeth or we’d awkwardly perform a one-armed balancing act while checking email as we got dressed. Observing friends, we noticed many of our female peers switching between a mirror and a laptop screen to view makeup tutorials, leaving their keyboards covered in eyeshadow as they frustratedly clicked pause and rewind.
			</p>
			<p>
				Brainstorming, we came up with smart mirror features that might be able to alleviate these pain points or provide value to the user: A calendar view to see the day’s activities at a glance, a radio player to hear the news, a countdown timer for brushing your teeth, a camera to record a daily photo journal, a Twitter feed to keep up with friends, a video player to see makeup tutorials&#8230;
			</p>
			<p>
				We created a cohesive list of features we wanted to implement:
			</p>
			<ol>
				<li>Clock</li>
				<li>Countdown Timer</li>
				<li>Weather View</li>
				<li>Twitter Feed</li>
				<li>Email Feed</li>
				<li>Stock Market Feed</li>
				<li>Daily Photo Journal</li>
				<li>NPR Radio Player</li>
				<li>Spotify Music Player</li>
				<li>YouTube Video Player</li>
			</ol>
		</div>
	</div>
	<div class="row">
		<div class="col-lg-12 horizontal-rule"></div>
	</div>
	<div class="row container-vertical-margin">
		<div class="col-lg-5 col-md-12" data-aos="fade-right" data-aos-anchor-placement="top-bottom" data-aos-once="true" data-aos-duration="600">
			<h3 class="primary-text-color no-margin-bottom">
				Touch vs. Gesture
			</h2>
			<h3 class="secondary-text-color header-margin-bottom">
				Choosing an Interaction Method
			</h3>
		</div>
		<div class="offset-lg-1 col-lg-6 col-md-12" data-aos="fade-left" data-aos-anchor-placement="top-bottom" data-aos-once="true" data-aos-duration="600">
			<p>
				Once we had the list of features we wanted to build, we needed to figure out how users would interact with the mirror. Early on, we agreed that our augmentations should not impinge on the seamless experience of using a regular mirror.
			</p>
			<p>
				From our research, we found that the most common method of interacting with smart mirrors was through a touch interface. There were pros and cons to this design.
			</p>
			<p>
				<b>Touch Interface Pros:</b>
			</p>
			<ol>
				<li>
					Thanks to Apple, touch is already a commonly used interaction method &#8212; most users are educated with how it works and UI/UX patterns are established.
				</li>
				<li>
					With the currently available technology, touch arguably provides the most accurate and reliable method of interacting with a smart device.
				</li>
			</ol>
			<p>
				<b>Touch Interface Cons:</b>
			</p>
			<ol>
				<li>
					Touch requires the user to be within arms distance of the device, greatly limiting a smart mirror’s ability to be used at a distance as a full-body mirror in addition to a close-up mirror.
				</li>
				<li>
					Touch causes the user to leave fingerprints and potential other debris on the reflective glass, impinging on the mirrors primary function as a reflective surface.
				</li>
				<li>
					The hardware required to support responsive and accurate touch interactions (not to mention multi-touch) for a device as large as a mirror is expensive.
				</li>
			</ol>
			<p>
				While touch would certainly be the most reliable way to interact with a smart mirror, given our priorities and use cases, touch wasn’t appropriate as it greatly hinders the mirror’s ability to serve as a normal mirror. Further, while touch is a great input mechanism for primary devices like smart phones and tablets where a high level of granularity and accuracy is required, a smart mirror isn’t meant to be a primary device, making touch input overkill.
			</p>
			<p>
				Weighing the pros and cons of a gesture controlled interface with our mirror’s use cases, it was clear that gesture control was the best direction to go in: 
			</p>
			<p>
				<b>Gesture Control Pros:</b>
			</p>
			<ol>
				<li>
					Gesture control enables the smart mirror to be interacted with at a much wider range of distances from the mirror.
				</li>
				<li>
					Gesture control leaves the reflective surface clear of fingerprints and other debris, allowing the smart mirror to perform its primary function just as well as a regular mirror.
				</li>
				<li>
					Sensors for gesture control (e.g. Kinect) are widely available and affordable.
				</li>
			</ol>
			<p>
				<b>Gesture Control Cons:</b>
			</p>
			<ol>
				<li>
					Gesture control is not a commonly used interaction method &#8212; some users may not be familiar with how it works and UI/UX patterns are not as well established.
				</li>
				<li>
					The current state of gesture control technology is far from perfect. Input is not as granular nor accurate as touch.
				</li>
			</ol>
			<p>
				While gesture input would be less accurate and granular than touch, this level of sophistication was appropriate for the smaller type of role we thought a smart mirror should play in a user’s life.
			</p>
		</div>
	</div>
	<div class="row">
		<div class="col-lg-12 horizontal-rule"></div>
	</div>
	<div class="row container-vertical-margin">
		<div class="col-lg-5 col-md-12" data-aos="fade-right" data-aos-anchor-placement="top-bottom" data-aos-once="true" data-aos-duration="600">
			<h3 class="primary-text-color no-margin-bottom">
				Building Lumi
			</h2>
			<h3 class="secondary-text-color header-margin-bottom">
				Software Engineers Build Hardware
			</h3>
		</div>
		<div class="offset-lg-1 col-lg-6 col-md-12" data-aos="fade-left" data-aos-anchor-placement="top-bottom" data-aos-once="true" data-aos-duration="600">
			<p>
				To build the mirror display, we purchased a 34” 2K monitor and affixed a two-way reflective piece of acrylic to the front (purchased from <a class="footer-link" href="https://www.tapplastics.com/" rel="noopener noreferrer" target="_blank">TAP Plastics</a>). The two-way acrylic reflects light on the front but allows light to pass through the back. This allows the smart mirror to work as a fully functioning, reflective mirror when the monitor is asleep.
			</p>
		</div>
	</div>
</div>

<div class="container">
	<div class="row">
		<div class="col-lg-6 col-md-12" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-once="true" data-aos-duration="600">
			<img 
				class="img-fluid img-group-margin-btm"
				id="zoom-default"
				src="/images/lumi/lumi-hardware-one-lg.jpg"
				alt="Lumi Mirror Construction One"
				data-zoom-target="/images/lumi/lumi-hardware-one-xxl.jpg"
			>
		</div>
		<div class="col-lg-6 col-md-12" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-once="true" data-aos-delay="200" data-aos-duration="600">
			<img 
				class="img-fluid img-group-margin-btm"
				id="zoom-default"
				src="/images/lumi/lumi-hardware-two-lg.jpg"
				alt="Lumi Mirror Construction Two"
				data-zoom-target="/images/lumi/lumi-hardware-two-xxl.jpg"
			>
		</div>
		<div class="col-lg-6 col-md-12" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-once="true" data-aos-duration="600">
			<img 
				class="img-fluid img-group-margin-btm"
				id="zoom-default"
				src="/images/lumi/lumi-hardware-four-lg.jpg"
				alt="Lumi Mirror Reflection One"
				data-zoom-target="/images/lumi/lumi-hardware-four-xxl.jpg"
			>
		</div>
		<div class="col-lg-6 col-md-12" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-once="true" data-aos-delay="200" data-aos-duration="600">
			<img 
				class="img-fluid img-group-margin-btm"
				id="zoom-default"
				src="/images/lumi/lumi-hardware-five-lg.jpg"
				alt="Lumi Mirror Reflection Two"
				data-zoom-target="/images/lumi/lumi-hardware-five-xxl.jpg"
			>
		</div>
	</div>
</div>

<div class="container">
	<div class="row container-vertical-margin">
		<div class="offset-lg-6 col-lg-6 col-md-12">
			<p>
				When content is displayed on the monitor, it passes through the two-way acrylic and appears on the surface of the mirror.
			</p>
		</div>
	</div>
</div>

<div class="container">
	<div class="row">
		<div class="col-12" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-once="true" data-aos-duration="600">
			<img 
				class="img-fluid img-group-margin-btm"
				id="zoom-default"
				src="/images/lumi/lumi-reflective-xxl.jpg"
				alt="Lumi Mirror UI Plus Reflection"
			>
		</div>
	</div>
</div>

<div class="container">
	<div class="row container-vertical-margin">
		<div class="offset-lg-6 col-lg-6 col-md-12">
			<p>
				To capture gesture input, we used an Xbox 360 Kinect sensor that we placed at the bottom of the mirror and tilted upwards for optimal gesture capture. To run the display and process gesture input, we  had a computer running behind the monitor. Lastly, we mounted speakers behind the display for audio output.
			</p>
		</div>
	</div>
</div>

<div class="container">
	<div class="row">
		<div class="col-12" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-once="true" data-aos-duration="600">
			<img 
				class="img-fluid img-group-margin-btm"
				id="zoom-default"
				src="/images/lumi/lumi-kinnect-xxl.jpg"
				alt="Lumi Kinnect"
			>
		</div>
	</div>
</div>


<div class="container">
	<div class="row container-vertical-margin">
		<div class="col-lg-5 col-md-12">
			<h3 class="primary-text-color no-margin-bottom">
				Primary Design Challenge
			</h3>
		</div>
		<div class="offset-lg-1 col-lg-6 col-md-12">
			<p>
				Our primary design challenge was creating a set of interactions for controlling the mirror that would be intuitive to the user, intentional to the Kinect, and powerful enough to navigate a UI. Because we weren’t familiar yet with the technical limitations of the Kinect, our process became highly iterative: describe a gesture, sketch a resulting UI, prototype the gesture on the Kinect, repeat.
			</p>
			<p>
				The set of functions our interaction system needed to be able to handle included:
			</p>
			<ol>
				<li>
					Adding/removing widgets
				</li>
				<li>
					Initializing widgets (i.e. permissions, onboarding, etc.)
				</li>
				<li>
					Customizing widget locations
				</li>
				<li>
					Launching widgets (e.g. playing music, stopping music)
				</li>
			</ol>
		</div>
		<div class="offset-lg-1 col-lg-3 col-md-12 side-image-margin-top-md">
			<div class="row">
				<div class="col-lg-12 col-md-6-down">
					<img class="img-fluid" src="/images/lumi/lumi-cursor-diagram.png">
					<p class="text-align-center side-image-caption">Cursor Method</p>
				</div>
				<div class="col-lg-12 col-md-6-down">
					<img class="img-fluid" src="/images/lumi/lumi-grid-diagram.png">
					<p class="text-align-center side-image-caption">Grid Method</p>
				</div>
			</div>
		</div>
		<div class="offset-lg-2 col-lg-6">
			<p>
				Inspired by PCs, our first designs employed a cursor controlled by the user’s arm to navigate the mirror’s interface. The user simply raises her arm to chest height to “grab” the cursor. The cursor would then follow her hand as she moved it around. This turned out to be a poor design for several reasons. Firstly, tracking the hand and mapping it to a precise x, y cursor coordinate was inaccurate and unreliable. Secondly, capturing and then processing a gesture takes a non-trivial amount of time, resulting in a significant delay between the movement of the hand and the movement of the cursor on the mirror.
			</p>
			<p>
				In our next iterations, we focused on designing a system that would mask this sluggishness by requiring less granular gestures. Instead of precises x, y coordinates, we divided the screen into a grid of areas that could be selected as the user moved her hand to different areas on the screen.
			</p>
			<p>
				While this improved consistency and accuracy, especially in the middle of the screen, near the edges of the screen, this system often failed to capture the gesture, making it too frustrating to use in a daily routine.
			</p>
			<p>
				Ultimately, we realized that we were trying to make the mirror do too much. Day to day, the user wouldn’t need to set the widgets’ permissions, customize the widgets’ locations or add/remove widgets – these were all system settings that the user would likely only need to set once. We moved all of these tasks into a separate web app that the user could set on her laptop or mobile phone and then forget about. The mirror would only need to handle launching widgets.
			</p>
			<p>
				Our final solution was a clever radial menu interaction that appears in the center of the mirror when the user raises her arm out to chest height. From there, the user moves her hand in any one direction to highlight an option. Once an option is highlighted, she simply holds for two seconds and the option is selected. 
			</p>
		</div>
	</div>
</div>

<div class="container container-vertical-margin">
	<div class="row">
		<div class="col-lg-12">
			<video class="width-one-hundred" autoplay controls loop>
			 	<source src="/videos/lumi-radial-animation.mp4" type="video/mp4">
				Aw man! Looks like your browser doesn't support HTML5 video which means you can't see my super awesome video. Try opening this page in a Google Chrome browser instead!
			</video>
		</div>	
	</div>
</div>

<div class="container">
	<div class="row container-vertical-margin">
		<div class="offset-lg-6 col-lg-6 col-md-12">
			<p>
				This system worked extremely well as it could only be activated from a highly specific, intentional movement and was very forgiving in that it required little granularity and focus in movement to accurately select a desired option. Further, it greatly improved perceived responsiveness and felt snappy compared with previous iterations.
			</p>
			<p>
				However, a tradeoff with this design was the number of apps it could handle. We found that it worked best with 5 apps, any more than that and the Kinect has a harder time differentiating options. 
			</p>
		</div>
	</div>
</div>

<div class="container">
	<div class="row">
		<div class="col-6" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-once="true" data-aos-duration="600">
			<img 
				class="img-fluid img-group-margin-btm"
				id="zoom-default"
				src="/images/lumi/lumi-radial-one-lg.jpg"
				alt="Lumi Mirror UI Plus Reflection"
				data-zoom-target="/images/lumi/lumi-radial-one-xxl.jpg"
			>
		</div>
		<div class="col-6" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-once="true" data-aos-delay="200" data-aos-duration="600">
			<img 
				class="img-fluid img-group-margin-btm"
				id="zoom-default"
				src="/images/lumi/lumi-radial-two-lg.jpg"
				alt="Lumi Mirror UI Plus Reflection"
				data-zoom-target="/images/lumi/lumi-radial-two-xxl.jpg"
			>
		</div>
	</div>
</div>

<div class="container">
	<div class="row container-vertical-margin">
		<div class="col-lg-5 col-md-12" data-aos="fade-right" data-aos-anchor-placement="top-bottom" data-aos-once="true" data-aos-duration="600">
			<h3 class="primary-text-color no-margin-bottom">
				UI &amp; Visual Design
			</h2>
		</div>
		<div class="offset-lg-1 col-lg-6 col-md-12" data-aos="fade-left" data-aos-anchor-placement="top-bottom" data-aos-once="true" data-aos-duration="600">
			<p>
				Along with our interaction system, our corresponding UI went through several iterations as well. In early iterations, we envisioned having live app cards, similar to Microsoft Windows Phone live tiles. These would allow the user to glean useful summary information at a glance. Because we wanted to maximize the amount of reflective mirror surface, we hid these app cards behind a menu button on the bottom left. Hovering over this button revealed the app cards that users could scroll through by swiping their hand. As we learned more about the limitations of the Kinect’s gesture recognition capabilities, we realized this was actually a poor design.
			</p>
		</div>
	</div>
</div>

<div class="container">
	<div class="row">
		<div class="col-12" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-once="true" data-aos-duration="600">
			<img 
				class="img-fluid img-group-margin-btm"
				id="zoom-default"
				src="/images/lumi/lumi-mail-one-xxl.png"
				alt="Mail Iterations"
				data-zoom-target="/images/lumi/lumi-mail-one-xxl.png"
			>
		</div>
		<div class="col-12" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-once="true" data-aos-duration="600">
			<img 
				class="img-fluid img-group-margin-btm"
				id="zoom-default"
				src="/images/lumi/lumi-fb-xxl.png"
				alt="FB Iterations"
				data-zoom-target="/images/lumi/lumi-fb-xxl.png"
			>
		</div>
		<div class="col-12" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-once="true" data-aos-duration="600">
			<img 
				class="img-fluid img-group-margin-btm"
				id="zoom-default"
				src="/images/lumi/lumi-espn-xxl.png"
				alt="ESPN Iterations"
				data-zoom-target="/images/lumi/lumi-espn-xxl.png"
			>
		</div>
		<div class="col-6" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-once="true" data-aos-duration="600">
			<img 
				class="img-fluid img-group-margin-btm"
				id="zoom-default"
				src="/images/lumi/lumi-mirror-iteration-one-sleep-lg.png"
				alt="Lumi Mirror Iteration 1 Passive"
				data-zoom-target="/images/lumi/lumi-mirror-iteration-one-sleep-lg.png"
			>
		</div>
		<div class="col-6" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-once="true" data-aos-duration="600">
			<img 
				class="img-fluid img-group-margin-btm"
				id="zoom-default"
				src="/images/lumi/lumi-mirror-iteration-one-awake-lg.png"
				alt="Lumi Mirror Iteration 1 Approach"
				data-zoom-target="/images/lumi-mirror-iteration-one-awake-lg.png"
			>
		</div>
	</div>
</div>

<div class="container">
	<div class="row container-vertical-margin">
		<div class="offset-lg-6 col-lg-6 col-md-12">
			<p>
				In these early iterations, we didn’t have a good grasp on appropriate use cases for a smart mirror. We viewed it just like a larger tablet with the ability to launch media rich applications like Facebook and ESPN. However, as we talked to more users and explored the technical limitations of our hardware, we realized that while we could implement those applications, they weren’t appropriate for a smart mirror and would lead to a very poor user experience as they required a very accurate and granular method of input. Further, hiding the app cards behind a menu was simply a bad user experience as it required too many steps to access information that should already be available at a glance.
			</p>
			<p>
				Taking these learnings, we adjusted our UI to have the widgets already displayed along the unused edges of the mirror. We went through a variety of iterations and visual treatments to find designs that were glanceable and felt lightweight visually.
			</p>
		</div>
	</div>
</div>


<div class="container">
	<div class="row">
		<div class="col-12 cf cf-responsive-1080" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-once="true" data-aos-duration="600">
			<img 
				class="img-fluid img-group-margin-btm cf-btm"
				id="zoom-default"
				src="/images/lumi/lumi-time-final-xxl.png"
				alt="Time Final Version"
				data-zoom-target="/images/lumi/lumi-time-xxl.png"
			>
			<img 
				class="img-fluid img-group-margin-btm cf-control cf-top"
				id="zoom-default"
				src="/images/lumi/lumi-time-xxl.png"
				alt="Time Iterations"
				data-zoom-target="/images/lumi/lumi-time-xxl.png"
			>
		</div>
		<div class="col-12 cf cf-responsive-1080" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-once="true" data-aos-duration="600">
			<img 
				class="img-fluid img-group-margin-btm cf-btm"
				id="zoom-default"
				src="/images/lumi/lumi-stock-final-xxl.png"
				alt="Stock Ticker Final Version"
				data-zoom-target="/images/lumi/lumi-stock-xxl.png"
			>
			<img 
				class="img-fluid img-group-margin-btm cf-control cf-top"
				id="zoom-default"
				src="/images/lumi/lumi-stock-xxl.png"
				alt="Stock Ticker Iterations"
				data-zoom-target="/images/lumi/lumi-stock-xxl.png"
			>
		</div>
		<div class="col-12 cf cf-responsive-1707" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-once="true" data-aos-duration="600">
			<img 
				class="img-fluid img-group-margin-btm cf-btm"
				id="zoom-default"
				src="/images/lumi/lumi-mail-two-final-xxl.png"
				alt="Mail Feed Final Version"
				data-zoom-target="/images/lumi/lumi-mail-two-xxl.png"
			>
			<img 
				class="img-fluid img-group-margin-btm cf-control cf-top"
				id="zoom-default"
				src="/images/lumi/lumi-mail-two-xxl.png"
				alt="Mail Feed Iterations"
				data-zoom-target="/images/lumi/lumi-mail-two-xxl.png"
			>
		</div>
		<div class="col-12 cf cf-responsive-908" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-once="true" data-aos-duration="600">
			<img 
				class="img-fluid img-group-margin-btm cf-btm"
				id="zoom-default"
				src="/images/lumi/lumi-npr-final-xxl.png"
				alt="NPR Radio Final Version"
				data-zoom-target="/images/lumi/lumi-npr-xxl.png"
			>
			<img 
				class="img-fluid img-group-margin-btm cf-control cf-top"
				id="zoom-default"
				src="/images/lumi/lumi-npr-xxl.png"
				alt="NPR Radio Iterations"
				data-zoom-target="/images/lumi/lumi-npr-xxl.png"
			>
		</div>
		<div class="col-12 cf cf-responsive-877" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-once="true" data-aos-duration="600">
			<img 
				class="img-fluid img-group-margin-btm cf-btm"
				id="zoom-default"
				src="/images/lumi/lumi-calendar-final-xxl.png"
				alt="Calendar Final Version"
				data-zoom-target="/images/lumi/lumi-calendar-xxl.png"
			>
			<img 
				class="img-fluid img-group-margin-btm cf-control cf-top"
				id="zoom-default"
				src="/images/lumi/lumi-calendar-xxl.png"
				alt="Calendar Iterations"
				data-zoom-target="/images/lumi/lumi-calendar-xxl.png"
			>
		</div>
		<div class="col-12 cf cf-responsive-679" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-once="true" data-aos-duration="600">
			<img 
				class="img-fluid img-group-margin-btm cf-btm"
				id="zoom-default"
				src="/images/lumi/lumi-timer-final-xxl.png"
				alt="Timer Final Version"
				data-zoom-target="/images/lumi/lumi-timer-xxl.png"
			>
			<img 
				class="img-fluid img-group-margin-btm cf-control cf-top"
				id="zoom-default"
				src="/images/lumi/lumi-timer-xxl.png"
				alt="Timer Iterations"
				data-zoom-target="/images/lumi/lumi-timer-xxl.png"
			>
		</div>
	</div>
</div>

<div class="container">
	<div class="row container-vertical-margin">
		<div class="offset-lg-6 col-lg-6 col-md-12">
			<p>
				We knew iconography was going to be extremely useful in keeping our user interface lightweight yet intuitive. To maintain visual cohesiveness, we designed a custom set of icons.
			</p>
		</div>
	</div>
</div>

<div class="container">
	<div class="row">
		<div class="col-12" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-once="true" data-aos-duration="600">
			<img 
				class="img-fluid img-group-margin-btm"
				id="zoom-default"
				src="/images/lumi/lumi-widgets-icons.png"
				alt="Widget Icons"
			>
		</div>
		<div class="col-12" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-once="true" data-aos-duration="600">
			<img 
				class="img-fluid img-group-margin-btm"
				id="zoom-default"
				src="/images/lumi/lumi-weather-icons.png"
				alt="Weather Icons"
			>
		</div>
		<div class="col-lg-6 col-md-12" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-once="true" data-aos-duration="600">
			<img 
				class="img-fluid img-group-margin-btm"
				id="zoom-default"
				src="/images/lumi/lumi-sun-icon-lg.png"
				alt="Sunny Closeup"
				data-zoom-target="/images/lumi/lumi-sun-icon-xxl.png"
			>
		</div>
		<div class="col-lg-6 col-md-12" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-once="true" data-aos-delay="200" data-aos-duration="600">
			<img 
				class="img-fluid img-group-margin-btm"
				id="zoom-default"
				src="/images/lumi/lumi-partly-cloudy-icon-lg.png"
				alt="Partly Cloudy Closeup"
				data-zoom-target="/images/lumi/lumi-partly-cloudy-icon-xxl.png"
			>
		</div>
		<div class="offset-lg-6 col-lg-6 col-md-12" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-once="true" data-aos-duration="600">
			<img 
				class="img-fluid img-group-margin-btm"
				id="zoom-default"
				src="/images/lumi/lumi-final-mockup.png"
				alt="Final Mockup"
			>
		</div>
	</div>
</div>

<div class="container">
	<div class="row container-vertical-margin">
		<div class="col-lg-5 col-md-12" data-aos="fade-right" data-aos-anchor-placement="top-bottom" data-aos-once="true" data-aos-duration="600">
			<h3 class="primary-text-color no-margin-bottom">
				The Software
			</h2>
			<h3 class="secondary-text-color header-margin-bottom">
				PyKinect, Node.js, and a Python Web Server
			</h3>
		</div>
		<div class="offset-lg-1 col-lg-6 col-md-12" data-aos="fade-left" data-aos-anchor-placement="top-bottom" data-aos-once="true" data-aos-duration="600">
			<p>
				We built the mirror's software using Node.js since the majority of our widgets (e.g. Spotify music player, weather, stock, email etc) provided web APIs. The monitor simply displays a full sized web browser that loads a webpage connected to a local Node server running on our laptop. The UI elements were built and animated with HTML, CSS, and Javascript. In addition to the mirror GUI, we built an additional web service that enables users to customize the location of widgets on the mirror display through a drag and drop interface as well as manage permissions for the widgets (e.g. Twitter, Spotify, email, etc).
			</p>
			<p>
				For gesture recognition, we utilized the PyKinect framework and built a separate Python server to process and handle the input and feed it to the Node.js server.
			</p>
		</div>
	</div>
</div>

<div class="container">
	<div class="row">
		<div class="col-12" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-once="true" data-aos-duration="600">
			<img 
				class="img-fluid img-group-margin-btm"
				id="zoom-default"
				src="/images/lumi/lumi-weather-xxl.jpg"
				alt="Weather Widget"
			>
		</div>
		<div class="col-lg-6 col-md-12" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-once="true" data-aos-duration="600">
			<img 
				class="img-fluid img-group-margin-btm"
				id="zoom-default"
				src="/images/lumi/lumi-twitter-lg.jpg"
				alt="Twitter Widget"
				data-zoom-target="/images/lumi/lumi-twitter-xxl.jpg"
			>
		</div>
		<div class="col-lg-6" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-once="true" data-aos-delay="200" data-aos-duration="600">
			<img 
				class="img-fluid img-group-margin-btm"
				id="zoom-default"
				src="/images/lumi/lumi-stocks-lg.jpg"
				alt="Lumi"
				data-zoom-target="/images/lumi/lumi-stocks-xxl.jpg"
			>
		</div>
	</div>
</div>

<div class="container">
	<div class="row container-vertical-margin">
		<div class="col-lg-5 col-md-12" data-aos="fade-right" data-aos-anchor-placement="top-bottom" data-aos-once="true" data-aos-duration="600">
			<h3 class="primary-text-color no-margin-bottom">
				Results
			</h2>
			<h3 class="secondary-text-color header-margin-bottom">
				Project Fair
			</h3>
		</div>
		<div class="offset-lg-1 col-lg-6 col-md-12" data-aos="fade-left" data-aos-anchor-placement="top-bottom" data-aos-once="true" data-aos-duration="600">
			<p>
				At the project fair, Lumi’s gesture recognition and radial menu design performed remarkably well with a variety of user heights and under a range of lighting conditions. Feedback from users and faculty were overwhelmingly positive. By popular vote, Lumi won "Best Senior Capstone Project".
			</p>
		</div>
	</div>
</div>

<div class="container">
	<div class="row">
		<div class="col-12" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-once="true" data-aos-duration="600">
			<img 
				class="img-fluid img-group-margin-btm"
				id="zoom-default"
				src="/images/lumi/lumi-project-fair-demo.jpg"
				alt="Project Fair"
			>
		</div>
	</div>
</div>

<div class="container-vertical-margin-top">
	<div class="viewport-dimensions">
		<div class="cool-gray-texture display-flex align-item-center text-align-center" id="lumi-footer">
			<div class="container">
				<div class="row">
					<div class="offset-lg-3 col-lg-6 col-12-md">
						<h3>
							Lumi was awarded  “Best Senior Capstone Project”.
						</h3>
						<br>
						<p>
							Built in collaboration with Dan Guo, Brian Yang, and Sloane Sturzenegger (from left to right).
						</p>
					</div>	
				</div>
			</div>
		</div>
	</div>
</div>

<div class="viewport-width no-horizontal-margins display-flex align-item-center background-image" id="footer-canvas" style="height: 56vh;">
	<div class="footer-bg-image" id="home-canvas-two-bg-image-ases"></div>
  	<div class="footer-bg-image" id="home-canvas-two-bg-image-firsthand"></div>
  	<div class="container">
	    <div class="row col-reverse-md ">
		    <div class="col-lg-6 col-md-12 text-align-center-md justify-content-center-md display-inline-flex" id="project-container" name="home-canvas-two-bg-image-">
		        <a name="firsthand" class="project-link" href="/work/firsthand">
		        	<div data-aos="fade-right" data-aos-anchor-placement="center-bottom" data-aos-once="true" data-aos-duration="600">
		           		<span class="subtitle footer-canvas-project-header">PREVIOUS</span>
		            	<h3 class="footer-canvas-project-name">Firsthand Delivery</h3>
		          	</div>
		        </a>
		    </div>
		    <div class="col-lg-6 col-md-12 text-align-right-lg text-align-center-md justify-content-flex-end-lg justify-content-center-md display-inline-flex" id="project-container" name="home-canvas-two-bg-image-">
		        <a name="ases" class="project-link" href="/work/ases">
		        	<div data-aos="fade-left" data-aos-anchor-placement="center-bottom" data-aos-once="true" data-aos-duration="600">
		            	<span class="subtitle footer-canvas-project-header">NEXT</span>
		            	<h3 class="footer-canvas-project-name">ASES Rebrand</h3>
		        	</div>
		        </a>
		    </div>
		</div>
	</div>
</div>