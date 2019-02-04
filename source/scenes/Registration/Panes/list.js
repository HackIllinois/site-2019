import PersonalInfo from './PersonalInfo';
import StudentInfo from './StudentInfo';
import ProfessionalInfo from './ProfessionalInfo';
import BeginnerInfo from './BeginnerInfo';
import OtherInfo from './OtherInfo';
import TeamInfo from './TeamInfo';
import Submit from './Submit';

const PanesList = [
  {
    component: StudentInfo,
    uid: 'student-info',
    name: 'Student Info',
  },
  {
    component: PersonalInfo,
    uid: 'personal-info',
    name: 'Personal Info',
  },
  {
    component: ProfessionalInfo,
    uid: 'professional-info',
    name: 'Professional Info',
  },
  {
    component: BeginnerInfo,
    uid: 'beginner-info',
    name: 'Experience',
  },
  {
    component: OtherInfo,
    uid: 'other-info',
    name: 'Other',
  },
  {
    component: TeamInfo,
    uid: 'team-info',
    name: 'Team',
  },
  {
    component: Submit,
    uid: 'submission-page',
    name: null,
  },
];

export default PanesList;
