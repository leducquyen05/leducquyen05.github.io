import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Cyber Security Student",
          "Future Security Engineer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
        // Bạn có thể thêm delay để chữ dừng lại lâu hơn một chút trước khi xóa
        delay: 70, 
      }}
    />
  );
}

export default Type;