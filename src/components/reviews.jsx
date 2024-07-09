const Reviews = () => {
  return (
    <ul>
      {Array(300)
        .fill("")
        .map((_, i) => (
          <Review key={i} index={i} />
        ))}
    </ul>
  );
};

const Review = ({ index }) => {
  const init = performance.now();
  while (init > performance.now() - 6) {
    //Fake slow down.
  }

  return <li>Review #{index}</li>;
};

export default Reviews;
