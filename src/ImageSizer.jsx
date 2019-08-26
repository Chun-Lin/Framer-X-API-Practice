import React from "react";
import ReactDOM from "react-dom";
import { Frame, useAnimation, transform } from "framer";
import "./styles.css";

function ImageSizer() {
  const imgAnimate = useAnimation();
  return (
    <Frame width={"100%"} height={"100%"} background={"transparent"}>
      {/* background */}
      <Frame
        center="x"
        top={150}
        size={200}
        borderRadius="50%"
        overflow="hidden"
      >
        <Frame
          size={200}
          borderRadius="50%"
          animate={imgAnimate}
          image="url(https://images.unsplash.com/photo-1519275565142-d81952f9e2d1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80)"
          style={{
            backgroundPosition: "center"
          }}
        />
      </Frame>
      {/* slide */}
      <Frame
        center
        top={400}
        width={270}
        height={18}
        borderRadius={20}
        background="#eee"
      >
        <Frame
          size={36}
          center="y"
          background="gray"
          borderRadius="50%"
          drag="x"
          dragConstraints={{ left: 0, right: 270 - 36 }}
          dragElastic={0}
          dragMomentum={false}
          onDrag={(_, info) => {
            const animateValue = transform(info.point.x, [0, 270 - 36], [1, 2]);
            console.log("LOG: ImageSizer -> animateValue", animateValue)
            imgAnimate.start({
              scale: animateValue
            });
          }}
        />
      </Frame>
      <Frame
        center
        top={450}
        width={270}
        height={18}
        borderRadius={20}
        background="#eee"
      >
        <Frame
          size={36}
          center="y"
          background="gray"
          borderRadius="50%"
          drag="x"
          dragConstraints={{ left: 0, right: 270 - 36 }}
          dragElastic={0}
          dragMomentum={false}
          onDrag={(_, info) => {
            const animateValue = transform(info.point.x, [0, 270 - 36], [0, 360]);
            imgAnimate.start({
              rotate: animateValue
            });
          }}
        />
      </Frame>
    </Frame>
  );
}

export default ImageSizer
