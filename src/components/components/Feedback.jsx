import { Component } from "react";
import styles from "./feedback.module.css";

class Feedback extends Component {
    static feedbackOptions=["good", "neutral", "bad"]

    state = {
        good:0,
        neutral:0,
        bad:0,
    } 

    

    calcTotal(){
    const {good, neutral, bad}=this.state;
    const total=good + neutral + bad;
    return total;
    }

    feedbackPercentage(keyName){
        const total=this.calcTotal();
        if (!total){
            return 0;
        }
        const value=this.state[keyName];
        return Number(((value/total)*100).toFixed(2));
    }

    onLeaveFeedback=(keyName)=>{
        this.setState(prevState=>{
        return{
            [keyName]:prevState[keyName] + 1
            }
        })
    }


    render() {
        const total=this.calcTotal();
        const positiveFeedback=this.feedbackPercentage("good");
        
        

        const buttonElements=Feedback.feedbackOptions.map(name=><button onClick={(() => this.onLeaveFeedback(name))} key={name} className={styles.button}>{name}</button>) 

        return (
            <div className={styles.wrapper}>
                <div className={styles.block}>
                    <h2 className={styles.blockTitle}>Please leave feedback</h2>
                    {buttonElements}
                </div>
                <div className={styles.block}>
                    <h2 className={styles.blockTitle}>Statistics</h2>
                    <p className={styles.text}>Good:</p>
                    <p className={styles.text}>Neutral:</p>
                    <p className={styles.text}>Bad:</p>
                    <p className={styles.text}>Total:{total}</p>
                    <p className={styles.text}>Positive feedback:{positiveFeedback}</p>
                </div>

            </div>
        )
    }
}
 
export default Feedback;