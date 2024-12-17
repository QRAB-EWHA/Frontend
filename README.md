<!-- Template for PROJECT REPORT of CapstoneDesign 2024-2H, initially written by khyoo -->
<!-- 본 파일은 2024년도 컴공 졸업프로젝트의 <1차보고서> 작성을 위한 기본 양식입니다. -->
<!-- 아래에 "*"..."*" 표시는 italic체로 출력하기 위해서 사용한 것입니다. -->
<!-- "내용"에 해당하는 부분을 지우고, 여러분 과제의 내용을 작성해 주세요. -->

# QRAB_FRONTEND

QRAB FE Repository

## 🎈How to Test
아래 링크 접속 후, <br>
https://qrab-five.vercel.app

다음 이메일과 비밀번호로 로그인 하면 기존 데이터로 바로 테스트 가능합니다.

email : yuncom21@ewhain.net  <br>
password : Leeyunjin1!! 

만약 에러가 뜬다면 F12를 눌러 개발자도구를 켠 후, 애플리케이션 탭 클릭 후 로컬 스토리지에 있는 기존 토큰을 삭제해주세요.
로컬 스토리지 > https://qrab-five.vercel.app 우클릭 > 삭제 


## 🎈About Source Code

QRAB의 프론트엔드 프레임워크는 React.js로, 터미널(맥 or 리눅스) 또는 명령 프롬프트(윈도우)에 아래의 명령어를 입력하여 프로젝트를 실행해주세요. <br>
스타일 라이브러리는 tailwind.css, 상태관리 라이브러리는 ReactQuery와 Zustand를 사용했지만, package.json 파일에 이미 반영되어 있으므로 아래 과정만 수행해주시면 문제없이 동작이 가능합니다.

## 🎈How to build

이 레포지토리는 해당 명령어로 git clone 가능합니다.

```
git clone https://github.com/QRAB-EWHA/Frontend.git
```

clone 후에는 프로젝트 경로(Frontend)로 이동한 후, 종속성을 설치해주어야 합니다. <br> 해당 프로젝트는 패키지 매니저로 npm을 사용하고 있기 때문에 npm을 설치해주어야 합니다.

```
cd Frontend // 프로젝트 디렉토리로 이동
npm install // npm 패키지 매니저 설치
```



이후 프로젝트 루트 디렉토리에 .env 파일을 추가하고 아래 환경변수를 추가해주세요.

```
REACT_APP_SERVER_URL = https://qrab.site
```

터미널에서는 아래와 같이 환경변수 파일을 생성할 수 있습니다.

```
echo REACT_APP_SERVER_URL=https://qrab.site > C:\Users\user\Frontend\.env // 디렉토리에 맞게 경로를 수정해주세요!
```


## 🎈How to run

위 과정이 모두 완료되면, 루트 디렉토리에서 아래 명령어를 입력하여 로컬에서의 서비스 실행이 가능합니다.

```
npm start
```
