import styled from "styled-components";
import { MediumText } from "../GlobalTextStyle";

const Review = ({ profileImage, username, score, createdDate, reviewText }) => {
  return (
    <ReviewStyled>
      <ProfileBox>
        <ProfileImage style={{ backgroundImage: `url(${profileImage})` }}></ProfileImage>
        <div>
          <Score>{score}</Score>
          <Description>
            {username} | {createdDate}
          </Description>
        </div>
      </ProfileBox>
      <ReviewText>{reviewText}</ReviewText>
    </ReviewStyled>
  );
};

const ReviewStyled = styled.div`
  padding: 24px 0;
  border-bottom: 1px solid lightgray;
`;

const ProfileBox = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin-bottom: 15px;
`;

const ProfileImage = styled.div`
  width: 40px;
  height: 40px;
  background-size: cover;
  border-radius: 18px;
`;

const Score = styled.div`
  color: #f5d742;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 3px;
`;

const Description = styled.div`
  color: lightgray;
  font-size: 14px;
`;

const ReviewText = styled.div`
  ${MediumText}
`;

export default Review;
