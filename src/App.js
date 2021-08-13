import "./App.css";
import { DiscoverSalaries } from "./components/salaries/discoverSalaries";
import { DiscoverInterview } from "./components/interview/discoverInterviews";
import { ReviewForm } from "./components/reviewForm";
import { SignInPage } from "./components/SignInPage/SignInPage";
import { CompanyPage } from "./components/CompanySection/CompanyPage";
import { JobsList } from "./components/JobsListPage/JobsList";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./components/After_Sign_In/Dashboard";
import Profile from "./components/Profile_Page/Profile";
import { ShowCompareCompanies } from "./components/compareCompanies/compareCompany";
import { CompareCompany } from "./components/CompanySection/CompareCompany";
import { DiscoverCompanies } from "./components/CompanySection/DiscoverCompanies";
import { GdforEmp } from "./components/GdforEmployers/GdforEmp";
import { Postjob } from "./components/Postjob/Postjob";
import { CompanyDetails } from "./components/companyOverview/companyOverview";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={SignInPage} />
        <Route exact path="/companyDetails" component={CompanyDetails} />
        <Route exact path="/companies" component={DiscoverCompanies} />
        <Route exact path="/SignIn" component={SignInPage} />
        <Route exact path="/Company" component={CompanyPage} />
        <Route exact path="/dicoverSalaries" component={DiscoverSalaries} />
        <Route exact path="/discoverInterview" component={DiscoverInterview} />
        <Route exact path="/reviewForm" component={ReviewForm} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/Profile" component={Profile} />
        <Route exact path="/CompareCompany" component={CompareCompany} />
        <Route exact path="/ShowComparison" component={ShowCompareCompanies} />
        <Route exact path="/jobsList" component={JobsList} />
        <Route exact path="/forEmployers" component={GdforEmp} />
        <Route exact path="/postJob" component={Postjob} />
      </Switch>
    </div>
  );
}

export default App;
