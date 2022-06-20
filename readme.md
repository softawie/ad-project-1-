touch .prettierrc & .eslintrc.js files
npm install --save-dev prettier eslint eslint-config-prettier eslint-plugin-prettier Write scripts that run eslint and prettier.

# for using this project you need :

1- git clone then project github link
2- cd project name
3- npm install
4- npm run start for build project then run the server

# project tree :

├── src
│ ├── constants.ts
│ ├── index.ts
│ ├── routes
│ │ ├── api
│ │ │ ├── images.ts
│ │ │ ├── index.ts
│ │ │ └── list.ts
│ │ └── index.ts
│ ├── tests
│ │ ├── helpers
│ │ │ └── reporter.ts
│ │ └── indexSpec.ts
│ └── utiles
│ ├── Error404.html
│ ├── bg.jpg
│ ├── helper.ts
│ ├── logger.ts
│ └── style.css
├── tsconfig.json
└── yarn.lock

# for check Main Route :

`http://localhost:3000/api`

# for check images list

`http://localhost:3000/api/list`

# for check image and resize :

`http://localhost:3000/api/thump/images?filename=fjord.jpg&width=380&height=250`
