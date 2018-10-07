<template lang="pug">
#LimitedProgramming.eg-theme-agrume
  .eg-slideshow
    slide(enter="fadeInUp", leave="fadeOutUp")
      h2 Limited Programming
      .center
        h4 A computer only does what it is told. No More. No less.
    slide(:steps=7, enter="fadeInDown", leave="fadeOutDown")
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
            eg-transition(enter='fadeIn')
              p(v-if="step >= 5") Research
                span(v-if="step >= 6") , a lot of
                b(v-if="step >= 7")  RESEARCH!
    slide(:steps=12, enter="fadeInUp", leave="fadeOutUp")
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
          .subslide(v-if="step >= 10 && step <= 11")
            p(v-if="step === 10") And
            p(v-if="step === 11") Of Course
        eg-transition(enter="bounceInRight", leave="bounceOutLeft")
          .subslide(v-if="step >= 12")
            p A Robot
            img(src="https://i.imgur.com/Gc9Wq8Z.jpg", height="250px")
    slide(:steps=15, enter="fadeInDown", leave="fadeOutDown")
      h2 Platforms available to us
      .center
        eg-transition(enter="bounceInRight", leave="bounceOutLeft")
          .subslide(v-if="step >= 2 && step <= 5")
            h4(v-if="step >= 2").trimBottom  Robo Rio
            img(v-if="step === 2", src="https://i.imgur.com/LjuxlIX.jpg", height="250px")
            p(v-if="step >= 3") Main computer of the robot
            p(v-if="step >= 4") Must control anything that moves on the robot
            p(v-if="step >= 5") Runs linux
        eg-transition(enter="bounceInRight", leave="bounceOutLeft")
          .subslide(v-if="step >= 6 && step <= 10")
            h4(v-if="step >= 6").trimBottom Arduino
            img(v-if="step === 6", src="https://i.imgur.com/oFLXS67.jpg", height="250px")
            p(v-if="step >= 7") Is a micro-controller (meaning no operating system)
            p(v-if="step >= 8") Really good at reading sensors
            p(v-if="step >= 9") A lot of great documentation online
            p(v-if="step >= 10") Difficult to get the values to another device (learned this last year)
        eg-transition(enter="bounceInRight", leave="bounceOutLeft")
          .subslide(v-if="step >= 11 && step <= 15")
            h4(v-if="step >= 11").trimBottom Raspberry Pi
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
    slide(:steps=13, enter="fadeInDown", leave="fadeOutDown")
      h2 Kotlin
      .center
        eg-transition(leave="bounceOutLeft")
          .subslide(v-if="step >= 2 && step <= 7")
            p(v-if="step >= 2") Very easy to read and teach
            p(v-if="step >= 3") It is an Object Oriented Language (most commonly used languages are)
            p(v-if="step >= 4") Runs against JRE (which means our robot can run it)
            p(v-if="step >= 5") Can import Java (required as that is what WPI Library is written in)
            p(v-if="step >= 6") A lot of build time checks
            p(v-if="step >= 7") Becoming Android's standard language
        eg-transition(enter="bounceInRight", leave="bounceOutLeft")
          .subslide(v-if="step >= 8")
            eg-code-block(lang="kotlin").
              override fun autonomousInit() {
                  val input = autoChooser.selected <eg-code-comment :active="step >= 9" enter="fadeInRight"> Get what side our robot is on.</eg-code-comment>
                  val side = DriverStation.getInstance().gameSpecificMessage.toCharArray() <eg-code-comment :active="step >= 10" enter="fadeInRight"> Get what side is ours.</eg-code-comment>
                  if(input == StartingPosition.LEFT && side[0] == 'L'){
                      Offensive().start() <eg-code-comment :active="step >= 11" enter="fadeInRight"> If robot is on left and our side is lit.</eg-code-comment>
                  } else if(input == StartingPosition.RIGHT && side[0]== 'R'){
                      Offensive().start() <eg-code-comment :active="step >=12" enter="fadeInRight"> If robot is on right and our side is lit.</eg-code-comment>
                  } else {
                      Defensive().start() <eg-code-comment :active="step >= 13" enter="fadeInRight"> Anything else (middle position, left but our side is not lit).</eg-code-comment>
                  }
              }
    slide(:steps=14, enter="fadeInUp", leave="fadeOutUp")
      h2 C++ (Arduino)
      .center
        eg-transition(leave="bounceOutLeft")
          .subslide(v-if="step >=2 && step <=6")
            p(v-if="step >= 2") A lot of games and programs are written in C++
            p(v-if="step >= 3") Very low level language
            p(v-if="step >= 4") Harder to read but not difficult
            p(v-if="step >= 5") Creates some of the fastest binaries
            p(v-if="step >= 6") This is what the Arduino "reads" when it runs
        eg-transition(enter="bounceInRight", leave="bounceOutLeft")
          .subslide(v-if="step >= 7")
            eg-code-block(lang="cpp").
              int HCSR04::distance(float speedOfSound)
              {
                unsigned long maxTime = (_maxTol * 2) / speedOfSound; <eg-code-comment :active="step >= 8" enter="fadeInRight"> Max time to listen for ping.</eg-code-comment>
                int iteration = 0;
              LOOP:
                iteration++;
                if (iteration > _retries)
                {
                  return _badValue; <eg-code-comment :active="step >= 9" enter="fadeInRight"> If we tried too many times, return a bad value (-1).</eg-code-comment>
                }
                unsigned long duration = _echoInMicroseconds(maxTime); <eg-code-comment :active="step >= 10" enter="fadeInRight"> Ping and listen.</eg-code-comment>
                int distance = (duration * speedOfSound / 2); <eg-code-comment :active="step >= 11" enter="fadeInRight"> Caclulate distance.</eg-code-comment>
                if (distance < _minTol || distance > _maxTol)
                {
                  if (_retry){
                    delayMicroseconds(10);
                    goto LOOP; <eg-code-comment :active="step >= 12" enter="fadeInRight"> Try again if not within tolerance.</eg-code-comment>
                  }else{
                    return _badValue; <eg-code-comment :active="step >= 13" enter="fadeInRight"> Return bad value if we don't want to retry.</eg-code-comment>
                  }
                }
                return distance; <eg-code-comment :active="step >= 14" enter="fadeInRight"> Return distance if we think it is a good reading.</eg-code-comment>
              }
    slide(:steps=5, enter="fadeInDown", leave="fadeOutDown")
      h2.trimBottom Sensors
      eg-transition(enter="fadeInLeft")
        .quarter(v-if="step >= 2")
          img(src="https://i.imgur.com/zLQre6a.jpg", height="100px")
          h4 Temperatur
          p Thermistor
          p Analog Themometer
      eg-transition(enter="fadeInRight")
        .quarter(v-if="step >= 3")
          img(src="https://i.imgur.com/mSizqU0.jpg", height="100px")
          h4 Distance
          p Ultrasonic
          p Lidar
      eg-transition(enter="fadeInLeft")
        .quarter(v-if="step >= 4")
          img(src="https://i.imgur.com/TlJkFGP.png", height="100px")
          h4 Position
          p Encoders
          p Potentiometers
      eg-transition(enter="fadeInRight")
        .quarter(v-if="step >= 5")
          img(src="https://i.imgur.com/ltwSeDo.jpg", height="100px")
          h4 Camera
          p Color
          p Infrared
    slide(:steps=7, enter="fadeInUp", leave="fadeOutUp")
      h3(v-if="step === 1") If you have not been listening...
      h3(v-if="step >= 2") Here are a few Takeaways
      eg-transition(enter="bounceInRight", leave="bounceOutRight")
        p(v-if="step >= 3") We have to build one Robot
          span(v-if="step >= 4") , but that doesn't mean what have to build it all at once
      eg-transition(enter="bounceInRight", leave="bounceOutRight")
        p(v-if="step >= 5") The sooner a programmer can get to the module, the sooner it can be tested
      eg-transition(enter="bounceInRight", leave="bounceOutRight")
        p(v-if="step >= 6") Sensors are important for autonomous mode
      eg-transition(enter="bounceInRight", leave="bounceOutRight")
        p(v-if="step >= 7") It may sound easy to you, but think about it in it's most basic components and it can get complex to program
    slide(enter="fadeInDown", leave="fadeOutDown")
      h1 Q/A
      p Code:
        a(href="https://github.com/technomancers") https://github.com/technomancers
      p Email:
        a(href="mailto:will@willd.io") will@willd.io
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
        "https://i.imgur.com/MjsvcVU.jpg",
        "https://i.imgur.com/zLQre6a.jpg",
        "https://i.imgur.com/mSizqU0.jpg",
        "https://i.imgur.com/TlJkFGP.png",
        "https://i.imgur.com/ltwSeDo.jpg"
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

<style lang="scss">
h1,
h2,
h3,
h4 {
  &.trimBottom {
    margin-bottom: 0.4em;
  }
}
.quarter {
  text-align: center;
  h4 {
    margin-top: 0;
    margin-bottom: 0;
  }
  p {
    margin-top: 0;
    margin-bottom: 0;
    text-align: center;
  }
}
</style>
