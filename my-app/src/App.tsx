import "./App.css";
import { Greet } from "./components/Greet";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Status } from "./components/Status";
import { Heading } from "./components/Heading";
import { Oscar } from "./components/Oscar";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { Contener } from "./components/Contener";
import { LoggedIn } from "./components/state/LogggedIn";
// import { User } from "./components/state/User";
// import { Counter } from "./components/state/Counter";

import { ThemeContextProvider } from "./components/context/ThemeContext";
import { Box } from "./components/context/Box";
import { UserContextProvider } from "./components/context/UserContext";
import { User } from "./components/context/User";
import { Domref } from "./components/ref/Domref";
import { Mutableref } from "./components/ref/MutableRef";
import { Counter } from "./components/class/Counter";

// ----------------------------------------->
import { Private } from "./components/auth/Private";
import { Profile } from "./components/auth/Profile";
//------------------------------------------>
import { List } from "./components/generics/List";
import { RandomNumber } from "./components/restriction/RandomNumber";
import { Toast } from "./components/templateliterals/Toast";
import { CustomButton } from "./components/html/Button";
import { CustomComponent } from "./components/html/CustomComponent";
import { Text } from "./components/polymorphic/Text";

type app = {};
function App() {
  const PersonData = {
    first: "John",
    lastName: "Maradona",
    data: {
      number: 20,
      age: 10,
    },
  };
  // ===========================>
  const PersoList = [
    { id: 1, name: "Ronaldo", age: 38 },
    { id: 2, name: "Messei", age: 36 },
    { id: 3, name: "Mbapel", age: 26 },
  ];
  //===========================>
  const style = {
    backgroundColor: "#2b6fcf",
  };

  //===========================>

  return (
    <>
      <div>
        <input type="text" />
      </div>
      <div className="App">
        <Greet name="Aleina" messageCount={10} bool={true} />
        <Person data={PersonData} />
        <PersonList rename={PersoList} />
        {/* {PersoList.map((person) => {
          return <PersonList {...person} key={person.id} />;
        })} */}
        <Status Status="OK" />
      </div>

      <Heading>Hello world</Heading>
      <Oscar>
        <Heading>Hello everyone</Heading>
        <Greet name="Ronaldo" messageCount={10} bool={true} />
      </Oscar>
      <div>
        <Button
          handleClick={(event, id, name) => {
            console.log("button ckick", event, id, name);
          }}
        />
        <Input value="" handleChange={(event) => console.log(event)} />
      </div>
      <div>
        <Contener style={{ border: "2px solid blue" }} />
      </div>
      <div>
        <LoggedIn />
        <User />
        {/* <Counter /> */}
      </div>
      <div>
        <ThemeContextProvider>
          <Box />
        </ThemeContextProvider>
      </div>
      <div>
        <UserContextProvider>
          <User />
        </UserContextProvider>
      </div>
      <div>
        <Domref />
        <Mutableref />
      </div>
      <div>
        <Counter message="The count value is" />
      </div>

      {/*  ================================================================ */}
      <div>
        <Private isLogin={false} component={Profile} />
      </div>
      <div>
        <List
          items={["Sakiya", "RanDinal", "Penta", "Roena"]}
          onClick={(item) => console.log(item)}
        />

        <List items={[1, 2, 3, 4, 5]} onClick={(item) => console.log(item)} />

        {/* <List
          items={[
            { id: 1, first: "Jolin", last: "Santana" },
            { id: 2, first: "Nana", last: "Anta" },
          ]}
          onClick={(item) => console.log(item)}
        /> */}
      </div>
      <div>
        <RandomNumber value={10} isNegative />
      </div>
      <div>
        <Toast position="center" />
      </div>
      <div>
        <CustomButton variant="primary" onClick={() => console.log("Click")}>
          Primary Button
        </CustomButton>
      </div>
      <div>
        <CustomComponent name="seng" messageCount={10} bool />
      </div>
      <div>
        <Text as="h1" size="lg">
          Heading
        </Text>
        <Text as="p" size="md">
          Paragraph
        </Text>
        <Text as="label" htmlFor="someId" size="sm">
          Label
        </Text>
      </div>
    </>
  );
}
export default App;
