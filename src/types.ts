export interface Card {
    title: String,
    project: Project[],
    image: String
}

export interface Project {
    title: String,
    exposition: String,
    image: String,
    github: String
}

export const CardList: Card[] = [
    {
        title: "React",
        project: [
        {
            title: "누구나 함께하는 메모장",
            exposition: `메모장 제목과 비밀번호를 입력하면 같은 메모장에 접속해있는 다른 사람들과 실시간 통신으로 의견을 주고받을 수 있습니다.
                        주요 기술: React, HTML, CSS, MariaDB, PHP`,
            image: "https://raw.githubusercontent.com/seungwoo505/Notepads/main/mainScreen.png",
            github: "https://github.com/seungwoo505/Notepads"
        },
        {
            title: "포트폴리오",
            exposition: `현재 접속해있는 사이트이며 자기 소개이자 포트폴리오 용을 위해 개발했습니다.
                        주요 기술: React, TypeScript, Swiper, Framer Motion, EmailJS, Redux Toolkit`,
            image: "https://raw.githubusercontent.com/seungwoo505/Portfolio/main/mainScreen.png",
            github: "https://github.com/seungwoo505/Portpolio"
        }],
        image: "../../image/React.png"
    },
    {
        title: "ReactNative",
        project: [
        {
            title: "기억력 테스트 게임",
            exposition: `n의 제곱 개의 칸이 나오고 일정시간 후 칸에 있던 숫자가 사라진다음 숫자에 맞게 순서대로 클릭하면 되는 간단한 게임입니다.
                        주요 기술: React Native, React Navigation, MariaDB, PHP`,
            image: "https://raw.githubusercontent.com/seungwoo505/Notepads/main/mainScreen.png",
            github: "https://github.com/seungwoo505/Memory"
        }],
        image: "../../image/ReactNative.png"
    },
    {
        title: "Next",
        project: [
        {
            title: "회사 홈페이지 수정",
            exposition: `전에 만들었던 홈페이지를 수정한 버전입니다.
                        바닐라JS에서 NextJS로 전면 수정하고 그 때 당시 남아있던 버그를 수정했습니다.
                        주요 기술: NextJS, TypeScript, Swiper, Framer Motion, Naver Maps API`,
            image: "https://raw.githubusercontent.com/seungwoo505/ECGM-edit-Version/main/mainScreen.png",
            github: "https://github.com/seungwoo505/ECGM-edit-Version"
        }],
        image: "../../image/Next.png"
    },
    {
        title: "JS",
        project: [
        {
            title: "태양 위치에 따른 태양열패드 각도 예측 프로그램",
            exposition: `2019 동양미래EXPO에 전시된 제품을 쉽게 보여주기위해 만든 페이지입니다.
                        주요 기술: HTML, CSS, JavaScript, Three.js, Arduino`,
            image: "https://raw.githubusercontent.com/seungwoo505/2019COEX/master/page.png",
            github: "https://github.com/seungwoo505/2019COEX"
        },
        {
            title: "회사 홈페이지",
            exposition: `홈페이지를 만들어달라해서 만들어준 홈페이지입니다.
                        주요 기술: HTML, CSS, JavaScript`,
            image: "https://raw.githubusercontent.com/seungwoo505/ECGM-Project/main/mainScreen.png",
            github: "https://github.com/seungwoo505/ECGM-project"
        },
        {
            title: "피아노 연습 페이지",
            exposition: `3학년 때 과제로 만든 페이지입니다.
                        아두이노와 연동해서 작동하는 방식입니다.
                        주요 기술: HTML, CSS, JavaScript, Arduino`,
            image: "https://raw.githubusercontent.com/seungwoo505/piano-practice/main/mainScreen.png",
            github: "https://github.com/seungwoo505/piano-practice"
        },
        {
            title: "웹 통신을 통한 RC카 조종",
            exposition: `3학년 때 과제로 만든 페이지입니다.
                        라즈베리파이로 RC카를 만들고 서버를 구축하여 인터넷 상에서 조종하는 프로그램입니다.
                        주요 기술: HTML, CSS, JavaScript, Flask`,
            image: "https://raw.githubusercontent.com/seungwoo505/RC-Control/main/control.png",
            github: "https://github.com/seungwoo505/RC-Control"
        }
    ],
        image: "../../image/JS.png"
    },
    {
        title: "Android",
        project: [{
            title: "미세먼지 측정 앱",
            exposition: `아두이노 기기와 연동해서 미세먼지를 측정하고 현 시점을 기준을 잡아 지도에 현 미세먼지 상태를 표시해줘서 다른 사람들과 공유하는 프로그램입니다.
                        주요 기술: Android, Java, PHP, Arduino`,
            image: "https://raw.githubusercontent.com/seungwoo505/2018COEX/main/mainScreen.png",
            github: "https://github.com/seungwoo505/2018COEX"
        },
        {
            title: "간단한 계산기 앱",
            exposition: `간단하게 사칙연산이 가능한 계산기입니다.
                        주요 기술: Android, Java`,
            image: "https://raw.githubusercontent.com/seungwoo505/Calculator/main/image.png",
            github: "https://github.com/seungwoo505/Calculator"
        },
        {
            title: "ToDoList",
            exposition: `끝내야하는 기간을 설정 가능한 할 일 앱입니다.
                        남은 기간을 계산하여 퍼센트로 수치화해서 표시해줍니다.
                        주요 기술: Android, Java, SQLite`,
            image: "https://raw.githubusercontent.com/seungwoo505/ToDoList/main/todolist.png",
            github: "https://github.com/seungwoo505/ToDoList"
        },
    ],
        image: "../../image/Android.png"
    },
    {
        title: "Document",
        project: [{
            title: "",
            exposition: "",
            image: "",
            github: ""
        }],
        image: "../../image/document.png"
    }
]