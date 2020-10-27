import Landing from '../src/pages/Landing.vue';
import Quiz from '../src/pages/Quiz.vue';
import HighScore from '../src/pages/HighScore.vue';

export const routes = [
  { path: '/', component: Landing },
  { path: '/quiz', component: Quiz },
  { path: '/highscore', component: HighScore },
];