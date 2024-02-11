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
            title: "실시간 통신을 이용한 메모장",
            exposition: `많은 메모장이 있지만 실시간 공유가 아닌 정적인 공유가 대부분이기에 실시간 통신을 할 수 있지않을까라는 생각에 개발을 진행했습니다.
                        개발 인원: 1명(100% 기여)
                        제작 기간: 2023.03 ~ 2023.05
                        주요 기술: React, HTML, CSS, MariaDB, PHP`,
            image: "https://raw.githubusercontent.com/seungwoo505/Notepads/main/mainScreen.png",
            github: "https://github.com/seungwoo505/Notepads"
        },
        {
            title: "포트폴리오",
            exposition: `현재 접속해있는 사이트입니다.
                        그리고 모바일 환경과 PC 환경 모두 동일한 UI, UX를 구축하는 것을 목표로 두어 개발을 진행했습니다.
                        개발 인원: 1명(100% 기여)
                        제작 기간: 2024.01 ~ 2024.01
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
            exposition: `스마트폰의 등장으로 사람들이 기억을 안하게된다고하는데 그러면 역으로 기억을 하게 만드는 게임을 개발하면 기억력이 향상되지않을까라는 생각에 개발되었습니다.
                        개발 인원: 1명(100% 기여)
                        제작 기간: 2023.09 ~ 2023.11
                        주요 기술: React Native, React Navigation, MariaDB, PHP`,
            image: "https://raw.githubusercontent.com/seungwoo505/Memory/main/memory.png",
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
                        현재 페이지 상 MPA보다 SPA가 어울린다 생각되어 NextJS로 전면 수정하고 그 때 당시 남아있던 버그를 수정했습니다.
                        개발 인원: 2명(100% 기여)
                        제작 기간: 2023.07 ~ 2023.09
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
            exposition: `2019 동양미래EXPO에 전시된 제품은 외부에서 보여줘야 설명하기 편하지만
                        전시 특성상 내부에서 보여줘야하기 때문에 보다 쉽게 보여주기위해 만든 페이지입니다.
                        개발 인원: 12명(75% 기여)
                        제작 기간: 2019.07 ~ 2019.10
                        주요 기술: HTML, CSS, JavaScript, Three.js, Arduino`,
            image: "https://raw.githubusercontent.com/seungwoo505/2019COEX/master/page.png",
            github: "https://github.com/seungwoo505/2019COEX"
        },
        {
            title: "회사 홈페이지",
            exposition: `홈페이지를 만들어달라해서 만들어준 홈페이지입니다.
                        그 때 당시에는 MPA와 SPA의 개념이 명확하지못했어서 MPA를 SPA처럼 개발을 진행했었습니다.
                        추후 Next.js를 통해 전면 수정했습니다.
                        개발 인원: 2명(100% 기여)
                        제작 기간: 2019.11 ~ 2020.01
                        주요 기술: HTML, CSS, JavaScript, jQuery`,
            image: "https://raw.githubusercontent.com/seungwoo505/ECGM-Project/main/mainScreen.png",
            github: "https://github.com/seungwoo505/ECGM-project"
        },
        {
            title: "피아노 연습 페이지",
            exposition: `3학년 때 과제로 만든 페이지입니다.
                        과제가 아두이노와 폰을 자유롭게 연동하라는 것이였는데 주제가 명확히 정해져있지않아 모바일 환경 뿐만이 아닌 웹 환경에서도 작동될 수 있게하면 어떨까라는 생각에 개발되었습니다.
                        개발 인원: 3명(90% 기여)
                        제작 기간: 2022.05 ~ 2022.06
                        주요 기술: HTML, CSS, JavaScript, Arduino`,
            image: "https://raw.githubusercontent.com/seungwoo505/piano-practice/main/mainScreen.png",
            github: "https://github.com/seungwoo505/piano-practice"
        },
        {
            title: "웹 통신을 통한 RC카 조종",
            exposition: `3학년 때 과제로 만든 페이지입니다.
                        RC카를 웹 사이트를 통해 동작하게 하라는 자유 과제였는데 RC카의 기본은 사용자 자유롭게 동작하는 것이기에 기본에 충실하자라는 의미로 개발되었습니다.
                        개발 인원: 3명(100% 기여)
                        제작 기간: 2022.11 ~ 2022.12
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
            exposition: `상세 위치의 미세먼지 수치는 완벽하게 알 수 없습니다. 그래서 생각한 것이 그 장소의 수치를 공유해주면 도착 전에 대비할 수 있지않을까라는 생각에 개발되었습니다.
                        개발 인원: 9명(90% 기여)
                        제작 기간: 2018.07 ~ 2018.09
                        주요 기술: Android, Java, PHP, Arduino`,
            image: "https://raw.githubusercontent.com/seungwoo505/2018COEX/main/mainScreen.png",
            github: "https://github.com/seungwoo505/2018COEX"
        },
        {
            title: "간단한 계산기 앱",
            exposition: `원래는 다양한 연산이 가능하게 하려고했으나 학교에서 개발 기간을 짧게 설정을 하여 기본적인 사칙연산만 가능하게 변경하여 개발되었습니다.
                        개발 인원: 1명(100% 기여)
                        제작 기간: 2023.06 ~ 2023.06
                        주요 기술: Android, Java`,
            image: "https://raw.githubusercontent.com/seungwoo505/Calculator/main/image.png",
            github: "https://github.com/seungwoo505/Calculator"
        },
        {
            title: "ToDoList",
            exposition: `기본적인 ToDoList는 그냥 할 일만 적는 프로그램인데 기간을 설정하고 그 기간이 얼마나 남았는가에 대한 표시도 되면 어떨까라는 생각에 개발되었습니다.
                        개발 인원: 1명(100% 기여)
                        제작 기간: 2023.12 ~ 2023.12
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
