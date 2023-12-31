import "./style.scss";
const Morphing = ({
  className,
  dissolveColor,
}: {
  className: any;
  dissolveColor: any;
}) => {
  return (
    <div className={className}>
      <div
        className="absolute gradient-top"
        style={{
          background: `linear-gradient(
          to bottom,
          transparent 50%,
          ${dissolveColor} 100%
        )`,
        }}
      ></div>
      <div className="gradient-bg">
        <svg xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="goo">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation={10}
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                result="goo"
              />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>
        <div className="gradients-container">
          <div className="g1" />
          <div className="g2" />
          <div className="g3" />
          <div className="g4" />
          <div className="g5" />
        </div>
      </div>
    </div>
  );
};

export default Morphing;
