import styled from "styled-components";

const STATUS_COLORS = {
  yellow: "yellow-500",
  yellowDark: "yellow-700",
  gray: "gray-100",
  purple: "purple-500",
} as const;

type OptionColor = {
  color: keyof typeof STATUS_COLORS;
};

export const Announcements = styled.div`
  display: flex;
  flex: 1;
  gap: 2rem;
`;

export const AnnouncementInfo = styled.div`
  display: flex;
  flex: 0.6;
  flex-direction: column;
`;

export const AnnouncementPhoto = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 0.4;

  img {
    width: fit-content;
    height: fit-content;
  }
`;

export const TitleAnnouncement = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    color: ${(props) => props.theme["gray-300"]};
    font-family: "Baloo 2", sans-serif;
    font-size: 2.8rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }
  p {
    color: ${(props) => props.theme["gray-200"]};
    font-family: "Roboto", sans-serif;
    font-size: 1.25rem;
  }
`;

export const OptionsAnnouncement = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
`;

export const OptionRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;

  div {
    display: flex;
    gap: 0.5rem;
    align-items: center;

    p {
      font-size: 0.75rem;
      color: ${(props) => props.theme["gray-100"]};
    }
  }
  div:nth-child(2) {
    margin-right: 5rem;
  }
`;

export const OptionColor = styled.div<OptionColor>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.3rem;
  border-radius: 50%;
  background-color: ${(props) => props.theme[STATUS_COLORS[props.color]]}; ;
`;
