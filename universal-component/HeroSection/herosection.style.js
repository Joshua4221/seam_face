import styled from "styled-components";

export const HeroSectionDiv = styled.div`
  position: relative;
`;

export const HeroSectionBody = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${({ bg }) => bg.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  transition: all 2s ease;

  .herosectionbody {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 50%;
    text-align: center;
    background-color: rgba(29, 70, 119, 0.445);
    /* opacity: 0.5; */

    .herosectionheader {
      h2 {
        font-size: 64px;
        font-weight: 900;
        font-style: normal;
        color: ${({ color }) => color.SectionColor};
        letter-spacing: 10px;
        word-spacing: 5px;
        padding: 10px;
      }

      p {
        font-size: 24px;
        font-weight: 700;
        color: ${({ color }) => color.PrimaryColor};
        padding: 10px;
      }
    }

    .herosectionlinkbody {
      display: flex;
      align-items: center;

      .herosectionlinkitem {
        a {
          .herosectionlink {
            border: 1px solid ${({ color }) => color.PrimColor};
            margin: 10px;
            padding: 5px 10px;
            border-radius: 4px;
            cursor: pointer;
            p {
              font-size: 18px;
              font-weight: 700;
              color: ${({ color }) => color.PrimaryColor};
            }

            &:hover {
              background-color: ${({ color }) => color.PrimColor};
            }
          }
        }
      }
    }
  }
`;
