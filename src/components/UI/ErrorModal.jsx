import Card from "./Card";
import Button from "./Button";
import classes from "../UI/ErrorModal.module.css";

export default function ErrorModal({ title, message, handleClosedModal }) {
  const handleClick = (e) => {
    e.preventDefault();
    handleClosedModal(e);
  };
  return (
    <div>
      <div className={classes.backdrop} onClick={handleClick} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2 className={classes.header}>{title}</h2>
        </header>
        <div>
          <p className={classes.content}>{message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={handleClick}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
}
