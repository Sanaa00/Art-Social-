// import { useState } from 'react'/
// import reactLogo from './assets/react.svg'//
// import viteLogo from '/vite.svg'
// import './App.css'/
import { Tabs, Tab, Card, CardContent } from "@/components/ui";
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
       <div className="p-6">
      <Tabs defaultValue="profile">
        <Tab label="Profile" value="profile">
          <Card>
            <CardContent>
              <h2>Profile</h2>
              <p>• Profile Picture</p>
              <p>• Name, Email, Phone</p>
              <p>• Edit Profile button</p>
            </CardContent>
          </Card>
        </Tab>
        <Tab label="Search" value="search">
          <Card>
            <CardContent>
              <h2>Search</h2>
              <p>• Search bar & Filters</p>
              <p>• Recommended Destinations</p>
              <p>• Destination Details</p>
            </CardContent>
          </Card>
        </Tab>
        <Tab label="Trip Planning" value="trip">
          <Card>
            <CardContent>
              <h2>Trip Planning</h2>
              <p>• Create New Trip</p>
              <p>• Daily Itinerary</p>
              <p>• Add & Edit Activities</p>
            </CardContent>
          </Card>
        </Tab>
        <Tab label="Budget" value="budget">
          <Card>
            <CardContent>
              <h2>Budget Management</h2>
              <p>• Set Total Budget</p>
              <p>• Expense Tracking</p>
              <p>• Money-Saving Tips</p>
            </CardContent>
          </Card>
        </Tab>
        <Tab label="Social" value="social">
          <Card>
            <CardContent>
              <h2>Social</h2>
              <p>• Share Trip</p>
              <p>• Destination Reviews</p>
              <p>• Friends Feed</p>
            </CardContent>
          </Card>
        </Tab>
        <Tab label="Settings" value="settings">
          <Card>
            <CardContent>
              <h2>Settings & Notifications</h2>
              <p>• Notifications</p>
              <p>• General Settings</p>
              <p>• Help & Support</p>
            </CardContent>
          </Card>
        </Tab>
      </Tabs>
    </div>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
