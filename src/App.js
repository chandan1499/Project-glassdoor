import "./App.css";
import { DiscoverSalaries } from "./components/salaries/discoverSalaries";
import { DiscoverInterview } from "./components/interview/discoverInterviews";
import { ReviewForm } from "./components/reviewForm";
import { SignInPage } from "./components/SignInPage";
import { CompanyPage } from "./components/CompanyPage";
import { Route, Switch } from "react-router-dom";
import Dashboard from './components/After_Sign_In/Dashboard'
import Profile from './components/Profile_Page/Profile';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={SignInPage} />
        <Route exact path="/SignIn" component={SignInPage} />
        <Route exact path="/Company" component={CompanyPage} />
        <Route exact path="/dicoverSalaries" component={DiscoverSalaries} />
        <Route exact path="/discoverInterview" component={DiscoverInterview} />
        <Route exact path="/reviewForm" component={ReviewForm} /> 
        <Route exact path="/dashboard" component={Dashboard} /> 
        <Route exact path="/Profile" component={Profile} />
        
      </Switch>
    </div>
  );
}

export default App;
