### typescript-base for novice
Make typescript development envrionment easily. 

(초보자를 위한, 타입스크립트 개발 환경 쉽게 구축하기 위한 저장소입니다.)

<br>

### it was made by this process
You don't need to run the commands below. 
Just understand how this envrionment was made. 

(아래 커맨드를 입력할 필요 없습니다.
그저 환경이 어떻게 구축되는지 이해만 하세요.)

<br>

**1. create 'package.json' file**
- `npm init -y`

<br>

**2. create 'package-lock.json' file and 'node_modules' folder**
- `npm i typescript`

<br>

**3. create 'tsconfig.json' file**
- `tsc --init`

<br>

**4. install tslint for coding convention**
- `npm i tslint`
- `.\node_modules\.bin\tslint --init`

It is not necessary, but it's good for maintain coding rules.
If you need some coding rules, then add rules to `"rules": {}` in tslint.json file.

(tslint 설치는 꼭 필요한 건 아니지만, 코딩 규칙을 유지하고 협업하는 데 있어 좋습니다.
만약 문법 규칙을 추가하려면 tslint.json 파일에 있는 `"rules": {}`에 규칙을 추가해주세요.)

<br>

**5. set compile option in tsconfig.json**
- `"include": ["src/**/*.ts"],`
- `"exclude": ["node_modules"],`
- `"sourceMap": true,` in compileOptions
- `"outDir": "./dist",` in compileOptions

<br>

**6. create dist and src folder**
- create dist and src folder.

Typescript files must be located in src folder, because I set up the location in tsconfig.json. if you'd like to change this path, then change the `"include"` options. You have to use 'glob pattern' in the option (ex. '.gitignore'). please refer [this site](https://docs.python.org/ko/3/library/glob.html){:target="_blank"}

and after compiled, the results(js files and map file) of compiling typescript file will be located in dist.

(타입스크립트 파일은 src 폴더에 위치하게 됩니다. 왜냐면 제가 tsconfig.json에 ts 경로를 그렇게 설정해놓았거든요. 만약 경로를 바꾸고 싶다면 include 옵션을 변경하시면 됩니다. include와 exclude 옵션은 glob 패턴을 따르니 [해당 사이트](https://docs.python.org/ko/3/library/glob.html){:target="_blank"}를 참고하시면 됩니다.

타입스크립트 파일이 컴파일된 후에, 컴파일된 결과(자바스크립트 파일, map 파일)는 dist 폴더에 위치하게 됩니다.)

<br>

**6. watch mode will make project update**
- `npm add tsc-watch --dev`
- `"start": "tsc-watch --onSuccess \"node dist/index.js\""` in "scripts" of package.json

typescript files will be compiled automatically through watch mode whenenver you save new changes. 
It makes you comfortable. **What you only need to do is typing "npm start" or "yarn start" at the first time**.

(파일 내용을 바꿀 때마다 타입스크립트 파일이 자동으로 컴파일됩니다. 
일일이 컴파일할 필요 없이, 초반에 npm start나 yarn start로 watch 모드를 켜면 됩니다.)

<br>
