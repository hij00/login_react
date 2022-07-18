## 백엔드 없어서 확인 불가능

## 형식만, 알림 나오고 로그인 불 들어오는

### input을 작성할땐 form태그가 부모로 있어야함

form으로 전달, 전달할 내용이 없다면 폼 필요없음

## form의 속성

action
: input 내용을 담아 특정 페이지(url, action에 적힌 주소)로 보낼때

method
: get : 주소에 흔적이 남는것(검색 등)
: post : 로그인

php : 리액트의 임폴트-익스폴트와 비슷

register
: 각 인풋의 별명짓기,
:유효성검사(유효한지 아닌지, 아이디 글자 수, 패스워드 특수문자)

# react-hook-form

const {
register,
handleSubmit,
formState: {errors, isValid},
getValues,
setError,
} = useForm({
mode: "onChange"
})

## 1. register

인풋태그에 유효성, name, option 등을 부여

<!-- <input {...register("password", {
    required: "내용",
    minLength: {
        value: 8 => 최소 길이 지정,
        message: "내용"
    },
    pattern: /^(?=.*\d)(?=.*[a-zA-z])[0-9a-zA-z]{8,16}$/
})}> -->

--required: boolean값으로 처리할 수 도 있고, 메세지도 전달할 수 있음
(true면 필수로 적어야하는 값)
--minLength: 최소길이, value 값으로 길이를 정함, message를 이용해 내용작성 가능(에러메세지)
--pattern: 정규식 표현법으로 특수문자, 숫자, 대문자 등 특정 패턴을 넣을 수 있음

## 2. handleSubmit

form태그에 submit(제출)이벤트 처리

## 3. formState:{errors, isValid}

form 태그의 상태
errors form태그 에러 확인
isValid form태그 유효성 검사(boolean값으로 반환)

## 4. getValues

인풋태그의 value값을 가져옴(유저가 인풋에 입력한 값)
getValues()로 함수 호출해야함

## 5. setError

에러를 세팅할 수 있음
setError("에러명", {
message: "메세지명"
})

## 6. clearError

에러를 지울 수 있음
clearError("에러명")

## 7. mode

폼 태그의 모드
onChange(실시간), onBlur(활성화시), conFocus(클릭시), onTouch(터치시)가 있음

## useNavigate()

react-router-dom에서 import
페이지 경로를 바꿀 수 있음
(Link 태그와 마찬가지로 to 사용)

사용법 : navigate("경로")
ex) navigate("/") => 홈으로 이동

### useNavigate와 useLocation의 차이점

useNavigate는 위치를 이동
useLocation은 현재 url을 가져옴?
