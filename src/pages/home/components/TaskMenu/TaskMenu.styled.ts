import styled from "styled-components";
import { ReactComponent as EllipsisSVG } from "assets/svg/icon-vertical-ellipsis.svg";

export const StyledEllipsisSVG = styled(EllipsisSVG)`
  cursor: pointer;
`;

export const Container = styled.div`
  position: absolute;
  left: 60%;
  bottom: -110px;
  width: 150px;
  height: 100px;

  padding: 12px;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  background: #45475e;
`;

export const Edit = styled.div`
  color: #e4ebfa;
  font-size: 13px;
  cursor: pointer;
`;

export const Delete = styled.div`
  color: rgb(234 85 85);
  font-size: 13px;
  cursor: pointer;
`;
