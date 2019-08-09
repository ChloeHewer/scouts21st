import * as React from "react";
import styles from "./home.module.scss";

export interface IProps {}

export interface IState {}

class Home extends React.Component<IProps, IState> {
  // state = { :  }
  render() {
    return (
      <div className={styles.home}>
        <section className={`${styles["about-us"]} ${styles.section}`}>
          <h2>Who Are We?</h2>
          <img
            className={styles["section-image"]}
            src={"http://placekitten.com/470/300"}
          />
          <article>
            Elementum eu facilisis sed odio. Ac placerat vestibulum lectus
            mauris ultrices eros. Curabitur gravida arcu ac tortor dignissim. Id
            cursus metus aliquam eleifend mi in. Eu mi bibendum neque egestas
            congue quisque egestas diam. Ut faucibus pulvinar elementum integer
            enim neque volutpat ac tincidunt.
          </article>
        </section>
        <section className={`${styles["join-us"]} ${styles.section}`}>
          <h2>Join Us Now</h2>
          <img
            className={styles["section-image"]}
            src={"http://placekitten.com/450/300"}
          />
          <article>
            Venenatis a condimentum vitae sapien pellentesque habitant morbi
            tristique senectus. Lacus viverra vitae congue eu consequat ac felis
            donec.
          </article>
          <p className={styles["join-button"]}>Join Here</p>
        </section>

        <section className={`${styles.news} ${styles.section}`}>
          <h2>News</h2>
        </section>

        <section className={`${styles.images} ${styles.section}`}>
          <h2>Images</h2>
          <div>
            <img src={"http://placekitten.com/300/250"} />
            <img src={"http://placekitten.com/200/300"} />
            <img src={"http://placekitten.com/150/100"} />
            <img src={"http://placekitten.com/200/150"} />
            <img src={"http://placekitten.com/200/200"} />
          </div>
        </section>

        <section className={`${styles.Activities} ${styles.section}`}>
          <h2>Upcoming Activities</h2>
        </section>
      </div>
    );
  }
}

export default Home;
