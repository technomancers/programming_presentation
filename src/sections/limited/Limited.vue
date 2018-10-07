<template lang="pug">
#LimitedProgramming.eg-theme-agrume
  .eg-slideshow
    slide(enter="fadeInUp", leave="fadeOutUp")
      h2 Limited Programming
      .center
        h4 A computer only does what it is told. No More. No less.
    slide(:steps=4, enter="fadeInDown", leave="fadeOutDown")
      h2 What is Programming?
      .center
        eg-transition(enter="bounceInLeft", leave="bounceOutLeft")
          .subslide(v-if="step === 2")
            p The action or process of writing computer programs.
        eg-transition(enter="bounceInRight", leave="bounceOutRight")
          .subslide(v-if="step >= 3")
            p Bossing your computer around.
            eg-transition(enter='fadeIn')
              p(v-if="step >= 4") Telling a robot how to do certain tasks.
    slide(:steps=11, enter="fadeInUp", leave="fadeOutUp")
      h2 What can be programed?
      .center
        p(v-if="step === 1") Anything
        p(v-if="step === 2") No
        p(v-if="step === 3") I mean it
        p(v-if="step >= 4")
          b ANYTHING!!!
        p(v-if="step >= 5") * If you have the right resources
        eg-transition(enter="bounceInRight", leave="bounceOutLeft")
          .subslide(v-if="step === 6")
            p A Phone
            img(src="https://i.imgur.com/pIQmupd.jpg", height="250px")
        eg-transition(enter="bounceInRight", leave="bounceOutLeft")
          .subslide(v-if="step === 7")
            p An Actual Phone
            img(src="https://i.imgur.com/EJ8IKBB.jpg", height="250px")
        eg-transition(enter="bounceInRight", leave="bounceOutLeft")
          .subslide(v-if="step === 8")
            p A Car
            img(src="https://i.imgur.com/EBl7bkg.jpg", height="250px")
        eg-transition(enter="bounceInRight", leave="bounceOutLeft")
          .subslide(v-if="step === 9")
            p A Wallet*?
            img(src="https://i.imgur.com/6fJrpDD.jpg", height="250px")
        eg-transition(enter="bounceInRight", leave="bounceOutLeft")
          .subslide(v-if="step >= 10")
            p(v-if="step === 10") And of course
            p(v-if="step >= 11") A Robot
            img(src="https://i.imgur.com/Gc9Wq8Z.jpg", height="250px", v-if="step >= 11")
    slide(:steps=15, enter="fadeInDown", leave="fadeOutDown")
      h2 Platforms available to us
      .center
        eg-transition(enter="bounceInRight", leave="bounceOutLeft")
          .subslide(v-if="step >= 2 && step <= 5")
            h4(v-if="step >= 2")  Robo Rio
            img(v-if="step === 2", src="https://i.imgur.com/LjuxlIX.jpg", height="250px")
            p(v-if="step >= 3") Main computer of the robot
            p(v-if="step >= 4") Must control anything that moves on the robot
            p(v-if="step >= 5") Runs linux
        eg-transition(enter="bounceInRight", leave="bounceOutLeft")
          .subslide(v-if="step >= 6 && step <= 10")
            h4(v-if="step >= 6") Arduino
            img(v-if="step === 6", src="https://i.imgur.com/oFLXS67.jpg", height="250px")
            p(v-if="step >= 7") Is a micro-controller (meaning no operating system)
            p(v-if="step >= 8") Really good at reading sensors
            p(v-if="step >= 9") A lot of great documentation online
            p(v-if="step >= 10") Difficult to get the values to another device (learned this last year)
        eg-transition(enter="bounceInRight", leave="bounceOutLeft")
          .subslide(v-if="step >= 11 && step <= 15")
            h4(v-if="step >= 11") Raspberry Pi
            img(v-if="step === 11", src="https://i.imgur.com/MjsvcVU.jpg", height="250px")
            p(v-if="step >= 12") A small computer
            p(v-if="step >= 13") Runs linux
            p(v-if="step >= 14") Could be used to off load processing power to do vision
            p(v-if="step >= 15") A lot of documentation as well
    slide(:steps=4, enter="fadeInUp", leave="fadeOutUp")
      h2 How many languages can you read/write?
      .center
        p(v-if="step >= 2") A
          b  pro
          |  grammer should be able to read many languages
        p(v-if="step >= 3") May only be able to write few languages efficiently
        p(v-if="step >= 4") But once you know one, others come easier (just like if you learned Latin)
    slide(:steps=7, enter="fadeInDown", leave="fadeOutDown")
      h2 Kotlin
      .center
        p(v-if="step >= 2") Very easy to read and teach
        p(v-if="step >= 3") It is an Object Oriented Language (most commonly used languages are)
        p(v-if="step >= 4") Runs against JRE (which means our robot can run it)
        p(v-if="step >= 5") Can import Java (required as that is what WPI Library is written in)
        p(v-if="step >= 6") A lot of build time checks
        p(v-if="step >= 7") Becoming Android's standard language
        //- TODO(WD): Show example snippet of code
    slide(:steps=6, enter="fadeInUp", leave="fadeOutUp")
      h2 C++ (Arduino)
      .center
        p(v-if="step >= 2") A lot of games and programs are written in C++
        p(v-if="step >= 3") Very low level language
        p(v-if="step >= 4") Harder to read but not difficult
        p(v-if="step >= 5") Creates some of the fastest binaries
        p(v-if="step >= 6") This is what the Arduino "reads" when it runs
        //- TODO(WD): Show example snippet of code
    slide
      h3 null reference is not set to an instance of an object
      p.center: small Things I am still working on
      .quarter
        ul
          li Code Snippets
          li Sensors
            ul
              li Thermometers
              li Ultrasonics
              li Lidar
              li Camera
              li Pressure
              li Proximity
              li Potentiometers
              li Limit Switch
          li Expand on second slide?
      .quarter
        ul
          li Go through and put speaker notes
          li See if I can get speaker view to have a timer on each slide for me
          li Redesign platform slide and subslides
          li Is there any fun use with forms for these slides?
</template>

<script>
import Eagle from "eagle.js";
export default {
  mixins: [Eagle.slideshow],
  infos: {
    title: "Limited Programming",
    path: "limited"
  },
  data() {
    return {
      images: [
        "https://i.imgur.com/pIQmupd.jpg",
        "https://i.imgur.com/EJ8IKBB.jpg",
        "https://i.imgur.com/EBl7bkg.jpg",
        "https://i.imgur.com/6fJrpDD.jpg",
        "https://i.imgur.com/Gc9Wq8Z.jpg",
        "https://i.imgur.com/LjuxlIX.jpg",
        "https://i.imgur.com/oFLXS67.jpg",
        "https://i.imgur.com/MjsvcVU.jpg"
      ]
    };
  },
  mounted() {
    this.preloadImage();
  },
  methods: {
    preloadImage(idx) {
      idx = idx || 0;
      if (this.images && this.images.length > idx) {
        let img = new Image();
        img.onload = () => this.preloadImage(idx + 1);
        img.src = this.images[idx];
      }
    }
  }
};
</script>
