import { useEffect } from "react";

// Import component
import "./Pagination.scss";

// eslint-disable-next-line react/prop-types
const Pagination = ({ count, position, setPosition }) => {
  const totalPage = Math.ceil(count / 100);

  const behind = [];
  const behindPage = () => {
    const limit = position - 5;
    for (let i = position; i > limit; i--) {
      if (i < 2) {
        return;
      } else {
        behind.unshift(i - 1);
      }
    }
  };

  const straight = [];
  const straigthPage = () => {
    const limit = position + 5;
    for (let i = position; i < limit; i++) {
      if (i > totalPage - 1) {
        return;
      } else {
        straight.push(i + 1);
      }
    }
  };

  useEffect(() => {
    behindPage();
    straigthPage();
  }, [position]);

  behindPage();
  straigthPage();
  return (
    <>
      <div className="pagination_container">
        <section className="pagination_container-buttonSideLeft">
          <div className="pagination_container-fix">
            <button
              onClick={() => setPosition(1)}
              disabled={position - 1 === 0 && true}
            >
              1
            </button>
            <button
              onClick={() => setPosition(position - 1)}
              disabled={position - 1 === 0 && true}
            >
              {"-1"}
            </button>
          </div>

          {behind?.map((number) => {
            return (
              <button key={number} onClick={() => setPosition(number)}>
                {number}
              </button>
            );
          })}
        </section>

        <p>{position}</p>
        <section className="pagination_container-buttonSideRight">
          {straight.map((number) => {
            return (
              <button key={number} onClick={() => setPosition(number)}>
                {number}
              </button>
            );
          })}
          <div className="pagination_container-fix">
            {" "}
            <button
              onClick={() => setPosition(position + 1)}
              disabled={position === totalPage && true}
            >
              {"+1"}
            </button>
            <button
              onClick={() => setPosition(totalPage)}
              disabled={position === totalPage && true}
            >
              {totalPage}
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Pagination;
