import { Link } from "react-router-dom";

import Button from "../../shared/ui/Button/Button";

import styles from "../../app/styles/About.module.css";
export const About = () => {
  return (
    <section className={styles.about}>
      <header className={styles.header}>
        <Link to="/">
          <Button className="navigation-button" type="button">
            <span>Go Back</span>
          </Button>
        </Link>
        <h1 className={styles.title}>About this project</h1>
      </header>

      <p>This project was made as a part of React Course of RS School.</p>
      <div className="wrapper">
        <div className="">
          Week 1:
          <ol>
            <li>Initialized with Vite + TypeScript</li>
            <li>
              Configured Code Quality tools ( ESlint, Prettier, Stylelint,
              Husky)
            </li>
            <li>Implemented layout and logic with Class Components</li>
            <li>Implemented fetching API</li>
            <li>Added Search functionality</li>
            <li>Added usage of local storage</li>
          </ol>
        </div>
        <div className="">
          Week 2:
          <ol>
            <li>Refactor Class Components to Functional ones</li>
            <li></li>
            <li></li>
          </ol>
        </div>
        <div className="">Week 3:</div>
        <div className="">Week 4:</div>
        <div className="">Week 5:</div>
        <div className="">Week 6:</div>
      </div>
    </section>
  );
};
