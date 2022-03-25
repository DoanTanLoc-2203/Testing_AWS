import { DataStore } from "@aws-amplify/datastore";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { Amplify } from "aws-amplify";
import React, { useEffect } from "react";
import awsExports from "./aws-exports";
import { Hospita } from "./models";

Amplify.configure(awsExports);

function App({ signOut, user }: { signOut: any; user: any }) {
  useEffect(() => {
    const getData = async () => {
      const models = await DataStore.query(Hospita);
      console.log(models);
    };
    getData();
  });

  const addData = async () => {
    await DataStore.save(
      new Hospita({
        name: "Lorem ipsum dolor sit amet ",
        phon: [],
        address: [],
      }),
    );
  };

  return (
    <>
      <h1>Hello {user.email}</h1>
      <button onClick={signOut}>Sign out</button>
      <button onClick={addData}>Add data</button>
    </>
  );
}

export default withAuthenticator(App);
