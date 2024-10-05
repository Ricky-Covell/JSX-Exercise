const App = () => {
    return (
        <div>
          <Person
            name="Joe"
            age={12}
            hobbies={["sleeping", "discord", "biking"]}
          />
          <Person name="Joseline" 
            age={54} 
            hobbies={["sailing", "tennis"]} 
          />
          <Person
            name="Amy"
            age={23}
            hobbies={["bar-hopping", "photography"]}
          />
        </div>
      );
}