import type { UserConfig } from '@commitlint/types';

const Configuration: UserConfig = {
  extends: ['@commitlint/config-conventional'],
};

export default Configuration;

// import type { UserConfig } from '@commitlint/types';

// const Configuration: UserConfig = {
//   extends: ['@commitlint/config-conventional'],
//   rules: {
//     'type-empty': [0, 'never'],
//     'subject-empty': [0, 'never'],
//   },
// };

// export default Configuration;
