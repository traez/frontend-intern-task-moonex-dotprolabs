const HeroLeft = () => {
  return (
    <section className="p-4 col-start-1 row-start-1">
      <h2>Left Section</h2>
      <p>
        This is the left section. Below 1024px, it takes the entire width and
        height. At 1024px or larger, it spans the first column of the grid.
      </p>
    </section>
  );
};

export default HeroLeft;
