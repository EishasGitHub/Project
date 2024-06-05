import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from 'react-navigation';
import FP_Page_1 from "../screens/FP_page1";
import FP_Page_2 from "../screens/FP_page2";
import FP_Page_3 from "../screens/FP_page3";
import FP_Page_4 from "../screens/FP_page4";
import AddViolation from "../screens/AddViolationPage";
import Login from "../screens/Login";
import EnterManually from "../screens/EnterManually";
import ViewViolation from "../screens/ViewViolations";
import Settings from "../screens/Settings";
import InboxDM from "../screens/InboxDM";
import Announcements from "../screens/Annoncements";
import Cam from "../screens/ScanID";
import EnterManuallyFailure from "../screens/EnterManuallyFailure";
import InboxGroupChats from "../screens/InboxGroupChats";
import DM from "../screens/DM";
import ReportBugScreen from "../screens/reportabug";
// import Profile from "../screens/Profile";
import Chat from "../screens/Comms";
import Home from "../screens/Home";
import HelpScreen from "../screens/Help";

const screens = {
    Login_Page: {
        screen: Login
    },
    Home_Page: {
        screen: Home,
    },
    EnterManually_Page: {
        screen: EnterManually
    },
    ViewViolations_Page: {
        screen: ViewViolation
    },
    AddViolation_Page: {
        screen: AddViolation
    },
    ForgotPassword_Page_1: {
        screen: FP_Page_1
    },
    ForgotPassword_Page_2: {
        screen: FP_Page_2
    },
    ForgotPassword_Page_3: {
        screen: FP_Page_3
    },
    ForgotPassword_Page_4: {
        screen: FP_Page_4
    },
    Inbox_DM: {
        screen: InboxDM
    },
    Inbox_GroupChats: {
        screen: InboxGroupChats
    },
    Announcements_Page: {
        screen: Announcements
    },
    ScanID_Page: {
        screen: Cam
    },
    Settings_Page: {
        screen: Settings
    },
    EnterManuallyFailure_Page: {
        screen: EnterManuallyFailure
    },
    ReportABug: {
        screen: ReportBugScreen
    },
    Help_Screen: {
        screen: HelpScreen
    },
    // Profile_Screen: {
    //     screen: Profile
    // },
    Chat_Screen: {
        screen: Chat
    }
    // DM_Page: {
    //     screen: DM
    // }
    

};


const HomeStack = createStackNavigator(screens , {headerMode:'none'});
export default createAppContainer(HomeStack);