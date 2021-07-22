import './App.css';
import { DiscoverSalaries } from './components/salaries/discoverSalaries';
import { DiscoverInterview } from './components/interview/discoverInterviews';
import { ReviewForm } from './components/reviewForm';
import { SignInPage } from "./components/SignInPage";
import { CompanyPage } from "./components/CompanyPage";
import {Navbar} from './components/navbar';
import {CompanyDetails} from './components/companyOverview/companyOverview'
import { Route, Switch } from 'react-router-dom';

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
          <Route exact path="/companyDetails" component={CompanyDetails}/>
        </Switch>
    </div>
  );
}

export default App;
