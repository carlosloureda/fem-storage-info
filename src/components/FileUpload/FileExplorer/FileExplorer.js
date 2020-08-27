import React from "react";
import styled from "@emotion/styled";
// this comment tells babel to convert jsx to calls to a
// function called jsx instead of React.createElement
/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import Logo from "../../../images/logo.svg";
import IconFolder from "../../../images/icon-folder.svg";
import IconDocument from "../../../images/icon-document.svg";
import IconUpload from "../../../images/icon-upload.svg";

const S = {};
S.Container = styled.div`
  width: 350px;
  height: 201px;
  background-color: #1e2d69;
  border-top-right-radius: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  padding: 40px 10px;
`;

S.Icon = styled.div`
  background-color: #0c122c;
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  cursor: pointer;
  margin-left: 16px;
`;

const FileExplorer = () => {
  return (
    <S.Container>
      <div
        css={css`
          padding: 0 31px;
        `}
      >
        <img src={Logo} alt="fylo logo" />
      </div>
      <div
        css={css`
          display: flex;
          justify-content: space-around;
          padding: 0px 15px;
        `}
      >
        <S.Icon>
          <img src={IconFolder} alt="folder" />
        </S.Icon>
        <S.Icon>
          <img src={IconDocument} alt="document" />
        </S.Icon>
        <S.Icon>
          <img src={IconUpload} alt="upload" />
        </S.Icon>
      </div>
    </S.Container>
  );
};

export default FileExplorer;
