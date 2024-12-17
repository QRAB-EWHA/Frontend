<!-- Template for PROJECT REPORT of CapstoneDesign 2024-2H, initially written by khyoo -->
<!-- 본 파일은 2024년도 컴공 졸업프로젝트의 <1차보고서> 작성을 위한 기본 양식입니다. -->
<!-- 아래에 "*"..."*" 표시는 italic체로 출력하기 위해서 사용한 것입니다. -->
<!-- "내용"에 해당하는 부분을 지우고, 여러분 과제의 내용을 작성해 주세요. -->

# QRAB_FRONTEND

QRAB FE Repository

## About Source Code

QRAB의 프론트엔드 프레임워크는 React.js로, 터미널또는 명령 프롬프트에 아래의 명령어를 입력하여 프로젝트를 실행해주세요.

## How to build

이 레포지토리는 해당 명령어로 git clone 가능합니다. <br>
`git clone https://github.com/QRAB-EWHA/Frontend.git`

clone 후에는 프로젝트 경로(Frontend)로 이동한 후, 종속성을 설치해주어야 합니다. 해당 프로젝트는 패키지 매니저로 npm을 사용하고 있기 때문에 npm을 설치해주어야 합니다.

``
cd Frontend // 프로젝트 디렉토리로 이동
npm install // npm 패키지 매니저 설치
``

이후 프로젝트 루트 디렉토리에 .env 파일을 추가하고 아래 환경변수를 추가해주세요.

`REACT_APP_SERVER_URL = https://qrab.site`

## How to run

위 과정이 모두 완료되면, 루트 디렉토리에서 아래 명령어를 입력하여 로컬에서의 서비스 실행이 가능합니다.

`npm start`
