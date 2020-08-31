import React from "react";
import styled from "@emotion/styled";

const S = {};
S.Container = styled.div`
  width: 540px;
  height: 154px;
  background-color: #1e2d69;
  box-shadow: 0px 75px 100px -30px rgba(0, 0, 0, 0.24776);
  border-radius: 10px;
`;

// S.Progress = styled.progress`
//   background-color: red;
//   border: 0;
//   height: 18px;
//   border-radius: 9px;
//   color: blue;
//   &::-moz-progress-bar {
//     background-color: red;
//     border: 0;
//     height: 18px;
//     border-radius: 9px;
//     color: blue;
//   }
//   &::-webkit-progress-bar {
//     background-color: red;
//     border: 0;
//     height: 18px;
//     border-radius: 9px;
//   }
//   &::-webkit-progress-value {
//     /* style rules */
//     color: blue;
//   }
// `;

S.ProgressBar = styled.div`
  background-color: #fefefe;
  border-radius: 3px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  margin: 15px;
  height: 30px;
  width: 500px;
  max-width: 100%;
`;

S.ProgressFill = styled.div((props) => ({
  background: "#ad5389",
  background: "-webkit-linear-gradient(to bottom, #3c1053, #ad5389)",
  background: "linear-gradient(to bottom, #3c1053, #ad5389)",
  borderRadius: "3px",
  height: "30px",
  width: props?.size ? `${props.size}%` : "0",
  transition: "width 0.5s ease-in",
}));

const StorageInfo = () => {
  const [size, setSize] = React.useState(0);
  React.useEffect(() => {
    setSize(30);
  }, []);
  return (
    <S.Container>
      <h2>
        You´ve used <strong>815GB</strong> of your storage
      </h2>
      {/* <S.Progress id="file" value="500" max="1000"></S.Progress> */}
      <S.ProgressBar>
        <S.ProgressFill size={size}></S.ProgressFill>
      </S.ProgressBar>
    </S.Container>
  );
};

export default StorageInfo;
