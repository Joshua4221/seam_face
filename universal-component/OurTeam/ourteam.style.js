import styled from "styled-components";

export const OurTeamDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* align-items: center; */
  justify-content: center;
  padding: 20px 30px;

  .our-team {
    width: 330px;
    margin: 10px 15px;
    border: 1px solid ${({ color }) => color.SelectColor};
    border-radius: 8px;

    .our-team-image {
      width: 100%;
      height: 300px;
      border-radius: 8px 8px 0px 0px;

      .image {
        border-radius: 8px 8px 0px 0px;
      }
    }

    .our-team-body {
      width: 100%;
      background-color: ${({ color }) => color.PrimaryColor};
      border-radius: 0px 0px 8px 8px;
      text-align: center;

      .our-team-header {
        padding: 10px;
        h4 {
          font-size: 16px;
          font-weight: 700;
          color: ${({ color }) => color.PrimColor};
        }
        p {
          font-size: 15px;
          font-weight: 600;
          opacity: 0.7;
          color: ${({ color }) => color.PrimColor};
        }
      }
      .our-team-link {
        display: flex;
        justify-content: center;
        padding: 10px;
        border-top: 1px solid ${({ color }) => color.SelectColor};

        a {
          .our-team-linkicon {
            margin: 10px;
            border: 1px solid ${({ color }) => color.SelectColor};
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 15px;
            border-radius: 50%;

            .our-team-icon {
              color: ${({ color }) => color.PrimColor};
            }
          }
        }
      }
    }
  }
`;
