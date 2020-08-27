import React from "react";
import styled from "@emotion/styled";

import FileExplorer from "./FileExplorer/FileExplorer";
import StorageInfo from "./StorageInfo/StorageInfo";

import DesktopBackground from "../../images/bg-desktop.png";
import MobileBackground from "../../images/bg-mobile.png";

const S = {};
S.Container = styled.div`
  height: 100vh;
  width: 100%;
  background: url(${DesktopBackground}) no-repeat;
  background-position: bottom;
  background-size: 100% 50%;
  background-color: #0c122c;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;

  @media (max-width: 480px) {
    background: url(${MobileBackground}) no-repeat;
    background-position: 50% 0%;
    background-size: initial;
    flex-direction: column;
  }
`;

function FileUpload() {
  return (
    <S.Container>
      <FileExplorer />
      <StorageInfo />
    </S.Container>
  );
}

export default FileUpload;
