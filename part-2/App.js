const App = () => {
    return (
        <div>
            <Tweet
              name="Michael Thomas"
              username="TheMiTh"
              date={new Date().toDateString()}
              message="Please help me"
            />
            <Tweet
              name="Moe Jacobs"
              username="MoeMoe"
              date={new Date().toDateString()}
              message="Please help"
            />
            <Tweet
              name="Mack McMaster"
              username="Big McMac"
              date={new Date().toDateString()}
              message="Help"
            />
        </div>  
    )
}