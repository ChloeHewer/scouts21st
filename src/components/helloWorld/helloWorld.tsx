import * as React from "react";
import { firestore } from "../../firebase";

export interface IProps {}

export interface IState {}

class HelloWorld extends React.Component<IProps, IState> {
  // state = { :  }

  render() {
    firestore
      .collection("argh")
      .doc()
      .set({ ugh: "hello" })
      .then(function() {
        console.log("success");
      })
      .catch(function() {
        console.log("doesnt work");
      });

    firestore
      .collection("argh")
      .get()
      .then(querySnapshot => {
        console.log(
          querySnapshot.docs.map(doc => {
            return { ...doc.data() };
          })
        );
      })
      .catch(function() {
        console.log("doesnt work");
      });
    return <h1>Hello World</h1>;
  }
}

export default HelloWorld;
