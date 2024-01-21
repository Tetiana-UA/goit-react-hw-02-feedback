import { Component } from "react";
import styles from "./feedback.module.css";

class Feedback extends Component {
    state = {
        good:0,
        neutral:0,
        bad:0,
    } 

    render() { 
        return (
            <div className={styles.wrapper}>
                <div className={styles.block}>
                    <h2 className={styles.blockTitle}>Please leave feedback</h2>
                    <button>Good</button>
                    <button>Neutral</button>
                    <button>Bad</button>
                </div>
                <div className={styles.block}>
                    <h2 className={styles.blockTitle}>Statistics</h2>
                    <p>Good</p>
                    <p>Neutral</p>
                    <p>Bad</p>
                    <p>Total</p>
                    <p>Positive feedback</p>
                </div>

            </div>
        )
    }
}
 
export default Feedback;