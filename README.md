# Dongflix

## 👀 서비스 소개

React, Typescript, Redux-Saga를 이용하여 최신, 인기, 공개 예정인 영화와 TV프로그램의 포스터, 별점, 영화 정보, 검색기능, 영화 페이지 링크, 유튜브 영화 예고편까지
한 눈에 볼 수 있게 만든 반응형 영화 웹 페이지입니다.

사용언어 : React, Typescript, Redux, Redux-saga, Styled Components, Material UI

## ✔ 주요 기능

링크 : https://dev-donghyuk.github.io/dongflix

### 👌 영화 페이지

![1](https://user-images.githubusercontent.com/60591071/113411600-2f021880-93f1-11eb-8fe7-c972dbfa8b47.png)


-   중복되는 css가 많아 컴포넌트로 만들어서 효율적으로 영화페이지를 구현했습니다.
-   각각의 포스터에 호버 시, 해당 포스터에 제목, 개봉연도, 평점을 표시하였습니다.

![2](https://user-images.githubusercontent.com/60591071/113411602-30cbdc00-93f1-11eb-97cd-9ab179bd6d9b.png)

-   css 미디어쿼리를 이용하여 사용자의 브라우저 사이즈에따라 최적의 사이즈로 포스터를 볼 수 있게 반응형 디자인을 하였습니다.

### 👌 애니메이션 페이지

![3](https://user-images.githubusercontent.com/60591071/113411604-30cbdc00-93f1-11eb-810f-de4b641ccee3.png)

- 페이지 로드 시, dispatch하여 미들웨어로 통신을 해, 성공하면 데이터를 리덕스에 넣어 화면에 뿌려줍니다.

![4](https://user-images.githubusercontent.com/60591071/113411606-31647280-93f1-11eb-8831-934565fbfc42.png)

### 👌 상세 페이지

![5](https://user-images.githubusercontent.com/60591071/113411607-31fd0900-93f1-11eb-9f98-26119646f3c0.png)

- 클릭한 포스터의 상세내용을 볼 수 있는 페이지로, 영화에 제목, 장르, 개봉연도, 시간, 평점, 해당 영화의 페이지, 간단한 내용요약, 유튜브 예고편을 볼 수 있는 페이지입니다.

![6](https://user-images.githubusercontent.com/60591071/113411609-31fd0900-93f1-11eb-9dd6-a4a71b38994d.png)

### 👌 검색 페이지

![7](https://user-images.githubusercontent.com/60591071/113411610-32959f80-93f1-11eb-91be-ab1dc03da6eb.png)

-   영화에 애니메이션을 검색할 수 있는 페이지입니다. 사용자가 검색어를 입력하고 검색하면 해당 검색어를 포함한 영화와 애니메이션을 보여줍니다.
-   사용자가 새로고침을 하거나 다른 화면을 갔다와도 localStorage에 기록이 남아있어 전에 검색한 내용을 그대로 보여줍니다.

![8](https://user-images.githubusercontent.com/60591071/113411611-32959f80-93f1-11eb-8f42-ddd98f940f50.png)
