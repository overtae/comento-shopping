const Review = ({ profileImage, username, score, createdDate, reviewText }) => {
  return (
    <div>
      <img src={profileImage} alt="프로필 사진" />
      <div>
        <div>{score}</div>
        <div>
          {username} | {createdDate}
        </div>
      </div>
      <div>{reviewText}</div>
    </div>
  );
};

export default Review;
