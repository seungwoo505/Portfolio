# 포트폴리오

## 개요
포트폴리오용 홈페이지

1인 개발입니다.

제작 기간 : 2024.01 ~ 2024.01

## 홈페이지

### https://seungwoo.i234.me/
가정집에서 개인적으로 운영중인 NAS 서버입니다. 그래서 운영비 감축을 위해 한국 시간 기준 00시 부터 07시 까지 운영 중단됩니다.

## UI

### PC

#### 메인
<img src="https://github.com/seungwoo505/Portfolio/blob/main/mainScreen.png" height="400"/>

#### Project 상세 페이지
<img src="https://github.com/seungwoo505/Portfolio/blob/main/ProjectClick.png" height="400"/>

### Mobile

#### 메인
<img src="https://github.com/seungwoo505/Portfolio/blob/main/mainMobileScreen.png" height="500"/>

#### Project 상세 페이지
<img src="https://github.com/seungwoo505/Portfolio/blob/main/MobileProjectClick.png" height="500"/>

## 설명
자기 소개를 위한 홈페이지입니다.

스와이프(마우스 드래그, 터지)와 스크롤(마우스 휠) 그리고 키보드(좌우 방향키)를 지원합니다.

그리고 모바일 환경과 PC 환경 모두 동일한 UI, UX를 구축하는 것을 목표로 두어 개발을 진행했습니다.

## 개발 고민
별 애니메이션을 모든 페이지에 적용할려하다보니 너무 많은 별이 생성되어 클라이언트 측의 부하가 심하게 걸려 렉이 유발되는 현상이 발생되어 현재 보고있는 페이지가 가장 중요하고 그 외의 페이지는 조금만 보이고 별로 중요하지않다고 판단하여 보고있는 페이지만 별이 발생되도록 변경하여 부하를 줄였습니다.

모바일 환경과 PC 환경을 동일한 경험을 하게 만드는 것을 목표로 두었고 여기서 보여줄만한 것이 동작정도일겁니다.

그래서 스와이프 방식을 두 환경에서 동일하게 경험할 수 있게 설정했고 PC 환경에서는 스와이프만 하는 것이 부정적 경험일 것이다라고 판단했고 마우스 스와이프 뿐만 아니라 휠 버튼 키보드 방향키로도 동작이 가능하게 했습니다.

경험을 같게 하되 부정적 경험을 최소화하는 것을 목표로 진행했습니다.

## 사용된 개념
- React
- TypeScript
- Swiper
- Framer Motion
- EmailJS
- Redux Tookit
