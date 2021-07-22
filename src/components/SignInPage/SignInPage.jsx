import { SignInNavbar } from "./SignInNavbar";
import {Footer} from "../footer";
import { SignInFormSection } from "./SignInFormSection";
import { InfoSection } from "./InfoSection";
export function SignInPage() {
    return (
        <div>
            <SignInNavbar />
            <SignInFormSection />
            <InfoSection/>
            <Footer />
        </div>
    )
}