import GeneralInfo from './GeneralInfo';
import LanguageInfo from './LanguageInfo';
import TechInterests from './TechInterests';
import OpenSource from './OpenSource';
import Submit from './Submit';

const PanesList = [
  {
    component: GeneralInfo,
    uid: 'general-info',
    name: 'General',
  },
  {
    component: LanguageInfo,
    uid: 'personal-info',
    name: 'Languages',
  },
  {
    component: TechInterests,
    uid: 'interests-info',
    name: 'Tech Interests',
  },
  {
    component: OpenSource,
    uid: 'opensource-info',
    name: 'Open Source',
  },
  {
    component: Submit,
    uid: 'submission-page',
    name: null,
  },
];

export default PanesList;
