import Button from "../../shared/ui/Button/Button";

import styles from "../../app/styles/ErrorPage.module.css";

export const ErrorPage = () => {
  const handleReload = () => {
    window.location.reload();
  };
  return (
    <div className={styles.page}>
      <h1 className={styles.heading}>Ooops, something went wrong</h1>

      <Button
        className="navigation-button"
        onClick={handleReload}
        type="button"
      >
        Go Back
      </Button>
    </div>
  );
};
