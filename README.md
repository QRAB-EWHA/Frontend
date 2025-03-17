<!-- Template for PROJECT REPORT of CapstoneDesign 2024-2H, initially written by khyoo -->
<!-- 본 파일은 2024년도 컴공 졸업프로젝트의 <1차보고서> 작성을 위한 기본 양식입니다. -->
<!-- 아래에 "*"..."*" 표시는 italic체로 출력하기 위해서 사용한 것입니다. -->
<!-- "내용"에 해당하는 부분을 지우고, 여러분 과제의 내용을 작성해 주세요. -->

# QRAB_FRONTEND

QRAB FE Repository

## 🎈Introduction
<img width="960" alt="image" src="https://github.com/user-attachments/assets/5f0e6fd6-6fbb-4481-9b31-a242a9ddc3ee" />
<img width="878" alt="image" src="https://github.com/user-attachments/assets/814b7bcf-5637-4576-896a-854db277c293" />
<img width="878" alt="image" src="https://github.com/user-attachments/assets/426ade5d-dc7a-435c-8c08-d14f7ff89149" />
<img width="878" alt="image" src="https://github.com/user-attachments/assets/53353209-52ba-4f44-80de-fd3e182aa77f" />
<img width="878" alt="image" src="https://github.com/user-attachments/assets/603bddc1-0195-4ff0-a913-08dea1595e72" />
<img width="878" alt="image" src="https://github.com/user-attachments/assets/7b80cc1b-c1e8-4f48-85d1-a706a2196d8b" />
<img width="878" alt="image" src="https://github.com/user-attachments/assets/3d3eec99-2ae6-445a-a275-01f7d923b088" />
<img width="878" alt="image" src="https://github.com/user-attachments/assets/526d696a-4df9-47c6-997f-4ff67c4ddf77" />
<img width="878" alt="image" src="https://github.com/user-attachments/assets/e6065161-c077-4516-bd5a-e05055598fee" />
<img width="878" alt="image" src="https://github.com/user-attachments/assets/967c35fe-112e-4f54-9d86-71f85c3f9dfe" />
<img width="878" alt="image" src="https://github.com/user-attachments/assets/69c460ce-ca33-4870-bc24-00e56ab969bd" />
<img width="878" alt="image" src="https://github.com/user-attachments/assets/e8b4eb6b-c4a3-4118-a9a1-fe6e9e04169f" />


## 🎈Architecture
<img width="838" alt="image" src="https://github.com/user-attachments/assets/a3be2f40-d999-44b2-b589-fdeda7b67469" />


## 🎈Demo
https://drive.google.com/file/d/1xGpTxij1A_QUSAK6bPtBmX8DjYgd98Vj/view?usp=sharing


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
