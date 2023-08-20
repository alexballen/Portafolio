import s from "./AnotaloParagraph.module.css";

const AnotaloParagraph = () => {
  return (
    <main>
      <div className={s.container}>
        <section>
          <div className={s.title_container}>
            <p>Description</p>
          </div>
        </section>
        <section>
          <div className={s.paragraph_container}>
            <p>Numero 1</p>
            <p>Numero 2</p>
            <p>NUmero 3</p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default AnotaloParagraph;
